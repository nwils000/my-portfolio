import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import anime from "animejs";

const FadeInWhenVisible: React.FC = ({ children }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const combinedRef = (node: HTMLDivElement) => {
    targetRef.current = node;
    inViewRef(node);
  };

  useEffect(() => {
    if (inView && targetRef.current) {
      anime({
        targets: targetRef.current,
        opacity: [0, 1],
        duration: 3000,
      });
    }
  }, [inView]);

  return (
    <div className="opacity-0" ref={combinedRef}>
      {children}
    </div>
  );
};

export default FadeInWhenVisible;
