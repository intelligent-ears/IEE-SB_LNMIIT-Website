import instaLogo from "../assets/instaLogo.svg";
import linkedIn from "../assets/LinkedInLogo.svg";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";

const QUICK_LINKS = [
  { to: "/",        label: "Home"       },
  { to: "/about",   label: "About Us"   },
  { to: "/team",    label: "Team"       },
  { to: "/event",   label: "Events"     },
  { to: "/contact", label: "Contact Us" },
];

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white mt-16">
      {/* Gradient accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600" />

      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand column */}
        <div className="flex flex-col gap-4">
          <img src={logo} alt="IEEE Logo" className="w-36 brightness-0 invert opacity-90" />
          <p className="text-zinc-400 text-sm leading-relaxed">
            IEEE Student Branch, LNMIIT Jaipur — Creating technology for people
            and people for technology.
          </p>
          <p className="text-zinc-500 text-xs">
            LNMIIT, Rupa ki Nangal, Post Sumel,<br />Via Jamdoli, Jaipur, Rajasthan
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase text-zinc-400 mb-5">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            {QUICK_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-zinc-300 hover:text-white text-sm transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase text-zinc-400 mb-5">
            Follow Us
          </h3>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/ieee_lnmiit/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-zinc-300 hover:text-pink-400 transition-colors text-sm"
            >
              <span className="p-2 rounded-lg bg-white/5 group-hover:bg-pink-500/10 transition-colors">
                <img src={instaLogo} alt="Instagram" className="w-5 h-5" />
              </span>
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/ieee-sb-lnmiit/mycompany/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-zinc-300 hover:text-blue-400 transition-colors text-sm"
            >
              <span className="p-2 rounded-lg bg-white/5 group-hover:bg-blue-500/10 transition-colors">
                <img src={linkedIn} alt="LinkedIn" className="w-5 h-5" />
              </span>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-zinc-800 py-5 text-center text-zinc-500 text-xs">
        Copyright © 2024 IEEE Student Branch, LNMIIT · All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;