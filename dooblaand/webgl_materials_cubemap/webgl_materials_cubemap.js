
	function webgl_materials_cubemap(id, ht) {
		var txt = '9. Go to <a href="JavaScript:loadScript(\'webgl_materials_cubemap/webgl_materials_cubemapWorld.js\')" >webgl_materials_cubemap World</a>';
		var link = 'webgl_materials_cubemap/webgl_materials_cubemapWorld.js';
		buildCube(30, 1, 30, 0, 0, 0, colors[id],'', ht, id, '.js', link, txt);
		// buildCube(8, 8, 8, 0, 4, 0, 0xffffff, 'textures/' + textureImages[id], ht, id, '.js', link, txt);
		
		loader = new THREE.JSONLoader();
		loader.load( 'webgl_materials_cubemap/WaltHeadLo.js ', callBackGeometry );		
	}	
	
	function callBackGeometry(geometry) {
		var id = 1 + screens.indexOf('webgl_materials_cubemap');
		var ht = zeeBar[id].children[0].position.y;
		material = new THREE.MeshPhongMaterial( { ambient: 0x555555, color: 0x555555, specular: 0xffffff, shininess: 50, shading: THREE.SmoothShading } );
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.y = ht + 10;
		mesh.scale.set(0.2, 0.2,0.2);
		mesh.rotation.y = 3.1415;
		scene.add( mesh );
		mesh.zeeBarID = id;
		mesh.zeeBarHeight = 10;
		mesh.zeeBarType = '';
		zeeBar[id].children.push(mesh);
	}	
	
	callback(screens.indexOf('webgl_materials_cubemap') + 1);
