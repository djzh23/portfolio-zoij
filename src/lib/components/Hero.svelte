<!-- 
  Hero.svelte - Hauptkomponente für das Portfolio
  Enthält nur die Hero-Sektion
-->

<script>
  // ===== SCROLL FUNKTIONEN =====
  /**
   * Scrollt zurück zum Seitenanfang
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
</script>

<!-- ===== HEAD ELEMENTE ===== -->
<svelte:head>
  <title>Zouhair Ijaad | Full-Stack Entwickler</title>
</svelte:head>

<!-- ===== HAUPTINHALT ===== -->
<main>
  <!-- Startsektion -->
  <section id="start" class="section hero-section">
    <div class="hero-background">
      <div class="overlay"></div>
      <div class="pattern"></div>
    </div>
    
    <div class="content animate-fade">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="glitch" data-text="Junior Backend & Full-Stack Entwickler">Junior Backend & Full-Stack Entwickler</h1>
          <p class="subtitle">Code, Kaffee & saubere Software – das ist mein Ding.</p>
          <div class="description">
            <p>Seit über 8 Jahren bastle ich mit Leidenschaft an Software – vom Uni-Projekt über Praktika bis zu Werkstudentenjobs. Mein Fokus: robuste Backends mit .NET & Laravel, ergänzt durch moderne Frontend-Skills. Ich lerne schnell, bleibe neugierig und bringe Spaß am Coden mit.</p>
          </div>
          <div class="hero-buttons">
            <button class="cta-button primary" on:click={() => {
              const element = document.getElementById('weitere-projekte');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                // Nach dem Scrollen den Web & Mobile Apps Tab aktivieren
                setTimeout(() => {
                  const webMobileButton = document.querySelector('[data-category="web-mobile"]');
                  if (webMobileButton) {
                    webMobileButton.click();
                  }
                }, 800); // Kurze Verzögerung für smooth scroll
              }
            }}>
              Meine Projekte entdecken
            </button>

          </div>
        </div>
        
        <div class="hero-stats">
          <div class="stat-item" on:click={() => {
            const element = document.getElementById('projekte');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}>
            <span class="stat-number">💻</span>
            <span class="stat-label">8+ Jahre Coding-Erfahrung</span>
          </div>
          <div class="stat-item" on:click={() => {
            const element = document.getElementById('weitere-projekte');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}>
            <span class="stat-number">🚀</span>
            <span class="stat-label">5+ Praxisprojekte & Praktika</span>
          </div>
          <div class="stat-item" on:click={() => {
            const element = document.getElementById('skills');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}>
            <span class="stat-number">⚙️</span>
            <span class="stat-label">10+ Technologien</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<!-- ===== SCROLL-TO-TOP BUTTON ===== -->
<button class="scroll-top-btn" on:click={scrollToTop} aria-label="Nach oben scrollen">
  ↑
</button>

<style>
  /* ===== SEKTIONS STYLES ===== */
  .section {
    padding: 120px 20px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  }

  .pattern {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(circle at 25% 25%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
    animation: float 20s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }

  .content {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 1;
  }

  .hero-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 5rem;
    align-items: center;
    margin-bottom: 2rem;
  }

  .hero-text {
    text-align: left;
  }

  h1 {
    font-size: 4rem;
    font-weight: 700;
    margin: 0 0 1.5rem 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
    font-family: 'Poppins', sans-serif;
  }

  .glitch {
    position: relative;
  }

  .glitch::before,
  .glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .glitch::before {
    animation: glitch-1 2s infinite;
    color: #ff0000;
    z-index: -1;
  }

  .glitch::after {
    animation: glitch-2 2s infinite;
    color: #00ff00;
    z-index: -2;
  }

  @keyframes glitch-1 {
    0%, 100% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
  }

  @keyframes glitch-2 {
    0%, 100% { transform: translate(0); }
    20% { transform: translate(2px, -2px); }
    40% { transform: translate(2px, 2px); }
    60% { transform: translate(-2px, -2px); }
    80% { transform: translate(-2px, 2px); }
  }

  .subtitle {
    font-size: 1.5rem;
    color: #667eea;
    margin: 0 0 2rem 0;
    font-weight: 500;
  }

  .description {
    margin-bottom: 3rem;
  }

  .description p {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.6;
    margin: 0;
  }

  .hero-buttons {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .cta-button {
    padding: 1rem 2rem;
    border: none;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .cta-button.primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
  }

  .cta-button.secondary {
    background: transparent;
    color: #667eea;
    border: 2px solid #667eea;
  }

  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
  }

  .cta-button.secondary:hover {
    background: #667eea;
    color: white;
  }

  .hero-stats {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .stat-item {
    text-align: center;
    padding: 2.5rem;
    background: var(--bg-card);
    backdrop-filter: blur(10px);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .stat-item:hover {
    transform: translateY(-5px);
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  }

  .stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    color: #667eea;
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-size: 1rem;
    color: #666;
    font-weight: 500;
  }

  .animate-fade {
    animation: fadeIn 1s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* ===== SCROLL-TO-TOP BUTTON STYLES ===== */
  .scroll-top-btn {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary);
    color: white;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    transition: var(--transition);
    z-index: 100;
    opacity: 0;
    visibility: hidden;
  }

  .scroll-top-btn:global(.visible) {
    opacity: 1;
    visibility: visible;
  }

  .scroll-top-btn:hover {
    transform: translateY(-5px);
    background: #3a56d4;
  }

  /* ===== RESPONSIVE STYLES ===== */
  @media (max-width: 768px) {
    .section {
      padding: 100px 1rem 3rem;
    }

    .hero-content {
      grid-template-columns: 1fr;
      gap: 3rem;
      text-align: center;
    }

    .hero-text {
      text-align: center;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .subtitle {
      margin-bottom: 1.5rem;
    }

    .description {
      margin-bottom: 2rem;
    }

    .hero-buttons {
      justify-content: center;
      gap: 1rem;
    }

    .hero-stats {
      flex-direction: row;
      justify-content: center;
      gap: 1rem;
    }

    .stat-item {
      padding: 1.5rem;
      flex: 1;
      max-width: 120px;
    }

    .stat-number {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    .section {
      padding: 80px 0.5rem 2rem;
    }

    .glitch {
      font-size: 2rem;
    }

    .subtitle {
      font-size: 1.2rem;
    }

    .description {
      font-size: 1rem;
    }

    .hero-stats {
      flex-direction: column;
      gap: 0.8rem;
    }

    .stat-item {
      min-width: 100%;
      padding: 1rem;
    }

    .stat-number {
      font-size: 1.5rem;
    }

    .stat-label {
      font-size: 0.7rem;
    }

    .cta-button {
      width: 100%;
      max-width: 300px;
      justify-content: center;
    }
  }
</style>
