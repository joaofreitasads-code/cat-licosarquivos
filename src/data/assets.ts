// Curated high quality sacred art and 3D printing visual representations

// Function to generate crisp SVG data URIs for sacred art 3D models with rich lighting
export function generateSacredArtSvg(title: string, category: string, colorScheme: 'gold' | 'marble' | 'bronze' | 'lithophane' | 'wood'): string {
  const schemes = {
    gold: {
      bg1: '#1c150c', bg2: '#0b0805',
      primary: '#fce3b4', secondary: '#dca446', accent: '#fffae8',
      glow: 'rgba(235, 185, 95, 0.45)', line: '#ffd88d'
    },
    marble: {
      bg1: '#141416', bg2: '#080809',
      primary: '#f3f4f6', secondary: '#9ca3af', accent: '#ffffff',
      glow: 'rgba(255, 255, 255, 0.3)', line: '#e5e7eb'
    },
    bronze: {
      bg1: '#1a120c', bg2: '#0a0705',
      primary: '#e6a15c', secondary: '#8d5023', accent: '#ffd29e',
      glow: 'rgba(217, 126, 48, 0.38)', line: '#f5b06d'
    },
    lithophane: {
      bg1: '#1d1305', bg2: '#080502',
      primary: '#ffeed1', secondary: '#f59e0b', accent: '#fffbeb',
      glow: 'rgba(245, 158, 11, 0.65)', line: '#fde68a'
    },
    wood: {
      bg1: '#1c1008', bg2: '#080402',
      primary: '#d97706', secondary: '#78350f', accent: '#fef3c7',
      glow: 'rgba(217, 119, 6, 0.4)', line: '#b45309'
    }
  };

  const c = schemes[colorScheme] || schemes.gold;

  // Visual glyph based on category
  let iconSvg = '';
  if (category.includes('Cruz') || category.includes('Crucifixo')) {
    iconSvg = `
      <g filter="url(#glow)">
        <!-- Cross -->
        <rect x="92" y="35" width="16" height="130" rx="3" fill="url(#grad)" />
        <rect x="55" y="65" width="90" height="16" rx="3" fill="url(#grad)" />
        <!-- Corpus Christi silhouette -->
        <path d="M100 58 C96 58 93 63 93 68 C93 72 96 75 100 75 C104 75 107 72 107 68 C107 63 104 58 100 58 Z" fill="${c.accent}" />
        <path d="M100 75 L100 115 M80 82 L120 82 M96 115 L92 145 M104 115 L108 145" stroke="${c.accent}" stroke-width="4.5" stroke-linecap="round" />
        <!-- Halo / rays -->
        <circle cx="100" cy="68" r="22" fill="none" stroke="${c.secondary}" stroke-width="1.5" stroke-dasharray="3,3" />
      </g>
    `;
  } else if (category.includes('Nossa Senhora') || category.includes('Maria')) {
    iconSvg = `
      <g filter="url(#glow)">
        <!-- Mantle & silhouette -->
        <path d="M100 38 C80 50 72 85 70 148 C70 155 130 155 130 148 C128 85 120 50 100 38 Z" fill="url(#grad)" />
        <!-- Crown / Halo -->
        <path d="M88 38 L92 28 L100 34 L108 28 L112 38 Z" fill="${c.accent}" />
        <circle cx="100" cy="46" r="32" fill="none" stroke="${c.secondary}" stroke-width="1.5" stroke-dasharray="4,2" />
        <!-- Hands in prayer -->
        <ellipse cx="100" cy="85" rx="5" ry="12" fill="${c.accent}" />
        <ellipse cx="100" cy="52" rx="7" ry="9" fill="${c.accent}" />
      </g>
    `;
  } else if (category.includes('Anjo') || category.includes('São Miguel')) {
    iconSvg = `
      <g filter="url(#glow)">
        <!-- Wings -->
        <path d="M100 70 C70 30 35 45 42 95 C45 118 78 120 100 110 C122 120 155 118 158 95 C165 45 130 30 100 70 Z" fill="url(#grad)" opacity="0.85" />
        <!-- Sword -->
        <line x1="100" y1="40" x2="100" y2="148" stroke="${c.accent}" stroke-width="3.5" stroke-linecap="round" />
        <line x1="88" y1="65" x2="112" y2="65" stroke="${c.accent}" stroke-width="3" stroke-linecap="round" />
        <!-- Figure -->
        <circle cx="100" cy="55" r="9" fill="${c.accent}" />
        <path d="M93 68 L107 68 L112 135 L88 135 Z" fill="${c.secondary}" />
      </g>
    `;
  } else if (category.includes('Luminária')) {
    iconSvg = `
      <g filter="url(#glow)">
        <!-- Lamp Base -->
        <rect x="65" y="142" width="70" height="18" rx="4" fill="#2d1f11" stroke="${c.secondary}" stroke-width="1.5" />
        <!-- Lithophane Curved Plate -->
        <path d="M72 142 L72 45 C72 40 128 40 128 45 L128 142 Z" fill="url(#grad)" opacity="0.9" />
        <!-- Warm Light Glow Burst -->
        <circle cx="100" cy="92" r="38" fill="url(#lampRadial)" />
        <!-- Sacred Relief inside -->
        <path d="M100 58 C92 70 85 90 88 120 L112 120 C115 90 108 70 100 58 Z" fill="${c.accent}" opacity="0.75" />
        <circle cx="100" cy="72" r="8" fill="${c.accent}" />
        <circle cx="100" cy="72" r="16" fill="none" stroke="${c.secondary}" stroke-width="1.5" />
      </g>
    `;
  } else {
    // General Sacred Statue / Saint
    iconSvg = `
      <g filter="url(#glow)">
        <!-- Pedestal / Base -->
        <path d="M68 145 L132 145 L126 158 L74 158 Z" fill="${c.secondary}" />
        <!-- Statue figure -->
        <path d="M100 48 C93 48 88 54 88 62 C88 70 94 74 100 74 C106 74 112 70 112 62 C112 54 107 48 100 48 Z" fill="${c.accent}" />
        <path d="M85 75 L115 75 L122 144 L78 144 Z" fill="url(#grad)" />
        <!-- Halo -->
        <circle cx="100" cy="60" r="20" fill="none" stroke="${c.line}" stroke-width="1.8" stroke-dasharray="2,2" />
        <!-- Sacred book or heart -->
        <rect x="94" y="90" width="12" height="15" rx="1.5" fill="${c.accent}" />
      </g>
    `;
  }

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" width="200" height="240">
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stop-color="${c.bg1}" />
          <stop offset="100%" stop-color="${c.bg2}" />
        </radialGradient>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${c.accent}" />
          <stop offset="50%" stop-color="${c.primary}" />
          <stop offset="100%" stop-color="${c.secondary}" />
        </linearGradient>
        <radialGradient id="lampRadial" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${c.accent}" stop-opacity="0.9" />
          <stop offset="50%" stop-color="${c.primary}" stop-opacity="0.4" />
          <stop offset="100%" stop-color="${c.bg1}" stop-opacity="0" />
        </radialGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="rgba(245, 203, 136, 0.15)" />
          <stop offset="100%" stop-color="rgba(179, 130, 45, 0.25)" />
        </linearGradient>
      </defs>
      <!-- Background -->
      <rect width="200" height="240" rx="12" fill="url(#bgGrad)" />
      <!-- Subtle 3D mesh grid overlay -->
      <path d="M0 40 H200 M0 80 H200 M0 120 H200 M0 160 H200 M0 200 H200" stroke="rgba(230,181,90,0.04)" stroke-width="1" />
      <path d="M40 0 V240 M80 0 V240 M120 0 V240 M160 0 V240" stroke="rgba(230,181,90,0.04)" stroke-width="1" />
      
      <!-- Ambient light cone -->
      <ellipse cx="100" cy="180" rx="60" ry="16" fill="${c.glow}" opacity="0.4" filter="url(#glow)" />
      
      <!-- The Model Icon Graphic -->
      ${iconSvg}

      <!-- Bottom Card Details -->
      <rect x="10" y="185" width="180" height="45" rx="8" fill="#13100d" stroke="rgba(230,181,90,0.2)" stroke-width="1" />
      <text x="100" y="203" fill="#faf1e2" font-family="'Cinzel', serif" font-weight="700" font-size="10.5" text-anchor="middle">${title}</text>
      <text x="100" y="218" fill="#e5bc72" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="8.5" text-anchor="middle">STL • TESTADO & PRONTO</text>
      
      <!-- Top STL Tag -->
      <rect x="12" y="12" width="56" height="18" rx="4" fill="url(#badgeGrad)" stroke="rgba(245,203,136,0.3)" stroke-width="0.8" />
      <text x="40" y="24" fill="#f5cb88" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="7.5" text-anchor="middle">3D PRINT</text>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// Generate Guarantee Seal SVG
export function generateGuaranteeSealSvg(): string {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160">
      <defs>
        <linearGradient id="goldSeal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fff4db" />
          <stop offset="30%" stop-color="#f5cb88" />
          <stop offset="70%" stop-color="#d49a37" />
          <stop offset="100%" stop-color="#916117" />
        </linearGradient>
        <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1f1810" />
          <stop offset="100%" stop-color="#0a0705" />
        </linearGradient>
        <filter id="sealShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="rgba(212, 154, 55, 0.45)" />
        </filter>
      </defs>
      <!-- Seal Ribbon tails -->
      <path d="M48 115 L32 155 L60 142 L72 155 L68 115 Z" fill="#916117" />
      <path d="M112 115 L128 155 L100 142 L88 155 L92 115 Z" fill="#916117" />
      
      <!-- Outer starburst rim -->
      <circle cx="80" cy="75" r="62" fill="url(#goldSeal)" filter="url(#sealShadow)" />
      
      <!-- Inner decorative ring -->
      <circle cx="80" cy="75" r="54" fill="none" stroke="#2a1d0d" stroke-width="2" stroke-dasharray="3,2" />
      <circle cx="80" cy="75" r="50" fill="url(#ribbonGrad)" stroke="url(#goldSeal)" stroke-width="2.5" />
      
      <!-- Text & Number -->
      <text x="80" y="52" fill="#f5cb88" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="10" text-anchor="middle" letter-spacing="1">GARANTIA</text>
      <text x="80" y="86" fill="#fff5e0" font-family="'Cinzel', serif" font-weight="900" font-size="36" text-anchor="middle">7</text>
      <text x="80" y="101" fill="#f5cb88" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="10" text-anchor="middle" letter-spacing="1">DIAS</text>
      <text x="80" y="114" fill="#dfc08b" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="7.5" text-anchor="middle">100% INCONDICIONAL</text>
    </svg>
  `;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// Generate Pack Capa Mockup SVG
export function generatePackCapaSvg(): string {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 420" width="680" height="420">
      <defs>
        <radialGradient id="boxBg" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stop-color="#241b12" />
          <stop offset="60%" stop-color="#0f0c09" />
          <stop offset="100%" stop-color="#050403" />
        </radialGradient>
        <linearGradient id="goldHl" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ffeac2" />
          <stop offset="50%" stop-color="#f5cb88" />
          <stop offset="100%" stop-color="#b88428" />
        </linearGradient>
        <linearGradient id="borderGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(245, 203, 136, 0.6)" />
          <stop offset="100%" stop-color="rgba(184, 132, 40, 0.2)" />
        </linearGradient>
      </defs>
      <!-- Background Box -->
      <rect width="680" height="420" fill="url(#boxBg)" />
      
      <!-- Sacred Golden Aura in center -->
      <circle cx="340" cy="180" r="170" fill="rgba(245, 203, 136, 0.12)" filter="blur(30px)" />
      
      <!-- Outer decorative frame -->
      <rect x="20" y="20" width="640" height="380" rx="14" fill="none" stroke="url(#borderGlow)" stroke-width="1.8" />
      <rect x="28" y="28" width="624" height="364" rx="10" fill="none" stroke="rgba(245,203,136,0.15)" stroke-width="1" stroke-dasharray="8,4" />
      
      <!-- Top Eyebrow -->
      <rect x="230" y="44" width="220" height="28" rx="14" fill="rgba(245,203,136,0.12)" stroke="rgba(245,203,136,0.35)" />
      <text x="340" y="62" fill="#f5cb88" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" text-anchor="middle" letter-spacing="1.5">ACERVO SAGRADO COMPLETO</text>
      
      <!-- Main Title -->
      <text x="340" y="125" fill="#ffffff" font-family="'Cinzel', serif" font-weight="900" font-size="38" text-anchor="middle" letter-spacing="1">+500 ARQUIVOS STL</text>
      <text x="340" y="162" fill="url(#goldHl)" font-family="'Cinzel', serif" font-weight="800" font-size="26" text-anchor="middle">ARTE SACRA CATÓLICA</text>
      
      <!-- Central Sacred Emblems (Crucifix, Mary, Angel Silhouettes) -->
      <g transform="translate(180, 180) scale(0.7)">
        <!-- Left Angel/Saint -->
        <circle cx="80" cy="50" r="15" fill="#f5cb88" opacity="0.8" />
        <path d="M50 70 C70 40 100 40 110 70 L115 130 L45 130 Z" fill="#916117" opacity="0.7" />
        
        <!-- Central High Cross -->
        <rect x="215" y="10" width="22" height="150" rx="4" fill="url(#goldHl)" />
        <rect x="165" y="45" width="122" height="22" rx="4" fill="url(#goldHl)" />
        <circle cx="226" cy="56" r="30" fill="none" stroke="#fff" stroke-width="2" opacity="0.6" />
        
        <!-- Right Virgin Mary -->
        <circle cx="370" cy="50" r="15" fill="#f5cb88" opacity="0.8" />
        <path d="M340 70 C360 40 390 40 400 70 L405 130 L335 130 Z" fill="#916117" opacity="0.7" />
      </g>
      
      <!-- Feature Badges on Bottom -->
      <g transform="translate(45, 310)">
        <rect x="0" y="0" width="170" height="52" rx="8" fill="#17120d" stroke="rgba(245,203,136,0.3)" />
        <text x="85" y="24" fill="#faf1e2" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="11" text-anchor="middle">USO COMERCIAL</text>
        <text x="85" y="41" fill="#4ade80" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="10" text-anchor="middle">✓ LIBERADO & VITALÍCIO</text>
        
        <rect x="210" y="0" width="170" height="52" rx="8" fill="#17120d" stroke="rgba(245,203,136,0.3)" />
        <text x="295" y="24" fill="#faf1e2" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="11" text-anchor="middle">7 SUPER BÔNUS</text>
        <text x="295" y="41" fill="#f5cb88" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="10" text-anchor="middle">INCLUSOS NO PACK</text>
        
        <rect x="420" y="0" width="170" height="52" rx="8" fill="#17120d" stroke="rgba(245,203,136,0.3)" />
        <text x="505" y="24" fill="#faf1e2" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="11" text-anchor="middle">COMPATIBILIDADE</text>
        <text x="505" y="41" fill="#f5cb88" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="10" text-anchor="middle">FDM & RESINA (SLA)</text>
      </g>
    </svg>
  `;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// Generate Members Area Mockup SVG
export function generateMembersAreaSvg(): string {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 620" width="1100" height="620">
      <defs>
        <linearGradient id="screenBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#14110e" />
          <stop offset="100%" stop-color="#090807" />
        </linearGradient>
        <linearGradient id="folderGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#2a2219" />
          <stop offset="100%" stop-color="#18130d" />
        </linearGradient>
        <linearGradient id="goldText" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ffeed1" />
          <stop offset="100%" stop-color="#f5cb88" />
        </linearGradient>
      </defs>
      
      <!-- Desktop Monitor Frame -->
      <rect width="1100" height="620" rx="20" fill="url(#screenBg)" stroke="rgba(230,181,90,0.35)" stroke-width="2" />
      
      <!-- Top App Bar -->
      <rect x="0" y="0" width="1100" height="64" fill="#1b1611" />
      <line x1="0" y1="64" x2="1100" y2="64" stroke="rgba(230,181,90,0.22)" stroke-width="1.5" />
      
      <!-- Window Controls -->
      <circle cx="28" cy="32" r="7" fill="#ef4444" />
      <circle cx="48" cy="32" r="7" fill="#f59e0b" />
      <circle cx="68" cy="32" r="7" fill="#22c55e" />
      
      <!-- Logo in App -->
      <text x="110" y="38" fill="url(#goldText)" font-family="'Cinzel', serif" font-weight="900" font-size="16">BIBLIOTECA DA FÉ 3D</text>
      <rect x="330" y="16" width="380" height="32" rx="16" fill="#100d0a" stroke="rgba(230,181,90,0.25)" />
      <text x="350" y="37" fill="#a8977c" font-family="'Plus Jakarta Sans', sans-serif" font-size="13">🔍 Pesquisar modelo (ex: São Miguel, Presépio, Crucifixo...)</text>
      
      <!-- User profile badge -->
      <rect x="910" y="16" width="160" height="32" rx="16" fill="#261e16" stroke="rgba(230,181,90,0.3)" />
      <circle cx="926" cy="32" r="10" fill="#f5cb88" />
      <text x="944" y="37" fill="#faf1e2" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="12">Membro VIP • Vitalício</text>
      
      <!-- Left Sidebar Navigation -->
      <rect x="0" y="64" width="220" height="556" fill="#120f0c" />
      <line x1="220" y1="64" x2="220" y2="620" stroke="rgba(230,181,90,0.18)" stroke-width="1.5" />
      
      <text x="24" y="105" fill="#f5cb88" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" letter-spacing="1">CATEGORIAS</text>
      
      <!-- Sidebar Items -->
      <g font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600">
        <rect x="14" y="122" width="192" height="36" rx="8" fill="#261e16" stroke="rgba(230,181,90,0.3)" />
        <text x="28" y="145" fill="#fff">📁 01. Jesus Cristo (84)</text>
        
        <text x="28" y="185" fill="#cdb896">📁 02. Nossa Senhora (96)</text>
        <text x="28" y="225" fill="#cdb896">📁 03. Santos e Santas (112)</text>
        <text x="28" y="265" fill="#cdb896">📁 04. Crucifixos e Cruzes (65)</text>
        <text x="28" y="305" fill="#cdb896">📁 05. Presépios e Natal (48)</text>
        <text x="28" y="345" fill="#cdb896">📁 06. Anjos e Arcanjos (54)</text>
        <text x="28" y="385" fill="#cdb896">📁 07. Luminárias 3D (35)</text>
        <text x="28" y="425" fill="#cdb896">📁 08. Artes Sacras Premium</text>
        <text x="28" y="465" fill="#cdb896">🎁 09. Todos os 7 Bônus</text>
      </g>
      
      <!-- Main Content Area: Folders & Files Grid -->
      <text x="250" y="110" fill="#faf1e2" font-family="'Cinzel', serif" font-weight="800" font-size="22">Acervo Digital — Pastas Organizadas</text>
      <text x="250" y="132" fill="#a8977c" font-family="'Plus Jakarta Sans', sans-serif" font-size="13">Download direto em alta velocidade, sem limites e com suporte 24h.</text>
      
      <!-- Folder Cards Grid -->
      <!-- Card 1 -->
      <g transform="translate(250, 160)">
        <rect width="185" height="135" rx="12" fill="url(#folderGrad)" stroke="rgba(230,181,90,0.3)" />
        <text x="92" y="55" font-size="34" text-anchor="middle">📂</text>
        <text x="92" y="85" fill="#faf1e2" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="13" text-anchor="middle">Jesus Cristo</text>
        <text x="92" y="105" fill="#f5cb88" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11" text-anchor="middle">84 arquivos STL</text>
        <rect x="35" y="112" width="115" height="14" rx="7" fill="rgba(34,197,94,0.18)" />
        <text x="92" y="123" fill="#4ade80" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="9" text-anchor="middle">Testados no Bambu/Cura</text>
      </g>
      
      <!-- Card 2 -->
      <g transform="translate(455, 160)">
        <rect width="185" height="135" rx="12" fill="url(#folderGrad)" stroke="rgba(230,181,90,0.3)" />
        <text x="92" y="55" font-size="34" text-anchor="middle">📂</text>
        <text x="92" y="85" fill="#faf1e2" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="13" text-anchor="middle">Nossa Senhora</text>
        <text x="92" y="105" fill="#f5cb88" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11" text-anchor="middle">96 arquivos STL</text>
        <rect x="35" y="112" width="115" height="14" rx="7" fill="rgba(34,197,94,0.18)" />
        <text x="92" y="123" fill="#4ade80" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="9" text-anchor="middle">Fátima, Aparecida, etc.</text>
      </g>
      
      <!-- Card 3 -->
      <g transform="translate(660, 160)">
        <rect width="185" height="135" rx="12" fill="url(#folderGrad)" stroke="rgba(230,181,90,0.3)" />
        <text x="92" y="55" font-size="34" text-anchor="middle">📂</text>
        <text x="92" y="85" fill="#faf1e2" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="13" text-anchor="middle">Santos e Santas</text>
        <text x="92" y="105" fill="#f5cb88" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11" text-anchor="middle">112 arquivos STL</text>
        <rect x="35" y="112" width="115" height="14" rx="7" fill="rgba(34,197,94,0.18)" />
        <text x="92" y="123" fill="#4ade80" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="9" text-anchor="middle">São Bento, Francisco...</text>
      </g>
      
      <!-- Card 4 -->
      <g transform="translate(865, 160)">
        <rect width="185" height="135" rx="12" fill="url(#folderGrad)" stroke="rgba(230,181,90,0.3)" />
        <text x="92" y="55" font-size="34" text-anchor="middle">📂</text>
        <text x="92" y="85" fill="#faf1e2" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="13" text-anchor="middle">Crucifixos & Cruzes</text>
        <text x="92" y="105" fill="#f5cb88" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11" text-anchor="middle">65 arquivos STL</text>
        <rect x="35" y="112" width="115" height="14" rx="7" fill="rgba(34,197,94,0.18)" />
        <text x="92" y="123" fill="#4ade80" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="9" text-anchor="middle">Mesa, Parede e Medalhões</text>
      </g>
      
      <!-- Row 2 -->
      <!-- Card 5 -->
      <g transform="translate(250, 315)">
        <rect width="185" height="135" rx="12" fill="url(#folderGrad)" stroke="rgba(230,181,90,0.3)" />
        <text x="92" y="55" font-size="34" text-anchor="middle">📂</text>
        <text x="92" y="85" fill="#faf1e2" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="13" text-anchor="middle">Luminárias 3D</text>
        <text x="92" y="105" fill="#f5cb88" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11" text-anchor="middle">35 modelos Litho</text>
        <rect x="35" y="112" width="115" height="14" rx="7" fill="rgba(245,203,136,0.2)" />
        <text x="92" y="123" fill="#f5cb88" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="9" text-anchor="middle">Com encaixe p/ LED</text>
      </g>
      
      <!-- Card 6 -->
      <g transform="translate(455, 315)">
        <rect width="185" height="135" rx="12" fill="url(#folderGrad)" stroke="rgba(230,181,90,0.3)" />
        <text x="92" y="55" font-size="34" text-anchor="middle">⭐</text>
        <text x="92" y="85" fill="#faf1e2" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="13" text-anchor="middle">Arte Sacra Premium</text>
        <text x="92" y="105" fill="#f5cb88" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11" text-anchor="middle">Alta resolução 4K</text>
        <rect x="35" y="112" width="115" height="14" rx="7" fill="rgba(245,203,136,0.2)" />
        <text x="92" y="123" fill="#f5cb88" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="9" text-anchor="middle">Esculturas de Luxo</text>
      </g>
      
      <!-- Card 7 -->
      <g transform="translate(660, 315)">
        <rect width="185" height="135" rx="12" fill="url(#folderGrad)" stroke="rgba(230,181,90,0.3)" />
        <text x="92" y="55" font-size="34" text-anchor="middle">🎁</text>
        <text x="92" y="85" fill="#faf1e2" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="13" text-anchor="middle">Guias & Planilhas</text>
        <text x="92" y="105" fill="#f5cb88" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11" text-anchor="middle">Precificação e Pintura</text>
        <rect x="35" y="112" width="115" height="14" rx="7" fill="rgba(245,203,136,0.2)" />
        <text x="92" y="123" fill="#f5cb88" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="9" text-anchor="middle">PDFs e Tabelas Excel</text>
      </g>
      
      <!-- Card 8 -->
      <g transform="translate(865, 315)">
        <rect width="185" height="135" rx="12" fill="url(#folderGrad)" stroke="rgba(230,181,90,0.3)" />
        <text x="92" y="55" font-size="34" text-anchor="middle">📸</text>
        <text x="92" y="85" fill="#faf1e2" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="13" text-anchor="middle">Mockups para Vender</text>
        <text x="92" y="105" fill="#f5cb88" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11" text-anchor="middle">Posts e Vídeos Prontos</text>
        <rect x="35" y="112" width="115" height="14" rx="7" fill="rgba(34,197,94,0.18)" />
        <text x="92" y="123" fill="#4ade80" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="9" text-anchor="middle">Fotos Comerciais HD</text>
      </g>

      <!-- Bottom Status Banner -->
      <rect x="250" y="480" width="800" height="70" rx="14" fill="#1b1611" stroke="rgba(230,181,90,0.3)" />
      <circle cx="285" cy="515" r="18" fill="rgba(34,197,94,0.2)" />
      <text x="285" y="521" fill="#4ade80" font-size="18" text-anchor="middle">✓</text>
      <text x="320" y="508" fill="#faf1e2" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="14">Acesso Imediato pelo Google Drive / Portal com Atualizações Gratuitas</text>
      <text x="320" y="528" fill="#a8977c" font-family="'Plus Jakarta Sans', sans-serif" font-size="12">Você não precisa baixar tudo de uma vez. Baixe somente o que for imprimir hoje.</text>
    </svg>
  `;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// Generate Bonus Book/Guide Mockup SVG
export function generateBonusSvg(num: number, title: string, subtitle: string): string {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160">
      <defs>
        <linearGradient id="bookBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#2a2015" />
          <stop offset="100%" stop-color="#120d08" />
        </linearGradient>
        <linearGradient id="goldDec" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#fce3b4" />
          <stop offset="100%" stop-color="#dca446" />
        </linearGradient>
      </defs>
      <rect width="160" height="160" rx="14" fill="url(#bookBg)" stroke="rgba(230,181,90,0.35)" stroke-width="1.5" />
      <rect x="12" y="12" width="136" height="136" rx="8" fill="none" stroke="rgba(230,181,90,0.15)" stroke-dasharray="4,2" />
      
      <!-- Badge -->
      <rect x="25" y="22" width="110" height="24" rx="12" fill="rgba(245,203,136,0.15)" stroke="rgba(245,203,136,0.4)" stroke-width="1" />
      <text x="80" y="38" fill="#f5cb88" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="10" text-anchor="middle" letter-spacing="1">BÔNUS 0${num}</text>
      
      <!-- Icon -->
      <circle cx="80" cy="74" r="22" fill="#1e1811" stroke="#f5cb88" stroke-width="1.5" />
      <text x="80" y="82" font-size="22" text-anchor="middle">📘</text>
      
      <!-- Text -->
      <text x="80" y="114" fill="#faf1e2" font-family="'Cinzel', serif" font-weight="700" font-size="10" text-anchor="middle">${title.length > 20 ? title.substring(0, 20) + '...' : title}</text>
      <text x="80" y="130" fill="#a8977c" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="8.5" text-anchor="middle">${subtitle}</text>
    </svg>
  `;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// Generate Realistic WhatsApp Testimonial Screenshot SVG
export function generateTestimonialSvg(name: string, location: string, message: string, time: string, stars = 5): string {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 260" width="540" height="260">
      <defs>
        <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#191511" />
          <stop offset="100%" stop-color="#0f0c09" />
        </linearGradient>
      </defs>
      <rect width="540" height="260" rx="18" fill="url(#cardGrad)" stroke="rgba(230,181,90,0.25)" stroke-width="1.5" />
      
      <!-- Header bar with User Avatar -->
      <circle cx="48" cy="50" r="22" fill="#2d2318" stroke="#f5cb88" stroke-width="1.5" />
      <text x="48" y="58" fill="#f5cb88" font-family="'Cinzel', serif" font-weight="800" font-size="18" text-anchor="middle">${name.charAt(0)}</text>
      
      <text x="84" y="44" fill="#faf1e2" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="16">${name}</text>
      <text x="84" y="62" fill="#cdb896" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="12">📍 ${location} • Cliente Verificado</text>
      
      <!-- Stars -->
      <g transform="translate(420, 36)">
        <text x="0" y="15" fill="#f5cb88" font-size="16">★★★★★</text>
      </g>
      
      <line x1="26" y1="84" x2="514" y2="84" stroke="rgba(230,181,90,0.15)" stroke-width="1" />
      
      <!-- WhatsApp Bubble Message -->
      <rect x="26" y="100" width="488" height="110" rx="12" fill="#13241b" stroke="rgba(34, 197, 94, 0.25)" stroke-width="1" />
      
      <text x="44" y="132" fill="#e2f5e8" font-family="'Plus Jakarta Sans', sans-serif" font-size="13.5" font-weight="500">
        "${message.length > 55 ? message.substring(0, 55) : message}"
      </text>
      ${message.length > 55 ? `<text x="44" y="156" fill="#e2f5e8" font-family="'Plus Jakarta Sans', sans-serif" font-size="13.5" font-weight="500">${message.substring(55, 115)}</text>` : ''}
      ${message.length > 115 ? `<text x="44" y="178" fill="#e2f5e8" font-family="'Plus Jakarta Sans', sans-serif" font-size="13.5" font-weight="500">${message.substring(115, 175)}</text>` : ''}
      
      <text x="495" y="196" fill="#75b58c" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" text-anchor="end">${time} • Enviado via WhatsApp ✓✓</text>
      
      <!-- Bottom Badge -->
      <rect x="26" y="222" width="145" height="22" rx="11" fill="rgba(245,203,136,0.12)" />
      <text x="98" y="237" fill="#f5cb88" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="10.5" text-anchor="middle">Peça impressa e vendida</text>
    </svg>
  `;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
