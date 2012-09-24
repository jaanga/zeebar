
	function webgl_particles_randomWorld(id, ht) {
		var txt = '<h1>This app is called \'codeViewer\'</h1><h1>Because it enables you to view things like:</h1><h1> particles, shaders and animations</h1>';
		var link = '';
		buildCube(30, 1, 30, 0, ht , 0, colors[id],'', ht, id, '.js', link, txt);
	
		geometry = new THREE.Geometry();

		for ( i = 0; i < 20000; i ++ ) {
			var vertex = new THREE.Vector3();
			vertex.x = Math.random() * 20 - 10;
			vertex.y = ht + Math.random() * 20;
			vertex.z = Math.random() * 20 - 10;
			geometry.vertices.push( vertex );
		}

		parameters = [ [ [1.0, 1.0, 1.0], 0.5 ], [ [0.95, 1, 1], 0.4 ], [ [0.90, 1, 1], 0.3 ], [ [0.85, 1, 1], 0.2 ], [ [0.80, 1, 1], 0.1 ] ];
		//parameters = [ [ 0xff0000, 5 ], [ 0xff3300, 4 ], [ 0xff6600, 3 ], [ 0xff9900, 2 ], [ 0xffaa00, 1 ] ];
		//parameters = [ [ 0xffffff, 5 ], [ 0xdddddd, 4 ], [ 0xaaaaaa, 3 ], [ 0x999999, 2 ], [ 0x777777, 1 ] ];

		for ( i = 0; i < parameters.length; i ++ ) {

			size  = parameters[i][1];
			color = parameters[i][0];

			//materials[i] = new THREE.ParticleBasicMaterial( { color: color, size: size } );

			materials[i] = new THREE.ParticleBasicMaterial( { size: size } );
			materials[i].color.setHSV( color[0], color[1], color[2] );

			particles = new THREE.ParticleSystem( geometry, materials[i] );

			particles.rotation.x = Math.random() * 6;
			particles.rotation.y = Math.random() * 6;
			particles.rotation.z = Math.random() * 6;
		
			particles.zeeBarID = id;
			particles.zeeBarHeight = 10;
			particles.zeeBarType = '';
			zeeBar[id].children.push(particles);
			scene.add( particles );

		}
		playback = true;
	}

	function loop() {
		var object = zeeBar[zeeBarCurrent].children, timer = clock.getDelta();
		for ( var i = 1, l = object.length; i < l; i++ ) {
			object[i].rotation.x += timer * -0.1;
			object[i].rotation.y += timer * -0.1;
		}
	}
	
	callback2(screens.indexOf('webgl_particles_random') + 1);