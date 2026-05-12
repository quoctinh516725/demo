import React, { useState } from "react";
import avatar from "../assets/avatar.jpg";
import { Link, NavLink } from "react-router-dom";
import Menu from "./Menu";
const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  console.log(showMenu);
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
  const socials = [
    {
      path: "#",
      icon: "fa-brands fa-facebook",
    },
    {
      path: "#",
      icon: "fa-brands fa-twitter",
    },
    {
      path: "#",
      icon: "fa-brands fa-instagram",
    },
    {
      path: "#",
      icon: "fa-brands fa-linkedin",
    },
    {
      path: "#",
      icon: "fa-brands fa-github",
    },
  ];
  return (
    <div className="flex border-gray-500">
      <div
        onClick={handleMenu}
        className="sm:hidden z-20 fixed  top-0 right-0 p-4 cursor-pointer"
      >
        <i className="fa-solid fa-bars text-white text-3xl"></i>
      </div>
      <div className="hidden sm:flex h-full flex-col">
        <img src={avatar} alt="avatar" className="w-[300px] rounded-sm" />
        <div className="flex flex-col h-full">
          <nav className=" text-xl text-gray-400">
            <ul>
              {paths.map((path, index) => (
                <li
                  key={index}
                  className=" hover:bg-gray-800 border-b-[1px] border-gray-500"
                >
                  <NavLink
                    key={index}
                    to={path.path}
                    className={({ isActive }) =>
                      `flex px-5 py-3 items-center gap-4 ${
                        isActive ? "bg-gray-500 text-white" : ""
                      }`
                    }x  
                  >
                    <i className={`${path.icon} min-w-6`}></i>
                    {path.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex justify-between p-5 text-gray-400">
            {socials.map((social, index) => (
              <Link key={index} to={social.path}>
                <i className={social.icon}></i>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Sidebar;
