function _onmouseover(img,div){
	document.getElementById(img).src='./images/totalpart2.png';
	document.getElementById(div).style.zIndex=100;
}
function _onmouseout(img,div){
	document.getElementById(img).src='./images/totalpart3.png';
	document.getElementById(div).style.zIndex=-1;
	setTimeout(function(){
		document.getElementById(div).style.zIndex=1;
	},20);
}