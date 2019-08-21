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
function FindParentSectionElement(childElement) {
    // console.log('find is called');

    var parentElement = childElement.parentElement;
    while (true) {
        // console.log(parentElement);
        if (parentElement.nodeName == 'SECTION') {
            var fileLink = parentElement.getElementsByClassName('job-title-link');
            // window.open(fileLink[0].href, '_blank');
            if ($.inArray(fileLink[0].href, urlarray) == -1) {
                urlarray.push(fileLink[0].href);
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

var keywordtomatch = ["PHP", "WordPress"]
function startProcess() {
    var skills = document.getElementsByClassName('js-skills skills');
    // console.log(skills);

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
function loadOldContent() {
    var loaal = getInLocal(gtURLDetailsKey);
    console.log("loaal");
    console.log(loaal);
    console.log(urlarray);
    if (loaal != null) {
        urlarray = JSON.parse(loaal);
        console.log(urlarray);
    }
}

function storeInLocal(ar, key) {
    localStorage.setItem(key, JSON.stringify(ar));
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