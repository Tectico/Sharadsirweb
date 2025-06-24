import React, { useEffect, useRef } from "react";
import gsap from "gsap";
const MovingCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.x,
          y: e.y,
          duration: 0.8, // Faster response for smoother effect
          ease: "power2.out",
        });
        
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  return (
    <div
      ref={cursorRef}
      className="fixed hidden lg:block top-0 rounded-full h-10 w-10 z-[999] bg-[#f217ee67] pointer-events-none shadow-[4px_8px_17px_#ff00ea]"
    ></div>
  );
};

export default MovingCursor;
