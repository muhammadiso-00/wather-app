import { Link, Outlet } from "react-router-dom";
import Logo from "/logo.png";
import Switch from "/switch-light.svg";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Modal from "../components/Modal"

const Layout = () => {
  const [theme, setTheme] = useState("light");
  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      toast.success("Dark modega o'zgartirildi !");
    } else if (theme === "dark") {
      setTheme("light");
      toast.success("Light modega o'zgartirildi !");
    }
  };
  useEffect(() => {
    localStorage.setItem("themes", theme);
  }, [theme]);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="pt-[20px] pl-[20px] pr-[20px] flex-wrap  max-w-[1200px] mx-auto my-0 ">
      <div className="justify-between flex mb-[30px]">
        <div className="logo flex items-start ">
          <Link to={"/"} className="flex items-center cursor-pointer content-start gap-[20px]">
            <img src={Logo} alt="Logo" loading="lazy" />
            <h1 className="text-[25px] text-[#4793FF] font-bold hidden phone:inline">
              Vue Weather
            </h1>
          </Link>
        </div>
        <div className="nav flex items-center gap-[20px] phone:gap-[10px]">
          <img src={Switch} alt="" loading="lazy" onClick={handleTheme} />
          <button
            onClick={() => document.getElementById("my_modal_2").showModal()}
            className=" pl-[15px] phone:pl-[20px] pr-[25px] phone:pr-[45px] py-[9px] text-[14px] phone:text-[16px] bg-[#4793FF33] rounded-[10px] font-medium"
          >
            Shahar tanlash
          </button>
         <Modal/>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
