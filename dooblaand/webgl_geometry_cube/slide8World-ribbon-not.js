
	function slide8World(id, ht) {
		var txt = 'webgl_geometry_colorsWorld ' + id;
		var link = '';
		buildCube(30, 1, 30, 0, 0, 0, 0x33000,'', ht, id, '.js', link, txt);

/*		
		geometry = new THREE.CubeGeometry( 5, 5, 5 );
		texture = THREE.ImageUtils.loadTexture( 'textures/' + textureImages[id]);
		material = new THREE.MeshLambertMaterial( { color: 0xffffff, ambient: 0xffffff, map: texture });
		
		for (var i = 0; i < 20; i++) {
			mesh = new THREE.Mesh( geometry, material );
			mesh.rotation.set( Math.random() * 1.5708, Math.random() * 1.5708, Math.random() * 1.5708 )
			mesh.position.set( Math.random() * 50 - 25, ht + 5, Math.random() * 50 - 25);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			mesh.headsup = 'slide ' + id + ' - cube ' + i;
			mesh.zeeBarID = id;
			mesh.zeeBarHeight = 5;
			mesh.zeeBarType = '';
			zeeBar[id].children.push(mesh);
			scene.add( mesh );
		}
*/		
				geometry = new THREE.Geometry();
				var geometry2 = new THREE.Geometry();

				n = 1000;
				n2 = 2 * n;
var x, y, z;
				for ( i = -n; i < n; i++ ) {

					i2 = i + n;

					x = i * 1.175;
					y = ( i2 % 2 ) * 1;

					if ( i2 % 2 )  {

						z = 1 * Math.sin( i2 * 0.3 ) * Math.cos( i2 * 0.1 );

					}

					geometry.vertices.push( new THREE.Vector3( x, y, z ) );
					geometry2.vertices.push( new THREE.Vector3( x, y, z ) );

					h = i2 % 2 ? 1 : 0.15;
					if( i2 % 4 <= 2 ) h -= 0.15;

					color = new THREE.Color( 0xffffff );
					color.setHSV( 0.1 , 0, h );
					geometry.colors.push( color );
					geometry2.colors.push( color );

				}

				var tmpRot = new THREE.Matrix4();
				tmpRot.makeRotationAxis( new THREE.Vector3( 1, 0, 0 ), Math.PI/2 );

				xgrid = 34;
				ygrid = 15;
				// nribbons = xgrid * ygrid;

				var c = 0;
				 var materials = [], ribbons = [];
				for ( var i = 0; i < xgrid; i ++ )
				for ( var j = 0; j < ygrid; j ++ ) {

					materials[ c ] = new THREE.MeshBasicMaterial( { color: 0xffffff, vertexColors: true, side: THREE.DoubleSide } );

					mesh = new THREE.Ribbon( i % 2 ? geometry : geometry2, materials[ c ] );
					mesh.rotation.x = 0;
					mesh.rotation.y = Math.PI / 2;
					mesh.rotation.z = Math.PI;

					x = 1 * ( i - xgrid/2 );
					y = 1 * ( j - ygrid/2 );
					z = 40;
					mesh.position.set( x, ht + y, z );
					mesh.scale.set(0.5, 0.5, 0.3)

					materials[c].color.setHSV( i / xgrid, 0.3 +  0.7 * j / ygrid, 1 );

					mesh.matrixAutoUpdate = false;

					// manually create local matrix

					mesh.matrix.setPosition( mesh.position );
					mesh.matrixRotationWorld.setRotationFromEuler( mesh.rotation );

					mesh.matrix.elements[ 0 ] = mesh.matrixRotationWorld.elements[ 0 ];
					mesh.matrix.elements[ 4 ] = mesh.matrixRotationWorld.elements[ 4 ];
					mesh.matrix.elements[ 8 ] = mesh.matrixRotationWorld.elements[ 8 ];

					mesh.matrix.elements[ 1 ] = mesh.matrixRotationWorld.elements[ 1 ];
					mesh.matrix.elements[ 5 ] = mesh.matrixRotationWorld.elements[ 5 ];
					mesh.matrix.elements[ 9 ] = mesh.matrixRotationWorld.elements[ 9 ];

					mesh.matrix.elements[ 2 ] = mesh.matrixRotationWorld.elements[ 2 ];
					mesh.matrix.elements[ 6 ] = mesh.matrixRotationWorld.elements[ 6 ];
					mesh.matrix.elements[ 10 ] = mesh.matrixRotationWorld.elements[ 10 ];

					mesh.matrix.multiplySelf( tmpRot );

					mesh.matrix.scale( mesh.scale );
					mesh.boundRadiusScale = Math.max( mesh.scale.x, Math.max( mesh.scale.y, mesh.scale.z ) );

					ribbons.push( mesh );
					scene.add( mesh );
					
					mesh.zeeBarID = id;
					mesh.zeeBarHeight = y;
					mesh.zeeBarType = '';
					zeeBar[id].children.push(mesh);

					c ++;

				}
		
		
		
		
		playback = true;
	} 
	
	function loop() {
		loopDefault();
	}	

callback2(screens.indexOf('slide8') + 1);