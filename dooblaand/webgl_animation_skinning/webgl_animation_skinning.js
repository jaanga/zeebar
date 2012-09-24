
function webgl_animation_skinning(id, ht) {
	var txt = '5. Go to <a href="JavaScript:loadScript(\'webgl_animation_skinning/webgl_animation_skinningWorld.js\')" >webgl_animation_skinning</a>';
	var link = 'webgl_animation_skinning/webgl_animation_skinningWorld.js';
	buildCube(30, 1, 30, 0, 0, 0, 0x33000,'', ht, id, '.js', link, txt);
/*	
	mesh.material.color.setHSV( 0.1, 0.75, 1 );
	var planeTesselated = new THREE.PlaneGeometry( 30, 30, 10, 10 );
	var matWire = new THREE.MeshBasicMaterial( { color :0x110000, wireframe: true, wireframeLinewidth: 2 } );
	mesh = new THREE.Mesh( planeTesselated, matWire );
	mesh.rotation.x = - Math.PI / 2;
	mesh.position.set( 0, ht + 0.51, 0);
	mesh.zeeBarID = id;
	mesh.zeeBarHeight = 0.51;
	mesh.zeeBarType = '.js';
	mesh.zeeBarLink = link; 
	mesh.headsup = txt;
	zeeBar[id].children.push(mesh);
	scene.add( mesh );
*/				
	var loader = new THREE.JSONLoader();
	loader.load( "webgl_animation_skinning/buffalo.js", callBackSkinning );	
}			

function callBackSkinning(geometry) {	
	var id = 1 + screens.indexOf('webgl_animation_skinning');
	var ht = zeeBar[id].children[0].position.y;	
	var link = 'webgl_animation_skinning/webgl_animation_skinningWorld.js';
	material = new THREE.MeshFaceMaterial();

	var originalMaterial = geometry.materials[ 0 ];
	originalMaterial.skinning = true;
	originalMaterial.transparent = true;
	originalMaterial.alphaTest = 0.75;

	mesh = new THREE.SkinnedMesh( geometry, material, false );
	mesh.rotation.y = 3.1415;
	mesh.scale.set( 0.08, 0.08, 0.08 );
	mesh.position.set( 0, ht + 5.5, 4);
	mesh.zeeBarID = id;
	mesh.zeeBarHeight = 5.5; // mesh.position.y;
	mesh.zeeBarType = '.js';
	mesh.zeeBarLink = link;
	mesh.headsup = 'Go to <a href="JavaScript:loadScript(\'webgl_animation_skinning/webgl_animation_skinningWorld.js\')" >webgl_animation_skinning</a>';
	zeeBar[id].children.push(mesh);
	scene.add( mesh );
}	

callback(screens.indexOf('webgl_animation_skinning') + 1);
