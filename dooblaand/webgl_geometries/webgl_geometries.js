
function webgl_geometries(id, ht) {
	var txt = '3. Go to <a href="JavaScript:getWorld(\'webgl_geometries/webgl_geometriesWorld.js\')" >webgl_geometries</a>';
	var link = 'webgl_geometries/webgl_geometriesWorld.js';
	buildCube(30, 1, 30, 0, 0, 0, 0x33000,'', ht, id, '.js', link, txt);
	
	var map = THREE.ImageUtils.loadTexture( 'textures/ash_uvgrid01.jpg' );
	map.wrapS = map.wrapT = THREE.RepeatWrapping;
	map.anisotropy = 16;

	materials = [
		new THREE.MeshLambertMaterial( { ambient: 0xbbbbbb, map: map, side: THREE.DoubleSide } ),
		new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true, transparent: true, opacity: 0.1, side: THREE.DoubleSide } )
	];
	
	mesh = THREE.SceneUtils.createMultiMaterialObject( new THREE.TorusKnotGeometry( 6, 2, 80, 20 ), materials );
	mesh.position.set( 0, ht + 10, 0);
	mesh.castShadow = true;
	mesh.receiveShadow = true;
	mesh.zeeBarID = id;
	mesh.zeeBarHeight = 10;
	mesh.zeeBarType = '.js';
	mesh.headsup = txt;
	zeeBar[id].children.push(mesh);
	scene.add( mesh );
}	

callback(screens.indexOf('webgl_geometries') + 1);		