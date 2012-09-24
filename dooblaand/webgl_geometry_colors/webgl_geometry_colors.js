
function webgl_geometry_colors(id, ht) {
	var txt = '6. Go to <a href="JavaScript:loadScript(\'webgl_geometry_colors/webgl_geometry_colorsWorld.js\')" >webgl_geometry_colors</a>';
	var link = 'webgl_geometry_colors/webgl_geometry_colorsWorld.js';
	buildCube(30, 1, 30, 0, 0, 0, colors[id],'', ht, id, '.js', link, txt);
	
	geometry  = new THREE.IcosahedronGeometry( 8, 1 ),
	// texture = THREE.ImageUtils.loadTexture( 'textures/' + textureImages[i]);
	material = new THREE.MeshNormalMaterial();
	mesh = new THREE.Mesh( geometry, material );
	mesh.position.set( 0, ht + 10, 0);
	mesh.castShadow = true;
	mesh.receiveShadow = true;
	mesh.zeeBarID = id;
	mesh.zeeBarHeight = 10;
	mesh.zeeBarType = '.js';
	mesh.headsup = txt;
	zeeBar[id].children.push(mesh);
	scene.add( mesh );	
	playback = true;
}	

callback(6);