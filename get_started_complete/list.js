// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.storage.sync.get("key", function (obj) {
    // console.log(obj.key);
    var data = obj.key;
    console.log(data);
    // code will execute the return data not equal to empty
    if(data != "")
    {
        var mydata = JSON.parse(data);
        console.log(mydata);
        console.log(mydata.length);

        var markupInternalList = "";
        for( var i = 0; i < mydata.length; i++) {
            // out += '<a href="' + mydata[i].url + '">' + 
            // mydata[i].title + '</a><br>';

            markupInternalList += '<ul class="mailList">'
                                    +'<li>'
                                    +'<div>'
                                    +'<a href='+mydata[i].url+' target="blank">'+mydata[i].title+'</a>'
                                    +'</div>'
                                    +'<div>'
                                    +'<span>&#128078;</span>'
                                    +'<span>&#9825;</span>'
                                    +'</div>'
                                    +'</li>'
                                    +'<li>'
                                    +'<p>'
                                    +'<b>Fixed-price</b>- <span>Entry level ($) - Est. Budget: $2,000 - Posted</span>'
                                    +'<span>21 minutes ago</span>'
                                    +'</p>'
                                    +'</li>'
                                    +'<li>'
                                    +'<p>'
                                    +'<span>'+mydata[i].title+'</span>'
                                    +'</p>'
                                    +'</li>'
                                    +'<li>'
                                    +'<badge>Data Analytics</badge>'
                                    +'<badge>Market Analysis</badge>'
                                    +'<badge>Data Entry</badge>'
                                    +'<badge>Lead Generation</badge>'
                                    +'<badge>Internet Research</badge>'
                                    +'</li>'
                                    +'<li>'
                                    +'<p>'
                                    +'<span>Proposals:</span>'
                                    +'<span><b>Less than 5</b></span>'
                                    +'</p>'
                                    +'</li>'
                                    +'<li>'
                                    +'<p>'
                                    +'<span>&#9825;</span> <b>Payment verified</b>'
                                    +'<span class="strCb">'
                                    +'<span class="startClr">&#9733;</span>'
                                    +'<span class="startClr">&#9733;</span>'
                                    +'<span class="startClr">&#9733;</span>'
                                    +'<span class="startClr">&#9733;</span>'
                                    +'<span class="startClr">&#9733;</span>'
                                    +'</span>'
                                    +'<span class="spentRp"><b>$0</b> spent</span>  <span>&#x1F4CD;</span>'
                                    +'<b> Pakistan</b>'
                                    +'</p>'
                                    +'</li>'
                                    +'</ul>';
        }

        document.getElementById("dispData").innerHTML = markupInternalList;
    }
    else
    {
        var markupInternalList = "";
        // if the data is empty this code will execute
        markupInternalList += '<b style="margin-left: 500px; font-size: 20px;">No record found!</b>';
        document.getElementById("dispData").innerHTML = markupInternalList;

        // if the data is empty the list page will be closed automatically
        /*chrome.tabs.getCurrent(function(tab) {
            chrome.tabs.remove(tab.id, function() { });
        });*/
    }
    console.log(markupInternalList);
});




