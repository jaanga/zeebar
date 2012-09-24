
// need to click on screen to get this going

	var characters;
	var nCharacters;
	var character;
	var baseCharacter

	//var cameraControls;
	var ccontrols = {
		moveForward: false,
		moveBackward: false,
		moveLeft: false,
		moveRight: false
	};

	function webgl_morphtargets_md2_controlWorld(id, ht) {
		var txt = '<h1>The Goal:</h1><h1>Your code - </h1><h1>Immersed, familiar, responsive</h1><h1>- plus viewable and sharable...</h1>';
		link = '';
		buildCube(220, 1, 30, 90, 0 , 0, colors[id],'', ht, id, '.js', link, txt);

		var configOgro = {
			baseUrl: "webgl_morphtargets_md2_control/ogro/",
			body: "ogro-light.js",
			skins: [ "grok.jpg", "ogrobase.png", "arboshak.png", "ctf_r.png", "ctf_b.png", "darkam.png", "freedom.png",
					 "gib.png", "gordogh.png", "igdosh.png", "khorne.png", "nabogro.png",
					 "sharokh.png" ],
			weapons:  [ [ "weapon-light.js", "weapon.jpg" ] ],
			animations: {
				move: "run",
				idle: "stand",
				jump: "jump",
				attack: "attack",
				crouchMove: "cwalk",
				crouchIdle: "cstand",
				crouchAttach: "crattack"
			},
			walkSpeed: 350,
			crouchSpeed: 175
		};
		var nRows = 1;
		var nSkins = configOgro.skins.length;

		nCharacters = nSkins * nRows;
		characters = [];

		for ( var i = 0; i < nCharacters; i ++ ) {
			character = new THREE.MD2CharacterComplex();
			character.scale = 0.5;
			character.controls = ccontrols;
// if (window.console) { console.log(character); }	
			characters.push( character );
		}
		
		baseCharacter = new THREE.MD2CharacterComplex();
		baseCharacter.scale = 0.5;
		
		baseCharacter.onLoadComplete = function () {
		var k = 0;
		for ( var j = 0; j < nRows; j ++ ) {
			for ( var i = 0; i < nSkins; i ++ ) {
				var cloneCharacter = characters[ k ];
				cloneCharacter.shareParts( baseCharacter );
				cloneCharacter.enableShadows( true );
				cloneCharacter.setWeapon( 0 );
				cloneCharacter.setSkin( i );
				cloneCharacter.root.position.x = ( i - nSkins/2 ) * 15 + 100;
				cloneCharacter.root.position.y = ht + 11.5;
				cloneCharacter.root.position.z = j * 250;
				cloneCharacter.meshBody.rotation.y = -4;
				
				scene.add( cloneCharacter.root );
				cloneCharacter.root.zeeBarHeight = 11;
				// cloneCharacter.root.rotation.y = 3.1415;
				zeeBar[id].children.push( cloneCharacter.root );
				k++;
			}
		}
		//var gyro = new THREE.Gyroscope();
		//gyro.add( camera );
		//characters[ Math.floor( nSkins/2 ) ].root.add( gyro );
		};
		baseCharacter.loadParts( configOgro );
		
		// camera.position.set( -50, 10, -50);
				
		playback = true;
	} 

	function loop() {
		var delta = clock.getDelta();
		for ( var i = 0; i < nCharacters; i ++ ) {
			characters[ i ].update( delta + i * 0.001);
		}
	}
	
	callback2(screens.indexOf('webgl_morphtargets_md2_control') + 1);