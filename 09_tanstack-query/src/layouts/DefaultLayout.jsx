import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function DefaultLayout() {
  return (
    <div id="default-layout">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}

export default DefaultLayout;
