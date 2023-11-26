import AboutUs from "@/components/shared/landing-components/AboutUs";
import HowWeWork from "@/components/shared/landing-components/HowWeWork";
import Introduction from "@/components/shared/landing-components/Introduction";
import Questions from "@/components/shared/landing-components/Questions";
import NavBar from "@/components/widgets/nav-bar/NavBar";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="min-h-screen font-nunito text-black-800">
        <Introduction />
        <HowWeWork />
        <AboutUs />
        <Questions />
      </main>
      <div className="h-80"></div>
    </>
  );
}
