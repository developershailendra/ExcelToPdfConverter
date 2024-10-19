import React, { useEffect, useRef } from 'react';
import './HorizontalScrollSection.css'; // Import your CSS

const HorizontalScrollSection = () => {
  const scrollRef = useRef(null);

  // Handle vertical scrolling and convert it into horizontal scrolling
  useEffect(() => {
    const onScroll = (e) => {
      // Prevent the page from scrolling vertically
      e.preventDefault();

      // Scroll horizontally instead
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += e.deltaY;
      }
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener('wheel', onScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', onScroll);
      }
    };
  }, []);

  return (
    <div className="horizontal-scroll-section" ref={scrollRef}>
      {/* Content to scroll horizontally */}
      <div className="scroll-content">
        <div className="scroll-item">Item 1</div>
        <div className="scroll-item">Item 2</div>
        <div className="scroll-item">Item 3</div>
        <div className="scroll-item">Item 4</div>
        <div className="scroll-item">Item 5</div>
        {/* Add more items as needed */}
      </div>
    </div>
  );
};

export default HorizontalScrollSection;
