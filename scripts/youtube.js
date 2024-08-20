window.addEventListener("storage", (evt) => {
  console.log("storage event", evt);
  main();
});

/**
 *
 * @param {HTMLElement} elem
 */
function blurElem(elem) {
  elem.style.filter = "blur(10px)";
}

function blurElements(elem, keywords, text) {
  keywords.forEach((keyword) => {
    let regex = new RegExp(keyword, "i");
    if (regex.test(text)) {
      blurElem(elem);
      return;
    }
  });
}

function getVideoTitle(elem) {
  let titleElem = elem.querySelector("#video-title-link");
  if (!titleElem) {
    titleElem = elem.querySelector("#title-container");
  }
  if (!titleElem) {
    return;
  }
  return titleElem.innerText;
}

function main() {
  console.log("DETOXIFY");
  let keywords = JSON.parse(localStorage.getItem("keywords"));
  console.log("Keywords: ", keywords);
  if (!(keywords instanceof Array)) {
    keywords = [];
    // popup alert or some other logic
    return;
  }
  let videoElems = document.querySelectorAll("#contents #content");

  Array.from(videoElems).forEach((elem) => {
    let videoTitle = getVideoTitle(elem);
    blurElements(elem, keywords, videoTitle);
  });
}

document.addEventListener("load", function () {
  console.log("Starting detoxify");
  main();
});
