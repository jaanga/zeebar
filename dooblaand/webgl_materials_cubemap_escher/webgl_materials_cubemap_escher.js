
	function webgl_materials_cubemap_escher(id, ht) {
		var txt = '8. Go to <a href="JavaScript:loadScript(\'webgl_materials_cubemap_escher/webgl_materials_cubemap_escherWorld.js\')" >webgl_materials_cubemap_escher World</a>';
		var link = 'webgl_materials_cubemap_escher/webgl_materials_cubemap_escherWorld.js';
		buildCube(30, 1, 30, 0, 0, 0, colors[id],'', ht, id, '.js', link, txt);
	
		var r = "textures/cube/Escher/";
		var urls = [ r + "px.jpg", r + "nx.jpg",
					 r + "py.jpg", r + "ny.jpg",
					 r + "pz.jpg", r + "nz.jpg" ];

		var textureCube = THREE.ImageUtils.loadTextureCube( urls );
		var material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: textureCube } )
		var geometry = new THREE.SphereGeometry( 10, 96, 64 );

		var mesh = new THREE.Mesh( geometry, material );
		// mesh.scale.x = mesh.scale.y = mesh.scale.z = 16;
		mesh.position.set( 0, ht + 12, 0);
		mesh.rotation.y = -3;
		mesh.zeeBarID = id;
		mesh.zeeBarHeight = 12;
		mesh.zeeBarType = '.js';
		mesh.headsup = txt;
		zeeBar[id].children.push(mesh);
		scene.add( mesh );
}		

callback(screens.indexOf('webgl_materials_cubemap_escher') + 1);		