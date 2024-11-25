export default function Hero() {
    return (
      <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/1.jpg')" }}>
        {/* Hero Section */}
        <main className="relative z-10 flex flex-col items-center justify-center text-center text-white pt-[80px] h-[calc(100vh-80px)]">
          <h2 className="text-2xl font-bold md:text-6xl">
            Become a <span className="text-yellow-400">Hafiz</span> in 2 years or<br />
            <span className="text-yellow-400">Master Arabic</span> with Sheikh Abdeen
          </h2>
          <p className="mt-6 max-w-2xl text-lg">
            Daily guidance, self-paced videos, and motivating group lessons to help you excel with Tajweed.
          </p>
          <button className="px-6 py-3 mt-8 text-base font-semibold text-black bg-yellow-400 rounded-xl hover:bg-yellow-300">
            Start Your Journey Today
          </button>
        </main>
      </div>
    );
  }
  