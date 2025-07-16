"use client";
import { motion } from "framer-motion";
import { Ripple } from "@/components/magicui/ripple";


export default function ImHere() {
  return (
    
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
        <motion.button
        whileHover={{ scale: 1.1 }}
        animate={{
            scale: [1, 1.2, 1],
            transition: {
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
            },
        }}
        className="w-30 h-30 rounded-full border-none bg-foreground text-background shadow-foreground shadow-sm cursor-pointer outline-none flex items-center justify-center text-2xl p-0"
    >
        I'm Here
    </motion.button>
      </p>
      <Ripple />
    </div>

    
  );
}
