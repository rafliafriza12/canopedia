import { WebLayoutProps } from "@/types/Index";
import Navbar from "@/components/navbar/Index";
const WebLayout: React.FC<WebLayoutProps> = ({ children }) => {
  return (
    <div className="w-screen flex flex-col relative z-0 overflow-x-hidden py-10 items-center bg-[#255245] text-[#ECF9CB]">
      <Navbar />
      {children}
    </div>
  );
};

export default WebLayout;
