
	function slide3(id, ht) {
		var txt = 'Go to <a href="JavaScript:loadScript(\'slide3/slide3World.js\')" >Slide 3 World</a>';
		var link = 'slide3/slide3World.js';
		buildCube(30, 1, 30, 0, 0 , 0, colors[id],'', ht, id, '.js', link, txt);
		buildCube(8, 8, 8, 0, 4, 0, 0xffffff, 'textures/' + textureImages[id], ht, id, '.js', link, txt);
	}	

	callback(3);		