import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

async function delay(ms) {
  // console.log("wait");
  await new Promise((resolve) => setTimeout(resolve, ms));
  // console.log("done");
}

const schema = {
  description: "List of titles and their relation to the given categories",
  type: SchemaType.ARRAY,
  items: {
    type: SchemaType.OBJECT,
    properties: {
      title: {
        type: SchemaType.STRING,
        description: "Title of the video or content",
        nullable: false,
      },
      isRelated: {
        type: SchemaType.BOOLEAN,
        description:
          "Indicates whether the title is related to the given categories",
        nullable: false,
      },
    },
    required: ["title", "isRelated"],
  },
};

/**
 *
 * @param {HTMLElement} elem
 */
function blurElem(elem) {
  elem.style.visibility = "hidden";
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

const requestQueue = [];
const BATCH_SIZE = 5;

async function enqueueRequest(node, videoTitle) {
  // console.log(videoTitle);
  requestQueue.push({ node, videoTitle });
}

async function getAPIKey() {
  let apiKey = await chrome.storage.local.get("apiKey");
  return apiKey.apiKey;
}

async function getStoredKeywords() {
  // use chrome storage api, use local for now, we may shift to use sync later on
  let storedKeywords = await chrome.storage.local.get("keywords");
  storedKeywords = storedKeywords.keywords;
  if (!(storedKeywords instanceof Array)) {
    storedKeywords = [];
  }
  return storedKeywords;
}

const mainFunc = async () => {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE && node.id === "content") {
            let videoTitle = getVideoTitle(node);
            if (videoTitle) {
              enqueueRequest(node, videoTitle);
            }
          }
        });
      }
    });
  });

  const storedKeywords = await getStoredKeywords();
  // console.log(storedKeywords);
  if (storedKeywords.length == 0) {
    alert(
      "Keywords not set. Please set your keywords in the extension settings."
    );
    return;
  }
  let apiKey = await getAPIKey();
  // console.log(apiKey);
  if (!apiKey) {
    alert(
      "API Key not set. Please set your API key in the extension settings."
    );
    return;
  }

  observer.observe(document.body, { childList: true, subtree: true });
  startQueueProcessor(storedKeywords, apiKey);
};

mainFunc();

async function startQueueProcessor(storedKeywords, apiKey) {
  // console.log("started queue processor ==============================>");

  const genAI = new GoogleGenerativeAI(apiKey);
  // console.log(genAI);
  if (!genAI) {
    alert("API Key invalid. Please check your settings.");
    isProcessing = false;
    return;
  }
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: schema,
    },
  });

  let i = 0;
  while (true) {
    i++;
    // console.log("LOOP: ", i);
    if (requestQueue.length < BATCH_SIZE) {
      await delay(5000);
      continue;
    }

    const batch = requestQueue.splice(0, BATCH_SIZE);
    const titles = batch.map((item) => item.videoTitle);
    const prompt = `Categories: ${storedKeywords
      .map((category) => `"${category}"`)
      .join(
        ", "
      )}. Determine if each title is related to the given categories. Fill the "isRelated" field with either "true" or "false", and return the JSON: ${JSON.stringify(
      titles.map((title) => ({ title, isRelated: null }))
    )}`;
    // console.log(prompt);

    try {
      const result = await model.generateContent(prompt);
      const processedTitles = JSON.parse(result.response.text());
      // console.log("Processed titles:", processedTitles);

      processedTitles.forEach((item, index) => {
        const { node } = batch[index];
        blurElements(node, item.isRelated);
      });
    } catch (error) {
      console.error("Error processing batch:", error);
      alert(
        "Error occurred while processing videos. Please check your API key and try again."
      );
    }

    await delay(5000);
  }
}
