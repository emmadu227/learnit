content = document.getElementsByClassName('content');
scroll = document.getElementsByClassName('scroll');
for(var i=0; i<scroll.length; i++){

	//width of current list
	var content_width = scroll[i].offsetWidth;

	console.log(i+","+content_width);
	// console.log("count: "+count);

content[i].addEventListener('touchstart',function(e){
	var touch = e.targetTouches[0];
	startPos = {x:touch.pageX, y:touch.pageY};
	startleft = this.offsetLeft;
	console.log('startleft ' + startleft);

},false);

content[i].addEventListener('touchmove',function(e){
	var touch = e.targetTouches[0];
	var endPos = {x:touch.pageX,y:touch.pageY};
	disX = parseInt(endPos.x - startPos.x);
	disY = parseInt(endPos.y - startPos.y);
	//element should be moved accord with mouse movement which is applied by changing left value of this element.
	if(Math.abs(disX) > Math.abs(disY)){
	$(this).css({"left":startleft + disX});}

},false);

content[i].addEventListener('touchend',function(e){
	var lis = this.getElementsByTagName('li');
    	//count of current list
	var count = lis.length;
	endleft = this.offsetLeft;
	console.log("endleft: "+endleft);

	//if reach the left of first page, reset the left to 0;
	if(endleft>0){var curleft=0;}
	//if reach the bottom of the last page OR the distance of movement is less than third of body height, reset the left to current page original left.
	else if((Math.abs(endleft)>(count-1)*content_width) ||(Math.abs(endleft-startleft) < content_width/3)){
		var curleft = startleft;
		console.log("nomove curleft:" +  $(this).css("left") );
	}
		 	else {if(endleft>startleft){var curleft = startleft+content_width;console.log("Right curleft: "+curleft);}
				 else if(endleft<startleft){var curleft = startleft - content_width;console.log("Left curleft: "+curleft+"count: "+count+"width: "+content_width);}}
	
	$(this).animate({left:curleft},300);

},false);
}