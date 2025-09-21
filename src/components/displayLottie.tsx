"use client";
import React from "react";

interface DisplayLottieProps {
  animationData?: any;
  height?: number;
  width?: number;
}

export default function DisplayLottie({animationData, height, width}: DisplayLottieProps) {
  // Since lottie-react might not be available, we'll return a placeholder
  // In a real implementation, you would use lottie-react or similar
  return (
    <div
      style={{
        height: height || 400,
        width: width || 400,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f0f0f0',
        borderRadius: '8px'
      }}
    >
      <p>Animation would display here</p>
    </div>
  );
}