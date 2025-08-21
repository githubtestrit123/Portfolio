import Achievements from "@/Components/Achievements/Achievements";
import HeroSection from "@/Components/Herosection/HeroSection";

export default function Home() {
  return (
    <div className="font-sans">
      <HeroSection />
      <Achievements />
    </div>
  );
}
