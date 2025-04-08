// components/footer/footer.tsx
"use client";

import React from "react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    // Jika ada di halaman yang sama
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#ECF9CB] w-screen rounded-b-lg pt-20 font-poppins">
      <div className="w-full grid grid-cols-2 grid-rows-1 pl-[5%]">
        {/* Left Section */}
        <div className="w-full">
          <h3 className="text-[#255245] text-[26px] font-bold mb-4">Link.</h3>
          <div
            onClick={() => scrollToSection("beranda")}
            className="text-gray-600 mb-3 cursor-pointer"
          >
            Beranda
          </div>
          <div
            onClick={() => scrollToSection("katalog")}
            className="text-gray-600 mb-3 cursor-pointer"
          >
            Katalog
          </div>
          <div
            onClick={() => scrollToSection("tanam")}
            className="text-gray-600 mb-3 cursor-pointer"
          >
            Tanam
          </div>
          <div
            onClick={() => scrollToSection("pemantauan")}
            className="text-gray-600 mb-3 cursor-pointer"
          >
            Pemantauan
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full">
          <div className="mb-4">
            <h3 className="text-[#255245] text-[26px] font-semibold mb-4">
              Butuh Bantuan?
            </h3>
            <p className="text-gray-600 mb-2">rafliafriza90@gmail.com</p>
            <p className="text-gray-600 mb-10">atharrayyanmuhamd@gmail.com</p>
          </div>

          <div>
            <h3 className="text-[#255245] text-[26px] font-semibold mb-4">
              Lokasi
            </h3>
            <p className="text-gray-600 mb-2"> Banda Aceh,</p>
            <p className="text-gray-600 mb-3">
              Jl. Teuku Nyak Arief No.441, Kopelma Darussalam, Kec. Syiah Kuala,
              Kota Banda Aceh, Aceh 23111
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-14 bg-[#93A26D] py-10 h-10"></div>
    </footer>
  );
};

export default Footer;
