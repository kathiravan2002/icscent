import React, { useState, useEffect } from 'react';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 bg-[#881B1B] p-3 rounded-full shadow-lg hover:bg-[#881B1B] border-2 border-white transition duration-300 z-50"
      aria-label="Scroll to Top"
    >
      <FaRegArrowAltCircleUp className="w-6 h-6 cursor-pointer text-white" />
    </button>
  );
};

export default ScrollToTopButton;
