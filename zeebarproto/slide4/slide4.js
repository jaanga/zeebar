
	function slide4(id, ht) {
		var txt = 'Go to <a href="JavaScript:loadScript(\'slide4/slide4World.js\')" >Slide 4 World</a>';
		var link = 'slide4/slide4World.js';
		buildCube(30, 1, 30, 0, 0 , 0, colors[id],'', ht, id, '.js', link, txt);
		buildCube(8, 8, 8, 0, 4, 0, 0xffffff, 'textures/' + textureImages[id], ht, id, '.js', link, txt);
	}

	callback(4);