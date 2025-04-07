import MapSVG from "@/components/svg/Map";
import GridBackground2 from "@/components/svg/GridBackround2";
const Monitoring: React.FC = () => {
  return (
    <div className=" w-full p-2 bg-[#ECF9CB] rounded-2xl mt-44">
      <div className=" w-full h-[702px] flex items-end justify-between relative z-0">
        <div className="bg-gradient-to-t absolute z-[-1] rounded-2xl from-[#255245] via-[#255245]/50 to-transparent  w-full h-full"></div>
        <div className=" absolute z-[-2] scale-[0.8] left-[50%] top-[50%] -translate-[50%] ">
          <MapSVG />
        </div>
        <div className=" absolute z-[-3] scale-x-[1.4]">
          <GridBackground2 />
        </div>

        <div className=" flex justify-between px-10 pb-10 items-center w-full">
          <div className="flex flex-col  font-poppins text-[#ECF9CB]">
            <h1 className="  font-semibold text-[60px] ">Pemantauan</h1>
            <h1 className=" -mt-10 font-extrabold text-[130px]">GENETIK</h1>
          </div>

          <div className=" font-poppins font-light text-[#ECF9CB] w-[55%]">
            <p className=" text-left text-[20px]">
              Menampilkan status konservasi, tren populasi, dan indeks
              keanekaragaman genetik pohon asli Indonesia secara visual,
              membantu mengidentifikasi spesies prioritas yang membutuhkan upaya
              pelestarian segera.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;
