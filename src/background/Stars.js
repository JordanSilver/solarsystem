import React from 'react';
import * as THREE from 'three';
const Stars = ({ scene }) => {
  // STARS

  function addStar() {
    const geometry = new THREE.SphereBufferGeometry(0.25, 24, 24);
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
  return <div></div>;
};

export default Stars;
