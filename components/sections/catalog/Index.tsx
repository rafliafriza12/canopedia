"use client";
import CatalogTitle from "@/components/svg/CatalogTitle";
import CatalogCard from "@/components/card/CatalogCard";
import { useState, useEffect } from "react";
import API from "@/utils/API";
const Catalog: React.FC = () => {
  const [catalogs, setCatalogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCatalogs = () => {
    API.get("/catalog/getAllCatalogs")
      .then((res) => {
        setCatalogs(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response.data.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCatalogs();
  }, []);
  return (
    <div
      id="katalog"
      className="w-screen px-28 py-16 flex flex-col items-center gap-36 mt-44  bg-gradient-to-t from-[#ECF9CB]/60 via-[#255245] to-[#255245]"
    >
      <CatalogTitle />
      <div className=" w-full grid grid-cols-3 gap-10 ">
        {loading && (
          <div className="w-full h-full flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
          </div>
        )}
        {!loading &&
          catalogs.map((catalog) => (
            <CatalogCard key={catalog._id} id={catalog._id} {...catalog} />
          ))}
      </div>
    </div>
  );
};

export default Catalog;
