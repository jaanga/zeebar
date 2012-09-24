
function zeebarroot(fname, x, y, z) {
	// buildHome(x, y, z, opacity, id, type, txt)
	if (fname) { 
		var opacity = 0.3; 
		var txt = '<h1><a href="' + fname + '">Home</a></h1><h1>click on this icon to go to Home.</h1>';
	} else { 
		var opacity = 0.05;
		var txt = '<h1>This is the zeeBar home screen.</h1><h1>Click <a href="http://google.com" target="_blank">here</a> to go back out to FlatLand.</h1>';
	}
	buildHome(x, y, z - 2, opacity, 0, 'root', txt);
	// mesh.position.y = 2;
	y -= 2.5;
	
	// buildCube(length, height, width, x, y, z, color, texture, id, type, link, headsup) {
	var txt = '<h1>Go back to start position</h1>';
	var link = '';
	buildCube(3, 1, 3, x, y, z, 0x0000aa,'', 0, 0, 'goBack', link, txt);	
	mesh.material.opacity = 0.3;
	y -= 3;

	var txt = '<h1>Next screen</h1>';
	var link = '';
	buildCube(3, 1, 3, x, y, z, 0x00aa00,'', 0, 0, 'next', link, txt);	
	mesh.material.opacity = 0.3;	
	y -= 3;

	var txt = '<h1>Previous screen</h1>';
	var link = '';
	buildCube(3, 1, 3, x, y, z, 0xaa0000,'', 0, 0, 'previous', link, txt);	
	mesh.material.opacity = 0.3;	
	y -= 3;	
}

callbackRoot();