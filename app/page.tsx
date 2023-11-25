import AboutUs from "@/components/shared/landing-components/AboutUs";
import Introduction from "@/components/shared/landing-components/Introduction";
import NavBar from "@/components/widgets/nav-bar/NavBar";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className=" min-h-screen font-nunito text-black-800">
        <Introduction />
        <AboutUs />
      </main>
    </>
  );
}
