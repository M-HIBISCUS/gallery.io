function showPic(whichpic) {
    if(!document.getElementById("placeholder")) {
        return false;
    }
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if(placeholder.nodeName != "IMG") {
        return false;
    }
    placeholder.setAttribute("src", source);
    if(document.getElementById("description")) {
        // if(whichpic.getAttribute("title")) {
        //     var text = whichpic.getAttribute("title");
        // }else {
        //     var text = "";
        // }
        //等价于
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
        // var text = whichpic.getAttribute("title");
        var description = document.getElementById("description");
        //alert(description.firstChild.nodeValue);
        if(description.firstChild.nodeType == 3) {
            description.firstChild.nodeValue = text;
        }
        // description.firstChild.nodeValue = text;
    }
    // var text = whichpic.getAttribute("title");
    // var description = document.getElementById("description");
    // //alert(description.firstChild.nodeValue);
    // description.firstChild.nodeValue = text;
    return true;
}
// function countBodyChild() {
//     var body_element = document.getElementsByTagName("body")[0];
//     //alert(body_element.nodeType);
// }
// window.onload = countBodyChild;
function prepareGallery() {
    if(!document.getElementById("imagegallery")) {
        return false;
    }
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++) {
        links[i].onclick = function() {
            // showPic(this);
            // return false;
            //return !showPic(this);
            return showPic(this) ? false : true;
        }
        // links[i].onkeypress = function() {
        //     return showPic(this) ? false : true;
        // }
        //或者
        links[i].onkeypress = links[i].onclick;
    }
}

// window.onload = function() {
//     prepareGallery();
// }
function addLoadEvent(func) {
    var oldonload = window.onload;
    if(typeof window.onload != 'function') {
        window.onload = func;
    }else {
        window.onload = function() {
            oldonload();
            func();
        }
    }

}

addLoadEvent(prepareGallery);