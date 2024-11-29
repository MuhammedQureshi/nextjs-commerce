import AboutUs from "components/about-us";
import Courses from "components/course/courses";
import Hero from "components/hero";

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Courses/>
      {/* <ThreeItemGrid />
      <Carousel /> */}
      {/* <Footer /> */}
    </>
  );
}
