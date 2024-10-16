document.getElementById("inspect-importmap").addEventListener("click", () => {
  console.log("clicked")
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { importmapInspector: 'inspect' }, {}, (response) => {
      console.log("callback")
      document.getElementById("importmap-contents").innerHTML = JSON.stringify(response)
    })
  })
})
