import AboutSection from "./_components/AboutSection";
import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";
import PreviousWorksSection from "./_components/PreviousWorksSection";
export default function Home() {
  return (
    <main className="">
      <div className="mx-auto w-full">
        <Header />
        <HeroSection />
        <AboutSection />
        <PreviousWorksSection />
      </div>
    </main>
  );
}
