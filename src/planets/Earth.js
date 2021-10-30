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
    opacity: 0.5,
    transparent: true,

    map: earthclouds,
  });

  const atmosphere = new THREE.Mesh(atmosgeometry, atmosmaterial);
  atmosphere.position.set(200, -275, 0);
  scene.add(earth, atmosphere);

  var r = 300;

  var theta = 300;
  // speed
  var dTheta = (2 * Math.PI) / 2500;

  const earthOrbit = () => {
    theta += dTheta;
    earth.position.x = r * Math.cos(theta);
    // earth.position.y = r * Math.sin(theta / 2);
    earth.position.z = r * Math.sin(theta);
    // atmosphere.position.y = r * Math.cos(theta);
    atmosphere.position.z = r * Math.sin(theta);
    atmosphere.position.x = r * Math.cos(theta);
  };
  var animate = function () {
    requestAnimationFrame(animate);
    if (earth !== undefined) {
      earth.rotation.y += 0.002;
      atmosphere.rotation.y += 0.001;
    }
    // earth.rotation.z -= 0.0001;
    // earthOrbit();

    renderer.render(scene, camera);
  };
  animate();
  return <div></div>;
};

export default Earth;
