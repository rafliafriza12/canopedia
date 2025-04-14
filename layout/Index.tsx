"use client";
import { WebLayoutProps } from "@/types/Index";
import Navbar from "@/components/navbar/Index";
import HeroBackground from "@/components/svg/HeroBackground";
import GridBackground from "@/components/svg/GridBackground";
import DotBackground from "@/components/svg/DotBackground";
import Footer from "@/components/footer/Index";
import { IsDesktop } from "@/hooks";
import Image from "next/image";
import Logo from "../public/assets/logo/canopedia.png";
import { useState, useEffect } from "react";

const WebLayout: React.FC<WebLayoutProps> = ({ children }) => {
  const isDesktop = IsDesktop();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Handle document loading
    const handleLoad = () => {
      setIsLoading(false);
    };

    // Check if document is already loaded
    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);

      // Set a fallback timer in case the load event doesn't fire
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      // Cleanup
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(timer);
      };
    }
  }, []);

  // Loading screen for both desktop and mobile
  if (isLoading) {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#255245] gap-2 overflow-hidden">
        <div className="animate-bounce">
          <Image src={Logo} alt="Canopedia" width={100} height={100} />
        </div>
        <h1 className="text-center font-poppins font-semibold text-lg text-[#ECF9CB]">
          Loading...
        </h1>
      </div>
    );
  }

  // After loading is complete
  return isDesktop ? (
    <div className="w-screen flex flex-col relative z-0 overflow-x-hidden gap-7 pt-10 items-center bg-[#255245] text-[#ECF9CB]">
      <Navbar />
      <div className="absolute z-[-10] top-44 scale-[1.25]">
        <HeroBackground />
      </div>
      <div className="absolute z-[-9] top-44 scale-[1.4]">
        <GridBackground />
      </div>
      <div className="absolute z-[-8] top-[2100px] scale-[1.4]">
        <DotBackground />
      </div>

      {children}
      <Footer />
    </div>
  ) : (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#255245] gap-2 overflow-hidden">
      <div className="animate-bounce">
        <Image src={Logo} alt="Canopedia" width={100} height={100} />
      </div>
      <h1 className="text-center font-poppins font-semibold text-lg text-[#ECF9CB]">
        Right now, Only for desktop
      </h1>
    </div>
  );
};

export default WebLayout;
