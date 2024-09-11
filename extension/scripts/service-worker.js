function setLocalStorage(obj) {
  chrome.storage.local.set(obj, () => {
    console.log("Value is set");
  });
}

chrome.runtime.onMessageExternal.addListener(
  (request, sender, sendResponse) => {
    console.log(request, sender);
    if (request.session) {
      console.log("Token ::: ", request.session);
      setLocalStorage(request.session);
      sendResponse({ success: true, message: "OK" });
    }
  }
);
