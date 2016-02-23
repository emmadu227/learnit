var wrap = document.getElementById('wrap');

wrap.addEventListener('touchstart',function(e){
	e.preventDefault();
	var touchstart = e.targetTouches[0];
	startPos = {x:touchstart.pageX, y:touchstart.clientY};
	startTop = this.offsetTop;
	// console.log('startTop ' + startTop);

},false);

wrap.addEventListener('touchmove',function(e){
	// e.preventDefault();
	var touchmove = e.targetTouches[0];
	movePos = {x:touchmove.pageX,y:touchmove.clientY};
	disX = parseInt(movePos.x - startPos.x);
	disY = parseInt(movePos.y - startPos.y);
	//element should be moved accord with mouse movement which is applied by changing TOP value of this element.
	if(Math.abs(disY) > Math.abs(disX)){
	$(this).css({"top":startTop + disY});
}



},false)

wrap.addEventListener('touchend',function(e){
		// var touch = e.targetTouches[0]||e.touches[0];
	e.preventDefault();
	endTop = this.offsetTop;
	//body height
	var bh = document.body.offsetHeight;
	//if reach the top of first page, reset the top to 0;
	if(endTop>0){var curTop =0;}
	//if reach the bottom of the last page OR the distance of movement is less than third of body height, reset the top to current page original top.
	else {if((Math.abs(endTop)>5*bh) ||(Math.abs(endTop-startTop) < bh/2)){
		var curTop = startTop;
		console.log("nomove curTop:" + $(this).css("top"));
	}
		else if(endTop>startTop){var curTop = startTop+bh;console.log("Down curTop: "+curTop);}
			else if(endTop<startTop){var curTop = startTop - bh;console.log("Up curTop: "+curTop);}}
	$(this).animate({top:curTop},300);
	console.log("+++++++++++++++");
		    		

},false)