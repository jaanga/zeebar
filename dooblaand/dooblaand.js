
function dooblaand(id, ht) {
	var txt = '<h1>Click anywhere here to go to:</h1><h1><a href="dooblaand/dooblaand.html" >zeeBar dooblaand</a></h1><h1>A gathering place for Three.js demos</h1>';
	var link = 'dooblaand/dooblaand.html';
	buildCube(30, 1, 30, 0, 0 , 0, colors[id],'', ht, id, '.html', link, txt);
	txt = '<h1>This icon uses the image I created for the<br><a href="http://en.wikipedia.org/wiki/Three.js" target="_blank">Three.js Wikipedia</a> entry.</h1>'
	buildCube(10, 16, 2, 0, 9, 0, 0xffffff, 'dooblaand/three.js-code-example.jpg', ht, id, '.html', link, txt);
	
	geometry = new THREE.PlaneGeometry( 40, 15 );
	material = createText('dooblaand', 30, '', '','','','#ff0000' ); 
	mesh = new THREE.Mesh( geometry, material);
	mesh.rotation.x = 1.5;
	mesh.rotation.y = 1.5;
	mesh.position.set( -10, ht + 20, -10);
	mesh.zeeBarHeight = 20;
	scene.add( mesh );
	zeeBar[id].children.push(mesh);	
}

callback(screens.indexOf('dooblaand') + 1);