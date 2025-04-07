import React from "react";

interface TeamMember {
  name: string;
  position: string;
  imageUrl: string;
}

const ConnectSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Rafli Afriza Nugroho",
      position: "Front-End",
      imageUrl: "/path-to-image.jpg", // Ganti dengan path gambar sebenarnya
    },
    {
      name: "Athar Rayyan Muhd",
      position: "UI/UX Designer",
      imageUrl: "/path-to-image.jpg", // Ganti dengan path gambar sebenarnya
    },
  ];

  return (
    <div className="bg-emerald-800 p-6 w-full">
      {/* Card CANOPEDIA */}
      <div className="rounded-xl bg-[#ECF9CB] p-6 mb-12">
        <h1 className="text-emerald-800 text-5xl font-bold mb-4 text-center">CANOPEDIA</h1>
        <p className="text-emerald-800 text-sm text-center">
          Bergabunglah dengan <span className="font-bold">CANOPEDIA</span> dalam melestarikan keberagaman genetik pohon asli Indonesia melalui 
          katalogisasi, penyimpanan biji digital, dan pemantauan, demi masa depan alam nusantara yang berkelanjutan.
        </p>
        
        {/* Ilustrasi tanaman */}
        <div className="mt-6 h-32 overflow-hidden relative">
          <div className="flex justify-center">
            {/* Di sini Anda bisa menambahkan gambar tanaman seperti yang ditampilkan */}
            {/* Atau menggunakan div dengan background */}
          </div>
        </div>
      </div>

      {/* Let's Connect Section */}
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Profile Illustration Placeholder */}
        <div className="bg-gray-300 w-40 h-40 rounded-lg"></div>
        
        {/* Connect Text & Team */}
        <div className="flex-1">
          <h2 className="text-white text-2xl font-semibold mb-6">
            Lets<br />connect.
          </h2>
          
          {/* Team Members */}
          <div className="flex flex-col md:flex-row gap-4">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-[#ECF9CB] rounded-full py-2 px-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div>
                    <h3 className="text-emerald-800 font-medium text-sm">{member.name}</h3>
                    <p className="text-emerald-800 text-xs">{member.position}</p>
                  </div>
                </div>
                <div className="bg-emerald-800 w-6 h-6 rounded-full flex items-center justify-center ml-4">
                  <span className="text-white text-xs">→</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots */}
          <div className="flex mt-6 gap-1 justify-end">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-gray-300 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;