// 
//  ytranslator.js
//  YTranslator
//  
//  Created by Andrew Okonetchnikov on 2010-06-20.
//  Copyright 2010 okonet.ru. All rights reserved.
// 

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