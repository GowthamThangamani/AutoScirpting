function storeInLocal(ar, key) {
    console.log("storeInLocal us called from gowtham.js");
    localStorage.setItem(key, ar);
}

// alert(GTScriptStart);
if (GTScriptStart == 1) {
    storeInLocal("yes", "gtStartIDKey");
} else {
    localStorage.removeItem("gtStartIDKey");
}

if (window.location.origin == "https://www.upwork.com" && window.location.pathname.indexOf("/jobs/search/") != -1) {
    console.log("GTScriptID");
    console.log(GTScriptID);
    storeInLocal(GTScriptID,"GTScriptID")

if (GTScriptStart == 1) {
        window.location.reload();
    }
}