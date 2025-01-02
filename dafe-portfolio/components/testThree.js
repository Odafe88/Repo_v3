const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load("/assets/earthmap1k.jpg"),
    });
    const earthMesh = new THREE.Mesh(geometry, material);
    const earthGroup = new THREE.Group();
    earthGroup.add(earthMesh);
    scene.add(earthGroup);

    const cloudsMat = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load("/assets/earthcloudmap.jpg"),
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.2,
    });
    const cloudsMesh = new THREE.Mesh(geometry, cloudsMat);
    cloudsMesh.scale.setScalar(1.02);
    earthGroup.add(cloudsMesh);

    const stars = getStarfield({ numStars: 2000 });
    scene.add(stars);

    const sunlight = new THREE.DirectionalLight(0xffffff);
    sunlight.position.set(-2, 0.5, 1.5);
    scene.add(sunlight);

    const animate = () => {
      requestAnimationFrame(animate);
      earthMesh.rotation.y += 0.002;
      cloudsMesh.rotation.y += 0.002;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};