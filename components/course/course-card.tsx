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
    <div className="max-w-md rounded-lg shadow-lg text-center overflow-hidden bg-white">
      <img className="w-full h-[20rem] object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
        <p className="mt-4 text-lg font-bold text-green-600">{price}</p>
        <a
          href={productUrl}
          className="block mt-4 bg-green-500 hover:bg-green-600 text-white text-center py-2 px-4 rounded"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
