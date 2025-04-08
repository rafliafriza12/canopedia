// const DynamicComponent = dynamic(
//   () => import("../components/pages/home/Index"),
//   { ssr: false }
// );
import HomePage from "../components/pages/home/Index";
export default function Home() {
  return <HomePage />;
}
