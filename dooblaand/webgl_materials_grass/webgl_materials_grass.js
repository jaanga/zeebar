
function webgl_materials_grass(id, ht) {
	var txt = '4. Go to <a href="JavaScript:loadScript(\'webgl_materials_grass/webgl_materials_grassWorld.js\')" >webgl_materials_grass World</a>';
	var link = 'webgl_materials_grass/webgl_materials_grassWorld.js';
	buildCube(30, 1, 30, 0, 0 , 0, colors[id],'', ht, id, '.js', link, txt);
	buildCube(9, 9, 9, 0, 7, 0, 0xffffff, 'webgl_materials_grass/webgl_materials_grass.png', ht, id, '.js', link, txt);	
}

callback(screens.indexOf('webgl_materials_grass') + 1);