import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
let scene,
  camera,
  renderer,
  controls,
  moon,
  sun,
  earth,
  atmosphere,
  planetEarth;
function App() {
  const init = () => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    scene.background = new THREE.Color(0x000000);

    // LIGHT SOURCES
    const hemiLight = new THREE.HemisphereLightProbe(0xffffff);

    const sunLight = new THREE.DirectionalLight(0xf7fdce);
    sunLight.position.set(-900, 200, 0);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 512; // default
    sunLight.shadow.mapSize.height = 512; // default
    sunLight.shadow.camera.near = 0.5; // default
    sunLight.shadow.camera.far = 500; // default

    const ambientLight = new THREE.AmbientLight(0x000000);

    scene.add(sunLight);

    // HELPERS

    const gridHelper = new THREE.GridHelper(200, 50);

    // CONTROLS
    controls = new OrbitControls(camera, renderer.domElement);

    //OBJECTS

    //   MOOON

    const geometry = new THREE.SphereBufferGeometry(4, 100, 100);

    const bumpmap = new THREE.TextureLoader().load(
      '/assets/textures/moonbump.jpg'
    );
    const displacemap = new THREE.TextureLoader().load(
      '/assets/textures/moonbump.png'
    );
    const texture = new THREE.TextureLoader().load('/assets/textures/luna.jpg');
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      bumpMap: bumpmap,
      bumpScale: 0.7,
      displacementMap: displacemap,
      displacementScale: 0.1,
      roughness: 0.05,
      emissive: 0xe8dddd,
      emissiveIntensity: 0.1,
    });

    moon = new THREE.Mesh(geometry, material);
    moon.receiveShadow = true;
    moon.castShadow = true;

    // EARTH

    const earthgeometry = new THREE.SphereBufferGeometry(250, 200, 200);
    const earthtexture = new THREE.TextureLoader().load(
      '/assets/textures/worldmap.jpg'
    );
    const earthmaterial = new THREE.MeshStandardMaterial({
      map: earthtexture,
    });

    earth = new THREE.Mesh(earthgeometry, earthmaterial);
    earth.position.set(200, -200, 0);
    earth.castShadow = true;
    earth.receiveShadow = true;

    const atmosgeometry = new THREE.SphereBufferGeometry(255, 200, 200);

    const atmosmaterial = new THREE.MeshStandardMaterial({
      color: 'blue',
      opacity: 0.1,
      transparent: true,
      emissive: 0x4463dd,
      emissiveIntensity: 1,
    });

    atmosphere = new THREE.Mesh(atmosgeometry, atmosmaterial);
    atmosphere.position.set(200, -200, 0);
    // SUN
    const sungeometry = new THREE.SphereBufferGeometry(30, 200, 200);
    const sunmaterial = new THREE.MeshStandardMaterial({
      color: 'yellow',
      emissive: 'yellow',
      emissiveIntensity: 2,
    });

    sun = new THREE.Mesh(sungeometry, sunmaterial);
    sun.position.set(-900, -100, 0);

    scene.add(moon, sun, earth, atmosphere);

    // STARS

    function addStar() {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24);
      const material = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0xffffff,
        emissiveIntensity: 10,
      });
      const star = new THREE.Mesh(geometry, material);
      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(2000, 1000));

      star.position.set(x, y, z);
      scene.add(star);
    }
    Array(4000).fill().forEach(addStar);

    // CAMERA POSITION
    camera.position.z = 0;
    camera.position.y = 5;
    camera.position.x = -10;
    // TEST CAMERA POSITION
    // camera.position.z = 20;
    // camera.position.y = -30;
    // camera.position.x = -250;
  };
  var r = 350;
  var theta = 20;
  var dTheta = (2 * Math.PI) / 2500;

  const earthOrbit = () => {
    theta += dTheta;
    earth.position.y = r * Math.cos(theta);
    earth.position.z = r * Math.sin(theta);
    atmosphere.position.y = r * Math.cos(theta);
    atmosphere.position.z = r * Math.sin(theta);
  };

  var animate = function () {
    requestAnimationFrame(animate);
    moon.rotation.x -= 0.0001;
    moon.rotation.y -= 0.001;

    earth.rotation.x += 0.00005;
    earth.rotation.y -= 0.001;

    controls.update();
    earthOrbit();
    renderer.render(scene, camera);
  };

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  window.addEventListener('resize', onWindowResize, false);
  init();
  animate();
  return <div></div>;
}

export default App;
