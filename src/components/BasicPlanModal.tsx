import React from 'react';

interface BasicPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectComplete?: () => void;
}

export const BasicPlanModal: React.FC<BasicPlanModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="ov show"
      id="upsell"
      role="dialog"
      aria-modal="true"
      aria-labelledby="upTitle"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="ov-box">
        <button
          type="button"
          className="ov-close"
          aria-label="Fechar"
          onClick={onClose}
        >
          ×
        </button>

        <div className="ov-head">
          <span className="ov-eyebrow">Oferta Exclusiva</span>
          <h3 id="upTitle">Leve o Plano Completo por apenas R$ 18,90</h3>
        </div>

        <div className="ov-body">
          <p>
            Faça o upgrade e receba <b>todos os 6 bônus</b>, acesso vitalício e
            envio imediato.
          </p>

          <div className="ov-price">
            <span className="old">De R$ 37,90</span>
            <span className="now">Por R$ 18,90</span>
          </div>

          <a
            href="https://checkout.wiven.com.br/checkout/cmssbinuv0cf301odisgk4oou?offer=H8IYYC6"
            className="ov-btn green"
            onClick={onClose}
          >
            Sim, quero o completo por R$ 18,90
          </a>

          <a
            href="https://checkout.wiven.com.br/checkout/cmssbo7jv0ch601odk1cphgbi?offer=0HNUW3I"
            className="ov-btn red"
            onClick={onClose}
          >
            Não, prefiro o básico por R$ 10,90
          </a>
        </div>
      </div>
    </div>
  );
};
