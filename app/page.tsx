import NavBar from "@/components/widgets/nav-bar/NavBar";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="font-roboto flex min-h-screen flex-col items-center justify-between p-24"></main>
    </>
  );
}
