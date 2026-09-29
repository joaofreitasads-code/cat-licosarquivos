import React, { useState, useEffect } from 'react';

const buyers = [
  { name: 'Jackson', city: 'Curitiba, PR', plan: 'Plano Completo', time: 'há 4 minutos' },
  { name: 'Mariana Santos', city: 'Belo Horizonte, MG', plan: 'Plano Completo', time: 'há 2 minutos' },
  { name: 'Pe. André Luis', city: 'São Paulo, SP', plan: 'Plano Completo', time: 'há 7 minutos' },
  { name: 'Rodrigo Mendonça', city: 'Goiânia, GO', plan: 'Plano Completo', time: 'há 11 minutos' },
  { name: 'Cláudia Regina', city: 'Florianópolis, SC', plan: 'Plano Completo', time: 'há 3 minutos' },
  { name: 'Felipe Alencar', city: 'Fortaleza, CE', plan: 'Plano Completo', time: 'há 9 minutos' },
  { name: 'Diácono Marcos', city: 'Rio de Janeiro, RJ', plan: 'Plano Completo', time: 'há 1 minuto' },
];

export const LiveToast: React.FC = () => {
  const [currentBuyer, setCurrentBuyer] = useState(buyers[0]);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Show after initial delay
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        const nextIndex = Math.floor(Math.random() * buyers.length);
        setCurrentBuyer(buyers[nextIndex]);
        setVisible(true);
      }, 800);
    }, 11000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      className={`buy-toast ${visible ? 'show' : ''}`}
      id="buyToast"
      role="status"
      aria-live="polite"
    >
      <span className="bt-ico">✓</span>
      <span className="bt-txt">
        <span id="btMsg">
          <b>{currentBuyer.name}</b> de {currentBuyer.city} comprou o {currentBuyer.plan}
        </span>
        <span className="bt-time" id="btTime">{currentBuyer.time}</span>
      </span>
      <button
        type="button"
        className="bt-close hover:text-white transition-colors"
        id="btClose"
        aria-label="Fechar"
        onClick={() => setDismissed(true)}
      >
        ✕
      </button>
    </div>
  );
};
