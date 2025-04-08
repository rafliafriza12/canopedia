"use client";
import dynamic from "next/dynamic";
const DynamicComponent = dynamic(
  () => import("../components/pages/home/Index"),
  { ssr: false }
);
export default function Home() {
  return <DynamicComponent />;
}
