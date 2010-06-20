window.addEventListener("dblclick", getSelection);
window.addEventListener("mouseup",  getSelection);

function getSelection() {
  if(window == top) {
    chrome.extension.connect().postMessage(
      { 
        "selection": window.document.getSelection() != "undefined" ? window.document.getSelection().toString() : ''
      });
    }
}