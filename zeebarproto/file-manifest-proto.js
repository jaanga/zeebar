	var screens = ['slide1','slide2','slide3','slide4','slide5','slide6','slide7','slide8','slide9','slide10'];
	var colors = [0x575757,0xAD2323,0x2A4BD7,0x1D6914,0x814A19,0x8126C0,0x81C57A,0x9DAFFF,0x29D0D0,0xFF9233,0xE9DEBB,0xFFCDF3,0xFFEE33,0xA0A0A0,0x000000,0xFFFFFF];
	var textureImages = ['im1.jpg','im2.jpg','im3.jpg','im4.jpg','im5.jpg','im6.jpg','im7.jpg','im8.jpg','im9.jpg','im10.jpg','im11.jpg','im12.jpg','im13.jpg','im14.jpg','im15.jpg','im16.jpg'];
	
	var zeeBar = [];
	var zeeBarCurrent = -1;
	var zeeCount = screens.length;
	var zeeTop = 30;
	var zeeBottom = (zeeCount - 1) * -zeeTop;
	
	loadScript('../zeebar/zeebarroot.js');

	function callbackRoot() {
		zeebarroot('../index.html', 10, 2, 30);
	}
	
	initProto();
	
	function initProto() {
		for (var i = 0; i < zeeCount; i++) {
			loadScript( screens[i] + '/' + screens[i] + '.js');
		}

	}

	function callback(id) {
		var ht = (id - 1) * -zeeTop; 
		eval( screens[id - 1] + '(' + id + ',' + ht + ');' );
	}
	
	function callback2(id) {
		getZeeBar(zeeBarCurrent, id);
		zeeBarCurrent = id;
	}
	
	function getZeeBar(old, gnu) {
//console.log(old, gnu);	
		if (old < 0) {
			old = gnu; 
		} else {
			var ht = zeeBar[old].children[0].position.y;
			for (var i = 0, l = zeeBar[old].children.length; i < l; i++) {
				scene.remove(zeeBar[old].children[i]);
			}
			zeeBar[old].children = [];
			eval( screens[old - 1] + '(' + old + ', ' + ht + ');' );
		}
		var ht = zeeBar[gnu].children[0].position.y;
//console.log(ht);		
		for (var i = 0, l = zeeBar[gnu].children.length; i < l; i++) {
			scene.remove(zeeBar[gnu].children[i]);
		}
		zeeBar[gnu].children = [];
		eval(screens[gnu - 1] + 'World(' + gnu + ',' + ht + ')' );
	}	
	
	function loop() {
		loopDefault();
	}