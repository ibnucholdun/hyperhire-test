import AboutSection from "./_components/AboutSection";
import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";
export default function Home() {
  return (
    <main className="">
      <div className="mx-auto w-full">
        <Header />
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
