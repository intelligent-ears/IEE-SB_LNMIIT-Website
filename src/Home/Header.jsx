// eslint-disable-next-line react/prop-types
const Header = ({ title, centered = true }) => {
  return (
    <div className={`pb-6 ${centered ? "text-center flex flex-col items-center" : "text-left"}`}>
      <h2 className="text-slate-900 text-4xl md:text-5xl font-extrabold tracking-tight font-['Inter',sans-serif]">
        {title}
      </h2>
      <div className={`section-header-line mt-4`} />
    </div>
  );
};

export default Header;