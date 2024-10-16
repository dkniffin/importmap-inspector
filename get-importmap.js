chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("message")
  if (message.importmapInspector === 'inspect') {
    const importmap = Object.assign({}, ...Array.from(document.querySelectorAll("script[type=importmap]")).map((node) => JSON.parse(node.innerHTML)))

    sendResponse(importmap)
  }
})
