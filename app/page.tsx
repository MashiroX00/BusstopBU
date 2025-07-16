"use client";
import BusLine from "@/components/Businfomation/busline";
import { useRef } from "react";
export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const currentStage = useRef<HTMLDivElement>(null);
  const nextStage = useRef<HTMLDivElement>(null);
  const mockzone = { ZoneAtoB: { start: "A", end: "B" },
 };
  return (
    <div className="flex flex-col md:w-2/3 lg:w-1/3 m-4 gap-4">
      <h2 className="text-xl font-bold">Zone</h2>
      <BusLine currentStage="A" nextStage="B" />
      <BusLine currentStage="B" nextStage="C" />
      <BusLine currentStage="C" nextStage="Cen" />
    </div>
  );
}
