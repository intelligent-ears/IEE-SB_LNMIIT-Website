import { useNavigate } from 'react-router-dom';
import CardNav from './CardNav';
import logo from '../assets/logo.webp';

const items = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Events', href: '/event' },
  { label: 'Team', href: '/team' }
];

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <CardNav
      logo={logo}
      logoAlt="IEEE SB LNMIIT"
      items={items}
      baseColor="#fff"
      menuColor="#0a1128"
      buttonBgColor="#1d4ed8"
      buttonTextColor="#fff"
      ctaText="Contact Us →"
      onCtaClick={() => navigate('/contact')}
      ease="power3.out"
    />
  );
};

export default Navbar;
