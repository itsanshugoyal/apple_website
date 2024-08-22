import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../utils";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth > 768 ? heroVideo : smallHeroVideo);

  const handleVideoSrc = () => {
    if (window.innerWidth > 768) {
      setVideoSrc(heroVideo);
    } else {
      setVideoSrc(smallHeroVideo);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrc);
    return () => window.removeEventListener("resize", handleVideoSrc);
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2, duration: 1 });
    gsap.to("#cta", { opacity: 1, y: 0, delay: 2, duration: 1 });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none" autoPlay playsInline={true} muted key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div id="cta" className="flex flex-col opacity-0 items-center translate-y-20">
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
