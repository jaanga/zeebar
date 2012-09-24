
	function slide5(id, ht) {
	// buildCube(length, height, width, x, y, z, color, texture, id, type, link, headsup)
		var txt = 'Go to <a href="JavaScript:loadScript(\'slide5/slide5World.js\')" >Slide 5 World</a>';	
		var link = 'slide5/slide5World.js';
		buildCube(30, 1, 30, 0, 0 , 0, colors[id],'', ht, id, '.js', link, txt);
		buildCube(8, 8, 8, 0, 4, 0, 0xffffff, 'textures/' + textureImages[id], ht, id, '.js', link, txt);
	}			

	callback(5);
