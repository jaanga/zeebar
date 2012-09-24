	var morphs = [];
	function webgl_morphnormalsWorld(id, ht) {
		var txt = '<h1>The 2D web is about:</h1><h1>content/HTML, style/CSS and behavior/JavaScript.</h1>';
		var link = '';
		buildCube(30, 1, 30, 0, 0, 0, colors[id], '', ht, id, '', '', txt);
		/*
		for (var i = 0; i < 20; i++) {
			txt = 'slide ' + id + ' - cube ' + i;
			buildCube(5,5,5, Math.random() * 50 - 25, 5, Math.random() * 50 - 25, 0xffffff, 'textures/' + textureImages[id], ht, id, '.js','', txt);
			mesh.rotation.set( Math.random() * 1.5708, Math.random() * 1.5708, Math.random() * 1.5708 );
		}
		*/
		playback = true;
		
		var loader = new THREE.JSONLoader();
		
		loader.load( "webgl_morphnormals/flamingo.js", function( geometry ) {
			material = geometry.materials[ 0 ];
			material.morphTargets = true;
			material.color.setHex( 0xffaaaa ); // brightens them a bit
			material.ambient.setHex( 0x222222 );
			// var faceMaterial = new THREE.MeshFaceMaterial();
			var faceMaterial = new THREE.MeshLambertMaterial( { color: 0xffaa55, morphTargets: true, vertexColors: THREE.FaceColors } );
			for ( var i = 0; i < 3; i ++ ) {
				morphColorsToFaceColors( geometry );
				mesh = new THREE.MorphAnimMesh( geometry, faceMaterial );
				// one second duration
				mesh.duration = 1000;
				// random animation offset
				mesh.time = 1000 * Math.random();
				mesh.scale.set(0.2, 0.2, 0.2);
				mesh.position.set( 12 * i, 5 * i - 8, 12 * i );
				mesh.rotation.y = THREE.Math.randFloat( -0.25, 0.25 );
				mesh.castShadow = true;
				mesh.matrixAutoUpdate = true;
				mesh.updateMatrix();
				scene.add( mesh );
				morphs.push( mesh );
				mesh.zeeBarID = id;
				mesh.zeeBarHeight = 15;
				mesh.zeeBarType = '';		
				zeeBar[id].children.push(mesh);			
			// morphs.push( mesh );
			}
		} );
	} 
	var phi = 3;
	
	function loop() {
		var id = screens.indexOf('webgl_morphnormals') + 1;
		delta = 1000 * clock.getDelta();
		if ( morphs.length ) {
			for ( var i = 0; i < morphs.length; i ++ ) {
				mesh = morphs[i];
				
				mesh.updateAnimation( delta);
				phi +=0.005;
				mesh.position.x = (i * 10 + 30) * Math.sin( i * 0.2 + phi);
				phi +=0.005;
				mesh.position.z = (i * 10 + 30) * Math.cos( i * 0.2 + phi);
				phi +=0.005;
				mesh.rotation.y = 1.5  + phi;
				//temp.position.z += 3;			
				//if (temp.position.z > 1000) {temp.position.z = 0; }
				mesh.updateMatrix();
			}
		}
	}	

	function morphColorsToFaceColors( geometry ) {
		if ( geometry.morphColors && geometry.morphColors.length ) {
			var colorMap = geometry.morphColors[ 0 ];
			for ( var i = 0; i < colorMap.colors.length; i ++ ) {
				geometry.faces[ i ].color = colorMap.colors[ i ];
			}
		}
	}
	
callback2(screens.indexOf('webgl_morphnormals') + 1);