function ss(t) {
    alert(t);
}
console.log(window);
// ss("Gowtham")
//

var gtStartIDKey = "gtStartIDKey"; 
var maxPageToSearch = 50;
$(document).ready(function () {
    // alert("page loaded");
    gtinit();
});

function gtinit(id){
    console.log(window.location);
    if (window.location.origin == "https://www.upwork.com" && window.location.pathname.indexOf("/jobs/search/") != -1) {
        console.log("getInLocal(gtStartIDKey)");
        console.log(getInLocal(gtStartIDKey));
        if (getInLocal(gtStartIDKey) != null) {
            // Save it!
            
            console.log($.query.get("page") == "");
            if (getInLocal("maxPageToSearch") == null) {
                storeInLocal(maxPageToSearch, "maxPageToSearch");
            } else {
                maxPageToSearch = getInLocal("maxPageToSearch");
            }
            loadOldContent();
            setTimeout(startProcess, 1500);
        }
    } else {
        // alert("Not starting Process");
    }
}
var urlarray = [];
var keywordtomatch = [];
function FindParentSectionElement(childElement) {
    // console.log('find is called');

    var parentElement = childElement.parentElement;
    while (true) {
        // console.log(parentElement);
        if (parentElement.nodeName == 'SECTION') {
            var fileLink = parentElement.getElementsByClassName('job-title-link');
            // window.open(fileLink[0].href, '_blank');
            var json = {"url":fileLink[0].href,"title":fileLink[0].innerText,"description":fileLink[0].innerText}
                
            if ($.inArray(json, urlarray) == -1) {
                
                //var json = {"url":fileLink[0].href,"title":fileLink[0].innerText,"description":fileLink[0].innerText}
                console.log("GT JSON JSON");
                console.log(json);
                urlarray.push(json);
            }
            break;
        } else {
            // console.log(parentElement.nodeName);
        }
        parentElement = parentElement.parentElement;
    }
}

var isPlainObject = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
};

var  defaultKeywords = ["Ad Campaigns", "Adwords Campaign", "Backlink building", "Backlink Creation", "Branding", "Campaign Management ", "Campaign manager", "Campaign Optimization", "content marketing branding", "Digital Marketing", "Digital Marketing Ads", "Digital Marketing Campaign", "Digital SEO Promotions", "email campaigns", "Email Marketing ", "Facebook Ad", "Facebook Ads", "Facebook Advertising", "Facebook Marketing", "Facebook paid advertising.", "Facebook Posting Advertising", "Google Ads", "Google AdWords", "Google Analytics", "Google Ranking", "Google Search Console", "Google Tag Manager", "Instagram Ad Campaign ", "Instagram Marketing", "Instagram Stories ", "Internet Marketing", "Internet Research ", "Keyword Analysis ", "Keyword Research", "keywords", "Lead Generation", "Link Building", "LOCAL SEO", "Mailchimp", "Marketing Management", "Marketing Strategy", "Off-page Optimization", "online brand building", "On-Page Optimization", "On-Site SEO", "Organic traffic", "Pay per click", "Pay Per Click Advertising", "Pinterest Marketing ", "PPC/SEM", "Reddit Marketing", "Remarketing", "Retargeting", "Search Engine Marketing", "Search Engine Optimization (SEO) ", "SEO", "SEO Audit", "SEO Backlinking", "SEO Backlinks", "SEO Deliverables", "SEO Expert", "SEO Keyword Research", "SEO specialist", "SEOMoz", "Social Media", "social Media Campaigns", "Social Media Content", "Social Media Management", "Social Media Marketing", "social Media Platforms", "social media platforms", "Social Media Posts", "social Media Scheduling", "Twitter Marketing", "Website Console"]
function startProcess() {

    //Searching under skills
    var skills = document.getElementsByClassName('js-skills skills');
    // console.log(skills);

    //checking the skills in 
    for (i in skills) {
        // console.log( skills[i]);        
        if (skills[i].nodeName) {

            // console.log('gng to call ');
            var innerSkill = skills[i].getElementsByTagName('a');
            for (j in innerSkill) {
                if ($.inArray(innerSkill[j].innerText, keywordtomatch) != -1) {
                    console.log(innerSkill[j].innerText);
                    FindParentSectionElement(skills[i]);
                }
            }
        }
    }
    console.log(urlarray);
    storeInLocal(urlarray, gtURLDetailsKey);

    setTimeout(() => {
        goToNextPage();
    }, 2000);
}



var gtURLDetailsKey = "GTURLDETails";
var gtKeywordsKey = "GTKEYWORDDETails";
function loadOldContent() {
    var local = getInLocal(gtURLDetailsKey);
    var keywords = getInLocal(gtKeywordsKey);
    console.log("local");
    console.log(local);
    console.log(urlarray);
    if (local != null) {
        urlarray = JSON.parse(local);
        console.log(urlarray);
    }
    if (keywords != null) {
        keywordtomatch = JSON.parse(keywords);
    }else{
        keywordtomatch = defaultKeywords;
        storeInLocal(defaultKeywords,gtKeywordsKey);
    }    
}

function storeInLocal(ar, key) {
    localStorage.setItem(key, JSON.stringify(ar));
    //alert(getInLocal("GTScriptID"));
    console.log(getInLocal("GTScriptID"));

    // sending the array value from upwork local storage to extension local storage (data retrive from background.js)
    chrome.runtime.sendMessage(getInLocal("GTScriptID"), JSON.stringify(ar));
     
}

function getInLocal(key) {
    return localStorage.getItem(key);
}

function goToNextPage() {
    var currentPageNo = $.query.get("page");
    if(currentPageNo == ""){
        currentPageNo = 1;
    }
    if (currentPageNo < maxPageToSearch) {
        console.log($.query.set("isgtURL","yes").set("page", currentPageNo + 1).toString());
        window.location.search =$.query.set("isgtURL","yes").set("page", currentPageNo + 1) ;
    }
}