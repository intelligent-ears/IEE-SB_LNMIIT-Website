import workshop from "../assets/workshop.webp";
import hackathon from "../assets/hackathon.webp";
import podcast from "../assets/podcast.webp";
import informativeTours from "../assets/Informative_Tours.webp";
import first from "../assets/first.webp";
import second from "../assets/second.webp";
import webinar from "../assets/webinar.jpg";
import { Link } from "react-router-dom";
import { EventCardContent } from "./EventData.js";
import { useEffect } from "react";

const CATEGORIES = [
  {
    img: workshop,
    title: "Workshops",
    desc: "IEEE SB organizes informative workshops covering multiple fields.",
    color: "from-blue-500 to-blue-700",
  },
  {
    img: hackathon,
    title: "Hackathons",
    desc: "IEEE SB conducts hackathons to create healthy competition and knowledge sharing.",
    color: "from-orange-500 to-red-600",
  },
  {
    img: podcast,
    title: "Podcasts",
    desc: "Gain knowledge through IEEE SB's dynamic podcasts fostering student success.",
    color: "from-purple-500 to-indigo-600",
  },
  {
    img: informativeTours,
    title: "Informative Tours",
    desc: "IEEE SB travels to informative centers full of new technologies to help students learn.",
    color: "from-green-500 to-teal-600",
  },
];

const FEATURED = [
  { img: first,   label: "Workshops",  to: "/event/workshop"  },
  { img: second,  label: "Hackathon",  to: "/event/hackathon" },
  { img: webinar, label: "Webinar",    to: "/event/webinar"   },
];

const Event = () => {
  useEffect(() => { window.scrollTo(0, 0); });

  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0f1c4d] to-[#1e3a8a] pt-36 pb-16 px-6 text-center text-white">
        <p className="text-blue-300 text-sm font-semibold tracking-widest uppercase mb-3">
          Community & Learning
        </p>
        <h1 className="font-extrabold text-4xl md:text-5xl mb-4 animate-fadeInUp">
          Events
        </h1>
        <p className="text-white/70 max-w-xl mx-auto animate-fadeInUp delay-200">
          Explore what IEEE SB does — from workshops and hackathons to podcasts and tours.
        </p>
      </div>

      {/* Section heading */}
      <div className="max-w-6xl mx-auto px-6 mt-14 mb-4">
        <p className="text-gray-700 text-3xl font-bold">WHAT WE LOVE TO DO</p>
        <div className="h-1 w-14 bg-gradient-to-r from-blue-600 to-indigo-500 rounded mt-3" />
      </div>

      {/* Category cards */}
      <div className="max-w-6xl mx-auto px-6 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {CATEGORIES.map(({ img, title, desc, color }) => (
          <div
            key={title}
            className="group relative rounded-2xl overflow-hidden shadow-md hover-lift bg-white border border-gray-100"
          >
            <div className="relative h-44 overflow-hidden">
              <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className={`absolute inset-0 bg-gradient-to-t ${color} opacity-60`} />
            </div>
            <div className="p-5">
              <p className="font-bold text-lg text-gray-900">{title}</p>
              <p className="text-gray-500 text-sm mt-1 leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Work */}
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <p className="text-gray-700 text-3xl font-bold">SOME OF OUR FEATURED WORK</p>
        <div className="h-1 w-14 bg-gradient-to-r from-blue-600 to-indigo-500 rounded mt-3" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {FEATURED.map(({ img, label, to }) => (
          <Link key={label} to={to}>
            <div
              className="relative h-72 rounded-2xl overflow-hidden shadow-lg hover-lift bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white font-bold text-2xl">{label}</p>
                <p className="text-blue-300 text-sm font-medium mt-1">Explore →</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Past Events */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <p className="text-gray-700 text-3xl font-bold mb-2">PAST EVENTS</p>
        <div className="h-1 w-14 bg-gradient-to-r from-blue-600 to-indigo-500 rounded mb-8" />
        <div className="flex flex-col gap-5">
          {EventCardContent.map((event, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start gap-0 bg-white rounded-2xl shadow-sm
                border border-gray-100 overflow-hidden hover-lift"
            >
              <img
                className="object-cover w-full md:w-60 h-52 md:h-auto shrink-0"
                src={event.photo}
                alt={event.title}
              />
              <div className="flex flex-col justify-center p-6">
                <h5 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h5>
                <p className="text-gray-500 text-sm leading-relaxed">{event.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Event;
