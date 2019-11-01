/*var tempJSON = [{
	"title": "upwork1",
	"url": "http://google.com",
	"description": "test description1"
}, {
	"title": "upwork2",
	"url": "http://google.com",
	"description": "test description2"
}, {
	"title": "upwork3",
	"url": "http://google.com",
	"description": "test description3"
}];*/

data = '[{"title" : "upwork1", "url" : "http://google.com", "description" : "test description1"},{"title" : "upwork2", "url" : "http://google.com", "description" : "test description2"},{"title" : "upwork3", "url" : "http://google.com", "description" : "test description3"}]';

function getNewValue(){
    chrome.storage.local.get('GTURLDETails', function(result) {
        console.log('Value currently is ' + result.key);
      });
}

getNewValue();