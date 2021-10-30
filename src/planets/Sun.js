import React from 'react';

const Sun = ({ scene, THREE, renderer, camera }) => {
  // SUN
  const sungeometry = new THREE.SphereBufferGeometry(5, 50, 50);
  const suntexture = new THREE.TextureLoader().load('/assets/textures/sun.png');
  const sunmaterial = new THREE.MeshStandardMaterial({
    map: suntexture,
    emissive: 'orange',
    emissiveIntensity: 2,
  });

  const sun = new THREE.Mesh(sungeometry, sunmaterial);
  sun.position.set(0, 0, 0);

  // SUN LIGHT

  const sunLight = new THREE.DirectionalLight(0xf7fdce, 1.5);
  sunLight.position.set(-300, 200, 0);
  sunLight.castShadow = true;
  sunLight.shadow.camera.near = 0.1;
  sunLight.shadow.camera.far = 800;
  sunLight.shadow.camera.left = -600;
  sunLight.shadow.camera.right = 600;
  sunLight.shadow.camera.top = 600;
  sunLight.shadow.camera.bottom = -600;
  sunLight.shadow.mapSize.width = 2048;
  sunLight.shadow.mapSize.height = 2048;
  // ROTATION
  var r = 500;

  var theta = 700;
  // speed
  var dTheta = (2 * Math.PI) / 5000;

  const sunOrbit = () => {
    theta += dTheta;
    sun.position.z = r * Math.sin(theta);
    sun.position.x = r * Math.cos(theta);
    sunLight.position.z = r * Math.sin(theta);
    sunLight.position.x = r * Math.cos(theta);
  };
  // ANIMATION
  var animate = function () {
    requestAnimationFrame(animate);
    if (sun !== undefined) {
      sunOrbit();
    }

    renderer.render(scene, camera);
  };
  animate();
  scene.add(sun, sunLight);
  return <div></div>;
};

export default Sun;
