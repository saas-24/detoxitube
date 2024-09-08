document.addEventListener("DOMContentLoaded", function () {
  const addKeywordButton = document.getElementById("add-button");
  const keywordInput = document.getElementById("keyword-input");
  const keywordList = document.getElementById("keyword-list");
  const maxKeywords = 5;

  addKeywordButton.addEventListener("click", () => {
    console.log("Start");
    const keyword = keywordInput.value.trim();
    const storedKeywords = Object.keys(localStorage).filter((key) =>
      key.startsWith("keyword_")
    );

    if (keyword && storedKeywords.length < maxKeywords) {
      const nextIndex = storedKeywords.length + 1;
      localStorage.setItem(`keyword_${nextIndex}`, keyword);
      renderKeywords();
      keywordInput.value = "";
    }
  });

  function renderKeywords() {
    keywordList.innerHTML = "";

    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("keyword_")) {
        const kw = localStorage.getItem(key);
        const keywordElement = document.createElement("span");
        keywordElement.className = "keyword";
        keywordElement.textContent = `${kw} x`;
        keywordElement.onclick = () => removeKeyword(key);
        keywordList.appendChild(keywordElement);
      }
    });
  }

  function removeKeyword(key) {
    localStorage.removeItem(key);
    renderKeywords();
  }

  renderKeywords();
});
