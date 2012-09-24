
	function slide9(id, ht) {
		var txt = 'Go to <a href="JavaScript:loadScript(\'slide9/slide9World.js\')" >Slide 9 World</a>';
		var link = 'slide9/slide9World.js';
		buildCube(30, 1, 30, 0, 0 , 0, colors[id],'', ht, id, '.js', link, txt);
		buildCube(8, 8, 8, 0, 4, 0, 0xffffff, 'textures/' + textureImages[id], ht, id, '.js', link, txt);
	}	

	callback(9);