var store;
var css;

function toggleCSS(css1, css2){
  var oldlink = document.getElementsByTagName("link").item(0);
  var css = oldlink.href.split("/")[oldlink.href.split("/").length - 1]
  var css1 = css1.substring(1, css1.length)
  var css2 = css2.substring(1, css2.length)
  var stem = oldlink.href.substring(0 , oldlink.href.length - css.length -1);
  if (oldlink.href == stem + css2){
    console.log(oldlink.href + " " + stem + css1)
    var newlink = document.createElement("link");
  	newlink.setAttribute("rel", "stylesheet");
  	newlink.setAttribute("type", "text/css");
  	newlink.setAttribute("href", "." + css1);
  }
  else{
    console.log(oldlink.href + " " + stem + css2)
    var newlink = document.createElement("link");
  	newlink.setAttribute("rel", "stylesheet");
  	newlink.setAttribute("type", "text/css");
  	newlink.setAttribute("href", "." + css2);
  }

	document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}
function setCSS(css1){
    var oldlink = document.getElementsByTagName("link").item(0);
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", "." + css1);
    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}
