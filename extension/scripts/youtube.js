/**
 *
 * @param {HTMLElement} elem
 */
function blurElem(elem) {
  elem.style.filter = "blur(10px)";
}

function blurElements(elem, isRelated) {
  if (!isRelated) {
    blurElem(elem);
  } else {
    elem.style.filter = "";
  }
}

function getVideoTitle(elem) {
  let titleElem = elem.querySelector("#video-title");
  if (!titleElem) {
    return;
  }
  return titleElem.innerText;
}

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "childList") {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE && node.id === "content") {
          let videoTitle = getVideoTitle(node);
          if (videoTitle) {
            console.log("New Video Loaded - Title:", videoTitle);

            query({
              inputs: `Title: '${videoTitle}'\n\nCategories: Coding, Podcast, Business.\n\nIs the title related to any of the categories? Answer with only "true" or "false". Do not provide any explanation, just output "true" or "false".`,
            }).then((response) => {
              const generatedText = response[0]?.generated_text;
              console.log(generatedText);
              
              const isRelated = generatedText.trim().endsWith('true');
              console.log("Blur Status:", !isRelated);

              blurElements(node, isRelated);
            }).catch((error) => {
              console.error("Error in LLM query:", error);
            });

          }
        }
      });
    }
  });
});

observer.observe(document.body, { childList: true, subtree: true });

async function query(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/google/gemma-2-9b-it",
    {
      headers: {
        Authorization: `Bearer hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}
