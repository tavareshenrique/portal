var slideItem = 0;
window.onload = function() {
    
	doChangeColor(0);
    setInterval(passarSlide, 5000);

	var slidewidth = document.getElementById("slideshow").offsetWidth;
	var objs = document.getElementsByClassName("slide");
	for(var i in objs) {
		objs[i].style.width = slidewidth;
	}
}

function passarSlide() {
    
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	
	if(slideItem >= 3) {
		slideItem = 0;
	} else {
		slideItem++;
	}

	document.getElementsByClassName("slideshow-area")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
    doChangeColor(slideItem);
}

function mudarSlide(pos) {
    
    slideItem = pos;
    
    var slidewidth = document.getElementById("slideshow").offsetWidth;
    document.getElementsByClassName("slideshow-area")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
    
    doChangeColor(pos);
}

function doChangeColor(pos) {
    
    var cont;
    switch(pos) {
        
        case 0:
            document.getElementById("bol0").style.backgroundColor = '#FF0000';
            document.getElementById("bol1").style.backgroundColor = '#CCCCCC';
            document.getElementById("bol2").style.backgroundColor = '#CCCCCC';
            document.getElementById("bol3").style.backgroundColor = '#CCCCCC';
            break;
        
        case 1:
            document.getElementById("bol1").style.backgroundColor = '#FF0000';
            document.getElementById("bol0").style.backgroundColor = '#CCCCCC';
            document.getElementById("bol2").style.backgroundColor = '#CCCCCC';
            document.getElementById("bol3").style.backgroundColor = '#CCCCCC';
            break;
            
        case 2:
            document.getElementById("bol2").style.backgroundColor = '#FF0000';
            document.getElementById("bol0").style.backgroundColor = '#CCCCCC';
            document.getElementById("bol1").style.backgroundColor = '#CCCCCC';
            document.getElementById("bol3").style.backgroundColor = '#CCCCCC';
            break;
            
        case 3:
            document.getElementById("bol3").style.backgroundColor = '#FF0000';
            document.getElementById("bol0").style.backgroundColor = '#CCCCCC';
            document.getElementById("bol1").style.backgroundColor = '#CCCCCC';
            document.getElementById("bol2").style.backgroundColor = '#CCCCCC';
            break;
    }    
    
}