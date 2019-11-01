function storeInLocal(ar, key) {
    localStorage.setItem(key, JSON.stringify(ar));
}

// alert(GTScriptStart);
if (GTScriptStart == 1) {
    storeInLocal("yes", "gtStartIDKey");
} else {
    localStorage.removeItem("gtStartIDKey");
}

if (window.location.origin == "https://www.upwork.com" && window.location.pathname.indexOf("/jobs/search/") != -1) {
    if (GTScriptStart == 1) {
        window.location.reload();
    }
}