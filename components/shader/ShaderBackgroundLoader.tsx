"use client";

import dynamic from "next/dynamic";
import { StaticFallback } from "./StaticFallback";

const ShaderBackground = dynamic(() => import("./ShaderBackground"), {
  ssr: false,
  loading: () => <StaticFallback />,
});

export default function ShaderBackgroundLoader() {
  return <ShaderBackground />;
}
