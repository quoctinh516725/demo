import React, { useState } from "react";
import Title from "../components/Title";
import Card from "../components/Card";
import PageTransition from "../components/PageTransition";
import ProjectModal from "../components/ProjectModal";

import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.jpg";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Booking Care",
      description:
        "Booking Care là website đặt lịch chăm sóc da, giúp người dùng tra cứu, chọn dịch vụ, chuyên gia và thời gian hẹn nhanh chóng.",
      img: project1,
      time: "02/2025-04/2025",
      teamsize: "4 người",
      role: "Frontend Developer",
      stack:
        "ReactJS, Tailwind CSS, JavaScript, CSS, HTML, Java, Springboot, MySql",
      link: "https://github.com/quoctinh516725/BookingCare",
    },
    {
      title: "Hair Salon Booking",
      description:
        "Hair Salon Booking là một trang web cung cấp các dịch vụ cắt tóc, duỗi, nhuộm. Hỗ trợ người dùng đặt lịch, tra cứu, quản lý lịch đặt",
      img: project2,
      time: "09/2024-12/2024",
      teamsize: "3 người",
      role: "Frontend Developer",
      stack: "HTML/CSS, JavaScript, Python, Django, MySql",
      link: "https://github.com/VuNguyen76/Hair_Salon",
    },
    {
      title: "Ecommerce Website",
      description:
        "Forever là một website thương mại điện tử hỗ trợ người dùng chọn và mua quần áo, tra cứu, lọc sản phẩm, thanh toán, quản lý đơn hàng,...",
      img: project3,
      time: "01/2025-03/2025",
      teamsize: "1 người",
      role: "FullStack Developer",
      stack: "ReactJS, Tailwind CSS, JavaScript, NodeJS, ExpressJS, MySql",
      link: "https://github.com/quoctinh516725/Ecommerce-Project/",
    },
  ];

  return (
    <PageTransition>
      <div className="p-10 sm:p-16">
        <Title title="Dự Án Cá Nhân" icon="fa-solid fa-briefcase" />
        <div className="mt-10 grid lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <Card
              key={project.title}
              {...project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
        {/* Modal hiển thị khi người dùng chọn project */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </PageTransition>
  );
};

export default Project;
