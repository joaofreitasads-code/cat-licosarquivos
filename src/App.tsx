import React, { useState } from 'react';
import { HeroVideo } from './components/HeroVideo.tsx';
import { MarqueeSlider } from './components/MarqueeSlider.tsx';
import { TestimonialSlider } from './components/TestimonialSlider.tsx';
import { LiveToast } from './components/LiveToast.tsx';
import { BasicPlanModal } from './components/BasicPlanModal.tsx';
import { trackInitiateCheckout } from './utils/pixel.ts';

export default function App() {
  const [isBasicModalOpen, setIsBasicModalOpen] = useState(false);

  const scrollToOffer = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Galeria 1: Santos & Anjos
  const gallerySantos = [
    { title: 'Anjo da Guarda 3D', img: '/thumbnails/anjo-da-guarda.jpg' },
    { title: 'Imagens de Santos', img: '/thumbnails/imagens-de-santos.jpg' },
    { title: 'Divino Espírito Santo', img: '/thumbnails/divino-esp-rito-santo.jpg' },
    { title: 'Nossa Senhora de Fátima', img: '/thumbnails/nossa-senhora-de-f-tima.jpg' },
    { title: 'Anjo da Guarda', img: '/images/cat2_01.webp' },
    { title: 'Imagens de Santos', img: '/images/cat2_05.webp' },
    { title: 'São Miguel com Espada', img: '/images/cat2_08.webp' },
    { title: 'Nossa Senhora', img: '/images/cat04.webp' },
  ];

  // Galeria 2: Crucifixos
  const galleryCrucifixos = [
    { title: 'Crucifixos Decorativos', img: '/thumbnails/crucifixos-decorativos-e-medalh-es.jpg' },
    { title: 'Jesus com a Cruz', img: '/thumbnails/jesus-com-a-cruz.jpg' },
    { title: 'Jesus Cross', img: '/thumbnails/jesus-cross.jpg' },
    { title: 'Jesus Crucifixion', img: '/thumbnails/jesus-crucifixion.jpg' },
    { title: 'Crucifixo Clássico', img: '/thumbnails/crucifixo-modelo-1.png' },
    { title: 'Crucifixo Altar', img: '/thumbnails/crucifixo-modelo-2.png' },
    { title: 'Crucifixo Sagrada Cruz', img: '/thumbnails/crucifixo-modelo-5.png' },
    { title: 'Medalhão Dourado', img: '/thumbnails/crucifixo-modelo-7.png' },
  ];

  // Galeria 3: Presépios & Relevos
  const galleryPresepios = [
    { title: 'Presépio Sagrada Família', img: '/thumbnails/presepio-decorativo-1.jpg' },
    { title: 'Presépio Gruta de Belém', img: '/thumbnails/presepio-decorativo-2.jpg' },
    { title: 'Presépio Estrela Guia', img: '/thumbnails/presepio-decorativo-3.jpg' },
    { title: 'Quadro em Relevo Crucifixo', img: '/thumbnails/quadro-relevo-1.jpg' },
    { title: 'Quadro em Relevo Sagrado Coração', img: '/thumbnails/quadro-relevo-2.jpg' },
    { title: 'Quadro em Relevo Santa Maria', img: '/thumbnails/quadro-relevo-3.jpg' },
    { title: 'Arte Sacra em Relevo', img: '/thumbnails/quadro-relevo-5.jpg' },
    { title: 'Quadro em Relevo Presença de Cristo', img: '/thumbnails/quadro-relevo-6.jpg' },
  ];

  // Luminárias 3D
  const galleryLuminarias = [
    { title: 'Luminária 3D Sagrada 1', img: '/images/img18.webp' },
    { title: 'Luminária 3D Sagrada 2', img: '/images/img19.webp' },
    { title: 'Luminária 3D Sagrada 3', img: '/images/img20.webp' },
    { title: 'Luminária 3D Sagrada 4', img: '/images/img21.webp' },
    { title: 'Luminária 3D Sagrada 5', img: '/images/img22.webp' },
    { title: 'Luminária 3D Sagrada 6', img: '/images/img23.webp' },
    { title: 'Luminária 3D Sagrada 7', img: '/images/img24.webp' },
    { title: 'Luminária 3D Sagrada 8', img: '/images/img25.webp' },
  ];

  // Premium Sculptures
  const galleryPremium1 = [
    { title: 'Arte Sacra Premium 01', img: '/images/premium_01.webp' },
    { title: 'Arte Sacra Premium 02', img: '/images/premium_02.webp' },
    { title: 'Arte Sacra Premium 03', img: '/images/premium_03.webp' },
    { title: 'Arte Sacra Premium 04', img: '/images/premium_04.webp' },
    { title: 'Arte Sacra Premium 05', img: '/images/premium_05.webp' },
    { title: 'Arte Sacra Premium 06', img: '/images/premium_06.webp' },
  ];

  const galleryPremium2 = [
    { title: 'Arte Sacra Premium Cat 01', img: '/images/cat3_01.webp' },
    { title: 'Arte Sacra Premium Cat 02', img: '/images/cat3_02.webp' },
    { title: 'Arte Sacra Premium Cat 03', img: '/images/cat3_03.webp' },
    { title: 'Arte Sacra Premium Cat 04', img: '/images/cat3_04.webp' },
    { title: 'Arte Sacra Premium Cat 05', img: '/images/cat3_05.webp' },
    { title: 'Arte Sacra Premium Cat 06', img: '/images/cat3_06.webp' },
    { title: 'Arte Sacra Premium Cat 07', img: '/images/cat3_07.webp' },
  ];

  // Depoimentos
  const testimonials = [
    { id: 1, name: 'Depoimento 1', img: '/images/dep1.webp' },
    { id: 2, name: 'Depoimento 2', img: '/images/dep2.webp' },
    { id: 3, name: 'Depoimento 3', img: '/images/dep3.webp' },
    { id: 4, name: 'Depoimento 4', img: '/images/dep4.webp' },
    { id: 5, name: 'Depoimento 5', img: '/images/dep5.webp' },
  ];

  return (
    <div id="root" className="min-h-screen bg-[#080707] text-[#faf1e2]">
      {/* HERO SECTION */}
      <header className="hero">
        <div className="wrap">
          <span className="eyebrow">
            Biblioteca da Fé 3D · Arte Que Aproxima do Divino
          </span>
          <h1>
            +500 Arquivos STL de Arte Sacra Prontos Para Você{' '}
            <span className="hl">Imprimir Hoje, Vender Amanhã</span> e Fazer
            Parte da Comunidade Católica Que Vive da Fé
          </h1>

          {/* VSL Video */}
          <HeroVideo />

          <p className="lead">
            Enquanto você pensa, outros membros da comunidade católica já estão
            imprimindo e vendendo com os mesmos arquivos. Coloque sua impressora
            3D para criar arte sacra e transforme fé em resultado, todos os
            dias.
          </p>

          <div className="cta-block">
            <a
              href="#oferta"
              onClick={scrollToOffer}
              className="btn pulse"
              id="_lt_crnvdc16r"
            >
              Quero Garantir Meu Acesso
            </a>
            <p className="cta-note">
              Acesso digital &nbsp;•&nbsp; Liberação imediata &nbsp;•&nbsp;
              Pagamento seguro
            </p>
          </div>
        </div>
      </header>

      {/* SECTION: BIBLIOTECA */}
      <section id="biblioteca">
        <div className="wrap">
          <h2 className="title">
            Veja tudo o que você vai receber nessa coleção exclusiva
          </h2>
          <p className="sub">
            São +500 arquivos de arte sacra testados, otimizados e prontos para
            imprimir hoje mesmo — divididos entre diferentes temas para você
            nunca ficar sem opção.
          </p>

          <div className="grid g4">
            <div className="cat-card cursor-pointer" onClick={scrollToOffer}>
              <span className="dot" />
              Jesus Cristo
            </div>
            <div className="cat-card cursor-pointer" onClick={scrollToOffer}>
              <span className="dot" />
              Nossa Senhora
            </div>
            <div className="cat-card cursor-pointer" onClick={scrollToOffer}>
              <span className="dot" />
              Santos
            </div>
            <div className="cat-card cursor-pointer" onClick={scrollToOffer}>
              <span className="dot" />
              Crucifixos
            </div>
            <div className="cat-card cursor-pointer" onClick={scrollToOffer}>
              <span className="dot" />
              Presépios
            </div>
            <div className="cat-card cursor-pointer" onClick={scrollToOffer}>
              <span className="dot" />
              Sagrada Família
            </div>
            <div className="cat-card cursor-pointer" onClick={scrollToOffer}>
              <span className="dot" />
              Anjos
            </div>
            <div className="cat-card cursor-pointer" onClick={scrollToOffer}>
              <span className="dot" />
              Terços e devocionais
            </div>
            <div className="cat-card cursor-pointer" onClick={scrollToOffer}>
              <span className="dot" />
              Decoração católica
            </div>
            <div className="cat-card cursor-pointer" onClick={scrollToOffer}>
              <span className="dot" />
              Peças para presente
            </div>
            <div className="cat-card cursor-pointer" onClick={scrollToOffer}>
              <span className="dot" />
              Modelos para produção
            </div>
            <div className="cat-card cursor-pointer" onClick={scrollToOffer}>
              <span className="dot" />
              Peças de parede
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: AREA DE MEMBROS */}
      <section
        id="area-de-membros"
        className="relative py-16 bg-[#080707] border-y border-[rgba(230,181,90,0.22)] overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(229,188,114,0.12),transparent_70%)] pointer-events-none" />
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#faf1e2] tracking-tight font-serif-sacra">
              Conheça a <span className="text-[#f5cb88]">Biblioteca da Fé 3D</span> por dentro
            </h2>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-[#cdb896] leading-relaxed">
              Veja exatamente como está estruturada a sua futura área de membros.
              Acesse pelo computador, notebook, tablet ou direto pelo celular com
              facilidade total.
            </p>
          </div>

          <div className="relative mx-auto max-w-[1100px] rounded-2xl sm:rounded-3xl border border-[rgba(230,181,90,0.35)] bg-[#0d0c10] shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_60px_rgba(229,188,114,0.16)] overflow-hidden group">
            <img
              alt="Área de Membros Biblioteca da Fé 3D no Computador, Tablet e Celular"
              loading="eager"
              decoding="async"
              className="w-full h-auto object-cover block select-none transition-transform duration-700 group-hover:scale-[1.01]"
              src="/images/area-membros-mockup.jpg"
            />
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-[#14110e] border border-[rgba(230,181,90,0.22)] shadow-md">
              <div className="w-10 h-10 rounded-lg bg-[rgba(229,188,114,0.15)] text-[#f5cb88] flex items-center justify-center shrink-0">
                💻
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#faf1e2] m-0">
                  Desktop &amp; Notebook
                </h4>
                <p className="text-xs text-[#b8a68c] m-0">
                  Navegue pelas pastas e faça download rápido dos arquivos STL.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-[#14110e] border border-[rgba(230,181,90,0.22)] shadow-md">
              <div className="w-10 h-10 rounded-lg bg-[rgba(229,188,114,0.15)] text-[#f5cb88] flex items-center justify-center shrink-0">
                📱
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#faf1e2] m-0">
                  100% Mobile
                </h4>
                <p className="text-xs text-[#b8a68c] m-0">
                  Consulte o acervo de qualquer lugar direto pelo seu smartphone.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-[#14110e] border border-[rgba(230,181,90,0.22)] shadow-md">
              <div className="w-10 h-10 rounded-lg bg-[rgba(229,188,114,0.15)] text-[#f5cb88] flex items-center justify-center shrink-0">
                ⚡
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#faf1e2] m-0">
                  Acesso Imediato
                </h4>
                <p className="text-xs text-[#b8a68c] m-0">
                  Login liberado no seu e-mail e WhatsApp logo após a compra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: GALERIA COM MARQUEES */}
      <section id="galeria" style={{ background: 'var(--bg-2)' }}>
        <div className="wrap">
          <h2 className="title">
            São +500 arquivos de arte sacra testados, otimizados e prontos para
            imprimir hoje mesmo
          </h2>
          <p className="sub">
            E dezenas de outros modelos exclusivos que só quem tem esse pack
            pode oferecer. Veja a variedade de peças que você pode transformar em
            impressões reais.
          </p>

          {/* Marquee 1 */}
          <MarqueeSlider
            items={gallerySantos}
            speedSeconds={28}
          />

          {/* Marquee 2 */}
          <MarqueeSlider
            items={galleryCrucifixos}
            reverse
            speedSeconds={32}
          />

          {/* Marquee 3 */}
          <MarqueeSlider
            items={galleryPresepios}
            speedSeconds={29}
          />

          <p className="gallery-note">
            São centenas de possibilidades reunidas em um único acervo para você
            não depender de pesquisas intermináveis por arquivos espalhados na
            internet.
          </p>

          <div className="cta-block">
            <a
              href="#oferta"
              onClick={scrollToOffer}
              className="btn"
              id="_lt_r5d27jwhc"
            >
              Quero Meus Modelos
            </a>
          </div>
        </div>
      </section>

      {/* SECTION: PARA QUEM */}
      <section id="para-quem">
        <div className="wrap">
          <h2 className="title">
            Veja como esse material pode transformar o seu negócio de arte sacra
          </h2>
          <p className="sub">
            Seja por fé, paixão pela impressão 3D ou desejo de construir uma
            nova fonte de renda, esse Mega Pack foi feito para quem quer vender
            arte sacra sem depender de arquivo em arquivo.
          </p>

          <div className="fit-grid">
            <div className="fit-card yes">
              <h3>É para você</h3>
              <ul>
                <li>Quer imprimir peças que representem sua fé.</li>
                <li>Deseja criar presentes católicos personalizados.</li>
                <li>Gosta de produzir peças religiosas em impressão 3D.</li>
                <li>Quer ampliar seu catálogo de produtos.</li>
                <li>Busca modelos selecionados em um único lugar.</li>
                <li>Quer economizar tempo procurando arquivos.</li>
                <li>
                  Deseja explorar encomendas e vendas no segmento religioso.
                </li>
              </ul>
            </div>

            <div className="fit-card no">
              <h3>Não é para você</h3>
              <ul>
                <li>Não possui interesse em impressão 3D.</li>
                <li>Procura apenas arquivos gratuitos aleatórios.</li>
                <li>Não pretende utilizar os modelos.</li>
                <li>Não deseja produzir peças religiosas.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: INCLUSO */}
      <section id="incluso" style={{ background: 'var(--bg-2)' }}>
        <div className="wrap">
          <h2 className="title">Tudo o que você vai receber</h2>
          <p className="sub">
            Acesso imediato, sem enrolação. Além da coleção principal, o Plano
            Completo reúne materiais para você produzir, apresentar e vender
            suas peças.
          </p>

          <div className="main-item">
            <h3>+500 Arquivos STL de Arte Sacra</h3>
            <p style={{ margin: '0px', color: 'var(--muted)' }}>
              Uma biblioteca com centenas de modelos religiosos testados e
              prontos para você imprimir e transformar em peças físicas.
            </p>
          </div>

          <div className="bonus-list">
            <div className="bonus-item">
              <img
                alt="Bônus 01 — Guia de Produtos Católicos que Mais Vendem"
                loading="eager"
                decoding="async"
                src="/images/bonus1.webp"
              />
              <div className="bi-txt">
                <span className="ico">🎁</span>
                <div>
                  <b>Bônus 01</b>Guia de Produtos Católicos que Mais Vendem
                  <span className="bi-desc">
                    Descubra quais peças costumam vender mais rápido para focar
                    sua produção nelas.
                  </span>
                </div>
              </div>
            </div>

            <div className="bonus-item">
              <img
                alt="Bônus 02 — Tabela de Preços para Produtos 3D Católicos"
                loading="eager"
                decoding="async"
                src="/images/bonus2.webp"
              />
              <div className="bi-txt">
                <span className="ico">🎁</span>
                <div>
                  <b>Bônus 02</b>Tabela de Preços para Produtos 3D Católicos
                  <span className="bi-desc">
                    Uma referência para ajudar você a não ficar perdido na hora
                    de precificar seus produtos.
                  </span>
                </div>
              </div>
            </div>

            <div className="bonus-item">
              <img
                alt="Bônus 03 — Guia Rápido de Configuração para Impressão Perfeita"
                loading="eager"
                decoding="async"
                src="/images/bonus3.webp"
              />
              <div className="bi-txt">
                <span className="ico">🎁</span>
                <div>
                  <b>Bônus 03</b>Guia Rápido de Configuração para Impressão
                  Perfeita
                  <span className="bi-desc">
                    Orientações práticas para facilitar seus primeiros testes e
                    ajustes.
                  </span>
                </div>
              </div>
            </div>

            <div className="bonus-item">
              <img
                alt="Bônus 04 — Mockups Prontos para Divulgação"
                loading="eager"
                decoding="async"
                src="/images/bonus4.webp"
              />
              <div className="bi-txt">
                <span className="ico">🎁</span>
                <div>
                  <b>Bônus 04</b>Mockups Prontos para Divulgação
                  <span className="bi-desc">
                    Materiais visuais prontos para você divulgar e vender suas
                    peças.
                  </span>
                </div>
              </div>
            </div>

            <div className="bonus-item">
              <img
                alt="Bônus 05 — Guia de Acabamento e Pintura para Peças Católicas"
                loading="eager"
                decoding="async"
                src="/images/bonus5.webp"
              />
              <div className="bi-txt">
                <span className="ico">🎁</span>
                <div>
                  <b>Bônus 05</b>Guia de Acabamento e Pintura para Peças
                  Católicas
                  <span className="bi-desc">
                    Dicas para melhorar o acabamento e valorizar suas peças na
                    hora da venda.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-block">
            <a
              href="#oferta"
              onClick={scrollToOffer}
              className="btn"
              id="_lt_1vmak73fp"
            >
              Quero Tudo Isso
            </a>
          </div>
        </div>
      </section>

      {/* SECTION: BONUS LUMINARIAS */}
      <section className="bonus-sec" id="bonus-luminarias">
        <div className="wrap center text-center">
          <span className="seal">Bônus incluso</span>
          <h2 className="title">E ainda tem um bônus especial…</h2>
          <p className="sub" style={{ marginBottom: '14px' }}>
            <b className="gold" style={{ fontSize: '1.15rem' }}>
              Leve também o Pack de Luminárias 3D
            </b>
          </p>
          <p className="sub">
            Além da coleção de arte sacra, você recebe modelos de luminárias
            para ampliar ainda mais seu catálogo.
          </p>

          <MarqueeSlider
            items={galleryLuminarias}
            style={{ maxWidth: '1000px' }}
            speedSeconds={30}
          />

          <div className="cta-block">
            <a
              href="#oferta"
              onClick={scrollToOffer}
              className="btn"
              id="_lt_7r58aisx3"
            >
              Quero Meus Bônus
            </a>
          </div>
        </div>
      </section>

      {/* SECTION: PREMIUM */}
      <section className="bonus-sec" id="premium">
        <div className="wrap center text-center">
          <span className="seal">Exclusivo do Plano Completo</span>
          <h2 className="title">
            Artes Sacras Premium: as peças mais buscadas e que mais vendem
          </h2>
          <p className="sub" style={{ marginBottom: '14px' }}>
            <b className="gold" style={{ fontSize: '1.15rem' }}>
              A seleção com a maior qualidade do acervo
            </b>
          </p>
          <p className="sub">
            São as peças de acabamento mais refinado, mais procuradas por quem
            imprime e as que mais convertem em venda. Esse bônus vem apenas no
            Plano Completo — não está incluso no Plano Básico.
          </p>

          <MarqueeSlider
            items={galleryPremium1}
            style={{ maxWidth: '1000px' }}
            speedSeconds={28}
          />

          <MarqueeSlider
            items={galleryPremium2}
            style={{ maxWidth: '1000px' }}
            reverse
            speedSeconds={32}
          />

          <div className="cta-block">
            <a
              href="#oferta"
              onClick={scrollToOffer}
              className="btn pulse"
              id="_lt_0aetdzmsg"
            >
              Quero as Artes Sacras Premium
            </a>
          </div>
        </div>
      </section>

      {/* SECTION: COMO FUNCIONA */}
      <section id="como-funciona">
        <div className="wrap">
          <h2 className="title">Acesso imediato, sem enrolação</h2>
          <p className="sub">
            Tudo 100% digital. Sem esperar entrega física: você recebe e já pode
            começar a imprimir e vender.
          </p>

          <div className="grid g3">
            <div className="step">
              <div className="num">01</div>
              <h3>Faça sua compra</h3>
              <p>Escolha a forma de pagamento e conclua o pedido com segurança.</p>
            </div>
            <div className="step">
              <div className="num">02</div>
              <h3>Receba as instruções</h3>
              <p>As informações de acesso chegam logo após a confirmação.</p>
            </div>
            <div className="step">
              <div className="num">03</div>
              <h3>Entre na coleção</h3>
              <p>Acesse a área com todos os modelos organizados por tema.</p>
            </div>
            <div className="step">
              <div className="num">04</div>
              <h3>Escolha seus modelos</h3>
              <p>Navegue pelas categorias e selecione o que quer imprimir.</p>
            </div>
            <div className="step">
              <div className="num">05</div>
              <h3>Comece a imprimir e vender</h3>
              <p>Baixe os arquivos e coloque sua impressora para trabalhar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: DEPOIMENTOS */}
      <section id="depoimentos">
        <div className="wrap">
          <h2 className="title">Quem já está imprimindo e vendendo arte sacra</h2>
          <p className="sub">
            Algumas mensagens de clientes que receberam a coleção e começaram a
            explorar os modelos.
          </p>

          <TestimonialSlider testimonials={testimonials} />

          <div className="cta-block">
            <a
              href="#oferta"
              onClick={scrollToOffer}
              className="btn"
              id="_lt_hl38toydx"
            >
              Quero Fazer Parte
            </a>
          </div>
        </div>
      </section>

      {/* SECTION: TRANSICAO */}
      <section id="transicao">
        <div className="wrap" style={{ maxWidth: '820px' }}>
          <h2 className="title">
            Sua impressora já está pronta. Agora falta escolher o que ela vai
            criar.
          </h2>
          <div className="sub" style={{ textAlign: 'center', maxWidth: '660px' }}>
            <p style={{ margin: '0px 0px 12px' }}>
              Você já tem a tecnologia nas mãos. Agora pode ter também um acervo
              testado, com centenas de possibilidades.
            </p>
            <p style={{ margin: '0px 0px 12px' }}>
              Imprima para você. Crie presentes. Produza peças de devoção. Faça
              encomendas. Ou construa uma nova fonte de renda com produtos que
              carregam fé.
            </p>
            <p style={{ margin: '0px 0px 12px' }}>
              Tudo começa escolhendo o primeiro modelo.
            </p>
          </div>

          <p
            style={{
              textAlign: 'center',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(1.2rem, 3vw, 1.7rem)',
              color: 'var(--gold-lt)',
              margin: '26px auto 22px',
              maxWidth: '700px',
              lineHeight: 1.35,
            }}
          >
            +500 Arquivos STL de Arte Sacra.
            <br />
            Imprima hoje, venda amanhã.
          </p>

          <div className="cta-block" style={{ marginTop: '0px' }}>
            <a
              href="#oferta"
              onClick={scrollToOffer}
              className="btn pulse"
              id="_lt_nvd2goc3u"
            >
              Quero Meu Acesso
            </a>
          </div>
        </div>
      </section>

      {/* SECTION: OFERTA */}
      <section className="offer-wrap" id="oferta">
        <div className="wrap">
          <h2 className="title">
            Aproveite enquanto o Plano Completo está em promoção
          </h2>
          <p className="sub">
            Comece pela essencial ou leve a completa com todos os bônus — 97%
            escolhem a completa, e não é à toa.
          </p>

          <div className="plans">
            {/* PLANO BÁSICO */}
            <div className="plan">
              <span className="tag">Essencial</span>
              <h3 className="pname">Plano Básico</h3>
              <ul>
                <li>+500 Arquivos STL Católicos</li>
                <li>Acesso Vitalício</li>
                <li>Envio Imediato</li>
                <li className="no">Não inclui bônus</li>
              </ul>
              <div className="price">
                <span className="val">
                  <span className="cur">R$</span>10,90
                </span>
                <p className="cond">Pagamento único</p>
              </div>
              <button
                type="button"
                className="btn-basic-plan cursor-pointer"
                id="_lt_9ouwi7xt2"
                onClick={() => setIsBasicModalOpen(true)}
              >
                Quero o plano básico
              </button>
            </div>

            {/* PLANO COMPLETO */}
            <div className="plan featured">
              <span className="best">Mais completo</span>
              <span className="tag">Recomendado</span>
              <h3 className="pname">Plano Completo</h3>

              <div
                style={{
                  width: 'calc(100% + 52px)',
                  margin: '0px -26px 18px',
                  background: 'rgb(13, 11, 9)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  borderTop: '1px solid rgba(230, 178, 60, 0.4)',
                  borderBottom: '1px solid rgba(230, 178, 60, 0.4)',
                  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 8px 24px',
                }}
              >
                <img
                  alt="Pack +500 Acervos Católicos STL Completo"
                  loading="eager"
                  decoding="async"
                  src="/images/pack-capa-completo.jpg"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'contain',
                  }}
                />
              </div>

              <ul>
                <li>+500 Arquivos STL Católicos</li>
                <li>Uso comercial liberado e sem limite</li>
                <li className="bonus">
                  Bônus 1: Guia de Produtos Católicos que Mais Vendem
                </li>
                <li className="bonus">
                  Bônus 2: Tabela de Preços para Produtos 3D Católicos
                </li>
                <li className="bonus">
                  Bônus 3: Guia de Configuração para Impressão
                </li>
                <li className="bonus">Bônus 4: Mockups para Divulgação</li>
                <li className="bonus">
                  Bônus 5: Guia de Acabamento e Pintura
                </li>
                <li className="bonus">Bônus 6: Pack de Luminárias 3D</li>
                <li className="bonus">
                  Bônus 7: Artes Sacras Premium{' '}
                  <span
                    style={{
                      background: 'var(--green)',
                      color: 'rgb(255, 255, 255)',
                      fontSize: '0.62rem',
                      fontWeight: 800,
                      padding: '2px 6px',
                      borderRadius: '999px',
                      marginLeft: '6px',
                      verticalAlign: 'middle',
                      letterSpacing: '0.04em',
                    }}
                  >
                    NOVO
                  </span>
                </li>
                <li>Acesso Vitalício</li>
                <li>Envio Imediato</li>
              </ul>

              <div className="price">
                <p
                  style={{
                    color: 'rgb(122, 106, 87)',
                    fontSize: '0.86rem',
                    margin: '0px 0px 2px',
                  }}
                >
                  Valor total:{' '}
                  <span style={{ textDecoration: 'line-through' }}>
                    R$ 97,00
                  </span>
                </p>
                <p
                  style={{
                    color: 'rgb(87, 72, 56)',
                    fontSize: '0.82rem',
                    margin: '0px 0px 4px',
                    fontWeight: 600,
                  }}
                >
                  Hoje, pagamento único
                </p>
                <span className="val">
                  <span className="cur">R$</span>37,90
                </span>
                <p className="cond">Acesso vitalício</p>
              </div>

              <a
                href="https://checkout.wiven.com.br/checkout/cmssaso1r0bw001odhutl03ut?offer=G4ZPAP2"
                className="btn-complete-plan pulse"
                id="_lt_2ocbbuja5"
                onClick={() => trackInitiateCheckout(37.9, 'Plano Completo')}
              >
                Quero o plano completo
              </a>
            </div>
          </div>

          <p className="cta-note center text-center" style={{ marginTop: '20px' }}>
            ACESSO IMEDIATO &nbsp;•&nbsp; 7 dias de garantia
          </p>
        </div>
      </section>

      {/* SECTION: GARANTIA */}
      <section id="garantia">
        <div className="wrap">
          <div className="guarantee">
            <img
              className="g-seal-img"
              alt="Selo de 7 dias de garantia"
              loading="eager"
              decoding="async"
              src="/images/garantia.webp"
            />
            <div>
              <h2
                style={{
                  fontSize: '1.6rem',
                  textAlign: 'left',
                  marginBottom: '8px',
                }}
              >
                Sua compra 100% segura e sem risco nenhum
              </h2>
              <p>
                Você recebe acesso imediato a mais de 500 arquivos de arte sacra,
                prontos para imprimir em 3D. Se dentro de{' '}
                <b style={{ color: 'var(--text)' }}>7 dias</b> sentir que o
                material não faz sentido pra você, é só pedir o reembolso que
                devolvemos 100% do valor. Sem perguntas, sem burocracia — o risco
                é nosso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: FAQ */}
      <section id="faq" style={{ background: 'var(--bg-2)' }}>
        <div className="wrap">
          <h2 className="title">Dúvidas frequentes</h2>
          <div className="faq">
            <details open>
              <summary>O que eu recebo após a compra?</summary>
              <p>
                Você recebe o acesso ao pack com mais de 500 arquivos STL
                católicos, além dos bônus e do pack de luminárias 3D incluídos na
                oferta.
              </p>
            </details>

            <details>
              <summary>São arquivos físicos ou digitais?</summary>
              <p>
                São arquivos digitais. Nada é enviado pelos Correios: você
                recebe o acesso para baixar os modelos.
              </p>
            </details>

            <details>
              <summary>Quantos arquivos STL estão inclusos?</summary>
              <p>
                Mais de 500 arquivos STL católicos, além dos modelos do pack de
                luminárias que entra como bônus.
              </p>
            </details>

            <details>
              <summary>Preciso ter uma impressora 3D?</summary>
              <p>
                Sim. Os arquivos STL são feitos para serem impressos em uma
                impressora 3D — sua ou de um serviço de impressão.
              </p>
            </details>

            <details>
              <summary>Posso acessar os arquivos depois?</summary>
              <p>
                Sim. O acesso é vitalício, então você pode voltar e baixar os
                modelos quando quiser.
              </p>
            </details>

            <details>
              <summary>Como recebo meu acesso?</summary>
              <p>
                Após a confirmação do pagamento, você recebe as informações de
                acesso por e-mail e WhatsApp.
              </p>
            </details>

            <details>
              <summary>O pack de luminárias está incluso?</summary>
              <p>
                Sim. O pack de luminárias 3D entra como bônus, junto com a
                coleção de arquivos católicos.
              </p>
            </details>

            <details>
              <summary>Existe garantia?</summary>
              <p>
                Sim. Você tem 7 dias para conhecer o material, conforme as
                condições de garantia apresentadas na compra.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* SECTION: FINAL */}
      <section className="final">
        <div className="wrap">
          <h2 className="title">
            Comece hoje a fazer parte da comunidade que imprime e vende arte
            sacra
          </h2>
          <p className="sub">
            Tenha +500 arquivos STL de arte sacra e todos os bônus reunidos em
            uma única oferta.
          </p>
          <a
            href="#oferta"
            onClick={scrollToOffer}
            className="btn pulse"
            id="_lt_pybe2kf4w"
          >
            Quero Meu Acesso
          </a>
          <p className="cta-note" style={{ marginTop: '16px' }}>
            Acesso imediato &nbsp;•&nbsp; Acesso vitalício &nbsp;•&nbsp; 7 dias de
            garantia
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <p style={{ cursor: 'pointer' }}>
            © 2026 — Todos os direitos reservados.
          </p>
          <p>
            Este site não é afiliado ao Facebook ou a qualquer entidade do
            Facebook.
          </p>
        </div>
      </footer>

      {/* BUY TOAST */}
      <LiveToast />

      {/* BASIC PLAN MODAL */}
      <BasicPlanModal
        isOpen={isBasicModalOpen}
        onClose={() => setIsBasicModalOpen(false)}
        onSelectComplete={() => {
          scrollToOffer();
        }}
      />
    </div>
  );
}
