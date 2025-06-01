import Link from "next/link";

const CatalogCard: React.FC<{
  id: string;
  name: string;
  latinName: string;
  thumbnailImage: string;
  description: string;
}> = ({ id, name, latinName, thumbnailImage, description }) => {
  return (
    <div className="relative w-[320px] h-[440px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-br from-green-50 via-white to-green-100 border border-green-200">
      <div className="relative">
        <img
          src={thumbnailImage}
          alt={name}
          className="w-full h-[210px] object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-white/80 rounded-full p-2 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
      </div>
      <div className="p-5 flex flex-col h-[230px]">
        <h3 className="text-2xl font-extrabold mb-1 text-green-800 drop-shadow-sm">
          {name}
        </h3>
        <p className="text-green-600 italic mb-2 text-sm">{latinName}</p>
        <p className="text-gray-700 line-clamp-3 mb-4 flex-1">{description}</p>
        <Link
          href={`/catalog/${id}`}
          className="inline-block self-end bg-gradient-to-r from-green-500 to-green-700 text-white px-5 py-2 rounded-full shadow-md hover:from-green-600 hover:to-green-800 transition-all duration-300 font-semibold text-sm tracking-wide"
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  );
};

export default CatalogCard;
