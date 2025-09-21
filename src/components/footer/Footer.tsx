"use client";
import React from "react";
import {motion} from "framer-motion";

export default function Footer() {
  return (
    <motion.div
      initial={{opacity: 0, y: 5}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 1}}
    >
      <div className="mt-8 pb-4">
        <p className="text-center text-secondary">
          © 2024 Naga Nikhil Bijjala. All rights reserved.
        </p>
      </div>
    </motion.div>
  );
}
