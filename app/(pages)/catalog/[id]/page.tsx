"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

interface Taxonomy {
  kingdom: string;
  division: string;
  class: string;
  ordo: string;
  family: string;
  genus: string;
  species: string;
}

interface CatalogItem {
  _id: string;
  name: string;
  latinName: string;
  thumbnailImage: string;
  detailImage: string[];
  description: string;
  habitat: string;
  utility: string;
  taxonomy: Taxonomy;
  createdAt: string;
  updatedAt: string;
}

const CatalogDetail = () => {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;
  const [catalog, setCatalog] = useState<CatalogItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCatalog = async () => {
      if (!id) return;

      try {
        const response = await fetch(
          `https://api-canopedia.vercel.app/catalog/getCatalogById/${id}`
        );
        const data = await response.json();

        if (data.status === 200) {
          setCatalog(data.data);
        } else {
          setError("Failed to fetch catalog details");
        }
      } catch (err) {
        setError("Error fetching catalog details");
      } finally {
        setLoading(false);
      }
    };

    fetchCatalog();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-600"></div>
      </div>
    );
  }

  if (error || !catalog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600 text-xl font-semibold">
          {error || "Catalog not found"}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#ECF9CB] p-8 mt-[10vh] rounded-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-8">
          <div className="w-1/2">
            <div className="bg-gray-200 rounded-lg h-[300px] mb-4">
              <img
                src={catalog.thumbnailImage}
                alt={catalog.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex gap-4">
              {catalog.detailImage.map((img, index) => (
                <div key={index} className="bg-gray-200 w-24 h-24 rounded-lg">
                  <img
                    src={img}
                    alt={`${catalog.name} ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="w-1/2">
            <h1 className="text-3xl font-bold text-[#255245] mb-2">
              {catalog.name}
            </h1>
            <p className="text-xl italic text-[#255245] mb-6">
              {catalog.latinName}
            </p>

            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-[#255245] mb-2">
                  Deskripsi
                </h2>
                <p className="text-gray-700">{catalog.description}</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#255245] mb-2">
                  Habitat
                </h2>
                <p className="text-gray-700">{catalog.habitat}</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#255245] mb-2">
                  Kegunaan
                </h2>
                <p className="text-gray-700">{catalog.utility}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogDetail;
