import React from 'react';
import * as THREE from 'three';

import * as Stats from 'stats-js';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import Stars from './background/Stars';
import Earth from './planets/Earth';
import Moon from './planets/Moon';
import Sun from './planets/Sun';
import NebulaCloud from './background/NebulaCloud';
import Content from './content/Content';

let scene, camera, renderer, controls, gui, stats;

function App() {
  const init = () => {
    // Scene
    scene = new THREE.Scene();
    // Camera
    camera = new THREE.PerspectiveCamera(
      // perspective angle [set to 60]
      90,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    // Background Color
    //scene.background = new THREE.Color(0xffffff);
    scene.fog = new THREE.FogExp2(0x232323, 0.001);
    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
    renderer.setClearColor(scene.fog.color);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    // CONTROLS
    controls = new OrbitControls(camera, renderer.domElement);
    // LIGHT SOURCES
    const hemiLight = new THREE.HemisphereLightProbe(0xffffff);
    const ambientLight = new THREE.AmbientLight(0x000000);

    // HELPERS
    // const gridHelper = new THREE.GridHelper(500, 50);

    // FPS
    // stats = new Stats();
    // stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    // document.body.appendChild(stats.dom);
    // CAMERA POSITION
    camera.position.z = 10;
    camera.position.y = 40;
    camera.position.x = -10;
  };

  // ANIMATION LOOP
  var animate = function () {
    controls.update();

    requestAnimationFrame(animate);

    renderer.render(scene, camera);
  };

  // Window resize update
  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  window.addEventListener('resize', onWindowResize, false);

  // function call
  init();
  animate();
  return (
    <>
      <div>
        <Stars scene={scene} />;
        <Moon scene={scene} THREE={THREE} renderer={renderer} camera={camera} />
        <Earth
          scene={scene}
          THREE={THREE}
          renderer={renderer}
          camera={camera}
        />
        <Sun scene={scene} THREE={THREE} renderer={renderer} camera={camera} />
        {/* <NebulaCloud
        stats={stats}
        scene={scene}
        THREE={THREE}
        renderer={renderer}
        camera={camera}
      /> */}
      </div>
      <h4
        className='ml-2'
        style={{ height: '10vh', width: '100%', color: 'white' }}
      >
        "Hello, <br /> World!"
      </h4>

      <Content camera={camera} />
    </>
  );
}

export default App;
