
	function slide2(id, ht) {
		var txt = 'Go to <a href="JavaScript:loadScript(\'slide2/slide2World.js\')" >Slide 2 World</a>';
		var link = 'slide2/slide2World.js';
		buildCube(30, 1, 30, 0, 0, 0, colors[id],'', ht, id, '.js', link, txt);
		buildCube(8, 8, 8, 0, 4, 0, 0xffffff, 'textures/' + textureImages[id], ht, id, '.js', link, txt);
	}	

	callback(2);