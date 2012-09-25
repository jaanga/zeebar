// 
	
	var mouse = { x: -1, y: -1 };	
	var mouseMove;
	
	var headsUp;
	initDeviceEvents();
	
	function initDeviceEvents() {
		//document.addEventListener( 'DOMMouseScroll', onDocumentMouseWheel, false);
		//document.addEventListener( 'mousewheel', onDocumentMouseWheel, false);
		document.addEventListener( 'mousemove', onDocumentMouseMove, false );
		document.addEventListener( 'mousedown', onDocumentMouseDown, false );
		// document.addEventListener( 'click', onDocumentMouseClick, false );
		document.addEventListener( 'keydown', onKeyDown, false );
		
		headsUp = document.createElement( 'div' );
		document.body.appendChild( headsUp );
		headsUp.style.backgroundColor = '#ddd';
		headsUp.style.borderRadius = '8px';
		headsUp.style.padding = '5px 5px 10px 5px';
		headsUp.style.opacity = '0.85';
		headsUp.style.position = 'absolute';
		headsUp.style.left = '500px';
		headsUp.style.textAlign = 'left';		
	}

	
	function onDocumentMouseWheel(event) {
		event.preventDefault();
		if ( !event.srcElement.data) {

			wheelDelta( event.wheelDelta * -0.08 );
		}	
	}	
	
	function onDocumentMouseMove( event ) { // needs work - see also above
		mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
		mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
		mouseMove = true;
	}	
	
	function onDocumentMouseDown( event ) {
// console.log(event);
		if ( event.target.tagName != 'A' ) {  // if not an anchor...
			mouseClick(event);
		}
	}	
	
	function onKeyDown ( event ) {
// http://www.webonweboff.com/tips/js/event_key_codes.aspx
	// var z = zeeBarCurrent;
	// console.log('key1 - ', zeeBarCurrent);
		switch( event.keyCode ) {
			case 37: /*<*/	zeeBarCurrent--; if (zeeBarCurrent < 1) {zeeBarCurrent = zeeCount;} goBack(zeeBarCurrent); break;
			case 39: /*>*/	zeeBarCurrent++; if (zeeBarCurrent > zeeCount) {zeeBarCurrent = 1;} goBack(zeeBarCurrent); break;
			case 38: /*^*/	zeeBarCurrent = 1; goBack(1); break;
			case 40: /*v*/	zeeBarCurrent = zeeCount; goBack(zeeCount - 1); break;
			//case 78: /*e*/	noErase(); break;
		}
// console.log('key2 - ', zeeBarCurrent);
	}
	