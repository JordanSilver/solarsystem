import React from 'react';

const Earth = ({ scene, THREE, renderer, camera }) => {
  // EARTH

  const earthgeometry = new THREE.SphereBufferGeometry(250, 50, 50);
  const earthtexture = new THREE.TextureLoader().load(
    '/assets/textures/worldmap.jpg'
  );

  const earthmaterial = new THREE.MeshStandardMaterial({
    map: earthtexture,
  });

  const earth = new THREE.Mesh(earthgeometry, earthmaterial);

  earth.position.set(200, -275, 0);
  earth.castShadow = true;
  earth.receiveShadow = true;

  const atmosgeometry = new THREE.SphereBufferGeometry(253, 50, 50);
  const earthclouds = new THREE.TextureLoader().load(
    '/assets/textures/cloudtext.jpg'
  );

  const atmosmaterial = new THREE.MeshStandardMaterial({
    opacity: 0.8,
    transparent: true,

    map: earthclouds,
  });

  const atmosphere = new THREE.Mesh(atmosgeometry, atmosmaterial);
  atmosphere.position.set(200, -275, 0);
  THREE.DefaultLoadingManager.onLoad = function () {
    scene.add(earth, atmosphere);
  };

  var animate = function () {
    requestAnimationFrame(animate);
    if (earth !== undefined) {
      earth.rotation.y += 0.002;
      atmosphere.rotation.y += 0.001;
    }

    renderer.render(scene, camera);
  };
  animate();
  return <div></div>;
};

export default Earth;
