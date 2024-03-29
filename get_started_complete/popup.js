// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeColor = document.getElementById('changeColor');

let colors =["#F44336","#3aa757"]; // 1 = Green,  0 = Red

function SetColor(colorID){
  changeColor.style.backgroundColor = colors[colorID];
  changeColor.setAttribute('value', colorID);
  chrome.storage.sync.set({color: colors[colorID]}, function() {
    console.log('The color is green.');
  });
}

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', colors.indexOf(data.color));
});

changeColor.onclick = function(element) {
  let colorID = element.target.value;
  
  if(colorID == 1){
    colorID = 0;
  }
  else{
    colorID = 1;
  }
  SetColor(colorID);
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

    chrome.tabs.executeScript(
      tabs[0].id,
      {code: 'var GTScriptID="'+(chrome.runtime.id)+'"'});
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: 'var GTScriptStart="'+colorID+'"'});
    chrome.tabs.executeScript(
        tabs[0].id,
        {file: 'gowtham.js'});
  });
};
//oahjehemakoolpgkccphpdgdekiibanf
//oahjehemakoolpgkccphpdgdekiibanf

//btn click event to redirect to list page
$("#newPage").click(function(){
  var newURL = "list.html";
  chrome.tabs.create({ url: newURL });
});

//btn click event to set empty value in chrome storage (data sent from content.js)
$("#clearStorage").click(function(){

  let colorID = 0;
  
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: 'var GTScriptID="'+(chrome.runtime.id)+'"'});
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: 'var GTScriptStart="'+colorID+'"'});
  chrome.tabs.executeScript(
    tabs[0].id,
    {file: 'gowtham.js'});
  chrome.tabs.executeScript(
    tabs[0].id,
    {code: 'storeInLocal("[]","GTURLDETails");console.log("cleared")'});
  
  
  });
});


