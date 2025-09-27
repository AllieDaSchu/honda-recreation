import '../style/heroCarousel.css'
import {useState, useEffect} from "react";
import slide1L from "../assets/slide1_Homepage_Hero_Carousel_L.png"
import slide1M from "../assets/slide1_Homepage_Hero_Carousel_M.png"
import slide1S from "../assets/slide1_Homepage_Hero_Carousel_S.png"
import slide2L from "../assets/slide2_Homepage_Hero_Carousel_L.png"
import slide2M from "../assets/slide2_Homepage_Hero_Carousel_M.png"
import slide2S from "../assets/slide2_Homepage_Hero_Carousel_S.png"
import slide3L from "../assets/slide3_Homepage_Hero_Carousel_L.png"
import slide3M from "../assets/slide3_Homepage_Hero_Carousel_M.png"
import slide3S from "../assets/slide3_Homepage_Hero_Carousel_S.png"
import slide4L from "../assets/slide4_Homepage_Hero_Carousel_L.png"
import slide4M from "../assets/slide4_Homepage_Hero_Carousel_M.png"
import slide4S from "../assets/slide4_Homepage_Hero_Carousel_S.png"
import slide5L from "../assets/slide5_Homepage_Hero_Carousel_L.png"
import slide5M from "../assets/slide5_Homepage_Hero_Carousel_M.png"
import slide5S from "../assets/slide5_Homepage_Hero_Carousel_S.png"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {faPause} from '@fortawesome/free-solid-svg-icons';
import {faPlay} from '@fortawesome/free-solid-svg-icons';


const slides = [
    {
        title: "2025 Prologue",
        desc: "$7,500 Federal EV Tax Credit ends 9/30/25.* Act now",
        explore: "/explore",
        secondLink: "See Offers",
        large: slide1L,
        medium: slide1M,
        small: slide1S
    },
    {
        title: "2026 Ridgeline",
        desc: "Built for rugged terrain. Ready for the journey ahead.",
        explore: "/explore",
        secondLink: "Build",
        large: slide2L,
        medium: slide2M,
        small: slide2S
    },
    {
        title: "2026 CR-V",
        desc: "Stylish, versatile and now with a new hybrid trim",
        explore: "/explore",
        secondLink: "Build",
        large: slide3L,
        medium: slide3M,
        small: slide3S
    },
    {
        title: "2025 Accord",
        desc: "Premium comfort without compromise.",
        explore: "/explore",
        secondLink: "Build",
        large: slide4L,
        medium: slide4M,
        small: slide4S
    },
    {
        title: "2026 HR-V",
        desc: "Sleek style, effortless versatility.",
        explore: "/explore",
        secondLink: "Build",
        large: slide5L,
        medium: slide5M,
        small: slide5S
    }
];

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [paused]);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const togglePause = () => {
    setPaused((prev) => !prev);
  }

  return (
    <div className="slider-container">
      <picture className="pic-slider">
        <source media="(min-width: 1025px)" srcSet={slides[index].large} />
        <source media="(min-width: 768px)" srcSet={slides[index].medium} />
        <img
            src={slides[index].small}
            loading="lazy"
        />
      </picture>
      <div className="hero-content">
        <div className="hero-vehicle-info">
            <h2>{slides[index].title}</h2>
            <p>{slides[index].desc}</p>
            <div className="hero-actions">
                <div className="action-btns">
                    <a href={slides[index].explore} className="hero-btn">Explore</a>
                    <a href="/#" className="hero-btn">{slides[index].secondLink}</a>
                </div>
                <div className="controls">
                    <div className="dots"></div>
                    <div className="mobile-controls"></div>
                    <div className="desktop-controls">
                        <button className="ui-control play-pause" onClick={togglePause}><FontAwesomeIcon icon={paused ? faPlay : faPause} /></button>
                        <button className="ui-control prev-slide" onClick={prevSlide}><FontAwesomeIcon icon={faChevronLeft} /></button>
                        <button className="ui-control next-slide" onClick={nextSlide}><FontAwesomeIcon icon={faChevronRight} /></button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;