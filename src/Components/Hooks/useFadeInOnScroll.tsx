import { useState, useEffect } from "react";
import { useSpring, SpringValue } from "react-spring";

interface FadeInStyle {
    opacity: SpringValue<number>;
    transform: SpringValue<string>;
}

const useFadeInOnScroll = (threshold: number): FadeInStyle => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const fadeIn = useSpring<FadeInStyle>({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
    });

    const handleScroll = (): void => {
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
