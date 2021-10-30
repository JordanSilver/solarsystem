import React, { useState } from 'react';
import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import Earth from './planets/Earth';
import Moon from './planets/Moon';
import Sun from './planets/Sun';

import Content from './content/Content';
import { Container, Row, Spinner } from 'react-bootstrap';

let scene, camera, renderer, controls, skyBox, loadingScreen;

function App() {
  const [showContent, setShowContent] = useState(true);
  const [loadingState, setLoadingState] = useState(false);
  const init = () => {
    // Scene
    scene = new THREE.Scene();
    // Camera
    camera = new THREE.PerspectiveCamera(
      // perspective angle [set to 60]
      100,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    // Background Color
    //scene.background = new THREE.Color(0xffffff);
    scene.fog = new THREE.FogExp2(0x000000, 0.001);
    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
    renderer.setClearColor(scene.fog.color);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);
    // CONTROLS
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // HELPERS
    // const gridHelper = new THREE.GridHelper(500, 50);

    // CAMERA POSITION
    camera.position.z = 50;
    camera.position.y = 20;
    camera.position.x = -10;
    let skyBoxArray = [];
    let text_ft = new THREE.TextureLoader().load('/assets/skybox/3.jpg');
    let text_bk = new THREE.TextureLoader().load('/assets/skybox/6.jpg');
    let text_up = new THREE.TextureLoader().load('/assets/skybox/5.jpg');
    let text_dn = new THREE.TextureLoader().load('/assets/skybox/2.jpg');
    let text_rt = new THREE.TextureLoader().load('/assets/skybox/4.jpg');
    let text_lt = new THREE.TextureLoader().load('/assets/skybox/1.jpg');

    skyBoxArray.push(new THREE.MeshBasicMaterial({ map: text_ft }));
    skyBoxArray.push(new THREE.MeshBasicMaterial({ map: text_bk }));
    skyBoxArray.push(new THREE.MeshBasicMaterial({ map: text_up }));
    skyBoxArray.push(new THREE.MeshBasicMaterial({ map: text_dn }));
    skyBoxArray.push(new THREE.MeshBasicMaterial({ map: text_rt }));
    skyBoxArray.push(new THREE.MeshBasicMaterial({ map: text_lt }));

    for (let i = 0; i < 6; i++) {
      skyBoxArray[i].side = THREE.BackSide;
    }
    let skyBoxGeometry = new THREE.BoxGeometry(1500, 1500, 1500);
    skyBox = new THREE.Mesh(skyBoxGeometry, skyBoxArray);

    scene.add(skyBox);
  };

  // ANIMATION LOOP
  var animate = function () {
    requestAnimationFrame(animate);
    controls.update();

    if (skyBox !== undefined) {
      skyBox.rotation.y += 0.0002;
    }
    renderer.render(scene, camera);
  };

  // Window resize update
  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  window.addEventListener('resize', onWindowResize, false);

  const handleExplore = (e) => {
    e.preventDefault();
    if (!showContent) {
      setShowContent(true);
    } else {
      setShowContent(false);
    }
  };
  function onTransitionEnd(event) {
    const element = event.target;
    element.remove();
  }
  const loadingManager = new THREE.LoadingManager(() => {
    loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('fade-out');

    // optional: remove loader from DOM via event listener
    loadingScreen.addEventListener('transitionend', onTransitionEnd);
  });

  // function call
  init();
  animate();

  return (
    <>
      <div>
        <>
          {!loadingScreen && (
            <i id='scroll' className='text-center'>
              <p>
                - <small> scroll down </small>-
              </p>
            </i>
          )}
          <Moon
            scene={scene}
            THREE={THREE}
            renderer={renderer}
            camera={camera}
            loadingManager={loadingManager}
          />
          <Earth
            scene={scene}
            THREE={THREE}
            renderer={renderer}
            camera={camera}
            loadingManager={loadingManager}
          />
          <Sun
            scene={scene}
            THREE={THREE}
            renderer={renderer}
            camera={camera}
          />
        </>

        <Container>
          <Row>
            {window.innerWidth > 768 && (
              <div
                style={{ zIndex: '999', position: 'fixed', right: '0' }}
                className='btn btn-secondary btn-sm m-2'
                onClick={handleExplore}
              >
                {' '}
                <span role='img'> {showContent ? '🔭' : '🌕'}</span>{' '}
              </div>
            )}
          </Row>
        </Container>

        <Content camera={camera} showContent={showContent} />
      </div>
    </>
  );
}

export default App;
