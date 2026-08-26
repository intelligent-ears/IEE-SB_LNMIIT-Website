import { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../Team/Card";
import FacultyCard from "./FacultyCard";
import {
  heroLogo,
  awardPlaque,
  awardPhoto,
  WHAT_WE_DO,
  FACULTY,
  STUDENT_MEMBERS,
  CONTACT,
} from "./Data";

const APS = () => {
  useEffect(() => { window.scrollTo(0, 0); });

  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0f1c4d] to-[#1e3a8a] pt-36 pb-14 px-6 text-center text-white">
        <p className="text-blue-300 text-sm font-semibold tracking-widest uppercase mb-3 animate-fadeIn">
          IEEE Antennas &amp; Propagation Society
        </p>
        <h1 className="font-extrabold text-3xl md:text-5xl mb-4 animate-fadeInUp">
          LNMIIT IEEE AP-S Student Branch Chapter
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto text-base animate-fadeInUp delay-200">
          Empowering students in RF, antennas, and electromagnetics — building LNMIIT's
          presence in the global IEEE AP-S community.
        </p>
        <div className="mt-8 flex justify-center">
          <img
            src={heroLogo}
            alt="IEEE AP-S Student Branch Chapter Logo"
            className="w-full max-w-md drop-shadow-xl rounded-xl bg-white/95 p-4"
          />
        </div>
      </div>

      {/* What We Aim to Achieve */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          What We Aim to Achieve
        </h2>
        <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-indigo-500 rounded mx-auto mb-6" />
        <p className="text-gray-500 text-base leading-relaxed">
          We aim to empower students in RF and electromagnetics, build a strong IEEE AP-S
          community at LNMIIT, encourage more students to become IEEE AP-S members, and enable
          them to participate in student design contests and conferences while representing
          LNMIIT on national and international platforms.
        </p>
      </div>

      {/* What We Do */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">What We Do</h2>
            <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-indigo-500 rounded mx-auto mb-6" />
            <p className="text-gray-500 max-w-2xl mx-auto">
              We support students at every stage of their journey, from discovering RF and
              electromagnetics to contributing to the IEEE AP-S community.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {WHAT_WE_DO.map(({ title, tagline, points }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover-lift text-left">
                <h4 className="text-lg font-bold text-gray-900">
                  {title}: <span className="text-blue-600">{tagline}</span>
                </h4>
                <ul className="mt-3 flex flex-col gap-2">
                  {points.map((p, i) => (
                    <li key={i} className="text-gray-500 text-sm leading-relaxed flex gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Achievements</h2>
          <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-indigo-500 rounded mx-auto" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
          <div className="flex-1 flex flex-col sm:flex-row gap-4 justify-center">
            <img src={awardPhoto} alt="WAMS 2026 Student Design Contest award ceremony" className="rounded-xl w-full sm:w-1/2 object-cover shadow-md" />
            <img src={awardPlaque} alt="WAMS 2026 Student Design Contest winner plaque" className="rounded-xl w-full sm:w-1/2 object-cover shadow-md" />
          </div>
          <div className="flex-1 text-left">
            <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full border border-amber-100 mb-3 uppercase tracking-wide">
              Winner
            </span>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              WAMS 2026 Student Design Contest
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Our team, comprising <strong className="text-gray-700">Roopeshwar Megadula</strong>,{" "}
              <strong className="text-gray-700">Aryakumar Parmar</strong>, and{" "}
              <strong className="text-gray-700">Nandani Sharma</strong>, under the guidance of{" "}
              <strong className="text-gray-700">Dr. Jeet Ghosh</strong>, was recognized as the
              Winner of the IEEE WAMS 2026 Student Design Contest for designing, fabricating,
              and testing a low-profile wideband electromagnetic absorber.
            </p>
          </div>
        </div>
      </div>

      {/* Events */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Events</h2>
            <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-indigo-500 rounded mx-auto mb-6" />
            <p className="text-gray-500 max-w-2xl mx-auto">
              Stay tuned for talks, workshops, and design contests from the AP-S chapter.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-left">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Current Events</h4>
              <div className="h-1 w-10 bg-gradient-to-r from-blue-600 to-indigo-500 rounded mb-4" />
              <p className="text-gray-400 text-sm">
                No events are currently scheduled. Check back soon, or follow our{" "}
                <a href={CONTACT.linkedinPage} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                  LinkedIn page
                </a>{" "}
                for updates.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-left">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Past Events</h4>
              <div className="h-1 w-10 bg-gradient-to-r from-blue-600 to-indigo-500 rounded mb-4" />
              <p className="text-gray-400 text-sm">
                Highlights from past AP-S chapter activities will be featured here soon.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/event"
              className="inline-block px-5 py-2.5 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              See all IEEE SB Events →
            </Link>
          </div>
        </div>
      </div>

      {/* Faculty Members */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Faculty Members</h2>
          <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-indigo-500 rounded mx-auto" />
        </div>
        <div className="flex flex-col gap-6">
          {FACULTY.map((f) => (
            <FacultyCard key={f.Name} {...f} />
          ))}
        </div>
      </div>

      {/* Student Members */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Student Members</h2>
            <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-indigo-500 rounded mx-auto" />
          </div>
          <div className="flex flex-wrap justify-center gap-x-20 gap-y-12">
            {STUDENT_MEMBERS.map((s, idx) => (
              <div key={idx} className="w-48 max-w-full">
                <Card
                  Facultyname={s.Name}
                  photo={s.photo}
                  position={s.position}
                  linkedin={s.linkedin}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Contact</h2>
        <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-indigo-500 rounded mx-auto mb-8" />
        <div className="grid sm:grid-cols-2 gap-5 text-left max-w-2xl mx-auto">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Chapter Email</p>
            <a href={`mailto:${CONTACT.email}`} className="text-gray-800 text-sm font-medium hover:text-blue-600 transition-colors break-all">
              {CONTACT.email}
            </a>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">LinkedIn Page</p>
            <a href={CONTACT.linkedinPage} target="_blank" rel="noreferrer" className="text-gray-800 text-sm font-medium hover:text-blue-600 transition-colors">
              IEEE AP-S SBC LNMIIT
            </a>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Faculty Advisor</p>
            <a href={`mailto:${CONTACT.facultyAdvisorEmail}`} className="text-gray-800 text-sm font-medium hover:text-blue-600 transition-colors break-all">
              {CONTACT.facultyAdvisorEmail}
            </a>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Student Chair</p>
            <a href={`mailto:${CONTACT.studentChairEmail}`} className="text-gray-800 text-sm font-medium hover:text-blue-600 transition-colors break-all">
              {CONTACT.studentChairEmail}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APS;
