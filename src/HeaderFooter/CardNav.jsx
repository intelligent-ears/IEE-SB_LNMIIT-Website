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
          {(items || []).map((item, idx) =>
            item.children ? (
              <div key={idx} className="nav-dropdown">
                <span className="cursor-pointer hover:text-blue-600 transition-colors nav-dropdown-trigger">
                  {item.label}
                  <svg className="nav-dropdown-caret" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </span>
                <div className="nav-dropdown-menu">
                  <div className="nav-dropdown-menu-inner">
                    {item.children.map((child, cidx) => (
                      <Link key={cidx} to={child.href} className="nav-dropdown-item">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={idx} to={item.href} className="cursor-pointer hover:text-blue-600 transition-colors">
                {item.label}
              </Link>
            )
          )}
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
          {(items || []).map((item, idx) =>
            item.children ? (
              <div key={idx} className="mobile-nav-group">
                <span className="mobile-nav-link mobile-nav-group-label">{item.label}</span>
                {item.children.map((child, cidx) => (
                  <Link
                    key={cidx}
                    to={child.href}
                    className="mobile-nav-link mobile-nav-sublink"
                    onClick={() => setIsHamburgerOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={idx}
                to={item.href}
                className="mobile-nav-link"
                onClick={() => setIsHamburgerOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
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
