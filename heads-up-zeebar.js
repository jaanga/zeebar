	var intersected;
	var playback = false;
	var zeeZero;

	function updateHeadsUp() {
		var vector = new THREE.Vector3( mouse.x, mouse.y, 1 );
		projector.unprojectVector( vector, camera );
		var ray = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );
		var intersects = ray.intersectObjects( scene.children );
		if ( intersects.length > 0 ) {
			if ( intersected != intersects[ 0 ].object ) { // not same object as previous event
				intersected = intersects[ 0 ].object;
				if ( intersected.headsup != undefined && intersected.headsup != '') {
					if (intersected.material.color) {
						intersected.currentHex = intersected.material.color.getHex();
						intersected.material.color.setHex( 0xff0000 );
					}
					if (intersected.zeeBarType == 'game') {intersected.scale.x = 3;}
					var txt = intersected.headsup;
					headsUp.style.left = 10 + 0.5 * window.innerWidth + mouse.x * 0.5 * window.innerWidth + 'px';
					headsUp.style.bottom = 10 + 0.5 * window.innerHeight + mouse.y * 0.5 * window.innerHeight+ 'px';
					headsUp.style.display = 'block';
					headsUp.innerHTML = txt;
				}
			}
		} else {
			if ( intersected ) {
				highlightOff();
			}
			intersected = null;
		}
	}

	function highlightOff() {
		headsUp.style.display = 'none';
		if (intersected && intersected.material.color) {
			if (intersected.material.envMap == null) { intersected.material.color.setHex( intersected.currentHex ); }
		}
		if ( intersected && intersected.zeeBarType == 'game') {intersected.scale.x = 1;}
	}

	function mouseClick(event) {
		highlightOff();
		if (playback) {playback = false; } else { playback = true; }

		if (intersected) {
			var i = intersected.zeeBarID, t = intersected.zeeBarType, l = intersected.zeeBarLink ;
			if (t == 'link') {
				window.location = intersected.zeeBarLink;
			} else if (t == '.html') {
				window.location = screens[ i - 1 ] + '/' + screens[ i - 1 ] + t;
			} else if (t == '.js') {
				if (intersected.zeeBarLink) { loadScript( intersected.zeeBarLink ); }
			} else if (t == 'root') {
				window.location =  '../index.html';
			} else if (t == 'goBack') {
				goBack(1);
				playback = true;
			} else if (t == 'jaanga') {
				window.location =  '../2012-07-16-jaanga-gas/gas-query-visualization-sp500-replay.html';
			} else if (t == 'slide') {
				zeeBarCurrent = intersected.zeeBarID;
				playback = true;
			} else if (t == 'game') {
				intersected.scale.x = 2;
				playback = true;
			} else if (t == 'next') {
				zeeBarCurrent++;
				if (zeeBarCurrent > zeeCount) { zeeBarCurrent = 1;}
				goBack(zeeBarCurrent);
				playback = true;
			} else if (t == 'previous') {
				zeeBarCurrent--;
				if (zeeBarCurrent < 1) { zeeBarCurrent = zeeCount;}
				goBack(zeeBarCurrent);
				playback = true;
				//wheelDelta(zeeBottom);
			}
		}	
	}

	function wheelDelta(d) {
		for (var i = 1, m; i <= zeeCount; i++) {
			m = zeeBar[i].children;
			if (!m[0].position) {
				m = m[0].root.position; // for md2 characters
			}
			if ( m[0].position.y > zeeTop) {
				for (var j = 0, l = m.length; j < l; j++) {
					m[j].position.y = d + zeeBottom + m[j].zeeBarHeight;
				}

			} else if (m[0].position.y < zeeBottom) {
				for (var j = 0, l = m.length; j < l; j++) {
					m[j].position.y = d + zeeTop + m[j].zeeBarHeight;
				}
			} else {
				for (var j = 0, l = m.length; j < l; j++) {
					m[j].position.y += d;
				}
			}
		}
	}

	function goBack(start) {
// console.log('goBack1 - ', zeeBarCurrent);
		camera.position.set( 20, 20, -20);
		camera.up.set(0, 1, 0);
		controls.target.set( 0, 0, 0);
		var s = start.valueOf();
		for (var i = 1, m, ht; i <= zeeCount; i++) {
			if (s > zeeCount) {s = 1; }
			ht = (s - 1) * -zeeTop;
			if (ht == 0) {zeeZero = i;}
			s++;
			for (var j = 0, l = zeeBar[i].children.length; j < l; j++) {
				m = zeeBar[i].children[j];
				m.position.y = ht + m.zeeBarHeight;
				m.rotation.x = 0;
				m.rotation.y = 3.1415;
			}
		}
		zeeBarCurrent = start;
	}

	function loopDefault() {
		for (var i = 1, l = zeeCount; i <= l; i++) {
			if ( Math.abs(zeeBar[i].children[0].position.y) - 5 < zeeTop) {
				var object = zeeBar[i].children;
				break;
			}
		}
		var timer = clock.getDelta();
		for ( var i = 1, l = object.length; i < l; i++ ) {
			object[i].rotation.y += timer * 0.3;
		}
	}