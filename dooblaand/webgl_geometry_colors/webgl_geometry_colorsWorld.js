
	function webgl_geometry_colorsWorld(id, ht) {
		var txt = '<h1>Every demo here can have its own folder, callbacks and loops</h1>';
		var link = '';
		buildCube(30, 1, 30, 0, 0, 0, colors[id],'', ht, id, '.js', link, txt);

		// var shadowMaterial = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'webgl_geometry_colors/shadow.png' ) } );
		var shadowGeo = new THREE.PlaneGeometry( 6, 6, 1, 1 );

		var faceIndices = [ 'a', 'b', 'c', 'd' ];

		var color, f, f2, f3, p, n, vertexIndex,
			radius = 8,
			geometry  = new THREE.IcosahedronGeometry( radius, 1 ),
			geometry2 = new THREE.IcosahedronGeometry( radius, 1 ),
			geometry3 = new THREE.IcosahedronGeometry( radius, 1 );

		for ( var i = 0; i < geometry.faces.length; i ++ ) {

			f  = geometry.faces[ i ];
			f2 = geometry2.faces[ i ];
			f3 = geometry3.faces[ i ];

			n = ( f instanceof THREE.Face3 ) ? 3 : 4;

			for( var j = 0; j < n; j++ ) {

				vertexIndex = f[ faceIndices[ j ] ];

				p = geometry.vertices[ vertexIndex ];

				color = new THREE.Color( 0xffffff );
				color.setHSV( ( p.y / radius + 1 ) / 2, 1.0, 1.0 );

				f.vertexColors[ j ] = color;

				color = new THREE.Color( 0xffffff );
				color.setHSV( 0.0, ( p.y / radius + 1 ) / 2, 1.0 );

				f2.vertexColors[ j ] = color;

				color = new THREE.Color( 0xffffff );
				color.setHSV( 0.125 * vertexIndex/geometry.vertices.length, 1.0, 1.0 );

				f3.vertexColors[ j ] = color;
			}
		}

		var materials = [
			new THREE.MeshLambertMaterial( { color: 0xffffff, shading: THREE.FlatShading, vertexColors: THREE.VertexColors } ),
			new THREE.MeshBasicMaterial( { color: 0x000000, shading: THREE.FlatShading, wireframe: true, transparent: true } )
		];

		mesh = THREE.SceneUtils.createMultiMaterialObject( geometry, materials );
		mesh.position.y = ht + 10;
		mesh.position.x = -16;
		mesh.rotation.x = -1.87;
		mesh.castShadow = true;
		mesh.receiveShadow = true;		
		mesh.headsup = 'webgl_geometry_colors ' + i;	
		mesh.zeeBarHeight = mesh.position.y;		
		zeeBar[id].children.push(mesh);
		scene.add( mesh );

		mesh = THREE.SceneUtils.createMultiMaterialObject( geometry2, materials );
		mesh.position.y = ht + 10;
		mesh.position.x = 16;
		mesh.rotation.x = 0;
		mesh.castShadow = true;
		mesh.receiveShadow = true;	
		mesh.headsup = 'webgl_geometry_colors ' + i;
		mesh.zeeBarHeight = mesh.position.y;
		zeeBar[id].children.push(mesh);
		scene.add( mesh );

		mesh = THREE.SceneUtils.createMultiMaterialObject( geometry3, materials );
		mesh.position.y = ht + 10;
		mesh.position.x = 0;
		mesh.rotation.x = 0;
		mesh.castShadow = true;
		mesh.receiveShadow = true;	
		mesh.headsup = 'webgl_geometry_colors ' + i;	
		mesh.zeeBarHeight = mesh.position.y;
		zeeBar[id].children.push(mesh);
		scene.add( mesh );
		
		playback = true;
	} 
	
	function loop() {
		loopDefault();
	}	
	
	callback2(6);