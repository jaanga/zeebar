
function jaanga(id, ht) {
	var txt = '<h1>Click anywhere here to go to:</h1><h1><a href="../2012-07-16-jaanga-gas/gas-query-visualization-sp500-replay.html" >jaanga</a></h1><h1>3D Animated Real-time DataViz</h1>';
	var link = '';
	buildCube(30, 1, 30, 0, 0 , 0, colors[id],'', ht, id, 'jaanga', link, txt);
	// buildCube(8, 8, 8, 0, ht + 4, 0, 0xffffff, 'textures/' + textureImages[id], id, 'jaanga', txt);
	
	addText ('S&P500', 5, 5, 3, 0, 0, 0, 0xaa8888, true, 0.2, 0.2, txt, id, 'jaanga');
	mesh.position.set( 12, ht + 6, 4);
	// mesh.zeeBarHeight = 15;
	mesh.scale.y = 3;
	mesh.rotation.y = 3.1415;
	
	geometry = new THREE.CylinderGeometry( 20, 30, 20, 35, 1, true );
	material = createText('jaanga', 24, 300 ); 
	mesh = new THREE.Mesh( geometry, material);
	mesh.position.set( -8, ht + 15, 12);
	mesh.rotation.y = 1.6;
	mesh.zeeBarHeight = 15;
	scene.add( mesh );
	zeeBar[id].children.push(mesh);
}

callback(4);