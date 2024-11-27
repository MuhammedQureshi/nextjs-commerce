import AboutUs from "components/about-us";
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
      {/* <ThreeItemGrid />
      <Carousel /> */}
      {/* <Footer /> */}
    </>
  );
}
