"use client";
import ContactSVG from "@/components/svg/Contact";
import Phone from "@/components/svg/Phone";
import Link from "next/link";
const Contact: React.FC = () => {
  return (
    <div className=" w-full flex justify-center gap-44 items-center mt-44 pb-20">
      <ContactSVG />
      <div className="flex flex-col gap-10">
        <div className=" flex flex-col text-[#ECF9CB] font-montserrat font-medium text-[48px]">
          <h1>Lets</h1>
          <h1 className=" -mt-4">connect.</h1>
        </div>
        <div className=" flex items-center gap-20">
          <div className=" flex justify-between h-[109px] w-[420px] rounded-full bg-[#ECF9CB] items-center pl-7 pr-4">
            <div className="flex flex-col">
              <h1 className=" text-[#4A4363] font-poppins font-medium text-[20px]">
                Rafli Afriza Nugraha
              </h1>
              <h1 className=" text-[#4A4363] font-poppins text-[14px]">
                Front-End
              </h1>
            </div>

            <Link
              href={"https://api.whatsapp.com/send?phone=6283197475917"}
              target="_blank"
              className=" h-[60px] w-[60px] rounded-full bg-[#255245] flex justify-center items-center"
            >
              <Phone />
            </Link>
          </div>
          <div className=" flex justify-between h-[109px] w-[420px] rounded-full bg-[#ECF9CB] items-center pl-7 pr-4">
            <div className="flex flex-col">
              <h1 className=" text-[#4A4363] font-poppins font-medium text-[20px]">
                Athar Rayyan Muhammad
              </h1>
              <h1 className=" text-[#4A4363] font-poppins text-[14px]">
                UI / UX Desainer
              </h1>
            </div>

            <Link
              href={"https://api.whatsapp.com/send?phone=6281386999706"}
              target="_blank"
              className=" h-[60px] w-[60px] rounded-full bg-[#255245] flex justify-center items-center"
            >
              <Phone />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
