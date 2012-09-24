
	function webgl_morphtargets_md2_control(id, ht) {
		var txt = '10. Go to <a href="JavaScript:loadScript(\'webgl_morphtargets_md2_control/webgl_morphtargets_md2_controlWorld.js\')" >webgl_morphtargets_md2_control</a>';
		var link = 'webgl_morphtargets_md2_control/webgl_morphtargets_md2_controlWorld.js';
		buildCube(30, 1, 30, 0, 0, 0, colors[id],'', ht, id, '.js', link, txt);

		var config = {
			baseUrl: "webgl_morphtargets_md2_control/ogro/",
			body: "ogro-light.js",
			skins: [ "grok.jpg" ],
			weapons:  [  [ "weapon-light.js", "weapon.jpg" ] ]
		};

		var character = new THREE.MD2CharacterComplex();
		character.scale = 0.5;
		character.loadParts( config );
	
		character.onLoadComplete = function() {
			character.root.position.y = ht + 11;
			character.root.rotation.y = 3.1415;
		}
		character.root.zeeBarID = id;
		character.root.zeeBarType = '.js';
		character.root.headsup = txt;
		
		character.root.zeeBarHeight = 11;
		zeeBar[id].children.push(character.root);
		scene.add( character.root );	
	}
	
	callback(screens.indexOf('webgl_morphtargets_md2_control') + 1);
