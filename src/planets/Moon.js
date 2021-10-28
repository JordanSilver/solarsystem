import React from 'react';

const Moon = ({ scene, THREE, renderer, camera }) => {
  //   MOON

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
  });
  material.receiveShadow = true;
  texture.receiveShadow = true;

  const moon = new THREE.Mesh(geometry, material);
  moon.receiveShadow = true;
  moon.castShadow = true;
  moon.rotation.z = 0.0055;
  moon.rotation.y = -Math.PI * 2;
  moon.rotation.x = Math.PI * 2;
  moon.material.map.dispose();
  scene.add(moon);

  var animate = function () {
    requestAnimationFrame(animate);
    moon.rotation.z += 0.00001;
    moon.rotation.y -= 0.004;

    renderer.render(scene, camera);
  };
  animate();
  return <div></div>;
};

export default Moon;
