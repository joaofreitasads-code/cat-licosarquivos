import React, { useRef } from 'react';

interface MarqueeItem {
  id?: string | number;
  title: string;
  img: string;
}

interface MarqueeSliderProps {
  items: MarqueeItem[];
  style?: React.CSSProperties;
  reverse?: boolean;
  speedSeconds?: number;
}

export const MarqueeSlider: React.FC<MarqueeSliderProps> = ({
  items,
  style,
  reverse = false,
  speedSeconds = 35,
}) => {
  const viewRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (viewRef.current) {
      const scrollAmount = 320;
      viewRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Quadruple items to ensure seamless infinite loop across all display sizes
  const displayItems = [...items, ...items, ...items, ...items];

  const animationName = reverse ? 'marqueeScrollRight' : 'marqueeScrollLeft';

  return (
    <div className="marquee" style={style}>
      <button
        className="mq-btn prev cursor-pointer z-20"
        type="button"
        aria-label="Anterior"
        onClick={() => scroll('left')}
      >
        ‹
      </button>

      <div
        ref={viewRef}
        className="mq-view overflow-x-hidden scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div
          className="mq-track"
          style={{
            animation: `${animationName} ${speedSeconds}s linear infinite`,
            animationPlayState: 'running',
            willChange: 'transform',
          }}
        >
          {displayItems.map((item, idx) => (
            <div
              key={`${item.title}-${idx}`}
              className="mq-item flex-shrink-0 select-none"
            >
              <img
                alt={item.title}
                loading="eager"
                decoding="async"
                draggable={false}
                src={item.img}
                className="w-full h-full object-cover block select-none pointer-events-none"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.includes('/thumbnails/')) {
                    target.src = target.src.replace('/thumbnails/', '/images/');
                  } else if (target.src.includes('/images/')) {
                    target.src = target.src.replace('/images/', '/thumbnails/');
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className="mq-btn next cursor-pointer z-20"
        type="button"
        aria-label="Próximo"
        onClick={() => scroll('right')}
      >
        ›
      </button>
    </div>
  );
};
