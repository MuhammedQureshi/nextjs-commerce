interface CourseCardProps {
    title: string;
    description: string;
    price: string;
    imageUrl: string;
    productUrl: string;
    buttonText: string;
  }
  
  const CourseCard: React.FC<CourseCardProps> = ({ title, description, price, imageUrl, productUrl, buttonText }) => {
  return (
    <div className="max-w-md rounded-lg shadow-lg text-center flex flex-col justify-between overflow-hidden bg-white border border-gray-200">
      <img className="w-full h-[20rem] object-cover" src={imageUrl} alt={title} />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <p className="mt-4 text-gray-600">{description}</p>
        <div className="flex items-center justify-center gap-4 ">
        <p className="mt-4 bg-[#FFD050] text-black block rounded-md py-3 px-6">{price}</p>
        <a
          href={productUrl}
          className="block mt-4 bg-[#28a745] hover:bg-[#218838] text-white text-center py-3 px-6 rounded"
        >
          {buttonText}
        </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
