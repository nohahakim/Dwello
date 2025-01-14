import Hero from "@/components/Hero";

import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";
import FeaturedProperties from "@/components/FeaturedProperties";

// Home page component
export default function HomePage() {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <FeaturedProperties />
      <HomeProperties />
    </>
  );
}
