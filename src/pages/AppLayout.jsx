import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AppLayout() {
  return (
    <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="h-full bg-lime-50 tracking-wide text-lime-700">
        <main className="relative flex h-full w-full items-center justify-center">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
