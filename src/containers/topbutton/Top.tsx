import React, { useEffect } from "react";

export default function Top() {
  function TopEvent() {
    if (typeof window !== 'undefined') {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  }

  // When the user scrolls down 20px from the top of the document, show the button
  function scrollFunction() {
    if (typeof window !== 'undefined') {
      const topButton = document.getElementById("topButton");
      if (topButton) {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          topButton.style.visibility = "visible";
        } else {
          topButton.style.visibility = "hidden";
        }
      }
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => scrollFunction();
      const handleLoad = () => scrollFunction();

      window.addEventListener('scroll', handleScroll);
      window.addEventListener('load', handleLoad);

      // Initial call
      scrollFunction();

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('load', handleLoad);
      };
    }
  }, []);

  // When the user clicks on the button, scroll to the top of the document
  return (
    <button onClick={TopEvent} id="topButton" title="Go to top">
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
}
