import React, { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  img: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="tcar select-none">
      <button
        type="button"
        className="tcar-btn prev cursor-pointer"
        aria-label="Depoimento Anterior"
        onClick={prev}
      >
        ‹
      </button>

      <button
        type="button"
        className="tcar-btn next cursor-pointer"
        aria-label="Próximo Depoimento"
        onClick={next}
      >
        ›
      </button>

      <div className="tcar-view">
        <div
          className="tcar-track"
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% + 0px))`,
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="tslide"
              style={{
                background: 'transparent',
                borderWidth: 'medium',
                borderStyle: 'none',
                borderColor: 'currentcolor',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 'none',
              }}
            >
              <img
                alt={`Depoimento de cliente satisfeito ${t.id}`}
                loading="eager"
                decoding="async"
                draggable={false}
                src={t.img}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '16px',
                  objectFit: 'contain',
                  borderWidth: 'medium',
                  borderStyle: 'none',
                  borderColor: 'currentcolor',
                  outline: 'none',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="tcar-dots">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={currentIndex === idx ? 'on' : ''}
            aria-label={`Ir para depoimento ${idx + 1}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};
