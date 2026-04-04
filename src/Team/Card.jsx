import React from "react";

const Card = ({ Facultyname, photo, description = "", position = "", linkedin = "" }) => {
  return (
    <div className="group flex flex-col items-center p-4 pb-8">
      {/* Avatar */}
      <div className="relative w-44 h-44 mb-4 rounded-full border-4 border-white shadow-lg
        group-hover:scale-105 transition-transform duration-300 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={photo}
          alt={Facultyname}
        />
        {/* Hover overlay for LinkedIn */}
        {linkedin && (
          <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href={linkedin} target="_blank" rel="noreferrer" className="text-white hover:text-blue-200 hover:scale-110 transition-transform">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        )}
      </div>

      <h5 className="text-base font-bold text-gray-900 text-center">{Facultyname}</h5>

      {position && (
        <span className="mt-1 px-3 py-0.5 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100">
          {position}
        </span>
      )}

      {description && (
        <p className="mt-2 text-center text-gray-400 text-xs px-4 leading-relaxed">{description}</p>
      )}
    </div>
  );
};

export default Card;
