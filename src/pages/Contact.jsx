import React from "react";
import Title from "../components/Title";
import { toast } from "react-toastify";
import PageTransition from "../components/PageTransition";

const Contact = () => {
  const handleSubmit = (e) => {
    // Handle form submission logic here
    toast.success("Gửi liên hệ thành công!");
    e.preventDefault();
  };
  return (
    <PageTransition>
      <div className="p-10 sm:p-16">
        <Title title="Liên hệ" icon="fa-solid fa-message" />
        <div className="flex flex-col sm:flex-row gap-8 mt-10">
          <div className="p-3 sm:p-5 bg-gray-600 w-full sm:w-1/3 rounded-xl">
            <p className=" flex items-center mb-4 ">
              <span className="text-white mr-2">
                <i class="fa-solid text-xl text-white fa-location-dot p-3  bg-black/10 rounded-full"></i>
              </span>
              <div>
                <h2 className="text-xl text-white font-semibold mb-2">
                  Địa chỉ
                </h2>
                <p className="text-xl text-white"> Tô Ký, Quận 12, TPHCM</p>
              </div>
            </p>
            <p className=" flex items-center mb-4 ">
              <span className="text-white mr-2">
                <i class="fa-solid text-xl text-white fa-phone-volume p-3  bg-black/10 rounded-full"></i>
              </span>
              <div>
                <h2 className="text-xl text-white font-semibold mb-2">
                  Số điện thoại
                </h2>
                <p className="text-xl text-white">0362773313</p>
              </div>
            </p>

            <p className=" flex items-center mb-4 ">
              <span className="text-white mr-2">
                <i class="fa-solid text-xl text-white fa-envelope p-3  bg-black/10 rounded-full"></i>
              </span>
              <div>
                <h2 className="text-xl text-white font-semibold mb-2">Gmail</h2>
                <p className="text-xl text-white">tinhnq212@gmail.com</p>
              </div>
            </p>
            <div className="w-full h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31345.94061318306!2d106.6172416!3d10.8691456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1749488573048!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ borderRadius: "20px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="p-3 sm:p-4 bg-gray-600 w-full sm:w-2/3 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Họ và Tên"
                  className="outline-none w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Địa chỉ email"
                  className="outline-none w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Tiêu đề chính"
                  className="outline-none w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Nội dung"
                  className="outline-none w-full p-2 border rounded h-32"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-1/2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                  Gửi
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
