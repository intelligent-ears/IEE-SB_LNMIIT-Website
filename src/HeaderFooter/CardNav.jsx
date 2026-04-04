import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CardNav.css';

const CardNav = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  baseColor = '#fff',
  buttonBgColor,
  buttonTextColor,
  ctaText = 'Get Started',
  onCtaClick,
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <div className={`card-nav-container ${className}`}>
      <header className="card-nav-header" style={{ backgroundColor: baseColor }}>
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt={logoAlt} className="nav-logo" />
          </Link>
        </div>

        <div className="card-nav-labels hidden md:flex gap-14 items-center font-bold text-gray-800 tracking-wide text-[19px]">
          {(items || []).map((item, idx) => (
            <Link key={idx} to={item.href} className="cursor-pointer hover:text-blue-600 transition-colors">
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}
          onClick={toggleHamburger}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <button
          className="card-nav-cta-button"
          onClick={onCtaClick}
          style={{
            backgroundColor: buttonBgColor,
            color: buttonTextColor,
          }}
        >
          {ctaText}
        </button>
      </header>

      {/* Mobile Nav */}
      {isHamburgerOpen && (
        <nav className="mobile-nav-drawer" style={{ backgroundColor: baseColor }}>
          {(items || []).map((item, idx) => (
            <Link
              key={idx}
              to={item.href}
              className="mobile-nav-link"
              onClick={() => setIsHamburgerOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button
            className="mobile-nav-cta-button"
            onClick={() => {
              setIsHamburgerOpen(false);
              if (onCtaClick) onCtaClick();
            }}
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
          >
            {ctaText}
          </button>
        </nav>
      )}
    </div>
  );
};

export default CardNav;
