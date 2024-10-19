import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import Cyl from "./Cyl";

const Circular = () => {
  return (
    <Canvas camera={{ fov: 50 }}>
      <OrbitControls enableZoom={false} />
      <ambientLight />
      <Cyl />
      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={4.0}
          luminanceThreshold={0}
          luminanceSmoothing={0}
        />
      </EffectComposer>
    </Canvas>
  );
};

export default Circular;
