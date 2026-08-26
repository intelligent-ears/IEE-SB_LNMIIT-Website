import instaLogo from "../assets/instaLogo.svg";
import linkedIn from "../assets/LinkedInLogo.svg";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";

const QUICK_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/team", label: "Team" },
  { to: "/event", label: "Events" },
  { to: "/aps", label: "IEEE AP-S Chapter" },
  { to: "/contact", label: "Contact Us" },
];

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white">
      {/* Gradient accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600" />

      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand column */}
        <div className="flex flex-col gap-4 items-center text-center">
          <img src={logo} alt="IEEE Logo" className="w-36 mix-blend-luminosity opacity-80 brightness-150" />
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
        <div className="flex flex-col items-center">
          <h3 className="text-sm font-semibold tracking-widest uppercase text-zinc-400 mb-5">
            Follow Us
          </h3>
          <div className="flex flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/ieee_lnmiit/"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
              className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-pink-500/20 transition-colors"
            >
              {/* Instagram SVG */}
              <svg className="w-5 h-5 text-zinc-300 group-hover:text-pink-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/ieee-sb-lnmiit/mycompany/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-blue-500/20 transition-colors"
            >
              {/* LinkedIn SVG */}
              <svg className="w-5 h-5 text-zinc-300 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-zinc-800 py-5 text-center text-zinc-500 text-xs">
        Copyright © 2026 IEEE Student Branch, LNMIIT · All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;