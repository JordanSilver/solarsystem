import React from 'react';

const Moon = ({ scene, THREE, renderer, camera, loadingManager }) => {
  //   MOON

  const geometry = new THREE.SphereBufferGeometry(4, 100, 100);

  const bumpmap = new THREE.TextureLoader(loadingManager).load(
    '/assets/textures/moonbump.jpg'
  );

  const texture = new THREE.TextureLoader(loadingManager).load(
    '/assets/textures/luna.jpg'
  );

  const material = new THREE.MeshStandardMaterial({
    map: texture,

    bumpMap: bumpmap,
    displacementScale: 0.3,
    roughness: 0.05,
  });
  material.receiveShadow = true;
  texture.receiveShadow = true;

  const moon = new THREE.Mesh(geometry, material);
  moon.receiveShadow = true;
  moon.castShadow = true;
  moon.rotation.z = 0.0055;
  moon.rotation.y = -Math.PI * 2;
  moon.rotation.x = Math.PI * 2;

  scene.add(moon);
  var animate = function () {
    requestAnimationFrame(animate);
    if (moon !== undefined) {
      moon.rotation.z += 0.00001;
      moon.rotation.y -= 0.004;
    }

    renderer.render(scene, camera);
  };
  animate();
  return <div></div>;
};

export default Moon;
