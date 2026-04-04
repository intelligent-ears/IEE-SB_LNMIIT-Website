import { useState } from 'react';
import { Link } from 'react-router-dom';

const StayInTouch = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSignUp = () => {
    if (validateEmail(email)) {
      setError('');
      setSent(true);
    } else {
      setError('Please enter a valid email address.');
    }
  };

  return (
    <section className="rounded-2xl overflow-hidden my-10">
      <div className="bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] px-8 py-14 text-white text-center">
        <p className="text-blue-300 text-sm font-semibold tracking-widest uppercase mb-3">
          Get Involved
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
          Stay in Touch
        </h2>
        <p className="text-white/70 max-w-xl mx-auto mb-8 text-base">
          We heartily welcome you to our student branch. We'd love to address
          your queries and suggestions — get the latest updates right in your inbox.
        </p>

        {!sent ? (
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20
                text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400
                backdrop-blur-sm transition-all"
            />
            <Link to="/contact" onClick={handleSignUp}>
              <button className="w-full sm:w-auto px-7 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg
                font-semibold transition-all duration-200 shadow-lg shadow-blue-900/40 whitespace-nowrap">
                Sign Up
              </button>
            </Link>
          </div>
        ) : (
          <p className="text-green-400 font-semibold text-lg">
            🎉 Thank you for signing up!
          </p>
        )}
        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}

        <div className="flex justify-center gap-6 mt-10">
          <a href="https://www.instagram.com/ieee_lnmiit/" target="_blank" rel="noreferrer"
            className="text-white/60 hover:text-pink-400 transition-colors text-sm font-medium">
            Instagram
          </a>
          <a href="https://www.linkedin.com/company/ieee-sb-lnmiit/mycompany/" target="_blank" rel="noreferrer"
            className="text-white/60 hover:text-blue-400 transition-colors text-sm font-medium">
            LinkedIn
          </a>
          <Link to="/contact" className="text-white/60 hover:text-white transition-colors text-sm font-medium">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StayInTouch;
