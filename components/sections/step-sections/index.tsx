import React from "react";

interface StepCard {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const GardeningSteps: React.FC = () => {
  const steps: StepCard[] = [
    {
      id: 1,
      title: "LOREM IPSUM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      imageUrl: "/images/gardening-step1.png", // Ganti dengan path gambar sebenarnya
    },
    {
      id: 2,
      title: "LOREM IPSUM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      imageUrl: "/images/gardening-step2.png", // Ganti dengan path gambar sebenarnya
    },
    {
      id: 3,
      title: "LOREM IPSUM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      imageUrl: "/images/gardening-step3.png", // Ganti dengan path gambar sebenarnya
    },
    {
      id: 4,
      title: "LOREM IPSUM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      imageUrl: "/images/gardening-step4.png", // Ganti dengan path gambar sebenarnya
    },
  ];

  return (
    <div className="bg-emerald-800 p-6 w-full min-h-screen relative">
      {/* Background circular patterns - large semi-transparent overlapping circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full w-96 h-96 bg-emerald-700/30 top-10 left-10"></div>
        <div className="absolute rounded-full w-80 h-80 bg-emerald-700/30 top-40 right-20"></div>
        <div className="absolute rounded-full w-96 h-96 bg-emerald-700/30 bottom-10 left-40"></div>
      </div>

      {/* Grid layout for the steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {steps.map((step) => (
          <div key={step.id} className="relative">
            {/* Step card */}
            <div className="bg-green-100 rounded-xl overflow-hidden shadow-lg">
              {/* Tab at top */}
              <div className="bg-green-100 px-6 pt-4 pb-2">
                <div className="w-12 h-1 bg-emerald-900 rounded-full mx-auto mb-4"></div>
                <h2 className="text-emerald-900 text-xl font-bold mb-1">{step.title}</h2>
                <p className="text-emerald-900 text-xs">{step.description}</p>
              </div>
              
              {/* Image section */}
              <div className="bg-emerald-900 p-4 h-48">
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src={step.imageUrl} 
                    alt={`Step ${step.id}`} 
                    className="h-full object-contain"
                  />
                </div>
              </div>
            </div>
            
            {/* Circular step indicator */}
            <div className="absolute -right-3 top-8 w-10 h-10 bg-emerald-900 rounded-full flex items-center justify-center text-green-100 font-bold shadow-md">
              {step.id}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GardeningSteps;