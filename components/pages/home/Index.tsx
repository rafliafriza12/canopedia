"use client";
import dynamic from "next/dynamic";

// const HeroSection = dynamic(() => import("../../sections/hero/Index"), {ssr: false});
import HeroSection from "@/components/sections/hero/Index";
const Info = dynamic(() => import("../../sections/info/Index"), { ssr: false });
// import Info from "@/components/sections/info/Index";
import ShopSVG from "@/components/svg/ShopSVG";
import BarSVG from "@/components/svg/BarSVG";
import InfoLogo from "@/components/svg/InfoLogo";
const Trivia = dynamic(() => import("../../sections/trivia/Index"), {
  ssr: false,
});
// import Trivia from "@/components/sections/trivia/Index";
const Catalog = dynamic(() => import("../../sections/catalog/Index"), {
  ssr: false,
});
// import Catalog from "@/components/sections/catalog/Index";
const Sponsor = dynamic(() => import("../../sections/sponsor/Index"), {
  ssr: false,
});
// import Sponsor from "@/components/sections/sponsor/Index";
const Planting = dynamic(() => import("../../sections/planting/Index"), {
  ssr: false,
});
// import Planting from "@/components/sections/planting/Index";
const Monitoring = dynamic(() => import("../../sections/monitoring/Index"), {
  ssr: false,
});
// import Monitoring from "@/components/sections/monitoring/Index";
const Contact = dynamic(() => import("../../sections/contact/Index"), {
  ssr: false,
});
// import Contact from "@/components/sections/contact/Index";
const HomePage: React.FC = () => {
  return (
    <div className="w-full px-28 pb-10 flex flex-col items-center gap-7 pt-[110px] relative z-0">
      <HeroSection />
      <Info />
      <div className="w-screen mt-20 py-[1px] bg-gradient-to-r from-[#255245] via-[#F3FFD0] to-[#255245]">
        <div className=" w-full  h-[275px] bg-gradient-to-r from-[#8CA88A] via-[#255245] to-[#8CA88A] px-28 flex justify-between items-center">
          <div className="w-[462px] h-[225px] bg-[#ECF9CB] rounded-[35px] relative z-0 overflow-hidden p-8 flex flex-col justify-center gap-5 text-[#255245] font-poppins">
            <div className=" flex flex-col">
              <h1 className="text-[22px] font-bold">Katalog</h1>
              <h1 className=" -mt-3 text-[46px] font-bold">Biji Pohon</h1>
            </div>

            <div className=" flex flex-col">
              <h1 className=" text-[21px]">
                12 <span className=" font-bold">Spesies</span>
              </h1>
              <h1 className="text-[14px]">Terdokumentasi</h1>
            </div>

            <div className=" absolute z-[-1] right-0">
              <ShopSVG />
            </div>
          </div>

          <InfoLogo />

          <div className="w-[462px] h-[225px] bg-[#ECF9CB] rounded-[35px] relative z-0 overflow-hidden p-8 flex flex-col justify-center gap-5 text-[#255245] font-poppins">
            <div className=" flex flex-col">
              <h1 className="text-[22px] font-bold">Pemantauan</h1>
              <h1 className=" -mt-3 text-[46px] font-bold">GENETIK</h1>
            </div>

            <div className=" flex flex-col">
              <h1 className=" text-[16px]">Data Real-Time</h1>
              <h1 className="text-[16px]">
                Dari <span className=" font-bold">34 provinsi</span>
              </h1>
            </div>
            <div className=" absolute z-[-1] right-0">
              <BarSVG />
            </div>
          </div>
        </div>
      </div>
      <Trivia />
      <Catalog />
      <Sponsor />
      <Planting />
      <Monitoring />
      <Contact />
    </div>
  );
};

export default HomePage;
