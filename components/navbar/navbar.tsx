import Image from "next/image";
export default function Navbar() {
  return (
    <div className="p-4 bg-amber-50/10 backdrop-filter backdrop-blur-sm shadow-amber-50 shadow-lg/10 font-bold md:text-lg lg:text-xl rounded-b-xl">
      <div className="flex flex-row w-full gap-4 ">
        <Image
          alt="logo"
          src="/vercel.svg"
          width={30}
          height={30}
          className=""
        ></Image>
        <div className="flex justify-center w-full gap-4">
          <div>Home</div>
          <div>Bus</div>
          <div>Help</div>
        </div>
      </div>
    </div>
  );
}
