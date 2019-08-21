javascript: 
var count = 0;
var countname= "gtcount";
function E(prj,type,desc,fromtime,totime) {
document.getElementById("ddl_projectnew").value = prj;
document.getElementById("ddl_typenew").value = type;
document.getElementById("txt_desc").value = desc;
document.getElementById("dpk_starttime").value = fromtime;
document.getElementById("dpk_endtime").value = totime;
var element = document.getElementById('dpk_endtime');
var event = new Event('change');
element.dispatchEvent(event);

}

function init(){
	alert("init");
			var divElement =document.getElementsByClassName('fas fa-calendar-plus add')[0];	
			console.log(divElement);
			console.log(divElement.innerHTML);

  localStorage.setItem(countname, count);
			divElement.addEventListener("click", function(){
count++;
localStorage.setItem(countname, count);
switch(localStorage.getItem(countname)){
	case '1':	
	setTimeout(function(){
		E(17,3,"Break","11:00 am","11:30 am");
	},500);
	break;
	case '2':		
	setTimeout(function(){
		E(11,1,"Working on comment file","11:30 am","1:00 pm");	
	},500);
	break;
	case '3':
	setTimeout(function(){
		E(17,3,"Lunch","1:00 pm","2:00 pm");
	},500);
	break;
	case '4':
	setTimeout(function(){
		E(11,1,"Working on comment file","2:00 pm","4:00 pm");
	},500);
	break;
	case '5':
	setTimeout(function(){
		E(17,3,"Break","4:00 pm","4:30 pm");
	},500);
	break;
	case '6':
	setTimeout(function(){
		E(11,1,"Working on comment file","4:30 pm","6:30 pm");
	},500);
	break;
	default:
	alert("default case");
	break;
}
    
});
	
}
setTimeout(function(){
	E(11,1,"Working on comment file","9:45 am","11:00 am");
},1);

init();