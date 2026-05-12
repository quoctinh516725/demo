import React from "react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center">
      <div className="bg-[#17181b] text-white rounded-xl p-4 h-full w-full relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4  left-4   text-white text-3xl font-bold hover:text-blue-500"
        >
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <img
          src={project.img}
          alt={project.title}
          className="w-full sm:h-2/4 h-[200px]  object-cover rounded-lg mb-4 mt-10"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="mb-4 text-md">{project.description}</p>
          <ul className="text-md space-y-1">
            <li className="flex items-start gap-2">
              <i className="fa-regular fa-clock mt-1 text-white"></i>
              <span>
                <strong>Thời gian:</strong> {project.time}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <i className="fa-solid fa-users mt-1 text-white"></i>
              <span>
                <strong>Team:</strong> {project.teamsize}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <i className="fa-solid fa-user-gear mt-1 text-white"></i>
              <span>
                <strong>Vai trò:</strong> {project.role}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <i className="fa-solid fa-code mt-1 text-white"></i>
              <span>
                <strong>Công nghệ:</strong> {project.stack}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <i className="fa-solid fa-code mt-1 text-white"></i>
              <span>
                <strong>Github:</strong> <a className="text-blue-500 font-bold" target="_blank" href={project.link}>Ấn vào đây</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
