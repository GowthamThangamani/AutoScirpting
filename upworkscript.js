javascript:


function FindParentSectionElement(childElement) {
    console.log("find is called");
    var parentElement = childElement.parentElement;
    while (true) {
        console.log(parentElement);
        if (parentElement.nodeName == "SECTION") {
            var fileLink = parentElement.getElementsByClassName("job-title-link");
            window.open(fileLink[0].href,'_blank');
            break;
        } else {
            console.log(parentElement.nodeName);
        }

        parentElement = parentElement.parentElement;
    }
}

var isPlainObject = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
};


var skills = document.getElementsByClassName('js-skills skills');
console.log(skills);

for (i in skills) {
    console.log("inner Skill" + skills[i]);
    FindParentSectionElement(skills[i]);
    if (isPlainObject(skills[i])) {
        console.log("gng to call ");
        var innerSkill = skills[i].getElementsByTagName("a");
        for (j in innerSkill) {
            console.log(innerSkill[j].innerText);
        }
    }
}



