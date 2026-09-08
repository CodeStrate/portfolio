"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { GradientPlane } from "./GradientPlane";
import { StaticFallback } from "./StaticFallback";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

function isWebGLAvailable() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export default function ShaderBackground() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [canRenderCanvas, setCanRenderCanvas] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);

  useEffect(() => {
    setCanRenderCanvas(!prefersReducedMotion && isWebGLAvailable());
  }, [prefersReducedMotion]);

  useEffect(() => {
    const handleVisibility = () => setTabHidden(document.hidden);
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  if (!canRenderCanvas) {
    return <StaticFallback />;
  }

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        orthographic
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        frameloop={tabHidden ? "never" : "always"}
      >
        <Suspense fallback={null}>
          <GradientPlane />
        </Suspense>
      </Canvas>
    </div>
  );
}
