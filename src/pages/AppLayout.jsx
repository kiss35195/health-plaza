import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Toast from "../components/Toast";
import Loader from "../components/Loader";

function AppLayout() {
  const [showToast, setShowToast] = useState(false);
  const [content, setContent] = useState("");
  const [success, setSuccess] = useState(false);

  function triggerToast(text, status = true) {
    setShowToast(true);
    setContent(text);
    setSuccess(status);

    setTimeout(() => {
      setShowToast(false);
    }, 1500);
  }

  return (
    <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="h-full bg-lime-50 tracking-wide text-lime-700">
        <main className="relative flex h-full w-full items-center justify-center">
          <Toast showToast={showToast} success={success}>
            {content}
          </Toast>
          {/* 2026/08/20 過渡畫面 by kiss */}
          <Suspense fallback={<Loader />}>
            <Outlet context={{ triggerToast }} />
          </Suspense>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
