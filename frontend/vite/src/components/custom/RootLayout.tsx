import Navbar from "@/components/custom/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "@/components/custom/Footer";

const RootLayout = () => {
  return (
    <div className="px-4 sm:px-8">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
