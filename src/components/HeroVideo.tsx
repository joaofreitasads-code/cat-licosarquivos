import React, { useRef, useState } from 'react';

export const HeroVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Fallback if autoplay with audio is restricted
          if (videoRef.current) {
            videoRef.current.muted = false;
            videoRef.current.play();
            setIsPlaying(true);
          }
        });
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div
      className="hero-video"
      style={{ margin: '22px auto 20px', maxWidth: '310px', width: '100%' }}
    >
      <div
        id="vslWrap"
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '9 / 16',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid var(--line)',
          boxShadow: '0 0 26px var(--glow)',
          background: 'rgb(0, 0, 0)',
        }}
      >
        <video
          ref={videoRef}
          id="vsl"
          src="/videos/vsl.mp4"
          poster="/images/vsl-poster.webp"
          playsInline
          preload="none"
          controls={isPlaying}
          onClick={handlePause}
          onEnded={() => setIsPlaying(false)}
          style={{
            position: 'absolute',
            inset: '0px',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            backgroundColor: '#000',
          }}
        />

        {!isPlaying && (
          <button
            type="button"
            id="vslPlay"
            aria-label="Assistir ao vídeo"
            onClick={handlePlay}
            style={{
              position: 'absolute',
              inset: '0px',
              width: '100%',
              height: '100%',
              border: '0px',
              cursor: 'pointer',
              background:
                'radial-gradient(420px 300px at 50% 40%, rgba(231, 183, 101, 0.14), rgba(0, 0, 0, 0.55))',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              zIndex: 10,
            }}
          >
            <span
              style={{
                width: '66px',
                height: '66px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--gold-lt), var(--gold-dp))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 28px var(--glow)',
                transition: 'transform 0.2s ease',
              }}
              className="hover:scale-110 active:scale-95"
            >
              <span
                style={{
                  borderLeft: '20px solid rgb(23, 19, 12)',
                  borderTop: '13px solid transparent',
                  borderBottom: '13px solid transparent',
                  marginLeft: '6px',
                }}
              />
            </span>
            <span
              style={{
                color: 'var(--gold-lt)',
                fontWeight: 700,
                fontSize: '0.88rem',
                letterSpacing: '0.04em',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
              }}
            >
              Assistir ao vídeo
            </span>
          </button>
        )}
      </div>
    </div>
  );
};
