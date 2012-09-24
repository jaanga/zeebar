doIt();

function doIt() {
	var r = "textures/cube/Escher/";

	var urls = [ r + "px.jpg", r + "nx.jpg",
				 r + "py.jpg", r + "ny.jpg",
				 r + "pz.jpg", r + "nz.jpg" ];

	var textureCube = THREE.ImageUtils.loadTextureCube( urls );
	var material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: textureCube } )
	var geometry = new THREE.SphereGeometry( 100, 96, 64 );

	var mesh = new THREE.Mesh( geometry, material );
	mesh.scale.x = mesh.scale.y = mesh.scale.z = 16;
	scene.add( mesh );

	// Skybox

	var shader = THREE.ShaderUtils.lib[ "cube" ];
	shader.uniforms[ "tCube" ].value = textureCube;

	var material = new THREE.ShaderMaterial( {

		fragmentShader: shader.fragmentShader,
		vertexShader: shader.vertexShader,
		uniforms: shader.uniforms,
		side: THREE.BackSide

	} ),

	mesh = new THREE.Mesh( new THREE.CubeGeometry( 6000, 6000, 6000 ), material );
	scene.add( mesh );
}			