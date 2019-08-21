javascript: 
var images = document.getElementsByTagName('img');
alert(images.length);
var srcList = [];
var i = 0;

setInterval(function(){
    if(images.length > i){

        srcList.push(images[i].src);
        var link = document.createElement("a");
        link.id=i;
        link.innerText = images[i].src;
        link.download = images[i].src;
        link.href = images[i].src;
        link.click();
        document.body.prepend(link);
        document.body.prepend(document.createElement("br"));
        i++;
        console.log(images[i].src);
    }
},1500);