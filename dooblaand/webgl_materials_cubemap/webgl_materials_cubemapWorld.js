
function webgl_materials_cubemapWorld(id, ht) {

	var txt = '<h1>Coming up soon:</h1><h1>Drag and drop onto a stage</h1>';
	var link = '';
	buildCube(60, 1, 30, 0, 0 , 0, colors[id],'', ht, id, '.js', link, txt);
	
	geometry = new THREE.CubeGeometry( 5, 5, 5 );
	texture = THREE.ImageUtils.loadTexture( '../textures/' + textureImages[id]);
	material = new THREE.MeshLambertMaterial( { color: 0xffffff, ambient: 0xffffff, map: texture });
	
	var path = "webgl_materials_cubemap/SwedishRoyalCastle/";
	var format = '.jpg';
	var urls = [
			path + 'px' + format, path + 'nx' + format,
			path + 'py' + format, path + 'ny' + format,
			path + 'pz' + format, path + 'nz' + format
		];

	var reflectionCube = THREE.ImageUtils.loadTextureCube( urls );
	reflectionCube.format = THREE.RGBFormat;

	var refractionCube = new THREE.Texture( reflectionCube.image, new THREE.CubeRefractionMapping() );
	refractionCube.format = THREE.RGBFormat;
	
	
	//var cubeMaterial3 = new THREE.MeshPhongMaterial( { color: 0x000000, specular:0xaa0000, envMap: reflectionCube, combine: THREE.MixOperation, reflectivity: 0.25 } );
	var cubeMaterial3 = new THREE.MeshLambertMaterial( { color: 0xff6600, ambient: 0x993300, envMap: reflectionCube, combine: THREE.MixOperation, reflectivity: 0.3 } );
	var cubeMaterial2 = new THREE.MeshLambertMaterial( { color: 0xffee00, ambient: 0x996600, envMap: refractionCube, refractionRatio: 0.95 } );
	var cubeMaterial1 = new THREE.MeshLambertMaterial( { color: 0xffffff, ambient: 0xaaaaaa, envMap: reflectionCube } )


	loader = new THREE.BinaryLoader( true );
	document.body.appendChild( loader.statusDomElement );

	loader.load( "webgl_materials_cubemap/WaltHead_bin.js", function( geometry ) { createScene( id, ht, geometry, cubeMaterial1, cubeMaterial2, cubeMaterial3 ) } );

				
	playback = true;
} 
	
	function loop() {
		loopDefault();
	}	

				function createScene( id, ht, geometry, m1, m2, m3 ) {

				var s = 0.3;

				var mesh = new THREE.Mesh( geometry, m1 );
				mesh.position.y = ht + 8;
				mesh.rotation.y = 3.1415;
				mesh.scale.x = mesh.scale.y = mesh.scale.z = s;
				scene.add( mesh );
				mesh.zeeBarID = id;
				mesh.zeeBarHeight = 8;
				mesh.zeeBarType = '';
				zeeBar[id].children.push(mesh);

				var mesh = new THREE.Mesh( geometry, m2 );
				mesh.position.x = -20;
				mesh.position.y = ht + 8;
				mesh.rotation.y = 3.1415;
				mesh.scale.x = mesh.scale.y = mesh.scale.z = s;
				scene.add( mesh );
				mesh.zeeBarID = id;
				mesh.zeeBarHeight = 8;
				mesh.zeeBarType = '';
				zeeBar[id].children.push(mesh);

				var mesh = new THREE.Mesh( geometry, m3 );
				mesh.position.x = 20;
				mesh.position.y = ht + 8;
				mesh.rotation.y = 3.1415;
				mesh.scale.x = mesh.scale.y = mesh.scale.z = s;
				scene.add( mesh );
				mesh.zeeBarID = id;
				mesh.zeeBarHeight = 8;
				mesh.zeeBarType = '';
				zeeBar[id].children.push(mesh);

				loader.statusDomElement.style.display = "none";

			}
			
callback2(screens.indexOf('webgl_materials_cubemap') + 1);