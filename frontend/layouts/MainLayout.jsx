import { Link, Outlet } from "react-router-dom";
import Navbar from "../src/components/NavBar";

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <Navbar/>

      <main className="mt-16 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;