import { WebLayoutProps } from "@/types/Index";
import Navbar from "@/components/navbar/Index";
import Footer from "@/components/footer/Index";
import ConnectSection from "@/components/sections/Konek-sections";
import GardeningSteps from "@/components/sections/step-sections";

const WebLayout: React.FC<WebLayoutProps> = ({ children }) => {
  return (
    <div className="w-screen flex flex-col relative z-0 overflow-x-hidden pt-10 items-center bg-[#255245] text-[#ECF9CB]">
      <Navbar />
      {children}
      <GardeningSteps/>
      <ConnectSection/>
      <Footer/>
    </div>

  );
};

export default WebLayout;
