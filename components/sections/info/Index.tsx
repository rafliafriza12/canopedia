import ArrowTopRight from "@/components/svg/ArrowTopRight";
import TreeInfo from "@/components/svg/TreeInfo";
import SeedInfo from "@/components/svg/SeedInfo";
const Info: React.FC = () => {
  return (
    <div className=" w-full mt-44">
      <div className=" w-full flex justify-between items-center">
        <div className=" w-[70%] h-[529px] flex justify-center items-center bg-gradient-to-b from-[#F3FFD0] to-[#255245]  rounded-[35px] border-gray-500 border-[1px] shadow-[0px_26px_16px_rgba(0,0,0,0.25)] relative z-0 ">
          <div className=" flex flex-col gap-1 absolute z-[1] left-6 top-20">
            <h1 className=" text-[24px] text-[#6A6A6A]">01</h1>
            <h1 className=" font-semibold text-base text-[#212121]">
              Apa yang kita wariskan nanti?
            </h1>
            <p className=" text-[#5a5a5a] text-[12px] w-[300px] text-left">
              Menjaga keragaman genetik pohon kita adalah menyelamatkan masa
              depan anak cucu.
            </p>
          </div>

          <div className=" flex flex-col gap-1 absolute z-[1] right-6 top-20">
            <h1 className=" text-[24px] text-[#6A6A6A]">02</h1>
            <h1 className=" font-semibold text-base text-[#212121]">
              Siap kehilangan warisan leluhur?
            </h1>
            <p className=" text-[#5a5a5a] text-[12px] w-[300px] text-left">
              Setiap biji adalah warisan leluhur yang tak tergantikan.
            </p>
          </div>

          <div className=" flex flex-col gap-1 absolute z-[1] left-6 bottom-20">
            <h1 className=" text-[24px] text-[#ECF9CB]">03</h1>
            <h1 className=" font-semibold text-base text-[#ACBA88]">
              Rela identitas nusantara memudar?
            </h1>
            <p className=" text-[#ECF9CB] text-[12px] w-[300px] text-left">
              Ketika satu spesies punah, sebagian dari identitas nusantara ikut
              hilang selamanya.
            </p>
          </div>

          <div className=" flex flex-col gap-1 absolute z-[1] right-6 bottom-20">
            <h1 className=" text-[24px] text-[#ECF9CB]">04</h1>
            <h1 className=" font-semibold text-base text-[#ACBA88]">
              Alam tanpa keseimbangan?
            </h1>
            <p className=" text-[#ECF9CB] text-[12px] w-[300px] text-left">
              Biji-biji ini bukan hanya penyimpan kehidupan, tetapi juga penjaga
              keseimbangan alam
            </p>
          </div>

          <div className=" absolute z-[2] -top-[30%] ">
            <SeedInfo />
          </div>
        </div>

        <div className=" w-[29%] h-[529px] flex flex-col justify-between items-center relative z-0 group">
          <div className="absolute z-[1] bottom-7 group-hover:scale-[1.05] duration-300">
            <TreeInfo />
          </div>

          <div className="w-full h-[48%] rounded-[35px] bg-gradient-to-t from-[#F3FFD0] via-[#F3FFD0] to-[#255245] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-8 ">
            <div className="flex items-center justify-between">
              <div className=" w-[85%] border-t-[1px] border-[#ECF9CB]"></div>
              <div className=" scale-[1.2]">
                <ArrowTopRight />
              </div>
            </div>
          </div>
          <div className="w-full h-[48%] rounded-[35px] bg-[#F3FFD0] shadow-[0px_26px_16px_rgba(0,0,0,0.25)]"></div>
        </div>
      </div>
    </div>
  );
};

export default Info;
