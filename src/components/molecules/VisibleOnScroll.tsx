"use client";
import React, { useEffect, useRef, useState } from 'react';

interface VisibleProps {
  children: React.ReactNode;
}
export default function VisibleOnScroll(props: VisibleProps) {
  const {children} = props;
  const sectionRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null)
  const [showSection, setShowSection] = useState<boolean>(false);
  const [intersecting, setIntersecting] = useState<boolean>(false)

  useEffect(() => {
    //checks if the IntersectionObserver API is supported in the user's browser.
    if (!('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIntersecting(entry.isIntersecting)
        if (entry.isIntersecting && entry.boundingClientRect.y <= 224) {
          setShowSection(true)
        } else {
          setShowSection(false)
        }
      },
      //entire section is visible before changing its visibility style
      { threshold: 1.0 }
    );

    sectionRef.current && observer.observe(sectionRef.current);
    
    //cleanup function disconnects the IntersectionObserver, which stops observing all elements and releases any associated resources  
    return () => {  
      observer.disconnect();
    };
  }, [intersecting]);
  return (
    <section
      ref={sectionRef}
      className={
        `${showSection ? 'opacity-100 sticky top-[224px] right-0 left-0' : 'opacity-0'}`
      }
    >
      {children}
    </section>
  );
}
