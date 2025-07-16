"use client";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { AvatarCircles } from "@/components/magicui/avatar-circles";
import { useRef } from "react";
interface BusLineProps {
  currentStage: string;
  nextStage: string;
}

export default function BusLine(props: BusLineProps) {
  const container = useRef<HTMLDivElement>(null);
  const currentStage = useRef<HTMLDivElement>(null);
  const nextStage = useRef<HTMLDivElement>(null);
  return (
    <div className="flex flex-col gap-1 bg-foreground/10 rounded-xl p-2 backdrop-filter backdrop-blur-sm shadow-sm shadow-foreground ">
      <div ref={container} className="flex flex-row justify-between relative">
        <div
          ref={currentStage}
          className="bg-foreground text-background rounded-full w-10 h-10 text-center flex justify-center justify-items-center place-items-center"
        >
          {props.currentStage}
        </div>
        <div
          ref={nextStage}
          className="bg-foreground text-background rounded-full w-10 h-10 text-center flex justify-center justify-items-center place-items-center"
        >
          {props.nextStage}
        </div>
        <AnimatedBeam
        containerRef={container}
        fromRef={currentStage}
        toRef={nextStage}
        startXOffset={20}
        endXOffset={-20}
      />
      </div>
      <div className="mx-4 flex justify-center gap-2 items-center">
        <h1>Current Bus:</h1>
        <AvatarCircles numPeople={0} avatarUrls={[{imageUrl: "/vercel.svg",profileUrl: ""}]} />
      </div>
    </div>
  );
}
