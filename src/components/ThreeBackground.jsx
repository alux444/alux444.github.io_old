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
        const material = new THREE.MeshStandardMaterial({ color: "#3d4482" });

        Array(amount)
          .fill()
          .forEach(() => {
            const star = new THREE.Mesh(starGeometry, material);

            const [x, y, z] = Array(3)
              .fill()
              .map(() => THREE.MathUtils.randFloatSpread(40));

            star.position.set(x, y, z);
            scene.add(star);
            stars.push(star);
          });
      };

      addStar(11);
    };

    const handleResize = () => {
      const canvas = renderer.domElement;
      const width = window.innerWidth;
      const height = window.innerHeight;

      const originalAspectRatio = camera.aspect; // Store the original aspect ratio

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);

      // Calculate the padding based on the original aspect ratio
      let verticalPadding;
      if (camera.aspect < originalAspectRatio) {
        verticalPadding = (height - width / originalAspectRatio) / 2;
      } else {
        verticalPadding = 0;
      }

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Adjust the canvas position to center horizontally
      canvas.style.marginTop = `${verticalPadding}px`;
      canvas.style.marginBottom = `${verticalPadding}px`;
    };

    const animate = () => {
      stars.forEach((star) => {
        star.rotation.x += Math.random() * (0.015 - 0.002) + 0.002;
        star.rotation.y += Math.random() * (0.015 - 0.002) + 0.002;
        star.rotation.z += Math.random() * (0.015 - 0.002) + 0.002;
      });

      const radius = 40; // Radius of the circular path
      const speed = 0.0001; // Angular speed
      const angle = Date.now() * speed; // Calculate the angle based on time

      // Calculate the new position using trigonometry
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      camera.position.set(x, 0, z); // Set the new position of the camera
      camera.lookAt(0, 0, 0); // Make the camera look at the origin (0, 0, 0)

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
