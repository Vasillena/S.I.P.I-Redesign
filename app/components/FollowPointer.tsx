"use client";

import { motion } from "framer-motion";
import { useFollowPointer } from "../utils/useFollowPointer";
import { useRef } from "react";

// interface FollowPointerProps {
//   children: React.ReactNode;
// }

export default function FollowPointer() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      style={{
        x,
        y,
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        background: "#5B4966",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    />
  );
}
