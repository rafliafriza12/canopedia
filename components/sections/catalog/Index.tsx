"use client";
import CatalogTitle from "@/components/svg/CatalogTitle";
import CatalogCard from "@/components/card/CatalogCard";
const Catalog: React.FC = () => {
  return (
    <div
      id="katalog"
      className="w-screen px-28 py-16 flex flex-col items-center gap-36 mt-44  bg-gradient-to-t from-[#ECF9CB]/60 via-[#255245] to-[#255245]"
    >
      <CatalogTitle />
      <div className=" w-full grid grid-cols-3 gap-10 ">
        <div className=" w-full flex items-center justify-center hover:-translate-y-7 duration-300">
          <CatalogCard />
        </div>
        <div className=" w-full flex items-center justify-center hover:-translate-y-7 duration-300">
          <CatalogCard />
        </div>
        <div className=" w-full flex items-center justify-center hover:-translate-y-7 duration-300">
          <CatalogCard />
        </div>
        <div className=" w-full flex items-center justify-center hover:-translate-y-7 duration-300">
          <CatalogCard />
        </div>
        <div className=" w-full flex items-center justify-center hover:-translate-y-7 duration-300">
          <CatalogCard />
        </div>
        <div className=" w-full flex items-center justify-center hover:-translate-y-7 duration-300">
          <CatalogCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
