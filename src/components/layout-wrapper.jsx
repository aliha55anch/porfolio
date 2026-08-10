import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function LayoutWrapper() {
  return (
    <>
      <Navbar />
      <main className={`flex-1 w-full flex flex-col items-center min-h-screen overflow-hidden`}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
