
	function webgl_geometriesWorld(id, ht) {
		var txt = '<h1>Similarly, the 3D web is about:</h1><h1>bones, skins and animations</h1>';
		var link = '';
		buildCube(30, 1, 30, 0, 0, 0, colors[id],'', ht, id, '.js', link, txt);
	
		var map = THREE.ImageUtils.loadTexture( 'textures/ash_uvgrid01.jpg' );
		map.wrapS = map.wrapT = THREE.RepeatWrapping;
		map.anisotropy = 16;

		materials = [
			new THREE.MeshLambertMaterial( { ambient: 0xbbbbbb, map: map, side: THREE.DoubleSide } ),
			new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true, transparent: true, opacity: 0.3, side: THREE.DoubleSide } )
		];
		
		// ht = ht + 12;
		
		mesh = THREE.SceneUtils.createMultiMaterialObject( new THREE.CubeGeometry( 10, 10, 10, 4, 4, 4 ), materials );
		mesh.position.set( -20, ht + 12, 40 );
		zeeBar[id].children.push(mesh);
		mesh.zeeBarHeight = 12;
		scene.add( mesh );

		mesh = THREE.SceneUtils.createMultiMaterialObject( new THREE.CylinderGeometry( 2.5, 7.5, 10, 40, 5 ), materials );
		mesh.position.set( 0, ht + 12, 40 );
		mesh.zeeBarHeight = 12;
		zeeBar[id].children.push(mesh);
		scene.add( mesh );		

		mesh = THREE.SceneUtils.createMultiMaterialObject( new THREE.IcosahedronGeometry( 7.5, 2), materials );
		mesh.position.set( -20, ht + 12, 20 );
		mesh.zeeBarHeight = 12;
		zeeBar[id].children.push(mesh);
		scene.add( mesh );

		mesh = THREE.SceneUtils.createMultiMaterialObject( new THREE.OctahedronGeometry( 7.5, 2 ), materials );
		mesh.position.set( 0, ht + 12, 20 );
		mesh.zeeBarHeight = 12;
		zeeBar[id].children.push(mesh);
		scene.add( mesh );

		mesh = THREE.SceneUtils.createMultiMaterialObject( new THREE.TetrahedronGeometry( 7.5, 2 ), materials );
		mesh.position.set( 20, ht + 12, 20 );
		mesh.zeeBarHeight = 12;
		zeeBar[id].children.push(mesh);
		scene.add( mesh );
		
		mesh = THREE.SceneUtils.createMultiMaterialObject( new THREE.SphereGeometry( 7.5, 2, 1 ), materials );
		mesh.position.set( 0, ht + 12, 0 );
		mesh.zeeBarHeight = 12;
		zeeBar[id].children.push(mesh);
		scene.add( mesh );
		
		mesh = THREE.SceneUtils.createMultiMaterialObject( new THREE.PlaneGeometry( 10, 10, 4, 4 ), materials );
		mesh.position.set( -20, ht + 12, 0 );
		mesh.zeeBarHeight = 12;
		zeeBar[id].children.push(mesh);
		scene.add( mesh );

		// mesh = THREE.SceneUtils.createMultiMaterialObject( new THREE.CircleGeometry( 5, 1, 0, Math.PI ), materials );
		// mesh.position.set( -20, ht, 0 );
		// mesh.rotation.x = Math.PI/2;
		// zeeBar[id].children.push(mesh);
		// scene.add( mesh );

		var points = [];
		for ( var i = 0; i < 50; i ++ ) {
			points.push( new THREE.Vector3( Math.sin( i * 0.2 ) * 15 + 50, 0, ( i - 5 ) * 2 ) );
		}
		mesh = THREE.SceneUtils.createMultiMaterialObject( new THREE.LatheGeometry( points, 20 ), materials );
		mesh.scale.set(0.1, 0.1, 0.1);
		mesh.position.set( 20, ht + 12, 0 );
		mesh.zeeBarHeight = 12;
		zeeBar[id].children.push(mesh);
		scene.add( mesh );

		mesh = THREE.SceneUtils.createMultiMaterialObject( new THREE.TorusGeometry( 5, 1, 20, 20 ), materials );
		mesh.position.set( -20, ht + 12, -20 );
		zeeBar[id].children.push(mesh);
		scene.add( mesh );

		mesh = THREE.SceneUtils.createMultiMaterialObject( new THREE.TorusKnotGeometry( 5, 1, 50, 20 ), materials );
		mesh.position.set( 0, ht + 12, -20 );
		zeeBar[id].children.push(mesh);
		mesh.zeeBarHeight = 12;
		scene.add( mesh );

		mesh = new THREE.AxisHelper();
		mesh.position.set( 20, ht + 12, -20 );
		mesh.zeeBarHeight = 12;
		mesh.scale.x = mesh.scale.y = mesh.scale.z = 0.05;
		zeeBar[id].children.push(mesh);
		scene.add( mesh );

		mesh = new THREE.ArrowHelper( new THREE.Vector3( 0, 1, 0 ), new THREE.Vector3( 0, 0, 0 ), 5 );
		mesh.position.set( 20, ht + 12, 40 );
		mesh.zeeBarHeight = 12;
		zeeBar[id].children.push(mesh);
		scene.add( mesh );
		
		playback = true;
	} 

	function loop() {
		loopDefault();
	}

	callback2(screens.indexOf('webgl_geometries') + 1);