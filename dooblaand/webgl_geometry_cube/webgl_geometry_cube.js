
	function webgl_geometry_cube(id, ht) {
		var txt = 'Go to <a href="JavaScript:loadScript(\'webgl_geometry_cube/webgl_geometry_cubeWorld.js\')" >webgl_geometry_cube World</a>';
		var link = 'webgl_geometry_cube/webgl_geometry_cubeWorld.js';
		buildCube(30, 1, 30, 0, 0, 0, colors[id],'', ht, id, '.js', link, txt);
		buildCube(8, 8, 8, 0, 4, 0, 0xffffff, 'webgl_geometry_cube/crate.gif', ht, id, '.js', link, txt);
	}	
	
	callback(screens.indexOf('webgl_geometry_cube') + 1);
