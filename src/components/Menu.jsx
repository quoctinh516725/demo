import { useState } from "react";
import avatar from "../assets/avatar.jpg";
import { Link } from "react-router-dom";

const Menu = ({ showMenu, setShowMenu }) => {
  const paths = [
    {
      path: "/",
      name: "Trang chủ",
      icon: "fa-solid fa-house",
    },
    {
      path: "/about",
      name: "Sơ yếu lý lịch",
      icon: "fa-solid fa-user",
    },
    {
      path: "/skill",
      name: "Kỹ năng",
      icon: "fa-solid fa-file-lines",
    },
    {
      path: "/project",
      name: "Dự án ",
      icon: "fa-solid fa-diagram-project",
    },
    {
      path: "/contact",
      name: "Liên hệ",
      icon: "fa-solid fa-envelope",
    },
  ];
  return (
    <div
      className={`sm:hidden z-10 fixed  top-0 left-0  w-full h-full flex flex-col  transition-all duration-300 ${
        showMenu ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="text-white flex flex-col gap-5 bg-black  h-full">
        <div className="pt-32 flex flex-col items-center gap-5">
          <div className="h-40 w-40 rounded-full overflow-hidden object-cover">
            <img src={avatar} alt="" className="w-full h-full" />
          </div>
          <h1 className="prata-regular text-white text-xl  sm:text-4xl font-bold">
            NGUYỄN QUỐC <span className="text-blue-500 ">TÍNH</span>
          </h1>{" "}
        </div>

        <ul>
          {paths.map((path, index) => (
            <li
              key={index}
              className=" hover:bg-gray-800 border-b-[1px] border-gray-500"
              onClick={() => setShowMenu(false)}
            >
              <Link
                key={index}
                to={path.path}
                className="flex px-5 py-3 items-center gap-4 "
              >
                <i className={`${path.icon} min-w-6`}></i>
                {path.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
