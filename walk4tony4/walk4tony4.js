
function walk4tony4(id, ht) {
	var txt = '<h1>Click anywhere here to go to:</h1><h1><a href="./walk4tony4/blend2three-walk4tony-medium.html">walk4tony4</a></h1>' +
	'<h1>For Tony\'s Book</h1>';
	var link = '';
	buildCube(30, 1, 30, 0, 0 , 0, colors[id],'', ht, id, '.js', link, txt);
	buildCube(8, 8, 8, 0, 4, 0, 0xffffff, './walk4tony4/lrg.jpg', ht, id, '.js', link, txt);
}

callback(6);