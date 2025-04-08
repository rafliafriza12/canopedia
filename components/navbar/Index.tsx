"use client";
import Logo from "../svg/Logo";
import { useRouter } from "next/navigation";
const Navbar: React.FC = () => {
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    // Jika ada di halaman yang sama
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${sectionId}`);
      // Jika perlu pindah halaman
    }
  };
  return (
    <div className=" w-full flex justify-center items-center fixed z-10 top-0 backdrop-blur-md bg-transparent pt-10">
      <div className=" absolute left-[5%] scale-[0.8]">
        <Logo />
      </div>
      <div className=" w-[1000px] h-[70px] bg-[#F3FFD0]/20 border-[#EDFACC] border-[1px] rounded-full flex items-center px-3 justify-evenly font-cinzel text-[#255245] font-bold text-[16px]">
        <div
          onClick={() => scrollToSection("beranda")}
          className="h-[52px] w-[177px] rounded-full bg-[#F3FFD0] flex justify-center items-center hover:bg-[#255245] hover:text-[#F3FFD0] cursor-pointer duration-200"
        >
          Beranda
        </div>
        <div
          onClick={() => scrollToSection("katalog")}
          className="h-[52px] w-[177px] rounded-full bg-[#F3FFD0] flex justify-center items-center hover:bg-[#255245] hover:text-[#F3FFD0] cursor-pointer duration-200"
        >
          Katalog
        </div>
        <div
          onClick={() => scrollToSection("tanam")}
          className="h-[52px] w-[177px] rounded-full bg-[#F3FFD0] flex justify-center items-center hover:bg-[#255245] hover:text-[#F3FFD0] cursor-pointer duration-200"
        >
          Tanam
        </div>
        <div
          onClick={() => scrollToSection("pemantauan")}
          className="h-[52px] w-[177px] rounded-full bg-[#F3FFD0] flex justify-center items-center hover:bg-[#255245] hover:text-[#F3FFD0] cursor-pointer duration-200"
        >
          Pemantauan
        </div>
      </div>
    </div>
  );
};

export default Navbar;
