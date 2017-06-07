function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();

    screen.init( volume, {
        width: window.innerWidth*0.8,
        height: window.innerHeight,
        targetDom: document.getElementById('display'),
        enableAutoResize: false
    });

    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    var isovalue = 128;
    var surfaces = Isosurfaces( volume, isovalue);
    screen.scene.add( surfaces );

   var cmap = getColorMap();

    document.getElementById('cmap')
            .addEventListener('click', function(e) {
            
            // マウス位置を取得する
            var mouseX = e.pageX ;  // X座標

            // 要素の位置を取得
            var element = document.getElementById( "cmap" ) ;
            var rect = element.getBoundingClientRect() ;

            // 要素の位置座標を計算
            var positionX = rect.left + window.pageXOffset ;    // 要素のX座標

            // 要素の左上からの距離を計算
            var offsetX = mouseX - positionX ;
           
            screen.scene.children[3].geometry = changeIsosurfaces( volume, 230, surfaces.geometry);
            
            surfaces.material.color = new THREE.Color().setHex( cmap[offsetX][1] );

    });

    document.getElementById('isov')
        .addEventListener('change', function (){
            screen.scene.remove( surfaces );
            volume = new KVS.LobsterData();
            isovalue = this.value;
            surfaces = Isosurfaces( volume, isovalue );
            screen.scene.add( surfaces );
    })

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth*0.8, window.innerHeight ] );
    });

    screen.loop();
}
