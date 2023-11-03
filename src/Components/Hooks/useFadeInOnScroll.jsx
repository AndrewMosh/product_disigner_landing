import { useState, useEffect } from "react";
import { useSpring } from "react-spring";

const useFadeInOnScroll = (threshold) => {
  const [isVisible, setIsVisible] = useState(false);

  const fadeIn = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
  });

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return fadeIn;
};

export default useFadeInOnScroll;
