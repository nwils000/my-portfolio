import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import anime from "animejs";

const FadeInWhenVisible: React.FC = ({ children }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<anime.AnimeInstance | null>(null);
  const [triggerOnce, setTriggerOnce] = useState(false);
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: triggerOnce,
    threshold: 0.4,
  });

  const combinedRef = (node: HTMLDivElement) => {
    targetRef.current = node;
    inViewRef(node);
  };

  useEffect(() => {
    if (targetRef.current && animationRef.current) {
      animationRef.current.pause();
    }

    if (inView && targetRef.current) {
      animationRef.current = anime({
        targets: targetRef.current,
        opacity: [0, 1],
        duration: 3000,
      });
    } else if (!inView && targetRef.current) {
      if (animationRef.current) {
        targetRef.current.style.opacity = "0"; // Force opacity to 0

        // Save original animation settings
        const originalSettings = { ...animationRef.current };

        // Reverse animation with a quicker duration
        animationRef.current = anime({
          ...originalSettings,
          opacity: [1, 0],
          duration: 200, // set the duration as you want for reverse
        });
      }
    }
  }, [inView]);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        const isMobile = window.innerWidth <= 767; // Define mobile width threshold as desired
        setTriggerOnce(isMobile);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="opacity-0" ref={combinedRef}>
      {children}
    </div>
  );
};

export default FadeInWhenVisible;
