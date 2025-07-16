"use client";
import ImHere from "@/components/Btn/imhere";
import BusLines from "@/components/Businfomation/buslines";
export default function Home() {
  return (
    <div className="flex flex-col m-4 gap-4">
      <h2 className="text-xl font-bold">Zone</h2>
      <BusLines/>
      <ImHere />
    </div>
  );
}
