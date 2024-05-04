import React, { useRef, useEffect, useState } from "react";
import NameCard from "./Namecard";
import SkillsShowcase from "./Skills";
import Timeline from "./Timeline";
import BackToTopButton from "../../ui/BackToTopBtn";
import { useSpring, animated } from "react-spring";

const Intro: React.FC = () => {
  const [isSkillsVisible, setSkillsVisible] = useState(false);
  const [isTimelineVisible, setTimelineVisible] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  // Intersection observer for SkillsShowcase
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSkillsVisible(true);
          }
        });
      },
      { threshold: 0.9 } // Trigger animation when 50% of SkillsShowcase is in view
    );
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  // Intersection observer for Timeline
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimelineVisible(true);
          }
        });
      },
      { threshold: 1 } // Trigger animation when 90% of Timeline is in view
    );
    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }
    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  const timelineProps = useSpring({
    opacity: isTimelineVisible ? 1 : 0,
    from: { opacity: 0 },
    delay: 1500,
    config: { duration: 2500 },
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <NameCard />
      <div className="scrollable-content">
        <div ref={skillsRef}>{isSkillsVisible && <SkillsShowcase />}</div>
        <div ref={timelineRef}>
          {isTimelineVisible && (
            <animated.div style={timelineProps}>
              <Timeline />
            </animated.div>
          )}
        </div>
      </div>
      <BackToTopButton />
    </div>
  );
};

export default Intro;
