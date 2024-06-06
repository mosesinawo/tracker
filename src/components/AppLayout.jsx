import Footer from "./Footer";
import { Outlet  } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <>
      <Header />
      <main className="relative dark:bg-darkMood transition-all">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default AppLayout;
