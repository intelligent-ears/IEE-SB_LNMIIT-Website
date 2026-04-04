import { useEffect } from "react";
import ieelogo from "../assets/IEEElogo.png";
import wielogo from "../assets/wielogo.webp";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const STATS = [
  { value: "60+", label: "Years of IEEE Excellence" },
  { value: "500+", label: "Active Members" },
  { value: "50+", label: "Events Per Year" },
];

const FAQS = [
  {
    q: "What is the mission of IEEE?",
    a: "The mission of IEEE is to foster technological innovation and excellence for the benefit of humanity through education, leadership development, and community service.",
  },
  {
    q: "What types of educational programmes does IEEE offer?",
    a: "IEEE offers a range of educational programmes including workshops, college readiness sessions, distinguished talks, and career exploration opportunities.",
  },
  {
    q: "How to join us?",
    a: "There are recruitments every year for various positions and a general body is formed every year. Stay tuned to our social media for announcements.",
  },
];

const About = () => {
  useEffect(() => { window.scrollTo(0, 0); });

  return (
    <>
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-[#0f1c4d] to-[#1e3a8a] pt-36 pb-16 px-6 text-center text-white">
        <p className="text-blue-300 text-sm font-semibold tracking-widest uppercase mb-3 animate-fadeIn">
          Who We Are
        </p>
        <h1 className="font-extrabold text-4xl md:text-5xl mb-4 animate-fadeInUp">
          Know About Us
        </h1>
        <p className="text-white/70 max-w-xl mx-auto text-base animate-fadeInUp delay-200">
          Building technology for people and people for technology at LNMIIT Jaipur.
        </p>
      </div>

      {/* Stats Row */}
      <div className="bg-white border-b border-gray-100 py-10 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {STATS.map(({ value, label }) => (
            <div key={label} className="hover-lift rounded-2xl border border-gray-100 shadow-sm p-6">
              <p className="text-4xl font-extrabold gradient-text mb-1">{value}</p>
              <p className="text-gray-500 text-sm font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About IEEE */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 px-8 py-14 max-w-6xl mx-auto">
        <div className="flex-1 flex justify-center">
          <img src={ieelogo} alt="IEEE Logo" className="w-full max-w-[260px] drop-shadow-md" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">About IEEE</h2>
          <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-indigo-500 rounded mb-5" />
          <p className="text-gray-500 text-base leading-relaxed">
            IEEE is the world's largest professional association dedicated to advancing technological
            innovation and excellence for the benefit of humanity. IEEE and its members inspire a
            global community through highly cited publications, conferences, technology standards,
            and professional educational activities. It is a leading developer of international
            standards that underpin many of today's telecommunications, IT and power generation
            products and services.
          </p>
        </div>
      </div>

      {/* About WIE */}
      <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-10 px-8 py-14 max-w-6xl mx-auto bg-gray-50 rounded-3xl">
        <div className="flex-1 flex justify-center">
          <img src={wielogo} alt="WIE Logo" className="w-full max-w-[260px] drop-shadow-md" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">About WIE</h2>
          <div className="h-1 w-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded mb-5" />
          <p className="text-gray-500 text-base leading-relaxed">
            Women in Engineering within IEEE play a pivotal role in advancing innovation and
            diversity. IEEE Women in Engineering (WIE) is one of the largest international
            organizations dedicated to promoting women engineers and scientists. WIE fosters
            collaboration, mentorship, and leadership development — offering scholarships,
            workshops, and networking events to break barriers in traditionally male-dominated
            industries and create a more inclusive engineering community.
          </p>
        </div>
      </div>

      {/* More About Us */}
      <div className="bg-gradient-to-br from-[#0f1c4d] to-[#1e3a8a] mt-16 px-6 py-14">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-white font-bold text-2xl mb-2">More About Us</h3>
          <div className="h-0.5 w-full bg-white/10 mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { q: "Who we are?",       a: "We are a combined association of faculty members along with enthusiastic students of LNMIIT Jaipur. We strive for creating technology for the people and people for technology." },
              { q: "What we do?",       a: "We at LNMIIT believe in building technology for people. Branch activities offer numerous educational, technical, and professional opportunities through various events." },
              { q: "What we've done?",  a: "Workshops in popular areas, distinguished lectures, student competitions and challenging developer sprints are regular events we pursue with highest energy." },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="text-white font-semibold text-lg mb-3">{q}</p>
                <p className="text-white/70 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-6 mt-16 pb-16">
        <h3 className="text-gray-900 font-bold text-2xl mb-1">Frequently Asked Questions</h3>
        <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-indigo-500 rounded mb-3" />
        <p className="text-gray-400 text-sm mb-8">
          Can't find an answer? Reach us via the Contact page.
        </p>
        <div className="flex flex-col gap-3">
          {FAQS.map(({ q, a }, i) => (
            <Accordion key={i} sx={{ borderRadius: "12px !important", boxShadow: "0 1px 4px rgba(0,0,0,0.07)", "&:before": { display: "none" } }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} className="text-base font-semibold text-gray-800">
                {q}
              </AccordionSummary>
              <AccordionDetails className="text-gray-500 text-sm leading-relaxed">
                {a}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
