const Card = ({ title, description, img, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-full flex flex-col bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
    >
      <div className="w- h-40 overflow-hidden">
        <img
          src={img}
          className="w-full h-full object-cover rounded-t-xl transition-transform duration-500 hover:scale-110"
          alt={title}
        />
      </div>

      <div className="flex flex-col gap-4 p-6 text-white">
        <h1 className="text-center text-3xl font-extrabold tracking-tight">
          {title}
        </h1>
        <p className="text-sm text-gray-200 text-center">{description}</p>
      </div>
    </div>
  );
};

export default Card;
