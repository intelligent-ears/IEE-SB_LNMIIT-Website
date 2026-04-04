import Bgimg from "../assets/collegebg.jpg";
import { Link } from "react-router-dom";

const HomeImg = () => {
  return (
    <div className="hidden md:block mb-10 relative">
      {/* Background */}
      <div
        className="w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${Bgimg})`,
          filter: "brightness(0.40)",
        }}
      />

      {/* Gradient top overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/60 via-transparent to-[#0a1128]/80 pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 text-center pt-16">
        {/* Badge */}
        <span
          className="inline-block px-4 py-1 mb-6 text-sm font-semibold tracking-widest uppercase
            bg-white/10 border border-white/30 rounded-full backdrop-blur-sm animate-fadeIn"
        >
          IEEE Student Branch · LNMIIT Jaipur
        </span>

        {/* Heading */}
        <h1 className="font-extrabold text-5xl md:text-6xl lg:text-[5rem] leading-[1.15] tracking-tight mb-6 font-['Inter',sans-serif] animate-fadeInUp">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-cyan-300 animate-text-gradient-loop">
            IEEE SB LNMIIT Jaipur
          </span>
        </h1>

        {/* Sub-heading */}
        <p className="text-lg md:text-xl text-white/85 max-w-2xl mb-10 animate-fadeInUp delay-200">
          Creating technology for people and people for technology — join us in
          shaping the future.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap justify-center animate-fadeInUp delay-300">
          <Link to="/contact">
            <button className="px-8 py-3.5 font-semibold text-base rounded-lg bg-blue-600 hover:bg-blue-700
              transition-all duration-200 shadow-lg shadow-blue-900/40">
              Contact Us
            </button>
          </Link>
          <Link to="/about">
            <button className="px-8 py-3.5 font-semibold text-base rounded-lg border-2 border-white/60
              hover:bg-white hover:text-gray-900 transition-all duration-200 backdrop-blur-sm">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60 text-xs animate-bounce-slow">
        <span className="tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default HomeImg;
