import Timer from "./home/timer";

export default function Home() {
  return (
    <div className="bg-[#f5f5f5] w-screen h-screen flex flex-col items-center justify-center">
      <div className="absolute top-[10px] lg:top-[20px] font-bold text-[12px] lg:text-base">Coming Soon.</div>
      <div className="tracking-widest text-[14px] lg:text-[18px]">STAY TUNED</div>
      <div className="text-[42px] lg:text-[76px] lg:leading-tight font-bold text-center">Coming Soon</div>
      <div className="mt-[50px]">
        <Timer endDate="2025-09-10" />
      </div>
    </div>
  );
}
