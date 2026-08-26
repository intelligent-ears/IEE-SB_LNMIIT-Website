import { useState } from "react";

const FacultyCard = ({ Name, position, photo, linkedin, description = "" }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = description.length > 220;
  const shown = expanded || !isLong ? description : `${description.slice(0, 220)}…`;

  return (
    <div className="flex flex-col sm:flex-row gap-6 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover-lift">
      <div className="shrink-0 flex sm:flex-col items-center sm:items-start gap-3">
        <div className="relative w-28 h-28 rounded-full border-4 border-white shadow-lg overflow-hidden shrink-0">
          <img src={photo} alt={Name} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="flex-1 text-left">
        <h5 className="text-lg font-bold text-gray-900">{Name}</h5>
        <div className="flex items-center gap-2 mt-1 mb-3">
          <span className="px-3 py-0.5 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100">
            {position}
          </span>
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
              aria-label={`${Name} LinkedIn profile`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          )}
        </div>
        {description && (
          <p className="text-gray-500 text-sm leading-relaxed">
            {shown}
            {isLong && (
              <button
                onClick={() => setExpanded((v) => !v)}
                className="ml-2 text-blue-600 font-semibold text-xs hover:underline"
              >
                {expanded ? "Show less" : "Read more"}
              </button>
            )}
          </p>
        )}
      </div>
    </div>
  );
};

export default FacultyCard;
