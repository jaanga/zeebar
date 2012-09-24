
function webgl_particles_random(id, ht) {
	var txt = '1. Go to <a href="JavaScript:loadScript(\'webgl_particles_random/webgl_particles_randomWorld.js\')" >webgl_particles_random</a>';
	var link = 'webgl_particles_random/webgl_particles_randomWorld.js';
	buildCube(30, 1, 30, 0, 0 , 0, colors[id],'', ht, id, '.js', link, txt);
	// buildCube(10, 10, 10, 0, 6, 0, colors[id],'', ht, id, '.js', link, txt);

	geometry = new THREE.Geometry();

	for ( i = 0; i < 100; i ++ ) {
		var vertex = new THREE.Vector3();
		vertex.x = Math.random() * 20 - 10;
		vertex.y = ht + Math.random() * 20;
		vertex.z = Math.random() * 20 - 10;
		geometry.vertices.push( vertex );
	}

	material = new THREE.ParticleBasicMaterial( { size: 2 } );
	material.color.setHSV( 0.85, 1, 1 );
	particles = new THREE.ParticleSystem( geometry, material );
	
	scene.add( particles );
	particles.zeeBarID = id;
	particles.zeeBarHeight = 10;
	particles.zeeBarType = '';
	zeeBar[id].children.push(particles);
	
}	

callback(screens.indexOf('webgl_particles_random') + 1);