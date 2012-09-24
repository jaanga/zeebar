	// files > change to 'screens'
	var screens = ['rootzeebar','zeebarproto','dooblaand','jaanga','singlefile','walk4tony4'];
	var colors = [0x2A4BD7,0x1D6914,0x814A19,0x8126C0,0x81C57A,0x9DAFFF,0x29D0D0,0xFF9233,0xE9DEBB,0xFFCDF3,0xFFEE33,0xA0A0A0,0x000000,0xFFFFFF,0x575757,0xAD2323,];
	var textureImages = ['im1.jpg','im2.jpg','im3.jpg','im4.jpg','im5.jpg','im6.jpg','im7.jpg','im8.jpg','im9.jpg','im10.jpg','im11.jpg','im12.jpg','im13.jpg','im14.jpg','im15.jpg','im16.jpg'];

	var zeeBar = [];
	var zeeBarCurrent = -1;
	var zeeCount = screens.length;
	var zeeTop = 40;
	var zeeBottom = (zeeCount - 1) * -zeeTop;
	
	loadScript('../zeebar/zeebarroot.js');
	
	function callbackRoot() {
		zeebarroot('', 10, 2, 30);
	}	
	
	for (var i = 0; i < zeeCount; i++) {
		loadScript( screens[i] + '/' + screens[i] + '.js');
	}
	
	function callback(id) {
		var ht = (id - 1) * -zeeTop; 
		eval( screens[id - 1] + '(' + id + ',' + ht + ');' );
		
		if (id == zeeCount - 1) { 
			if (window.console) { console.log('time2: ', new Date - timeStart); }
		}	
	}	
	
	