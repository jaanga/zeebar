
function singlefile(id, ht) {
	var txt = '<h1>Click anywhere here to go to:</h1><h1><a href="singlefile/singlefile.html" >Threesentation</a></h1><h1>A working prototype for building 3D presentations<br>with a single file</h1>';
	var link = '';
	buildCube(30, 1, 30, 0, 0, 0, colors[id],'', ht, id, '.html', link, txt);
	buildCube(8, 8, 8, 0, 4, 0, 0xffffff, 'textures/' + textureImages[id] , ht, id, '.html', link, txt);
	
	geometry = new THREE.CubeGeometry( 12, 4, 4 );
	material = createText('single file',60, 400, 100 ); 
	mesh = new THREE.Mesh( geometry, material);
	mesh.position.set( 0, ht + 18, 0);
	// mesh.rotation.y = 1.6;
	mesh.zeeBarHeight = 18;
	scene.add( mesh );
	zeeBar[id].children.push(mesh);
}

callback(screens.indexOf('singlefile') + 1);