
	function webgl_geometry_cubeWorld(id, ht) {
		var txt = '<h1>Potential for code from multiple origins to be assembled ar run time on client machine<h1>';
		var link = '';
		buildCube(30, 1, 30, 0, 0, 0, 0x33000,'', ht, id, '.js', link, txt);

		geometry = new THREE.CubeGeometry( 20, 20, 20 );
		material = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'webgl_geometry_cube/crate.gif' ) });		
		mesh = new THREE.Mesh( geometry, material);
		scene.add( mesh );	
		mesh.position.set( 0, ht + 15, 0 );
		mesh.zeeBarID = id;
		mesh.zeeBarHeight = 15;
		mesh.zeeBarType = '';
		zeeBar[id].children.push(mesh);
		
		playback = true;
	} 
	
	function loop() {
		loopDefault();
	}	

callback2(screens.indexOf('webgl_geometry_cube') + 1);