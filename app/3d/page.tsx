"use client";
import React from "react";
console.log("React version:", React.version);
import dynamic from "next/dynamic";

// Dynamically import 3d model
const ModelViewer = dynamic(() => import("../components/models/ModelViewer"), {
  ssr: false,
});

const Page3D = () => {
  return (
    <div>
      <h1>3D Model</h1>
      <ModelViewer />
    </div>
  );
};

export default Page3D;
