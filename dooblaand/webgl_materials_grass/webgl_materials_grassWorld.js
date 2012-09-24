var levels = [];
function webgl_materials_grassWorld(id, ht) {
	var txt = '<h1>Any successful 3D library, catalog or warehouse or whatever,</h1><h1>must be able to display all three components';
	var link = '';
	buildCube(30, 1, 30, 0, 0 , 0, colors[id],'', ht, id, '.js', link, txt);
	
	geometry = new THREE.PlaneGeometry( 20, 20 );

	var bitmap = generateTextureBase();

	for ( var i = 0; i < 15; i ++ ) {
		mesh = levels[ i ] = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { map: new THREE.Texture( generateTextureLevel( bitmap ) ), transparent: true, depthWrite: false, depthTest: false } ) );
		mesh.material.map.needsUpdate = true;

		mesh.position.y = ht +  i * 0.5;
		mesh.rotation.x = - Math.PI / 2;

		scene.add( mesh );
		mesh.zeeBarID = id;
		mesh.zeeBarHeight = 1;
		mesh.zeeBarType = '';
		zeeBar[id].children.push(mesh);
	}	
	playback = true;
} 

function loop() {
	var time = Date.now() / 6000;
	for ( var i = 0, l = levels.length; i < l; i ++ ) {

		mesh = levels[ i ];
		mesh.position.x = Math.sin( time * 4 ) * i * i * 0.005;
		mesh.position.z = Math.cos( time * 6 ) * i * i * 0.005;

	}
}

	function generateTextureBase() {
		var canvas = document.createElement( 'canvas' );
		canvas.width = 512;
		canvas.height = 512;

		var context = canvas.getContext( '2d' );

		for ( var i = 0; i < 20000; i ++ ) {
			context.fillStyle = 'rgba(0,' + Math.floor( Math.random() * 64 + 32 ) + ',16,1)';
			context.beginPath();
			context.arc( Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 1 + 0.5, 0, Math.PI * 2, true );
			context.closePath();
			context.fill();
		}
		context.globalAlpha = 0.075;
		context.globalCompositeOperation = 'lighter';

		return canvas;
	}

	function generateTextureLevel( texture ) {
		texture.getContext( '2d' ).drawImage( texture, 0, 0 );

		var canvas = document.createElement( 'canvas' );
		canvas.width = texture.width;
		canvas.height = texture.height;

		canvas.getContext( '2d' ).drawImage( texture, 0, 0 );
		return canvas;
	}
			
callback2(screens.indexOf('webgl_materials_grass') + 1);