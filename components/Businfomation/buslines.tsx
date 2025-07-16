"use client";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { AvatarCircles } from "@/components/magicui/avatar-circles";
import { useEffect, useRef, useState } from "react";
import { MovingBus } from "./Businline";

export default function BusLines() {
  const container = useRef<HTMLDivElement>(null);
  const staA = useRef<HTMLDivElement>(null);
  const staB = useRef<HTMLDivElement>(null);
  const staC = useRef<HTMLDivElement>(null);
  const staCenter = useRef<HTMLDivElement>(null);
  const [progess,setProgress] = useState(50);

  const lines = () => {
    // const invertY: number = rev ? Y - (Y * 2) : Y;
    return (
      <div>
        <AnimatedBeam
          containerRef={container}
          fromRef={staA}
          toRef={staB}
          startXOffset={20}
          endXOffset={-20}
          pathWidth={4}
        />
        <AnimatedBeam
          containerRef={container}
          fromRef={staB}
          toRef={staC}
          startXOffset={18}
          endXOffset={-18}
          pathWidth={4}
        />
        <AnimatedBeam
          containerRef={container}
          fromRef={staC}
          toRef={staCenter}
          startXOffset={20}
          endXOffset={-20}
          pathWidth={4}
        />
      </div>
    );
  };
  
  return (
    <div className="flex flex-col gap-1 bg-foreground/10 rounded-xl p-5 backdrop-filter backdrop-blur-sm shadow-sm shadow-foreground ">
      <div
        ref={container}
        className="flex flex-row justify-between relative text-center "
      >
        <div className="flex flex-col">
          <div
            ref={staA}
            className="bg-foreground text-background rounded-full w-10 h-10 text-center flex justify-center justify-items-center place-items-center"
          >
            <p className="font-bold">A</p>
            
          </div>
        </div>
        
        <div
          ref={staB}
          className="bg-foreground text-background rounded-full w-10 h-10 text-center flex justify-center justify-items-center place-items-center"
        >
          <p className="font-bold">B</p>
        </div>
        <div
          ref={staC}
          className="bg-foreground text-background rounded-full w-10 h-10 text-center flex justify-center justify-items-center place-items-center"
        >
          <p className="font-bold">C</p>
        </div>
        <div
          ref={staCenter}
          className="bg-foreground text-background rounded-full w-10 h-10 text-center flex justify-center justify-items-center place-items-center"
        >
          <p className="font-bold">Center</p>
          {lines()}
        </div>
      </div>
      <input
          type="range"
          min="0"
          max="100"
          value={progess}
          onChange={(e) => setProgress(Number(e.target.value))}
          className="w-full"
        />
        <MovingBus startRef={staA} endRef={staCenter} progress={progess} endOffsetX={-50}/>
    </div>
    
  );
}
