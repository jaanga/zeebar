	var timeStart = new Date();
	document.body.style.font = 'bold 12pt monospace';
	document.body.style.margin = '0';
	document.body.style.overflow = 'hidden';
	
	//document.body.style.textAlign = 'center';
	
	var zeeBar = [];
	
	
	function loadScript(fname) {
		var js = document.createElement('script');
		js.setAttribute('type', 'text/javascript');
		js.setAttribute('src', fname);
		document.body.appendChild(js);
	}

	function addGeometry(geometry, material, x, y, z, ht, id, type, headsUp) {
		if (!zeeBar[id]) { zeeBar[id] = new THREE.Object3D(); }
		// var ht = (id - 1) * -zeeTop;
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set(x, ht + y,z);
		mesh.headsup = headsUp;
		scene.add( mesh );
		mesh.zeeBarID = id;
		mesh.zeeBarHeight = y;
		mesh.zeeBarType = type;
		zeeBar[id].children.push(mesh);	
	}
	
	function buildCube(length, height, width, x, y, z, color, texture, ht, id, type, link, headsup) {
		if (!zeeBar[id]) { zeeBar[id] = new THREE.Object3D(); }
		//if (id === 0) { 
		//	var ht = 0; 
		//} 
		geometry = new THREE.CubeGeometry( length, height, width );
		if (texture) {
			texture = THREE.ImageUtils.loadTexture( texture);
			material = new THREE.MeshPhongMaterial( { color: 0xffffff, ambient: 0xffffff, map: texture });
		}else {
			material = new THREE.MeshPhongMaterial( { color: color, ambient: color });
		}
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( x, ht + y, z);
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		mesh.zeeBarID = id;
		mesh.zeeBarHeight = y;
		if (type) { mesh.zeeBarType = type; }
		if (link) { mesh.zeeBarLink = link; }
		if (headsup) { mesh.headsup = headsup; }
		scene.add( mesh );	
		zeeBar[id].children.push(mesh);
	}
	
	function buildHome(x, y, z, opacity, id, type, txt) {
		if (!zeeBar[id]) { zeeBar[0] = new THREE.Object3D(); }
		// var ht = (id - 1) * -zeeTop;
		
		var line = new THREE.Shape();
		line.moveTo(5, 0);
		line.lineTo(5, 10);
		line.lineTo(7, 10);
		line.lineTo(0, 20);
		line.lineTo(-7, 10);
		line.lineTo(-5, 10);
		line.lineTo(-5, 0);
		
		geometry = line.extrude( {	amount: 10, bevelEnabled: false,} );	
		material = new THREE.MeshPhongMaterial( { color: 0xff0000, ambient: 0xff0000, opacity: opacity});
		mesh = new THREE.Mesh( geometry, material );
		mesh.scale.set(0.25, 0.25, 0.25);
		// mesh.rotation.y = 1.5708;
		mesh.position.set( x, y, z);
		// mesh.castShadow = true;
		// mesh.receiveShadow = true;
		mesh.zeeBarID = id;
		mesh.zeeBarHeight = y;
		mesh.zeeBarType = type;
		mesh.headsup = txt;
		scene.add( mesh );	
		
		zeeBar[id].children.push(mesh);
	}
	
	function addText (text, siz, thick, ht, x, y, z, col, bevEnabled, bevThick, bevSize, txt, id, type) {	
		if (!id) {id = 0;}
		if (!type) {type = '';}
		material = new THREE.MeshPhongMaterial( { color: col, ambient: col, shading: THREE.SmoothShading } );
		geometry = new THREE.TextGeometry( text, {
			size: siz,
			height: thick,
			font: "helvetiker",
			weight: "bold",
			bevelEnabled: bevEnabled,
			bevelThickness: bevThick,
			bevelSize: bevSize
		});		
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( x, ht + y, z);
		mesh.headsup = txt;
		scene.add( mesh );
		mesh.zeeBarID = id;
		mesh.zeeBarHeight = y;
		mesh.zeeBarType = type;
		zeeBar[id].children.push(mesh);	
	}
	
	function createText(text, fontSize, width, height, color, backgroundColor, shadowColor, shadowBlur) {
		var canvas = document.createElement("canvas");
		if (width) { canvas.width = width; }
		if (height) { canvas.height = height; }
		var context = canvas.getContext("2d");
		if (backgroundColor) { context.fillStyle = backgroundColor; } else { context.fillStyle = '#ffffff'; }
		context.fillRect( 0, 0, width, height );
		//context.lineWidth = 5;
		//context.strokeRect(0, 0, width, height);	

		if (color) { context.fillStyle = color; } else { context.fillStyle = '#000000'; } 
		context.globalAlpha = 0.8;
		if (shadowColor) {context.shadowColor = shadowColor; }
		if (shadowBlur) { context.shadowBlur = shadowBlur; } else { context.shadowBlur = 10; } 
		if (fontSize) { context.font = fontSize + "pt Arial bold"; } else {context.font = "24pt Arial bold"; }
		// context.textAlign = "center";
		context.textBaseline = 'top';
		context.fillText(text, 0, 0);
		var map = new THREE.Texture( canvas );
		map.needsUpdate = true;
		return new THREE.MeshBasicMaterial( { map: map, transparent: true } );
	}	
	
	function createTextTransparent(text, width, height, points, color ) {
		var canvas = document.createElement("canvas");
		canvas.width = width;
		canvas.height = height;		
		var context = canvas.getContext("2d");
		context.fillStyle = color;
		context.globalAlpha = 0.8;
		context.textBaseline = "top";
		context.font = "132pt Arial bold";
		context.fillText(text, 0, 0);
		var map = new THREE.Texture( canvas );
		map.needsUpdate = true;
		return new THREE.MeshBasicMaterial( { map: map, transparent: true} );
	}
	
	function createTextTransparentShadow(text, color) {
		var canvas = document.createElement("canvas");
		canvas.width = 800;
		canvas.height = 200;		
		var context = canvas.getContext("2d");
		context.fillStyle = color;
		context.globalAlpha = 0.8;
		context.shadowColor = "#000000";
		context.shadowBlur = 40;
		context.font = "144pt Arial bold";
		context.fillText(text, 30, 150);
		var map = new THREE.Texture( canvas );
		map.needsUpdate = true;
		return new THREE.MeshBasicMaterial( { map: map, transparent: true} );
	}
	
	function canvasText(text, points, width, height, color, backgroundColor ) {
		var canvas = document.createElement("canvas");
		canvas.width = width;
		canvas.height = height;		
		var context = canvas.getContext("2d");
		context.fillStyle = backgroundColor;
		context.fillRect( 0, 0, width, height );
		// context.globalAlpha = 0.8;
		context.fillStyle = color;
		context.font = points + "pt Arial bold";
		context.textBaseline = "top";
		context.fillText(text, 0, 0);
		var map = new THREE.Texture( canvas );
		map.needsUpdate = true;
		return new THREE.MeshBasicMaterial( { map: map, transparent: true} );
	}