<section id="home" class="hero">
  <div class="content">
    <h1>Zouhair Ijaad</h1>
    <p class="subtitle">Web-Softwareentwicklung</p>
    
    <div class="description">
      <p>Ich erstelle moderne Webanwendungen mit Svelte und JavaScript.</p>
      <p>Spezialisiert auf performante, nutzerfreundliche Lösungen.</p>
    </div>

    <div class="cta-container">
      <a href="#projects" class="btn primary">Meine Projekte</a>
      <a href="#contact" class="btn secondary">Kontakt aufnehmen</a>
    </div>
  </div>

  <div class="scroll-hint">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M7 10l5 5 5-5z" fill="currentColor"/>
    </svg>
  </div>
</section>

<style>
  .hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 20px;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    position: relative;
  }

  .content {
    max-width: 800px;
    margin: 0 auto;
  }

  h1 {
    font-size: 3.5rem;
    margin: 0;
    color: #212529;
    line-height: 1.2;
    font-weight: 700;
  }

  .subtitle {
    font-size: 1.5rem;
    color: #495057;
    margin: 1rem 0 2rem;
    font-weight: 300;
  }

  .description {
    margin: 2rem 0;
    font-size: 1.1rem;
    color: #495057;
    line-height: 1.6;
  }

  .description p {
    margin: 0.5rem 0;
  }

  .cta-container {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
    flex-wrap: wrap;
  }

  .btn {
    padding: 12px 24px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .primary {
    background: #4361ee;
    color: white;
    border: 2px solid #4361ee;
  }

  .primary:hover {
    background: #3a56d4;
    transform: translateY(-2px);
  }

  .secondary {
    background: transparent;
    color: #4361ee;
    border: 2px solid #4361ee;
  }

  .secondary:hover {
    background: rgba(67, 97, 238, 0.1);
    transform: translateY(-2px);
  }

  .scroll-hint {
    position: absolute;
    bottom: 40px;
    animation: bounce 2s infinite;
    color: #495057;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }

  /* Responsive Anpassungen */
  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    .subtitle {
      font-size: 1.2rem;
    }
    .description {
      font-size: 1rem;
    }
  }
</style>