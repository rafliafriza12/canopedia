import Logo from "../svg/Logo";
const Navbar: React.FC = () => {
  return (
    <div className=" w-full flex justify-center items-center relative z-0 backdrop-blur-md ">
      <div className=" absolute left-[5%]">
        <Logo />
      </div>
      <div className=" w-[1000px] h-[70px] bg-[#F3FFD0]/20 border-[#EDFACC] border-[1px] rounded-full flex items-center px-3 justify-evenly font-cinzel text-[#255245] font-bold text-[16px]">
        <div className="h-[52px] w-[177px] rounded-full bg-[#F3FFD0] flex justify-center items-center">
          BERANDA
        </div>
        <div className="h-[52px] w-[177px] rounded-full bg-[#F3FFD0] flex justify-center items-center">
          KATALOG
        </div>
        <div className="h-[52px] w-[177px] rounded-full bg-[#F3FFD0] flex justify-center items-center">
          BANK BIJI
        </div>
        <div className="h-[52px] w-[177px] rounded-full bg-[#F3FFD0] flex justify-center items-center">
          PEMANTAUAN
        </div>
      </div>
    </div>
  );
};

export default Navbar;
