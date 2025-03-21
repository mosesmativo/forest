
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      const startTime = Date.now();
      const startValue = 0;
      const increment = end / (duration / 16);
      
      const updateCount = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function - easeOutQuart
        const easedProgress = 1 - Math.pow(1 - progress, 4);
        
        countRef.current = Math.min(startValue + Math.round(end * easedProgress), end);
        setCount(countRef.current);
        
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };
      
      requestAnimationFrame(updateCount);
    }
  }, [inView, end, duration]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div className={`${inView ? 'animate-count-up' : 'opacity-0 translate-y-full'}`}>
        {prefix}{count.toLocaleString()}{suffix}
      </div>
    </div>
  );
};

export default AnimatedCounter;
