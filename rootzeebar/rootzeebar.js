
function rootzeebar(id, ht) {
	var txt = '<h1>You are at root.</h1><h1>This is home.</h1><h1>Scroll up or down to find places to go.</h1>';
	var link = '';
	buildCube(30, 1, 30, 0, ht, 0, 0x00ff00, '', ht, id, '', link, txt);
	
	// buildHome(x, y, z, opacity, id, type, txt)
	buildHome(0, ht - 0.1, -2, 1, id, 'root', link, txt);	
	// mesh.rotation.y = -1.5708;
	mesh.castShadow = true;
	mesh.scale.set(0.5, 0.5, 0.5);

	geometry = new THREE.PlaneGeometry( 15, 5 );
	material = createText('zeeBar', '', '', 50 ); 
	mesh = new THREE.Mesh( geometry, material);
	mesh.position.set( -7, ht + 7, -12);
	mesh.rotation.y = 1.5807;
	scene.add( mesh );
	zeeBar[id].children.push(mesh);	
	
	geometry = new THREE.PlaneGeometry( 12, 5);
	material = createText('Home', '', '', 50 ); 
	mesh = new THREE.Mesh( geometry, material);
	mesh.position.set( -5, ht + 5, -15);
	mesh.rotation.y = 1.5807; //3.1415;
	mesh.zeeBarHeight = mesh.position.y;
	scene.add( mesh );
	zeeBar[id].children.push(mesh);	
}	
	
callback(1);
