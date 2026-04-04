import { useState } from "react";

// eslint-disable-next-line react/prop-types
const EventCard = ({ date, eventName, eventDescription, eventVenue }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group p-4 my-3 text-left">
      <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center
        bg-white rounded-xl shadow-sm border border-gray-100 hover-lift p-5
        border-l-4 border-l-blue-600 transition-all duration-300">

        {/* Date badge */}
        <div className="w-full lg:w-1/5 shrink-0">
          <span className="inline-block px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold
            rounded-full border border-blue-200">
            {date}
          </span>
        </div>

        {/* Event details */}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{eventName}</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            {isExpanded
              ? eventDescription
              : `${eventDescription.substring(0, 150)}...`}
          </p>
          <button
            className="mt-2 text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show Less ↑" : "Event Details ↓"}
          </button>
        </div>

        {/* Venue */}
        <div className="w-full lg:w-1/5 shrink-0 lg:text-right">
          <span className="inline-flex items-center gap-1 text-gray-600 text-sm font-medium">
            <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {eventVenue}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
