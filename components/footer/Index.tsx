// components/footer/footer.tsx

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#ECF9CB] w-screen rounded-b-lg pt-20 font-poppins">
      <div className="w-full grid grid-cols-2 grid-rows-1 pl-[5%]">
        {/* Left Section */}
        <div className="w-full"> 
          <h3 className="text-[#255245] text-[26px] font-bold mb-4">About.</h3>
          <p className="text-gray-600 mb-3">Katalog</p>
          <p className="text-gray-600 mb-3">Bank Biji</p>
          <p className="text-gray-600 mb-3">Pemantauan</p>
        </div>

        {/* Right Section */}
        <div className="w-full">
          <div className="mb-4">
            <h3 className="text-[#255245] text-[26px] font-semibold mb-4">Butuh Bantuan?</h3>
            <p className="text-gray-600 mb-2">rafliafriza90@gmail.com</p>
            <p className="text-gray-600 mb-10">atharrayyanmuhamd@gmail.com</p>
          </div>

          <div>
            <h3 className="text-[#255245] text-[26px] font-semibold mb-4">Lokasi</h3>
            <p className="text-gray-600 mb-2"> Banda Aceh,</p>
            <p className="text-gray-600 mb-3">Jl. Teuku Nyak Arief No.441, Kopelma Darussalam, Kec. Syiah Kuala, Kota Banda Aceh, Aceh 23111</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-14 bg-[#93A26D] py-10 h-10"></div>
    </footer>
  );
};

export default Footer;
