import Image from "next/image";
import FeaturedBlog from "./components/home/FeaturedBlog";

export default function Home() {
  return (
    <div>
      <div className="bg-box">
      </div>
      <div className="h-screen">
        <FeaturedBlog />
      </div>
      <div className="h-screen bg-amber-200">
        <p>VILLAN GOES HERE LOL</p>
      </div>
    </div>
  );
}
