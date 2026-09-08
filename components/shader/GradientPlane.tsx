"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { vertexShader, fragmentShader } from "@/lib/shaders/gradientFlow";

const PALETTE = {
  base: "#24273a",
  mantle: "#1e2030",
  crust: "#181926",
  blue: "#8aadf4",
  mauve: "#c6a0f6",
};

export function GradientPlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const smoothedMouse = useRef(new THREE.Vector2(0.5, 0.5));
  const targetMouse = useRef(new THREE.Vector2(0.5, 0.5));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uColorBase: { value: new THREE.Color(PALETTE.base) },
      uColorMantle: { value: new THREE.Color(PALETTE.mantle) },
      uColorCrust: { value: new THREE.Color(PALETTE.crust) },
      uColorBlue: { value: new THREE.Color(PALETTE.blue) },
      uColorMauve: { value: new THREE.Color(PALETTE.mauve) },
    }),
    [],
  );

  useFrame((state) => {
    const material = materialRef.current;
    if (!material) return;

    material.uniforms.uTime.value = state.clock.elapsedTime;

    targetMouse.current.set(state.pointer.x * 0.5 + 0.5, state.pointer.y * 0.5 + 0.5);
    smoothedMouse.current.lerp(targetMouse.current, 0.05);
    material.uniforms.uMouse.value.copy(smoothedMouse.current);

    material.uniforms.uResolution.value.set(state.size.width, state.size.height);
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}
