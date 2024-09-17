document.addEventListener("DOMContentLoaded", async function () {
  await renderAPIKey();
  chrome.storage.local.get(console.log)

  const addKeywordButton = document.getElementById("add-button");
  const keywordInput = document.getElementById("keyword-input");
  const keywordList = document.getElementById("keyword-list");
  const apiKeyLink = document.getElementById('api-key-link');
  const maxKeywords = 5;

  addKeywordButton.addEventListener("click", async () => {
    console.log("Start");
    const keyword = keywordInput.value.trim();
    let storedKeywords = await getStoredKeywords();

    if (keyword && storedKeywords.length < maxKeywords) {
      storedKeywords.push(keyword);
      await chrome.storage.local.set({ keywords: storedKeywords });
      await renderKeywords();
      keywordInput.value = "";
    }
  });

  apiKeyLink.addEventListener('click', function (event) {
    event.preventDefault();
    chrome.tabs.create({ url: 'https://detoxitube.vercel.app/dashboard' });
  });

  async function renderKeywords() {
    keywordList.innerHTML = "";

    let storedKeywords = await getStoredKeywords();
    storedKeywords.forEach((kw) => {
      const keywordElement = document.createElement("span");
      keywordElement.className = "keyword";
      keywordElement.textContent = `${kw} x`;
      keywordElement.onclick = () => removeKeyword(kw);
      keywordList.appendChild(keywordElement);
      // }
    });
  }

  async function removeKeyword(key) {
    let keywords = await getStoredKeywords();
    let idx = keywords.indexOf(key);
    if (idx !== -1) {
      keywords.splice(idx, 1);
    }
    await chrome.storage.local.set({ keywords: keywords });
    renderKeywords();
  }

  await renderKeywords();
});

async function getStoredKeywords() {
  // use chrome storage api, use local for now, we may shift to use sync later on
  let storedKeywords = await chrome.storage.local.get("keywords");
  storedKeywords = storedKeywords.keywords;
  if (!(storedKeywords instanceof Array)) {
    storedKeywords = [];
  }
  return storedKeywords;
}

chrome.storage.onChanged.addListener(async (changes, namespace) => {
  if (namespace === "local") {
    if (changes.keywords) {
      await renderKeywords();
    }
    if (changes.apiKey) {
      await renderAPIKey();
    }
  }
});

async function getAPIKey() {
  let apiKey = await chrome.storage.local.get("apiKey");
  apiKey = apiKey.apiKey;
  return apiKey;
}

async function renderAPIKey() {
  let apiKey = await getAPIKey();
  let apiKeyElem = document.getElementById("api-key-info");
  if (apiKey) {
    apiKeyElem.textContent = `API Key: ${apiKey.slice(
      0,
      3
    )}********************************`;
  } else {
    apiKeyElem.textContent = "API Key not set";
  }
}

document.querySelector("#api-form").addEventListener("submit", async (e) => {
  const apiKey = document.querySelector("#api-key-input").value;
  await chrome.storage.local.set({ apiKey });
  chrome.storage.local.get(console.log)
  await renderAPIKey();
});

document
  .querySelector("#delete-api-key-btn")
  .addEventListener("click", async (e) => {
    e.preventDefault();
    await chrome.storage.local.remove("apiKey");
    chrome.storage.local.get(console.log)
    document.querySelector("#api-key-info").textContent = "API Key not set";
  });
