"use client";
import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border-t bg-background"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-center text-sm text-muted-foreground flex items-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> by Naga Nikhil Bijjala
          </p>
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}