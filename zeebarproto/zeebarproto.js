
function zeebarproto(id, ht) {
	var txt = '<h1>Click on any object here to go to:</h1><h1><a href="zeebarproto/zeebarproto.html" >zeeBar Prototype</a></h1><h1>The first working zeeBar</h1>';
	var link = '';
	buildCube(30, 1, 30, 0, 0 , 0, colors[id],'', ht, id, '.html', link, txt);
	
	var twoPiFifth = Math.PI * 2 / 5, x, y;
	
	for (var i = 0; i < 5; i++) {
		x = 10 * Math.sin(i * twoPiFifth);
		y = 7 * Math.cos(i * twoPiFifth);
		buildCube(5, 5, 5, x , (11 + y), 0, 0xffffff, 'textures/' + textureImages[i + 10] , ht, id, '.html', link, txt);
	}
	 
	geometry = new THREE.PlaneGeometry( 33, 5 );
	material = createText('zeeBar Prototype', 30, 330, 50 ); 
	mesh = new THREE.Mesh( geometry, material);
	mesh.rotation.y = 1.5;
	mesh.position.set( -20, ht + 15, 7);
	mesh.zeeBarHeight = 15;
	scene.add( mesh );
	zeeBar[id].children.push(mesh);	
}

callback(2);