import React from 'react';

const NebulaCloud = ({ scene, THREE, renderer, camera, stats }) => {
  let cloud,
    cloudParticle = [],
    cloud2,
    cloudParticle2 = [],
    bolt,
    bolt2,
    bolts = [];

  let loader = new THREE.TextureLoader();

  const spriteMap = loader.load('/assets/textures/smoke.png');
  const spriteMat = new THREE.SpriteMaterial({
    map: spriteMap,
    color: 'red',
  });
  const spriteMat2 = new THREE.SpriteMaterial({
    map: spriteMap,
    color: 'purple',
  });

  for (let p = 0; p < 20; p++) {
    cloud = new THREE.Sprite(spriteMat);
    cloud.scale.set(150, 150, 150);
    cloud.material.opacity = 0.55;
    cloud.position.set(
      Math.random() * 100 - 250,
      Math.random() * 100 - 100,
      Math.random() * 50 - 50
    );

    cloudParticle.push(cloud);
    scene.add(cloud);
  }

  for (let p = 0; p < 20; p++) {
    cloud2 = new THREE.Sprite(spriteMat2);
    cloud2.scale.set(150, 150, 150);
    cloud2.material.opacity = 0.55;
    cloud2.position.set(
      Math.random() * 100 - 250,
      Math.random() * 100 - 100,
      Math.random() * 50 - 50
    );

    cloudParticle2.push(cloud2);
    scene.add(cloud2);
  }

  const nebulaStarGeo = new THREE.SphereBufferGeometry(5, 20, 20);
  const nebulaStarGeo2 = new THREE.SphereBufferGeometry(7, 20, 20);
  const nebulaStarMat = new THREE.MeshStandardMaterial({
    color: 'black',
    emissive: 'red',
    emissiveIntensity: 2,
  });
  const nebulaStarMat2 = new THREE.MeshStandardMaterial({
    color: 'black',
    emissive: 'purple',
    emissiveIntensity: 0.9,
    transparent: true,
    opacity: 0.55,
  });

  const nebulaStar = new THREE.Mesh(nebulaStarGeo, nebulaStarMat);
  const nebulaStar2 = new THREE.Mesh(nebulaStarGeo, nebulaStarMat);
  const nebulaStarCenter = new THREE.Mesh(nebulaStarGeo, nebulaStarMat);
  const nebulaStarCenterLayer = new THREE.Mesh(nebulaStarGeo2, nebulaStarMat2);

  nebulaStar.position.set(-10, 10, -30);
  nebulaStar2.position.set(-10, 0, 30);
  nebulaStarCenter.position.set(0, 5, 0);
  nebulaStarCenterLayer.position.set(0, 5, 0);
  nebulaStarCenter.material.emissiveIntensity = 0;
  const nebulaBackgroundLight = new THREE.PointLight(0x9932cc, 200, 100, true);
  nebulaBackgroundLight.position.set(-250, -100, -50);
  const lightHelp = new THREE.PointLightHelper(nebulaBackgroundLight, 10);
  const planetGroup = new THREE.Group();
  planetGroup.add(nebulaStar);
  planetGroup.add(nebulaStar2);
  planetGroup.add(nebulaStarCenter);
  planetGroup.add(nebulaStarCenterLayer);
  planetGroup.add(nebulaBackgroundLight);
  scene.add(nebulaBackgroundLight, planetGroup);
  planetGroup.position.set(-200, -50, -50);

  // class CustomSinCurve extends THREE.Curve {
  //   constructor(scale = 1) {
  //     super();

  //     this.scale = scale;
  //   }

  //   getPoint(t, optionalTarget = new THREE.Vector3()) {
  //     const tx = t * Math.PI * 16 + 4;
  //     const ty = Math.cos(40 * 10 * t);
  //     const tz = 10;

  //     return optionalTarget.set(tx, ty, tz).multiplyScalar(this.scale);
  //   }
  // }

  // const path = new CustomSinCurve(1);
  // const boltGeo = new THREE.TubeBufferGeometry(path, 40, 2, 20, false);
  // const boltMat = new THREE.MeshStandardMaterial({
  //   color: 0xffffff,
  //   emissive: 0xffffff,
  //   emissiveIntensity: 4,
  // });

  // bolt = new THREE.Mesh(boltGeo, boltMat);
  // bolt.rotation.z = -Math.PI / 2;
  // bolt.position.set(0, 90, 0);

  // bolt2 = new THREE.Mesh(boltGeo, boltMat);
  // bolt2.rotation.z = -Math.PI / 2;
  // bolt2.rotation.y = -Math.PI / 2;
  // bolt2.position.set(20, 90, 0);

  // scene.add(bolt2);

  // var nEnd = 0,
  //   nMax,
  //   nStep = 9; // 30 faces * 3 vertices/face
  // nMax = bolt.geometry.attributes.position.count;

  // const thunderStrike = () => {
  //   bolt.position.set(
  //     Math.random() * 6 + 200,
  //     Math.random() * 6 + 450,
  //     Math.random() * 6 + 250
  //   );
  //   bolt2.position.set(
  //     Math.random() * 6 + 0,
  //     Math.random() * 6 + 90,
  //     Math.random() * 6 + 0
  //   );
  //   nEnd = (nEnd + nStep) % nMax;

  //   bolt.geometry.setDrawRange(0, nEnd * 10);
  //   bolt2.geometry.setDrawRange(0, nEnd * 20);
  //   bolt2.matrixAutoUpdate = false;
  //   bolt2.updateMatrix();
  // };

  var animate = function () {
    stats.begin();
    cloudParticle.forEach((p) => {
      p.material.rotation += Math.random() * 0.0001;
    });
    cloudParticle2.forEach((p) => {
      p.material.rotation += Math.random() * 0.0001;
    });
    planetGroup.rotation.z += 0.01;
    planetGroup.rotation.y += 0.01;

    stats.end();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };
  animate();
  return <div></div>;
};

export default NebulaCloud;
