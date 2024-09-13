document.addEventListener("DOMContentLoaded", function () {
  const addKeywordButton = document.getElementById("add-button");
  const keywordInput = document.getElementById("keyword-input");
  const keywordList = document.getElementById("keyword-list");
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

  renderKeywords();
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