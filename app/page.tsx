import AboutUs from "components/about-us";
import WhyChooseUs from "components/choose-us";
import Courses from "components/course/courses";
import Cta from "components/cta";
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
      <Courses />
      <Cta 
        text="Do Not Let Shaitan Delay You From Starting To Learn Your Deen." 
        buttonText="Get Started Now" 
      />
      <div className="-mt-[10rem]">
        <WhyChooseUs />
      </div>
      {/* <ThreeItemGrid />
      <Carousel /> */}
      {/* <Footer /> */}
    </>
  );
}
