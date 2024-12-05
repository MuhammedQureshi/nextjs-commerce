interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
  }
  
  function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
      <div className="bg-[#fee197] rounded-lg p-6 flex flex-col items-center text-center">
        <div className="bg-amber-400 rounded-full p-4 mb-4">
          <img src={icon} alt={title} className="w-8 h-8" />
        </div>
        <h3 className="font-semibold text-lg mb-2 text-emerald-600">{title}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    );
  }
  
  export default function WhyChooseUs() {
    const features = [
      {
        icon: "/icons/Quran.png",
        title: "Expert Quran Tutor",
        description: "Learn from experienced Hafiz for high-quality Quran instruction."
      },
      {
        icon: "/icons/Students.png",
        title: "We Value Our Students",
        description: "We tailor our teaching to fit each student's unique needs and learning style."
      },
      {
        icon: "/icons/teacher.svg",
        title: "Male Female Teachers",
        description: "Choose from qualified male and female instructors for a comfortable experience."
      },
      {
        icon: "/icons/Flexible.png",
        title: "Flexible Timings",
        description: "24/7 online classes to suit your schedule, wherever you are."
      }
    ];
  
    return (
      <section className="py-[10rem] px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h4 className="text-emerald-600 font-medium mb-2">WHY CHOOSE US</h4>
            <h2 className="text-3xl font-bold text-black">Why Choose our Academy</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
    );
  }