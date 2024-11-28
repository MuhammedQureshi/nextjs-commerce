import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="relative bg-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-10">
        {/* Kaaba Image */}
        <div className="absolute bottom-0 right-0 w-[30rem]">
          <Image src="/kaaba.png" alt="Kaaba" layout="responsive" width={400} height={100} />
        </div>
        
        {/* Pattern Image */}
        <div className="absolute top-[2rem] left-10 w-[20rem]">
          <Image src="/pattern.png" alt="Pattern" layout="responsive" width={200} height={200} />
        </div>

        {/* Arabic Text Image
        <div className="w-32 md:w-40">
          <Image src="/arabic-text.png" alt="Arabic Text" layout="responsive" width={150} height={150} />
        </div> */}

        
      </div>

      {/* Main Content */}
      <div className="relative max-w-8sxl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section - Image */}
        <div className="w-full flex justify-center">
          <Image
            src="/quran-student.jpg"
            alt="Person Reading Quran"
            className="rounded-lg shadow-lg"
            width={600}
            height={400}
          />
        </div>

        {/* Right Section - Text Content */}
        <div className="text-center md:text-left">
            <h1 className="text-base uppercase font-extrabold text-green-800 leading-snug">
              Abdeens Academy
            </h1>
          <h2 className="text-3xl font-medium mt-4 text-black">
            Your Path to Mastering the Quran and Arabic
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Welcome to Abdeens Academy, offering specialized courses in Quran
            memorization with Tajweed and Arabic language mastery. Our programs
            focus on deepening your understanding of the Quran and enhancing your
            Arabic skills.
          </p>

          {/* Feature Sections */}
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-green-700">
                Flexible Timings
              </h3>
              <p className="text-gray-600">
                Learn at your own pace, anytime. Our online Quran and Arabic courses are available
                24/7 for Muslims.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-700">
                Expert Quran Tutors
              </h3>
              <p className="text-gray-600">
                Our qualified Hafiz instructors provide live 1-on-1 sessions, offering personalized
                guidance to help you achieve your learning goals.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <button className="bg-green-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
