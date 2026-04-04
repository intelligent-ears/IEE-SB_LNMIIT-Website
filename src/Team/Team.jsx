import Card from "./Card";
import {
  map_cont_ctr,
  map_event_mng,
  map_fac_arr,
  map_ieee_sb,
  map_wie,
  map_webdevs,
  map_functional_team,
  slides,
  years,
} from "./Data.js";
import Carousel from "./Carousel";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useEffect, useState } from "react";

const SECTIONS = (year) => {
  const base = [
    { title: "Faculty Mentors",        data: map_fac_arr[year],   cols: "md:grid-cols-3" },
    { title: "IEEE Student Branch",    data: map_ieee_sb[year],   cols: "md:grid-cols-4" },
    { title: "Women in Engineering",   data: map_wie[year],       cols: "md:grid-cols-4" },
  ];

  if (year === "2026-2027") {
    return [
      ...base,
      { title: "Functional Team", data: map_functional_team[year], cols: "md:grid-cols-4" }
    ];
  }

  return [
    ...base,
    { title: "Web Development Team",   data: map_webdevs[year],   cols: "md:grid-cols-4" },
    { title: "Content Creator Team",   data: map_cont_ctr[year],  cols: "md:grid-cols-3" },
  ];
};

const Team = () => {
  const [year, setYear] = useState("2026-2027");

  useEffect(() => { window.scrollTo(0, 0); });

  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0f1c4d] to-[#1e3a8a] pt-36 pb-16 px-6 text-center text-white">
        <p className="text-blue-300 text-sm font-semibold tracking-widest uppercase mb-3">
          People Behind the Branch
        </p>
        <h1 className="font-extrabold text-4xl md:text-5xl mb-3 animate-fadeInUp">
          LNMIIT IEEE Team
        </h1>
        <p className="text-white/70 animate-fadeInUp delay-200">Meet the amazing people who make it all happen.</p>
      </div>

      {/* Year selector */}
      <div className="flex items-center gap-3 px-6 pt-8 pb-2 max-w-6xl mx-auto">
        <span className="text-gray-600 text-sm font-medium">Year:</span>
        <FormControl sx={{ minWidth: 150 }} size="small">
          <InputLabel id="year-label">Year</InputLabel>
          <Select
            labelId="year-label"
            id="year"
            value={year}
            label="Year"
            onChange={(e) => setYear(e.target.value)}
          >
            {years.map((v, i) => (
              <MenuItem key={i} value={v}>{v}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* Team sections */}
      {SECTIONS(year).map(({ title, data, cols }) => (
        <div key={title} className="max-w-6xl mx-auto px-6 py-10">
          <h4 className="text-2xl font-bold text-gray-800 mb-2">{title}</h4>
          <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-indigo-500 rounded mb-6" />
          <div className={`grid sm:grid-cols-2 ${cols} gap-2`}>
            {data?.map((f, idx) => (
              <Card
                key={idx}
                Facultyname={f.Name}
                photo={f.photo}
                description={f.description}
                position={f.position}
                linkedin={f.linkedin}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Event management (conditional) */}
      {year !== "2026-2027" && map_event_mng[year]?.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 py-10">
          <h4 className="text-2xl font-bold text-gray-800 mb-2">Event Management Team</h4>
          <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-indigo-500 rounded mb-6" />
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
            {map_event_mng[year]?.map((f, idx) => (
              <Card
                key={idx}
                Facultyname={f.Name}
                photo={f.photo}
                description={f.description}
                position={f.position}
                linkedin={f.linkedin}
              />
            ))}
          </div>
        </div>
      )}

      {/* Photo carousel */}
      <div className="border-t border-gray-100 mt-4 py-10 bg-gray-50">
        <div className="flex justify-center items-center h-full">
          <div className="max-w-5xl w-full px-4">
            <Carousel autoSlide={true}>
              {[...slides.map((s, idx) => <img key={idx} src={s} className="rounded-xl" />)]}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
