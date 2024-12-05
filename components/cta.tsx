interface CtaProps {
  text: string;
  buttonText: string;
}

export default function Cta({ text, buttonText }: CtaProps) {
  return (
    <div 
      className='max-w-4xl mx-auto -mt-[4rem] mb-20 flex flex-col md:flex-row justify-between items-center gap-6 p-8 rounded-xl relative overflow-hidden bg-cover bg-center shadow-lg'
      style={{ 
        backgroundImage: "url('/cta-one_bg.png'), linear-gradient(to right, #10b981, #fbbf24)"
      }}
    >
      {/* Content */}
      <h2 className='text-white font-medium text-xl md:text-2xl max-w-xl relative z-10 text-center md:text-left'>
        {text}
      </h2>
      <button className='bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition-colors relative z-10 whitespace-nowrap'>
        {buttonText}
      </button>
    </div>
  )
}