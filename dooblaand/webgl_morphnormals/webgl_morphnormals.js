// buildCube(length, height, width, x, y, z, color, texture, ht, id, type, link, headsup)
	function webgl_morphnormals(id, ht) {
		var txt = '2. Go to <a href="JavaScript:loadScript(\'webgl_morphnormals/webgl_morphnormalsWorld.js\')" >webgl_morphnormals</a>';
		var link = 'webgl_morphnormals/webgl_morphnormalsWorld.js';
		buildCube(30, 1, 30, 0, 0 , 0, colors[id],'', ht, id, '.js', link, txt);
		// buildCube(8, 8, 8, 0, 4, 0, 0xffffff, 'textures/' + textureImages[id], ht, id, '.js', link, txt);
		
		var loader = new THREE.JSONLoader();
		loader.load( "webgl_morphnormals/flamingo.js", function( geometry ) {
		var material = geometry.materials[ 0 ];
		// material.morphTargets = true;
		//material.color.setHex( 0xffaaaa ); // brightens them a bit
		//material.ambient.setHex( 0x222222 );
		var faceMaterial = new THREE.MeshLambertMaterial( {color: 0xffaa55,   vertexColors: THREE.FaceColors } );
		// morphColorsToFaceColors( geometry );
		mesh = new THREE.MorphAnimMesh( geometry, faceMaterial );
		mesh.time = 1000 * Math.random();
		mesh.position.set( 0, ht + 15, 0 );
		mesh.scale.set(0.2, 0.2, 0.2);
		//temp.rotation.y = THREE.Math.randFloat( -0.25, 0.25 );
		mesh.castShadow = true;
		//mesh.matrixAutoUpdate = true;
		//mesh.updateMatrix();
		scene.add( mesh );
		mesh.zeeBarID = id;
		mesh.zeeBarHeight = 15;
		mesh.zeeBarType = '';
		zeeBar[id].children.push(mesh);
		//}
	} );
	}	
	
		function morphColorsToFaceColors( geometry ) {
		if ( geometry.morphColors && geometry.morphColors.length ) {
			var colorMap = geometry.morphColors[ 0 ];
			for ( var i = 0; i < colorMap.colors.length; i ++ ) {
				geometry.faces[ i ].color = colorMap.colors[ i ];
			}
		}
	}
	
	callback(screens.indexOf('webgl_morphnormals') + 1);
