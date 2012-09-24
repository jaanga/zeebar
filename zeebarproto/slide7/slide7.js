
	function slide7(id, ht) {
		var txt = 'Go to <a href="JavaScript:loadScript(\'slide7/slide7World.js\')" >Slide 7 World</a>';
		var link = 'slide7/slide7World.js';
		buildCube(30, 1, 30, 0, 0 , 0, colors[id],'', ht, id, '.js', link, txt);
		buildCube(8, 8, 8, 0, 4, 0, 0xffffff, 'textures/' + textureImages[id], ht, id, '.js', link, txt);
	}				

	callback(7);