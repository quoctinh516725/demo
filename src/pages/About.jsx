import React from "react";
import Title from "../components/Title";
import TimeLine from "../components/TimeLine";
import PageTransition from "../components/PageTransition";
const About = () => {
  const timeLines = [
    {
      pastTime: "08/2023",
      presentTime: "Hiện nay",
      title: "Học Vấn",
      content:
        "Sinh viên ngành Công nghệ thông tin - Trường Đại học Giao Thông Vận Tải TPHCM",
    },
    {
      pastTime: "04/2024",
      presentTime: "07/2024",
      title: "Bất đầu học Frontend",
      content:
        "Tự học HTML, CSS, JavaScript cơ bản Tìm hiểu qua FreeCodeCamp, YouTube, F8,...",
    },
    {
      pastTime: "08/2024",
      presentTime: "Hiện nay",
      title: "Tiếp cận ReactJS và các kiến thức nâng cao",
      content:
        "Bắt đầu học và sử dụng ReactJS để làm SPA ,kết hợp Tailwind CSS để tạo UI đẹp mắt, responsive ,tìm hiểu về hooks, props/state, component-based,...",
    },
    {
      pastTime: "01/2025",
      presentTime: "Hiện nay",
      title: "Tham gia và làm các dự án",
      content:
        "Tìm kiếm và tham gia các dự án liên quan để áp dụng kiến thức đã học",
    },
  ];
  return (
    <PageTransition>
      <div className="p-10 sm:p-16 sm:pb-2">
        <Title title="Thông Tin Cá Nhân" icon="fa-solid fa-user" />
        <div className="mt-10 flex flex-col sm:flex-row gap-8 text-sm text-gray-300">
          <div className="w-full sm:w-1/2">
            <p className="text-xl font-bold mb-4 text-center sm:text-left">
              Mục Tiêu
            </p>
            <p>
              Tôi hướng đến việc không ngừng học hỏi và nâng cao kỹ năng trong
              lĩnh vực Frontend, đặc biệt với ReactJS và Tailwind CSS. Mục tiêu
              của tôi là xây dựng các giao diện web hiện đại, mượt mà và thân
              thiện với người dùng, đồng thời luôn cập nhật công nghệ mới để
              hoàn thiện bản thân và đóng góp hiệu quả cho các dự án thực tế.
            </p>
            <p className="text-xl font-bold my-4 text-center sm:text-left">
              Sở Thích
            </p>
            <p>
              Tôi yêu thích khám phá công nghệ mới, đọc sách phát triển bản thân
              và tham gia các hoạt động thể thao như chạy bộ và cầu lông. Ngoài
              ra, tôi cũng thường tham gia các dự án cá nhân nhỏ để rèn luyện kỹ
              năng lập trình và tư duy giải quyết vấn đề.
            </p>
          </div>
          <div className="w-full sm:w-1/2 mt-5 sm:mt-0">
            <div>
              <p className="text-xl font-bold mb-4 text-center sm:text-left">
                Thông tin cá nhân
              </p>
              <p>
                <span className="font-bold">Tên: </span> Nguyễn Quốc Tính
              </p>
              <p>
                <span className="font-bold">Địa chỉ: </span>Tô Ký, Quận 12, TP.
                HCM
              </p>
              <p>
                <span className="font-bold">Số điện thoại: </span>0362773313
              </p>
              <p>
                <span className="font-bold">Email: </span> tinhnq212@gmail.com
              </p>
            </div>
            <div>
              <p className="text-xl font-bold mt-10 mb-3 text-center sm:text-left">
                Chứng Chỉ
              </p>
              <p className="font-semibold">Toiec: 600</p>
              <p className="font-semibold">
                F8 Certification For Frontend Developer
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-10">
          {timeLines.map((timeLine, index) => (
            <TimeLine
              key={index}
              pastTime={timeLine.pastTime}
              presentTime={timeLine.presentTime}
              title={timeLine.title}
              content={timeLine.content}
            />
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
