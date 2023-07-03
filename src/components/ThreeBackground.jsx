import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer;
    let stars = [];

    const initScene = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );

      camera.position.z = 10;

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: canvasRef.current,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor("#1a2229");

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      ambientLight.castShadow = true;
      scene.add(ambientLight);

      const spotlight = new THREE.SpotLight(0xffffff, 1);
      spotlight.castShadow = true;
      spotlight.position.set(0, 64, 32);
      scene.add(spotlight);

      const addStar = (amount) => {
        const starGeometry = new THREE.OctahedronGeometry();
        const material = new THREE.MeshStandardMaterial({ color: "#8893de" });

        Array(amount)
          .fill()
          .forEach(() => {
            const star = new THREE.Mesh(starGeometry, material);

            const [x, y, z] = Array(3)
              .fill()
              .map(() => THREE.MathUtils.randFloatSpread(50));

            star.position.set(x, y, z);
            scene.add(star);
            stars.push(star);
          });
      };

      addStar(10);
    };

    const handleResize = () => {
      const canvas = renderer.domElement;
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    const animate = () => {
      stars.forEach((star) => {
        star.rotation.x += 0.01;
        star.rotation.y += 0.01;
        star.rotation.z += 0.01;
      });

      const radius = 40; // Distance from the origin
      const angle = Date.now() * 0.0001; // Angle to rotate the camera
      const target = new THREE.Vector3(0, 0, 0); // Target point to look at

      // Calculate new camera position
      const cameraX = Math.sin(angle) * radius;
      const cameraZ = Math.cos(angle) * radius;
      camera.position.set(cameraX, 0, cameraZ);

      // Set the camera to look at the target point
      camera.lookAt(target);
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };

    initScene();
    animate();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default ThreeBackground;
