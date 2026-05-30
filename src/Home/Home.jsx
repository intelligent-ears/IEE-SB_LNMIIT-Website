import EventCard from "./EventCard";
import Header from "./Header";
import firstImg from '../assets/first.webp'
import secondImg from '../assets/second.webp'
import thirdImg from '../assets/third.webp'
import fourthImg from '../assets/fourth.webp'
import cross from '../assets/cross.svg'
import prev from '../assets/prev.svg'
import frwd from '../assets/frwd.svg'
import StayInTouch from "./StayTouch";
import { EventData } from "./eventData";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ACTIVITIES = [
  {
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "WORKSHOPS",
    desc: "Informative and practical, teaching skills across multiple tech fields.",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "HACKATHONS",
    desc: "Empower your skills — compete, innovate quickly, and excel with peers.",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    title: "TALKS",
    desc: "Dynamic talks from industry experts fostering student success.",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [slideNumber, setSlideNumber] = useState(1);
  const [show, setShow] = useState(false);
  const images = [firstImg, secondImg, thirdImg, fourthImg];

  const frwdSlider = () => setSlideNumber(n => n < 4 ? n + 1 : 1);
  const prevSlider = () => setSlideNumber(n => n > 1 ? n - 1 : 4);

  useEffect(() => { window.scrollTo(0, 0); });

  return (
    <div className="flex flex-col w-full relative -top-10">

      {/* About section - Premium Split Layout */}
      <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 flex flex-col justify-center items-start">
            <h2 className="text-sm font-bold tracking-[0.2em] text-blue-600 mb-4 uppercase">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-8">
              Driving Technical <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Excellence since 2017.
              </span>
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              IEEE's core purpose is to foster technological innovation and excellence for the benefit 
              of humanity. We at LNMIIT have our own student branch, an amalgamation of 
              faculty members and enthusiastic students developing technologies for a better future.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              The branch offers endless educational, technical, and professional 
              opportunities to supercharge your student skill set.
            </p>
            <button
              onClick={() => navigate("/about")}
              className="px-8 py-3.5 bg-gray-900 hover:bg-black text-white font-bold rounded-full
                transition-transform hover:-translate-y-1 shadow-lg shadow-gray-900/30"
            >
              Discover More
            </button>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-blue-500 rounded-3xl blur-3xl opacity-20 transform -rotate-6"></div>
            <img src={images[0]} alt="LNMIIT IEEE" className="relative z-10 w-full h-[500px] object-cover rounded-3xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* What We Love - Glass Cards */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto text-center">
          <Header title="WHAT WE LOVE TO DO" />
          <p className="text-slate-500 max-w-2xl mx-auto mt-4 text-lg">
            We exist to create meaningful experiences and organize highly technical events to lift up our members.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {ACTIVITIES.map(({ icon, title, desc }, idx) => (
              <div
                key={title}
                className={`relative group bg-white rounded-3xl p-10 text-left transition-all duration-300 hover:-translate-y-2
                  shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] overflow-hidden border border-slate-100`}
              >
                {/* Decorative glowing orb inside card */}
                <div className="absolute -right-6 -top-6 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 text-blue-600 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </div>
                <h4 className="relative z-10 font-bold text-2xl text-slate-900 mb-4">{title}</h4>
                <p className="relative z-10 text-slate-600 leading-relaxed text-[17px]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Header title="UPCOMING EVENTS" />
          </div>
          <div className="space-y-6">
            {EventData.map((event) => (
              <EventCard
                key={event.id}
                date={event.date}
                eventName={event.eventName}
                eventDescription={event.eventDescription}
                eventVenue={event.eventVenue}
              />
            ))}
            {EventData.length === 0 && (
              <div className="text-center p-12 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-slate-500 text-lg">We are currently cooking up our next big event! Check back soon.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-6 md:px-12 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em] text-blue-400 mb-4 uppercase">Moments</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-4">Gallery</h3>
            <div className="w-16 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
            {images.map((img, i) => (
              <div key={i} className="relative group rounded-2xl overflow-hidden aspect-square cursor-pointer" onClick={() => { setSlideNumber(i + 1); setShow(true); }}>
                <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="gallery" />
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Fullscreen Lightbox Image Slider Overlay */}
        <div className={`fixed inset-0 z-[100] bg-black/95 flex flex-col p-6 transition-opacity duration-300 ${!show ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          <div className="flex justify-between items-center mb-4">
            <span className="text-white/60 font-semibold tracking-widest">{slideNumber} / 4</span>
            <button onClick={() => setShow(false)} className="p-2 hover:bg-white/10 rounded-full transition">
              <img src={cross} className="w-8 h-8" alt="close" />
            </button>
          </div>
          <div className="flex flex-1 justify-center gap-4 md:gap-12 items-center">
            <button onClick={prevSlider} className="p-3 md:p-5 bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-md transition-colors">
              <img src={prev} className="w-6 h-6 md:w-8 md:h-8" alt="prev" />
            </button>
            <img src={images[slideNumber - 1]} className="max-h-[80vh] w-auto max-w-[80vw] rounded-xl object-contain shadow-2xl" alt="slide" />
            <button onClick={frwdSlider} className="p-3 md:p-5 bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-md transition-colors">
              <img src={frwd} className="w-6 h-6 md:w-8 md:h-8" alt="next" />
            </button>
          </div>
        </div>
      </section>

      {/* Media & Maps */}
      <section className="py-24 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Watch Us */}
          <div>
            <Header title="WATCH US" />
            <p className="text-slate-500 mb-8 mt-2 text-center md:text-left">Look back at the highlights of our journey.</p>
            <div className="rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-white border border-slate-100 p-2 transform transition hover:scale-[1.02]">
              <iframe
                src="https://www.youtube.com/embed/JLhvUR8ZB4A"
                title="YouTube overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="aspect-video w-full rounded-2xl"
              />
            </div>
          </div>

          {/* Visit Us */}
          <div className="flex flex-col">
            <Header title="VISIT US" />
            <div className="flex flex-wrap gap-3 mb-8 mt-2 justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                LNMIIT Campus
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                9:00 AM – 5:00 PM
              </span>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-white border border-slate-100 p-2 flex-grow min-h-[300px] h-[300px] lg:h-auto transform transition hover:scale-[1.02]">
              <iframe
                className="w-full h-full rounded-2xl border-0"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28455.72883926444!2d75.923489!3d26.936289!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dba21e8a1d1c9%3A0x5ab565cce4d44c2b!2sThe%20LNM%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sus!4v1716198338491!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
                title="Google Maps Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Action CTA Block */}
      <div className="bg-white px-6">
        <StayInTouch />
      </div>
      
    </div>
  );
};

export default Home;
