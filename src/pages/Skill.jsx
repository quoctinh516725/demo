import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import PageTransition from "../components/PageTransition";

const Skill = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkillIndex, setHoveredSkillIndex] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  const technicalSkills = [
    {
      name: "JavaScript",
      point: 80,
      icon: "fa-brands fa-js",
      library: "jQuery, React",
      pointLi: 70,
    },
    {
      name: "TypeScript",
      point: 80,
      icon: "fa-solid fa-code",
      library: "Type Safety in React",
      pointLi: 80,
    },
    {
      name: "Java",
      point: 70,
      icon: "fa-brands fa-java",
      library: "Spring Boot",
      pointLi: 70,
    },
    {
      name: "C++",
      point: 70,
      icon: "fa-solid fa-laptop-code",
      library: "STL, Qt",
      pointLi: 50,
    },
    { name: "PHP", point: 80, icon: "fa-brands fa-php", library: "Laravel" },
    {
      name: "Python",
      point: 80,
      icon: "fa-brands fa-python",
      library: "Django, Flask",
      pointLi: 80,
    },
  ];

  const softSkills = [
    { name: "Giao tiếp", icon: "fa-solid fa-comments" },
    { name: "Làm việc nhóm", icon: "fa-solid fa-people-group" },
    { name: "Giải quyết vấn đề", icon: "fa-solid fa-lightbulb" },
    { name: "Tư duy phản biện", icon: "fa-solid fa-brain" },
    { name: "Quản lý thời gian", icon: "fa-solid fa-clock" },
    { name: "Linh hoạt & thích nghi", icon: "fa-solid fa-person-running" },
  ];

  return (
    <PageTransition>
      <div className="p-10 sm:p-16">
        <Title title="Kỹ Năng" icon="fa-solid fa-file-lines" />

        <p className="mt-10 text-sm text-gray-300">
          Tôi có nền tảng vững chắc về HTML, CSS và JavaScript, cùng với kinh
          nghiệm sử dụng jQuery để xử lý các tương tác DOM linh hoạt. Tôi thành
          thạo Tailwind CSS trong việc xây dựng giao diện hiện đại, tối ưu và
          chuẩn responsive. Ngoài ra, tôi sử dụng ReactJS để phát triển các ứng
          dụng web có cấu trúc rõ ràng, tương tác mượt mà và dễ mở rộng.
        </p>

        {/* Technical Skills */}
        <div className="mt-10">
          <h3 className="text-lg text-white font-semibold mb-4">
            <i className="fa-solid fa-code mr-2 text-[#00A3E1]" />
            Kỹ năng chuyên môn
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-blue-500/10 p-8 rounded-2xl">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center justify-between gap-4 group"
                onMouseEnter={() => setHoveredSkillIndex(index)}
                onMouseLeave={() => setHoveredSkillIndex(null)}
              >
                {/* Tooltip absolute */}
                {hoveredSkillIndex === index && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#1f2937] text-gray-100 text-xs px-3 py-1 rounded-md shadow-lg z-10">
                    <p className="text-sm text-gray-300 flex items-center justify-between gap-2 w-full ">
                      <div className="flex gap-2 items-center">
                        <i className={`${skill.icon} text-[#00A3E1]`} />
                        <p>{skill.library}</p>
                      </div>
                      <span className="text-sm text-gray-300 min-w-10">
                        {skill.pointLi}%
                      </span>
                    </p>

                    {/* Progress bar */}
                    <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                      <div
                        className="h-2 bg-[#00A3E1] rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.pointLi}%` : "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Tên + phần trăm */}
                <p className="text-sm text-gray-300 flex items-center justify-between gap-2 w-full ">
                  <div className="flex gap-2 items-center">
                    <i className={`${skill.icon} text-[#00A3E1]`} />
                    <p>{skill.name}</p>
                  </div>
                  <span className="text-sm text-gray-300 min-w-10">
                    {skill.point}%
                  </span>
                </p>

                {/* Progress bar */}
                <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className="h-2 bg-[#00A3E1] rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.point}%` : "0%",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-12">
          <h3 className="text-lg text-white font-semibold mb-4">
            <i className="fa-solid fa-user-check mr-2 text-[#00A3E1]" />
            Kỹ năng mềm
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-blue-500/10 p-4 rounded-xl text-gray-300 text-sm"
              >
                <i className={`${skill.icon} text-[#00A3E1]`} />
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Skill;
