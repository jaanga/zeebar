
	function webgl_animation_skinningWorld(id, ht) {
		//var zeeBarNew = screens.indexOf('webgl_animation_skinning');
		// var ht = zeeBar[zeeBarNew].children[0].position.y;
		// getZeeBar(zeeBarCurrent, id);
		// zeeBarCurrent = id;
		
		var planeSimple = new THREE.PlaneGeometry( 300, 300 );
		var planeTesselated = new THREE.PlaneGeometry( 300, 300, 100, 100 );
		var matWire = new THREE.MeshBasicMaterial( { color :0x110000, wireframe: true, wireframeLinewidth: 2 } );
		var matSolid = new THREE.MeshBasicMaterial( { color :0x330000 } );
		matSolid.color.setHSV( 0.1, 0.75, 1 );

		mesh = new THREE.Mesh( planeSimple, matSolid );
		mesh.rotation.x = - Math.PI / 2;
		mesh.position.set( 0, ht, 0);
		mesh.zeeBarHeight = mesh.position.y;
		mesh.zeeBarID = id;
		mesh.zeeBarType = '';
		mesh.headsup = '<h1>Static databases and models are old-school</h1>';
		zeeBar[id].children.push(mesh);
		scene.add( mesh );

		floor = new THREE.Mesh( planeTesselated, matWire );
		floor.rotation.x = - Math.PI / 2;
		floor.position.set( 0, ht + 0.1, 0);
		floor.zeeBarHeight = floor.position.y;
		floor.zeeBarID = id;
		floor.zeeBarType = '';
		floor.headsup = '<h1>Static databases and models are old-school</h1><h1>Code is king...</h1>';
		zeeBar[id].children.push(floor);
		scene.add( floor );

		var loader = new THREE.JSONLoader();
		loader.load( "webgl_animation_skinning/buffalo-original.js", createScene );	
	} 

	var animations = [];
	var buffalos = [];
	var offset = [];
	var floor, dz = 0, dstep = 0.5;
	var clock = new THREE.Clock();
	
	function createScene( geometry ) {
	
		var zeeBarNew = 1 + screens.indexOf('webgl_animation_skinning');
		var ht = zeeBar[zeeBarNew].children[0].position.y;

		buffalos = [];
		animations = [];

		var x, y,
			buffalo, animation,
			gridx = 15, gridz = 15,
			sepx  = 20, sepz = 20;

		var material = new THREE.MeshFaceMaterial();

		var originalMaterial = geometry.materials[ 0 ];

		originalMaterial.skinning = true;
		originalMaterial.transparent = true;
		originalMaterial.alphaTest = 0.75;

		THREE.AnimationHandler.add( geometry.animation );

		for( x = 0; x < gridx; x ++ ) {
			for( z = 0; z < gridz; z ++ ) {
				buffalo = new THREE.SkinnedMesh( geometry, material, false );

				buffalo.position.x = - ( gridx - 1 ) * sepx * 0.5 + x * sepx + Math.random() * 0.5 * sepx;
				buffalo.position.z = - ( gridz - 1 ) * sepz * 0.5 + z * sepz + Math.random() * 0.5 * sepz - 10;

				//buffalo.position.y = buffalo.boundRadius * 0.5;
				buffalo.position.y = ht + 5.7;
				buffalo.rotation.y = 3.1415 + 0.2 - Math.random() * 0.4;
				buffalo.scale.set(0.1, 0.1, 0.1);
				mesh.zeeBarHeight = mesh.position.y;
				zeeBar[zeeBarNew].children.push(buffalo);
				scene.add( buffalo );

				buffalos.push( buffalo );

				animation = new THREE.Animation( buffalo, "take_001" );
				animations.push( animation );

				offset.push( Math.random() );
			}
		}
		startAnimation();
		loop();
	}
			
	function startAnimation() {
		for( var i = 0; i < animations.length; i ++ ) {
			animations[ i ].offset = 0.05 * Math.random();
			animations[ i ].play();
		}
		dz = dstep;
		playback = true;
	}
	
	function loop() {
		// requestAnimationFrame( loop, renderer.domElement );
		var delta = clock.getDelta();
		THREE.AnimationHandler.update( delta );
		// camera.position.x += ( mouseX - camera.position.x ) * 0.05;
		camera.lookAt( scene.position );

		if ( buffalos && playback ) {
			var elapsed = clock.getElapsedTime();
			camera.position.z -= 1 * Math.sin( elapsed );
			for( i = 0; i < buffalos.length; i++ ) {
				buffalos[ i ].position.z += 0.2 * Math.sin( elapsed + offset[ i ] );
			}
		}
		floor.position.z += dz;
		if ( floor.position.z > 30 ) floor.position.z = 0;
		// console.log(new Date, camera.position.z);
	}	

callback2(5);