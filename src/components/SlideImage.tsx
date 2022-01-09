import { nanoid } from "nanoid";
import { useState, useEffect, useRef } from "react";
import { dataTypeSlide } from "../types/slide";

const slideData = [
  { path: "/images/coffee.jpg", description: "cà phê" },
  { path: "/images/cocktail.jpg", description: "cocktail" },
  { path: "/images/ice-cream.jpg", description: "kem dâu" },
];

const SlideImage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef(0);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(
      () =>
        setActiveIndex((prevIndex) =>
          prevIndex === slideData.length - 1 ? 0 : prevIndex + 1
        ),
      3000
    );
    return () => {
      resetTimeout();
    };
  }, [activeIndex]);

  const nextSlide = () => {
    setActiveIndex((prev: number) =>
      prev === slideData.length - 1 ? 0 : (prev = prev + 1)
    );
  };
  const prevSlide = () => {
    setActiveIndex((prev: number) =>
      prev === 0 ? slideData.length - 1 : (prev = prev - 1)
    );
  };
  const gotoSlide = (i: number) => {
    setActiveIndex(i);
  };

  return (
    <>
      <div className="slides-container">
        {slideData.map((item: dataTypeSlide, i: number) => {
          return (
            <div key={nanoid()}>
              {/*k thay doi cac muc trong mang nen key dung luon index (mac du noi chung la k nen dung nen dung id tu data) */}
              <img
                src={item.path}
                alt="test"
                className={activeIndex === i ? "slide-active" : "slide"}
              />
              <span
                className={
                  activeIndex === i ? "text slide-active" : "text slide"
                }
              >
                {item.description}
              </span>
            </div>
          );
        })}
        <button className="slide-btn" id="btn-prev" onClick={() => prevSlide()}>
          ‹
        </button>
        <button className="slide-btn" id="btn-next" onClick={() => nextSlide()}>
          ›
        </button>
        <div id="dot-contain">
          {slideData.map((item: dataTypeSlide, i: number) => {
            return (
              <span
                onClick={() => gotoSlide(i)}
                className={activeIndex === i ? "dot-active" : "dot"}
              ></span>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SlideImage;
