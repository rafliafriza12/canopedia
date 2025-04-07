import DoodleBackground from "@/components/svg/DoodleBackground";
import PlantingTitle from "@/components/svg/planting/Title";
import StepOne from "@/components/svg/planting/StepOne";
import StepTwo from "@/components/svg/planting/StepTwo";
import StepThree from "@/components/svg/planting/StepThree";
import StepFour from "@/components/svg/planting/StepFour";
const Planting: React.FC = () => {
  return (
    <div className=" w-full flex flex-col items-center gap-20 relative z-0 py-10">
      <div className=" absolute z-[-1] scale-x-[1.26]">
        <DoodleBackground />
      </div>
      <PlantingTitle />
      <div className=" w-full grid grid-cols-2 gap-10">
        <div className=" w-full flex justify-center">
          <StepOne />
        </div>
        <div className=" w-full flex justify-center">
          <StepTwo />
        </div>
        <div className=" w-full flex justify-center">
          <StepThree />
        </div>
        <div className=" w-full flex justify-center">
          <StepFour />
        </div>
      </div>
    </div>
  );
};

export default Planting;
