import { getProducts } from 'lib/shopify'; // Fetch function for Shopify products
import CourseCard from './course-card';

export const metadata = {
  title: 'Home',
  description: 'Explore our popular courses in Quran and Arabic.',
};

export default async function Courses() {
  // Fetch products directly in the Server Component
  const products = await getProducts({ sortKey: 'TITLE', reverse: false, query: '' });

  // Limit the fetched products to the first 3
  const limitedProducts = products.slice(0, 3);

  return (
    <div className="p-20 bg-[#f9f5e7]" style={{ backgroundImage: "url('/courses-one_bg.png')" }}>
      <h1 className="text-4xl font-bold text-center text-[#2c2c2c] mb-8">Our Quran & Arabic Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {limitedProducts.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            description={course.description}
            price={`${course.priceRange.minVariantPrice.amount} ${course.priceRange.minVariantPrice.currencyCode}`}
            imageUrl={course.featuredImage?.url || '/placeholder.jpg'}
            productUrl={`/products/${course.id}`}
            buttonText='Add to Cart'
          />
        ))}
      </div>
    </div>
  );
}
