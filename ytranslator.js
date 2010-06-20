window.addEventListener("dblclick", getSelection);
window.addEventListener("mouseup",  getSelection);

function getSelection() {
  if(window == top) {
    var selection = window.document.getSelection();
    if(selection != "undefined") {
      chrome.extension.connect().postMessage(
        { 
          "selection": selection.toString()
        });
      }
    }
}