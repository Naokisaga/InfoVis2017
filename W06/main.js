function main(){

	// Sceneを用意
    scene = new THREE.Scene();

    var width = 500;
    var height = 500;

    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;

    // Cameraを用意
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( -3, 3, 8 );
    camera.lookAt({x:0, y:0, z:-1 }); 
    scene.add( camera );


    // Rendererを用意
    canvas = document.getElementById('canvas');
    var renderer = new THREE.WebGLRenderer({antialias: true,depth: true});
    renderer.setSize( width,height );
    renderer.setClearColor(0xf5f5f5, 1.0);
    canvas.appendChild( renderer.domElement );




	var vertices = [ 
	[-1, 1, 0], // v0 
	[-1,-1, 0], // v1
	[1,-1, 0], //v2
	[1,1, 0], //v3
	[1,-1,-2], //v4
	[1,1,-2], //v5
	[-1,1,-2], //v6
	[-1,-1,-2] //v7
	];

	var faces = [
    [0,1,2], // f0: v0-v1-v2
    [3,0,2], // f1: v3-v0-v2
    [0,7,1], // f2: v0-v7-v1
    [6,7,0], // f3: v6-v7-v0
    [5,0,3], // f4: v5-v0-v3
    [6,0,5], // f5: v6-v0-v5
    [3,2,4], // f6: v3-v2-v4
    [5,3,4], // f7: v5-v3-v4
    [5,4,7], // f8: v5-v7-v4
    [6,5,7], // f9: v6-v5-v7
    [1,4,2], // f10: v1-v2-v4
    [1,7,4] // f11: v1-v4-v7
	];


	var v0 = new THREE.Vector3().fromArray( vertices[0] ); 
	var v1 = new THREE.Vector3().fromArray( vertices[1] ); 
	var v2 = new THREE.Vector3().fromArray( vertices[2] );
	var v3 = new THREE.Vector3().fromArray( vertices[3] );
	var v4 = new THREE.Vector3().fromArray( vertices[4] );
	var v5 = new THREE.Vector3().fromArray( vertices[5] );
	var v6 = new THREE.Vector3().fromArray( vertices[6] );
	var v7 = new THREE.Vector3().fromArray( vertices[7] );


	var id = faces[0];
	var f0 = new THREE.Face3( id[0], id[1], id[2] );
	id = faces[1];
	var f1 = new THREE.Face3( id[0], id[1], id[2] );
	id = faces[2];
	var f2 = new THREE.Face3( id[0], id[1], id[2] );
	id = faces[3];
	var f3 = new THREE.Face3( id[0], id[1], id[2] );
	id = faces[4];
	var f4 = new THREE.Face3( id[0], id[1], id[2] );
	id = faces[5];
	var f5 = new THREE.Face3( id[0], id[1], id[2] );
	id = faces[6];
	var f6 = new THREE.Face3( id[0], id[1], id[2] );
	id = faces[7];
	var f7 = new THREE.Face3( id[0], id[1], id[2] );
	id = faces[8];
	var f8 = new THREE.Face3( id[0], id[1], id[2] );
	id = faces[9];
	var f9 = new THREE.Face3( id[0], id[1], id[2] );
	id = faces[10];
	var f10 = new THREE.Face3( id[0], id[1], id[2] );
	id = faces[11];
	var f11 = new THREE.Face3( id[0], id[1], id[2] );



	// define geometry
	var geometry = new THREE.Geometry();
	geometry.vertices.push( v0 ); 
	geometry.vertices.push( v1 ); 
	geometry.vertices.push( v2 );
	geometry.vertices.push( v3 );
	geometry.vertices.push( v4 );
	geometry.vertices.push( v5 );
	geometry.vertices.push( v6 );
	geometry.vertices.push( v7 );

	geometry.faces.push( f0 );
	geometry.faces.push( f1 );
	geometry.faces.push( f2 );
	geometry.faces.push( f3 );
	geometry.faces.push( f4 );
	geometry.faces.push( f5 );
	geometry.faces.push( f6 );
	geometry.faces.push( f7 );
	geometry.faces.push( f8 );
	geometry.faces.push( f9 );
	geometry.faces.push( f10 );
	geometry.faces.push( f11 );


	// define material
	var material = new THREE.MeshBasicMaterial( { color: 0xe3e3e3	 } ); 
	material.vertexColors = THREE.FaceColors; 
	geometry.faces[0].color = new THREE.Color( "rgb(184,240,145)" );
	geometry.faces[1].color = new THREE.Color( "rgb(184,240,145)" );
	geometry.faces[2].color = new THREE.Color( "rgb(255,215,0)" );
	geometry.faces[3].color = new THREE.Color( "rgb(255,215,0)"  );
	geometry.faces[4].color = new THREE.Color( "rgb(40,120,225)" );
	geometry.faces[5].color = new THREE.Color( "rgb(40,120,225)" );
	geometry.faces[6].color = new THREE.Color( "rgb(124,220,195)" );
	geometry.faces[7].color = new THREE.Color( "rgb(124,220,195)" );
	geometry.faces[8].color = new THREE.Color( "rgb(255,127,80)" );
	geometry.faces[9].color = new THREE.Color( "rgb(255,127,80)"  );
	geometry.faces[10].color = new THREE.Color( "rgb(200,162,200)" );
	geometry.faces[11].color = new THREE.Color( "rgb(200,162,200)" );

	/*
	var material = new THREE.MeshBasicMaterial(); 
	material.vertexColors = THREE.VertexColors;
	geometry.faces[0].vertexColors.push(new THREE.Color(1,0,0));
	geometry.faces[0].vertexColors.push(new THREE.Color(0,1,0)); 
	geometry.faces[0].vertexColors.push(new THREE.Color(0,0,1));
	*/

	var mesh = new THREE.Mesh( geometry, material );
    scene.add(mesh);

        renderer.render( scene, camera );
    


}