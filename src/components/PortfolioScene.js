import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function Sculpture() {
  const sculpture = useRef();
  const outer = useRef();
  const inner = useRef();
  const scroll = useRef(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const update = () => {
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      scroll.current = distance > 0 ? window.scrollY / distance : 0;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useFrame((state, delta) => {
    if (!sculpture.current || reduceMotion) return;
    const targetX = state.pointer.y * 0.16 + scroll.current * 0.8;
    const targetY = state.pointer.x * 0.22 + scroll.current * Math.PI * 1.3;
    sculpture.current.rotation.x = THREE.MathUtils.damp(sculpture.current.rotation.x, targetX, 2, delta);
    sculpture.current.rotation.y = THREE.MathUtils.damp(sculpture.current.rotation.y, targetY, 2, delta);
    sculpture.current.position.y = Math.sin(state.clock.elapsedTime * 0.9) * 0.18;
    outer.current.rotation.z += delta * 0.32;
    inner.current.rotation.z -= delta * 0.42;
  });

  return (
    <group ref={sculpture} rotation={[0.22, -0.35, 0.15]}>
      <ambientLight intensity={2.1} />
      <directionalLight position={[4, 5, 6]} intensity={3.2} color="#ffffff" />
      <directionalLight position={[-4, -2, 3]} intensity={2.2} color="#fc8b67" />
      <mesh ref={outer} rotation={[0.6, 0.15, 0]}>
        <torusGeometry args={[1.75, 0.22, 24, 144]} />
        <meshPhysicalMaterial color="#283fe5" metalness={0.38} roughness={0.16} clearcoat={1} clearcoatRoughness={0.1} />
      </mesh>
      <mesh ref={inner} rotation={[1.15, 0.45, 0.2]}>
        <torusGeometry args={[1.17, 0.15, 24, 144]} />
        <meshPhysicalMaterial color="#ff7858" metalness={0.22} roughness={0.22} clearcoat={1} />
      </mesh>
      <mesh rotation={[0.22, 0.1, -0.28]}>
        <icosahedronGeometry args={[0.88, 3]} />
        <meshPhysicalMaterial color="#f7f3e9" metalness={0.07} roughness={0.13} clearcoat={1} flatShading />
      </mesh>
      <mesh rotation={[0.22, 0.1, -0.28]} scale={1.015}>
        <icosahedronGeometry args={[0.88, 3]} />
        <meshBasicMaterial color="#1c2c93" wireframe transparent opacity={0.18} />
      </mesh>
      <mesh position={[2.12, 0.13, 0.4]}>
        <sphereGeometry args={[0.13, 20, 20]} />
        <meshStandardMaterial color="#ff7858" metalness={0.25} roughness={0.2} />
      </mesh>
      <mesh position={[-1.33, -1.44, 0.3]}>
        <sphereGeometry args={[0.085, 20, 20]} />
        <meshStandardMaterial color="#283fe5" metalness={0.25} roughness={0.2} />
      </mesh>
    </group>
  );
}

export default function PortfolioScene() {
  return (
    <div className="portfolio-scene" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 6.5], fov: 46 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <Sculpture />
      </Canvas>
    </div>
  );
}
