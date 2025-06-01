"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, Icon } from "leaflet";
import L from "leaflet";

// Interfaces for the data
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
  coordinates?: {
    lat: number;
    lng: number;
  };
}

// Create a custom icon for markers
const customIcon: Icon = new L.Icon({
  iconUrl: "/location-pin.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const dummyData: CatalogItem[] = [
  {
    _id: "1",
    name: "Pohon Jati",
    latinName: "Tectona grandis",
    thumbnailImage:
      "https://images.unsplash.com/photo-1503785640985-f62e3aeee448",
    detailImage: [],
    description:
      "Pohon jati adalah pohon penghasil kayu berkualitas tinggi yang banyak digunakan untuk furniture",
    habitat: "Hutan tropis",
    utility: "Bahan bangunan dan furniture",
    taxonomy: {
      kingdom: "Plantae",
      division: "Magnoliophyta",
      class: "Magnoliopsida",
      ordo: "Lamiales",
      family: "Lamiaceae",
      genus: "Tectona",
      species: "T. grandis",
    },
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
    coordinates: {
      lat: -6.2088,
      lng: 106.8456,
    },
  },
  {
    _id: "2",
    name: "Pohon Mahoni",
    latinName: "Swietenia macrophylla",
    thumbnailImage:
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc",
    detailImage: [],
    description:
      "Pohon mahoni memiliki kayu keras yang sering digunakan untuk bahan bangunan",
    habitat: "Hutan hujan tropis",
    utility: "Bahan bangunan dan kerajinan",
    taxonomy: {
      kingdom: "Plantae",
      division: "Magnoliophyta",
      class: "Magnoliopsida",
      ordo: "Sapindales",
      family: "Meliaceae",
      genus: "Swietenia",
      species: "S. macrophylla",
    },
    createdAt: "2023-01-02",
    updatedAt: "2023-01-02",
    coordinates: {
      lat: -7.7956,
      lng: 110.3695,
    },
  },
  {
    _id: "3",
    name: "Pohon Cendana",
    latinName: "Santalum album",
    thumbnailImage:
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d",
    detailImage: [],
    description: "Pohon cendana terkenal dengan aroma kayunya yang wangi",
    habitat: "Hutan kering",
    utility: "Minyak wangi dan kerajinan",
    taxonomy: {
      kingdom: "Plantae",
      division: "Magnoliophyta",
      class: "Magnoliopsida",
      ordo: "Santalales",
      family: "Santalaceae",
      genus: "Santalum",
      species: "S. album",
    },
    createdAt: "2023-01-03",
    updatedAt: "2023-01-03",
    coordinates: {
      lat: -8.65,
      lng: 115.2167,
    },
  },
];

const Monitoring: React.FC = () => {
  const [catalogs, setCatalogs] = useState<CatalogItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with dummy data
    setTimeout(() => {
      setCatalogs(dummyData);
      setLoading(false);
    }, 1000);
  }, []);

  const center: LatLngExpression = [-2.5489, 118.0149];

  return (
    <div id="pemantauan" className="w-full p-2 bg-[#ECF9CB] rounded-2xl mt-44">
      <div className="w-full min-h-[702px] flex flex-col relative z-0">
        <div className="bg-gradient-to-t absolute z-[1] rounded-2xl from-[#255245] via-[#255245]/50 to-transparent w-full h-full pointer-events-none"></div>

        <div className="flex justify-between px-10 pt-10 items-center w-full relative z-[2]">
          <div className="flex flex-col font-poppins text-[#ECF9CB]">
            <h1 className="font-semibold text-[60px]">Pemantauan</h1>
            <h1 className="-mt-10 font-extrabold text-[130px]">GENETIK</h1>
          </div>

          <div className="font-poppins font-light text-[#ECF9CB] w-[55%]">
            <p className="text-left text-[20px]">
              Menampilkan status konservasi, tren populasi, dan indeks
              keanekaragaman genetik pohon asli Indonesia secara visual,
              membantu mengidentifikasi spesies prioritas yang membutuhkan upaya
              pelestarian segera.
            </p>
          </div>
        </div>

        <div className="relative z-[2] flex-1 mx-10 mb-10 mt-4 rounded-xl overflow-hidden shadow-xl">
          {!loading && (
            <MapContainer
              center={center}
              zoom={5}
              style={{ height: "100%", width: "100%", minHeight: "400px" }}
              className="z-[2]"
              scrollWheelZoom={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {catalogs.map(
                (catalog) =>
                  catalog.coordinates && (
                    <Marker
                      key={catalog._id}
                      position={
                        [
                          catalog.coordinates.lat,
                          catalog.coordinates.lng,
                        ] as LatLngExpression
                      }
                      icon={customIcon}
                    >
                      <Popup>
                        <div className="p-2">
                          <img
                            src={catalog.thumbnailImage}
                            alt={catalog.name}
                            className="w-32 h-24 object-cover rounded-lg mb-2"
                          />
                          <h3 className="font-bold text-green-800">
                            {catalog.name}
                          </h3>
                          <p className="text-sm italic text-green-600">
                            {catalog.latinName}
                          </p>
                          <p className="text-xs mt-1 text-gray-600 line-clamp-2">
                            {catalog.description}
                          </p>
                        </div>
                      </Popup>
                    </Marker>
                  )
              )}
            </MapContainer>
          )}
        </div>
      </div>
    </div>
  );
};

// Use dynamic import to avoid SSR issues with Leaflet
export default dynamic(() => Promise.resolve(Monitoring), {
  ssr: false,
});
