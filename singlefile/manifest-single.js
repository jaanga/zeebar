	var screens = ['threesentation','demo','keypoints','immersive','familiarux','responsive','summary','conclusion'];   // ,'slide4','slide5','slide6','slide7','slide8','slide9'];
	var colors = [0x575757,0xAD2323,0x2A4BD7,0x1D6914,0x814A19,0x8126C0,0x81C57A,0x9DAFFF,0x29D0D0,0xFF9233,0xE9DEBB,0xFFCDF3,0xFFEE33,0xA0A0A0,0x000000,0xFFFFFF];
	var textureImages = ['im1.jpg','im2.jpg','im3.jpg','im4.jpg','im5.jpg','im6.jpg','im7.jpg','im8.jpg','im9.jpg','im10.jpg','im11.jpg','im12.jpg','im13.jpg','im14.jpg','im15.jpg','im16.jpg'];
	
	var zeeBarCurrent = -1;
	var zeeCount = screens.length;
	var zeeTop = 30;
	var zeeBottom = (zeeCount - 1) * -zeeTop;
	var zeeZero = 1;
	
	loadScript('../zeebar/zeebarroot.js');

	function callbackRoot() {
		zeebarroot('../index.html', 10, 2, 30);
	}
	
	function loadUp() {	
		for (var i = 1; i <= zeeCount; i++) {
			var ht = (i - 1) * -zeeTop;
			eval( screens[i - 1] + '(' + i + ',' + ht + ');' );
		}
		zeeBarCurrent = 1;
		loop();
	}
	
	function getZeeBar(old, gnu) {
		if (old < 0) {
			old = gnu; 
		} else {
			var ht = zeeBar[old].children[0].position.y;
			for (var i = 0, l = zeeBar[old].children.length; i < l; i++) {
				scene.remove(zeeBar[old].children[i]);
			}
			zeeBar[old].children = [];
			eval( screens[old] + '(' + old + ', ' + ht + ');' );
		}
		var ht = zeeBar[gnu].children[0].position.y;
		for (var i = 0, l = zeeBar[gnu].children.length; i < l; i++) {
			scene.remove(zeeBar[gnu].children[i]);
		}
		zeeBar[gnu].children = [];
		eval(screens[gnu] + 'World(' + gnu + ',' + ht + ')' );
	}	
	
	function loop() {
		loopDefault();
	}
	
	function threesentation(id, ht) {
		var txt = '<h1>Threesentation</h1><h1>\'Threesentation\' =<br> 3D + Three.js + presentation</h1><h1>All data in a single JavaScript file</h1><h1>zeeBar in simplest form</h1>';
		var link = '';
		buildCube(30, 1, 30, 0, 0 , 0, colors[id],'', ht, id, 'slide', link, txt);
		// buildCube(5, 5, 5, 0, 4, 0, 0xffffff, '../textures/' + textureImages[id], ht, id, '.js', link, txt);	
		
		// createTextTransparent(text, width, height, points, color, ) 
		geometry = new THREE.PlaneGeometry( 40, 5.0 );
		material = createTextTransparent('Threesentation', 1600, 200, 30, '#000000' ); 
		//addGeometry(geometry, material, x, y, z, ht, id, type, headsUp)
		addGeometry(geometry, material, 0, 9, -3, ht, id, '', '');
		mesh.rotation.y = 1;
		
		txt = 'zeeBar';
		var materials = [];
		for (var i = 0; i < 6; i++) {
			materials.push( new THREE.MeshBasicMaterial( {color: 0x000099} ) );
		}		
		materials[0] = canvasText('zeeBar', 72, 350, 100, '#cc0000', '#ffffff' ); 
		mesh = new THREE.CubeGeometry( 2, 5, 22.5, 1, 1, 1, materials );
		addGeometry(mesh, new THREE.MeshFaceMaterial(), 0, 3, 5, ht, id, '', txt);

		txt = '<h1>It\'s all a bit of a jumble<br>- what happens when code and presentation are built at same time</h1>';
		var materials = [];
		for (var i = 0; i < 6; i++) {
			materials.push( new THREE.MeshBasicMaterial( {color: 0x000099} ) );
		}		
		materials[0] = canvasText('codeViewer', 72, 600, 100, '#cc0000', '#ffffff' ); 
		mesh = new THREE.CubeGeometry( 2, 5, 30, 1, 1, 1, materials );
		addGeometry(mesh, new THREE.MeshFaceMaterial(), 10, 3, -5, ht, id, '', txt);		

		txt = 'threeSentation';
		var materials = [];
		for (var i = 0; i < 6; i++) {
			materials.push( new THREE.MeshBasicMaterial( {color: 0x000099} ) );
		}		
		materials[0] = canvasText('threeSentation', 72, 800, 100, '#cc0000', '#ffffff' ); 
		mesh = new THREE.CubeGeometry( 2, 5, 40, 1, 1, 1, materials );
		addGeometry(mesh, new THREE.MeshFaceMaterial(), -10, 3, -5, ht, id, '', txt);		
	}
	
	function demo(id, ht) {
		var txt = '<h1>Only a Demo</h1><h1>Do as I say, not as I do &nbsp; ;-)</h1><h1>It\'s only User Experience prototyping</h1><h1>Needs more eyes, more talent, more thinking</h1>';
		var link = '';
		buildCube(30, 1, 30, 0, 0 , 0, colors[id],'', ht, id, 'slide', link, txt);
		buildCube(10, 10, 10, 0, 8, 0, 0xffffff, 'dce1968conferenceannouncement.jpg', ht, id, '.js', link, txt);	
		
		// createTextTransparent(text, width, height, points, color, ) 
		geometry = new THREE.PlaneGeometry( 40, 10 );
		material = createTextTransparent('Demo!', 800, 200, 144, '#000000' ); 
		//addGeometry(geometry, material, x, y, z, ht, id, type, headsUp)
		addGeometry(geometry, material, 0, 8, -7, ht, id, '', '');
		mesh.rotation.y = 3.1415;
		
		playback = true;
	}	
	
	
	function keypoints(id, ht) {
		var txt = '<h1>Three Key Points</h1><h1>There will be more as easy 3D gets played with more...</h1>';
		var link = '';
		buildCube(30, 1, 30, 0, 0 , 0, colors[id],'', ht, id, 'slide', link, txt);
		buildCube(5, 5, 5, 0, 4, 0, 0xffffff, '../textures/' + textureImages[id], ht, id, '.js', link, txt);	
		
		// createTextTransparent(text, width, height, points, color, ) 
		geometry = new THREE.PlaneGeometry( 40, 10 );
		material = createTextTransparent('Key Points!', 800, 200, 144, '#000000' ); 
		//addGeometry(geometry, material, x, y, z, ht, id, type, headsUp)
		addGeometry(geometry, material, 0, 8, -3, ht, id, '', '');
		mesh.rotation.y = 3.1415;
	}	
	
	function immersive(id, ht) {
		var txt = '<h1>1. Continuously Immersive</h1><h1>&bull; Always in 3D</h1><h1>&bull; No jumping between 2D & 3D</h1>' +
	'	<h1>&bull; No more \'<a href="http://en.wikipedia.org/wiki/Flatland" target="_blank">Flatland</a>\' please...</h1>';
		var link = '';
		buildCube(30, 1, 30, 0, 0 , 0, colors[id],'', ht, id, 'slide', link, txt);
		// buildCube(5, 5, 5, 0, 4, 0, 0xffffff, '../textures/' + textureImages[id], ht, id, '.js', link, txt);	
		
		// createTextTransparent(text, width, height, points, color, ) 
		geometry = new THREE.PlaneGeometry( 40, 10 );
		material = createTextTransparent('Immersive', 800, 200, 144, '#000000' ); 
		//addGeometry(geometry, material, x, y, z, ht, id, type, headsUp)
		addGeometry(geometry, material, 0, 8, -8, ht, id, '', '');
		mesh.rotation.y = 3.1415;
		
		// addText (text, siz, ht, x, y, z, col, bevEnabled, bevThick, bevSize, txt, id, type)
		addText ('3D', 10, 5, ht, 10, 8, -8, 0x888888, false, 0, 0, 'My first use of a shader...', id, '');
		mesh.rotation.x = 1.57;
		mesh.rotation.y = 3.1415;
		
		liquid(id, ht);
	}

	function familiarux(id, ht) {
		var txt = '<h1>2. Familiar User Experience</h1><h1>&bull; Swipe / Scroll</h1><h1>&bull; Home buttons</h1><h1>&bull; Just like your phone</h1><h1>&bull; Or chopsticks and cutlery</h1>';
		var link = '';
		buildCube(30, 1, 30, 0, 0, 0, colors[id],'', ht, id, 'slide', link, txt);
		buildCube(8, 8, 8, 10, 4, 0, 0xffffff, 'cutlery-chopsticks.jpg', ht, id, '.js', link, txt);	
		buildCube(8, 8, 8, -10, 4, 0, 0xffffff, 'phone.gif', ht, id, '.js', link, txt);	
		
		geometry = new THREE.PlaneGeometry( 40, 10 );
		material = createTextTransparent('Familiar', 800, 200, 144, '#000000' ); 
		addGeometry(geometry, material, -20, 8, -5, ht, id, '', '');
		mesh.rotation.y = 1.5807;	

	}

	function responsive(id, ht) {
		var txt = '<h1>3. Responsive Environment</h1><h1>&bull; Things happen and move by themselves - all the time</h1><h1>&bull; Things respond/pop-up - always</h1>';
		var link = '';
		buildCube(30, 1, 30, 0, 0, 0, colors[id],'', ht, id, 'slide', link, txt);
		
		material = new THREE.MeshNormalMaterial();
		geometry = new THREE.SphereGeometry(2);
		txt = 'sphere ';
		for (var i = 0; i < 20; i++) {
			addGeometry(geometry, material, 20 * Math.random() - 10, 20 * Math.random() + 2, 20 * Math.random() - 10, ht, id, 'game', txt + i)
		} 
		// buildCube(8, 8, 8, 0, 4, 0, 0xffffff, '../textures/' + textureImages[id], ht, id, 'game', link, txt);	
		
		geometry = new THREE.PlaneGeometry( 40, 10 );
		material = createTextTransparentShadow('Responsive', 800, 200, 132, '#000000' ); 
		addGeometry(geometry, material, 0, 8, -5, ht, id, '', 'I hear you!');
		mesh.rotation.y = 2.2;
		
		// playback = true;
		//zeeBarCurrent = id;
		//loop();
	}	
	
	function summary(id, ht) {
		var txt = '<h1>Summary</h1><h1>1. Immersive</h1><h1>2. Familiar</h1><h1>3. Responsive</h1>';
		var link = '';
		buildCube(30, 1, 30, 0, 0, 0, 0x666666,'', ht, id, '.js', link, txt);
		// buildCube(8, 8, 8, 0, 4, 0, 0xffffff, '../textures/' + textureImages[id], ht, id, '.js', link, txt);	
		
		geometry = new THREE.PlaneGeometry( 40, 10 );
		material = createTextTransparentShadow('summary', 800, 200, 132, '#000000' ); 
		addGeometry(geometry, material, 0, 8, -5, ht, id, '', 'your take away...');
		mesh.rotation.y = 2.2;
		
		txt = 'immersive';
		var materials = [];
		for (var i = 0; i < 6; i++) {
			materials.push( new THREE.MeshBasicMaterial( {color: 0x000099} ) );
		}		
		materials[0] = canvasText('immersive', 72, 350, 100, '#cc0000', '#ffffff' ); 
		mesh = new THREE.CubeGeometry( 2, 5, 22.5, 1, 1, 1, materials );
		addGeometry(mesh, new THREE.MeshFaceMaterial(), 0, 3, 5, ht, id, '', txt);

		txt = 'familiar';
		var materials = [];
		for (var i = 0; i < 6; i++) {
			materials.push( new THREE.MeshBasicMaterial( {color: 0x000099} ) );
		}		
		materials[0] = canvasText('familiar', 72, 350, 100, '#cc0000', '#ffffff' ); 
		mesh = new THREE.CubeGeometry( 2, 5, 22.5, 1, 1, 1, materials );
		addGeometry(mesh, new THREE.MeshFaceMaterial(), 10, 3, -5, ht, id, '', 'Why? Because we may build entire new methods to acquire knowledge');		

		txt = 'responsive';
		var materials = [];
		for (var i = 0; i < 6; i++) {
			materials.push( new THREE.MeshBasicMaterial( {color: 0x000099} ) );
		}		
		materials[0] = canvasText('responsive', 72, 350, 100, '#cc0000', '#ffffff' ); 
		mesh = new THREE.CubeGeometry( 2, 5, 22.5, 1, 1, 1, materials );
		addGeometry(mesh, new THREE.MeshFaceMaterial(), -10, 3, -5, ht, id, '', txt);			
	}		
	
	
		function conclusion(id, ht) {
		var txt = '<h1>Conclusion / Part 1</h1><h1>This is just a start</h1><h1>Let\'s share our insights</h1><h1>Great venue: WebGL Meet-Ups!</h1>';
		var link = '';
		buildCube(30, 1, 30, 0, 0, 0, colors[id],'', ht, id, 'slide', link, txt);
		buildCube(8, 8, 8, 0, 4, 0, 0xffffff, 'webgl-dev.jpg', ht, id, '.js', link, txt);	
		
		geometry = new THREE.PlaneGeometry( 50, 4 );
		material = createTextTransparentShadow('conclusion', 1500, 100, 140, '#000000' ); 
		addGeometry(geometry, material, 0, 8, -5, ht, id, '', 'howdy');
		mesh.rotation.y = 2.2;
		
		//playback = true;
		//zeeBarCurrent = id;
		//loop();		
	}		
	
	
	var vertexShaderSourceString = 
	'uniform float amplitude;	\
	attribute float displacement;	\
	varying vec3 vNormal;	\
	varying vec2 vUv;	\
	void main() {	\
		vNormal = normal;	\
		vUv = ( 0.5 + amplitude ) * uv + vec2( amplitude );	\
		vec3 newPosition = position + amplitude * normal * vec3( displacement );	\
		gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );	\
	}	\
	';
	var fragmentShaderSourceString =
	'varying vec3 vNormal;	\
	varying vec2 vUv;	\
	uniform vec3 color;	\
	uniform sampler2D texture;	\
	void main() {	\
		vec3 light = vec3( 0.5, 0.2, 1.0 );	\
		light = normalize( light );	\
		float dProd = dot( vNormal, light ) * 0.5 + 0.5;	\
		vec4 tcolor = texture2D( texture, vUv );	\
		vec4 gray = vec4( vec3( tcolor.r * 0.3 + tcolor.g * 0.59 + tcolor.b * 0.11 ), 1.0 );	\
		gl_FragColor = gray * vec4( vec3( dProd ) * vec3( color ), 1.0 );	\
	}';
	
	var sphere, uniforms, attributes;
	var noise = [];
	attributes = {
		displacement: {	type: 'f', value: [] }
	};

	uniforms = {
		amplitude: { type: "f", value: 1.0 },
		color:     { type: "c", value: new THREE.Color( 0xff2200 ) },
		texture:   { type: "t", value: 0, texture: THREE.ImageUtils.loadTexture( "water.jpg" ) },
	};

	uniforms.texture.texture.wrapS = uniforms.texture.texture.wrapT = THREE.RepeatWrapping;
		
	var shaderMaterial = new THREE.ShaderMaterial( {
		uniforms: 		uniforms,
		attributes:     attributes,
		vertexShader:   vertexShaderSourceString,
		fragmentShader: fragmentShaderSourceString
	});


	function liquid(id, ht) {
		var radius = 8, segments = 60, rings = 30;
		var geometry = new THREE.SphereGeometry( radius, segments, rings );
		geometry.dynamic = true;

		sphere = new THREE.Mesh( geometry, shaderMaterial );
		sphere.position.set( 0, ht + 10, 8);

		var vertices = sphere.geometry.vertices;
		var values = attributes.displacement.value;

		for( var v = 0; v < vertices.length; v++ ) {
			values[ v ] = 0;
			noise[ v ] = Math.random() * 5;
		}

		scene.add( sphere );	
		sphere.zeeBarID = id;
		sphere.zeeBarHeight = 5;
		sphere.zeeBarType = '';
		zeeBar[id].children.push(sphere);	
	
	}
	
	function callbackImmersive() {
		var time = Date.now() * 0.01;
		sphere.rotation.y = sphere.rotation.z = 0.01 * time;
		uniforms.amplitude.value = 2.5 * Math.sin( sphere.rotation.y * 0.125 );
		THREE.ColorUtils.adjustHSV( uniforms.color.value, 0.0005, 0, 0 );
		for( var i = 0; i < attributes.displacement.value.length; i ++ ) {
			attributes.displacement.value[ i ] = Math.sin( 0.1 * i + time );
			noise[ i ] += 0.5 * ( 0.5 - Math.random() );
			noise[ i ] = THREE.Math.clamp( noise[ i ], -5, 5 );
			attributes.displacement.value[ i ] += noise[ i ];
		}
		attributes.displacement.needsUpdate = true;
			
	}