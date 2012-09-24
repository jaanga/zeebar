
	initFileManage();	

	function initFileManage() {
	/*
		document.body.style.font = 'bold 12pt monospace';
		document.body.style.margin = '0';
		document.body.style.overflow = 'hidden';
		//document.body.style.textAlign = 'center';
*/
		for (var i = 0; i < zeeCount; i++) {
			var js = document.createElement('script');
			js.setAttribute('type', 'text/javascript');
			js.setAttribute('src', files[i] + '.js');
			js.setAttribute('zeebar', files[i]);
			document.body.appendChild(js);			
		}
	}

	function getWorld(fname) {
		var js = document.createElement('script');
		js.setAttribute('type', 'text/javascript');
		js.setAttribute('src', fname);
		document.body.appendChild(js);
	}
