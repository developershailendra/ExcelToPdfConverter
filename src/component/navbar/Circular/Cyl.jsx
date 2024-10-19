import React, { useRef } from "react";
// import { useTexture  } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import bgImage from "./bg.png";
import { TextureLoader } from "three";

const Cyl = () => {
  //   let tex1 = useTexture("bg.png");
  const tex = new THREE.TextureLoader().load(bgImage);
  let cyl = useRef(null);
  useFrame((state, delta) => {
    cyl.current.rotation.y += delta;
  });

  return (
      <group>
        <mesh ref={cyl} position={[0, 0, 0]} rotation={[0.2, 1, 0.2]}>
          <cylinderGeometry args={[3, 3, 3, 40, 40, true]} position={[10, 10, 10]} />
          <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
        </mesh>
      </group>
  );
};

export default Cyl;
