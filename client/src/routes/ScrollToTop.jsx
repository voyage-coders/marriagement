import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loading from './Loading'; // Import the Loading component

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scroll effect
      });

      // Hide the loading spinner after scrolling
      setTimeout(() => {
        setLoading(false);
      }, 500); // Delay to allow smooth scroll
    };

    // Show loading spinner initially
    setLoading(true);
    handleScroll();

    // Handle route changes
    return () => {
      setLoading(true); // Re-show loading spinner on route change
    };
  }, [pathname]);

  return loading ? <Loading /> : null; // Show Loading component if loading is true
};

export default ScrollToTop;
