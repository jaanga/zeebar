
	var mouse = { x: -1, y: -1 },
		mouseMove;

	document.addEventListener( 'DOMMouseScroll', onDocumentMouseWheel, false);
	document.addEventListener( 'mousewheel', onDocumentMouseWheel, false);
	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	document.addEventListener( 'mousedown', onDocumentMouseDown, false );
	document.addEventListener( 'keydown', onKeyDown, false );

	function onDocumentMouseWheel(event) {
// console.log(event);
		if ( !event.srcElement.data) {
			wheelDelta( event.wheelDelta * -0.08 );
		}
	}

	function onDocumentMouseMove( event ) {
// if (window.console) { console.log('move', event); }
		mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
		mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
		mouseMove = true;
	}

	function onDocumentMouseDown( event ) {
// console.log(event);
		if ( event.target.tagName !== 'A' ) {  // if not an anchor...
			mouseClick(event);
		}
	}

	function onKeyDown ( event ) {
// http://www.webonweboff.com/tips/js/event_key_codes.aspx
		switch( event.keyCode ) {
			case 39: /*<*/	zeeBarCurrent--; if (zeeBarCurrent < 1) {zeeBarCurrent = zeeCount;} goBack(zeeBarCurrent); break;
			case 37: /*>*/	zeeBarCurrent++; if (zeeBarCurrent > zeeCount) {zeeBarCurrent = 1;} goBack(zeeBarCurrent); break;
			case 38: /*^*/	zeeBarCurrent = 1; goBack(1); break;
			case 40: /*v*/	zeeBarCurrent = zeeCount; goBack(zeeCount - 1); break;
		}
	}
