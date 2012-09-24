
	function webgl_materials_cubemap_escherWorld(id, ht) {
	
		//var id = screens.indexOf('webgl_materials_cubemap_escher/webgl_materials_cubemap_escher');
		// var ht = zeeBar[id].children[0].position.y;
		//getZeeBar(zeeBarCurrent, id);
		//zeeBarCurrent = id;		
		
		var txt = '<h1>All demos are loaded and removed at run-time</h1>';
		var link = '';
		buildCube(30, 1, 30, 0, 0, 0, colors[id],'', ht, id, '.js', link, txt);

		
		var r = "textures/cube/Escher/";
		var urls = [ r + "px.jpg", r + "nx.jpg",
					 r + "py.jpg", r + "ny.jpg",
					 r + "pz.jpg", r + "nz.jpg" ];

		var textureCube = THREE.ImageUtils.loadTextureCube( urls );
		var material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: textureCube } )
		var geometry = new THREE.SphereGeometry( 10, 96, 64 );

		var mesh = new THREE.Mesh( geometry, material );
		mesh.scale.x = mesh.scale.y = mesh.scale.z = 1;
		mesh.position.set( 0, ht + 12, 0);
		mesh.rotation.y = 3;
		mesh.zeeBarHeight = 12;
		zeeBar[id].children.push(mesh);
		scene.add( mesh );

		// Skybox
		
		var shader = THREE.ShaderUtils.lib[ "cube" ];
		shader.uniforms[ "tCube" ].texture = textureCube;

		var material = new THREE.ShaderMaterial( {

			fragmentShader: shader.fragmentShader,
			vertexShader: shader.vertexShader,
			uniforms: shader.uniforms,
			side: THREE.BackSide

		} ),

		mesh = new THREE.Mesh( new THREE.CubeGeometry( 6000, 6000, 6000 ), material );
		scene.add( mesh );
			

		mesh = new THREE.Mesh( new THREE.CubeGeometry( 200, 200, 200 ), material );
		mesh.position.set( 0, ht, 0);
		mesh.zeeBarHeight = 12;
		zeeBar[id].children.push(mesh);
		scene.add( mesh );

	} 
	
	function loop() {

	}	

	callback2(screens.indexOf('webgl_materials_cubemap_escher') + 1);