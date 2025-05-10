
import React, { useEffect, useRef, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fade' | 'left' | 'right';
  delay?: number;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ 
  children, 
  className = '', 
  animationType = 'fade',
  delay = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('active');
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  let animationClass = 'scroll-animation';
  if (animationType === 'left') {
    animationClass = 'scroll-animation-left';
  } else if (animationType === 'right') {
    animationClass = 'scroll-animation-right';
  }

  return (
    <div ref={ref} className={`${animationClass} ${className}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
