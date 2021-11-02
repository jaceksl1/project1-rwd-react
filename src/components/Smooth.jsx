import React, { useEffect, useState } from "react";

export default function SmoothScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const element = <i class="fas fa-arrow-up"></i>;

  // Top: 0 takes us all the way back to the top of the page

  const SmoothScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="btn-smoothScrollToTop">
      {isVisible && (
        <div onClick={SmoothScrollToTop} className="btn-up">
          <h3 className="arrow">{element}</h3>
        </div>
      )}
    </div>
  );
}
