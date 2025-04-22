<script>
  import { onMount } from 'svelte';
  
  let activeSection = 'start';
  
  // Für flüssiges Scrollen
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ 
      behavior: 'smooth' 
    });
    activeSection = id;
  };
  
  // Nach-oben-Button
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Aktive Sektion beim Scrollen erkennen
  onMount(() => {
    const sections = ['start', 'projekte', 'skills', 'erfahrung', 'kontakt'];
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeSection = entry.target.id;
        }
      });
    }, { threshold: 0.5 });
    
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
  });
</script>

<svelte:head>
  <title>Mein Portfolio | Full-Stack Entwickler</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
</svelte:head>

<!-- Navigation -->
<nav class="navbar">
  <div class="nav-container">
    <a 
      href="#start" 
      class:active={activeSection === 'start'}
      on:click|preventDefault={() => scrollTo('start')}
    >Start</a>
    <a 
      href="#projekte" 
      class:active={activeSection === 'projekte'}
      on:click|preventDefault={() => scrollTo('projekte')}
    >Projekte</a>
    <a 
      href="#skills" 
      class:active={activeSection === 'skills'}
      on:click|preventDefault={() => scrollTo('skills')}
    >Skills</a>
    <a 
      href="#erfahrung" 
      class:active={activeSection === 'erfahrung'}
      on:click|preventDefault={() => scrollTo('erfahrung')}
    >Erfahrung</a>
    <a 
      href="#kontakt" 
      class:active={activeSection === 'kontakt'}
      on:click|preventDefault={() => scrollTo('kontakt')}
    >Kontakt</a>
  </div>
</nav>

<!-- Hauptinhalt -->
<main>
  <!-- Startsektion -->
  <section id="start" class="section start-section">
    <div class="content animate-fade">
      <h1>Zmark Ouagadoudou</h1>
      <p class="subtitle">Full-Stack Entwickler & IT-Spezialist</p>
      <div class="description">
        <p>8+ Jahre Erfahrung in der Entwicklung moderner Web- und Mobile-Anwendungen. Spezialisiert auf plattformübergreifende Lösungen.</p>
      </div>
      <button class="cta-button" on:click={() => scrollTo('projekte')}>
        Meine Projekte entdecken ↓
      </button>
    </div>
  </section>

  <!-- Projekte -->
  <section id="projekte" class="section projects-section">
    <div class="content animate-slide-up">
      <h2>Meine Projekte</h2>
      <div class="project-grid">
        <div class="project-card">
          <h3>Business-App</h3>
          <p>.NET MAUI Blazor Anwendung für MYIT Personal Networks</p>
          <span class="tag">C#</span>
          <span class="tag">.NET</span>
        </div>
        <div class="project-card">
          <h3>DIGI:BO Plattform</h3>
          <p>Digitale Berufsorientierung für Schulen</p>
          <span class="tag">JavaScript</span>
          <span class="tag">Sass</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills -->
  <section id="skills" class="section skills-section">
    <div class="content animate-slide-up">
      <h2>Technische Skills</h2>
      <div class="skills-container">
        <div class="skill-category">
          <h3>Frontend</h3>
          <ul>
            <li>HTML5/CSS3</li>
            <li>JavaScript</li>
            <li>Svelte</li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Backend</h3>
          <ul>
            <li>C#/.NET</li>
            <li>Java</li>
            <li>PHP</li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Datenbanken</h3>
          <ul>
            <li>MySQL</li>
            <li>ORM</li>
            <li>Design</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Berufserfahrung -->
  <section id="erfahrung" class="section experience-section">
    <div class="content animate-slide-up">
      <h2>Berufserfahrung</h2>
      <div class="timeline">
        <div class="timeline-item">
          <h3>MYIT Personal Networks GmbH</h3>
          <p class="date">06/2023 - heute</p>
          <p>Entwicklung einer .NET MAUI Blazor Business-App</p>
        </div>
        <div class="timeline-item">
          <h3>ME2BE Medien GmbH</h3>
          <p class="date">10/2021 - 03/2023</p>
          <p>Webentwicklung & Redaktion</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Kontakt -->
  <section id="kontakt" class="section contact-section">
    <div class="content animate-fade">
      <h2>Kontakt</h2>
      <form class="contact-form">
        <input type="text" placeholder="Name">
        <input type="email" placeholder="E-Mail">
        <textarea placeholder="Nachricht" rows="5"></textarea>
        <button type="submit">Senden</button>
      </form>
      <div class="contact-info">
        <p>📞 (+49) 0188 58 888 18 19</p>
        <p>✉ zmar.ouga@gmail.com</p>
      </div>
    </div>
  </section>
</main>

<!-- Nach-oben-Button -->
<button class="scroll-top-btn" on:click={scrollToTop} aria-label="Nach oben scrollen">
  ↑
</button>

<style>
  /* Globale Styles */
  :root {
    --primary: #4361ee;
    --primary-light: #4cc9f0;
    --dark: #2b2d42;
    --light: #f8f9fa;
    --gray: #6c757d;
    --transition: all 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    color: var(--dark);
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
  }

  /* Navigation */
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    z-index: 1000;
    backdrop-filter: blur(5px);
  }

  .nav-container {
    display: flex;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
  }

  .navbar a {
    color: var(--gray);
    text-decoration: none;
    padding: 0.5rem 1.5rem;
    margin: 0 0.5rem;
    transition: var(--transition);
    position: relative;
  }

  .navbar a:hover {
    color: var(--primary);
  }

  .navbar a.active {
    color: var(--primary);
    font-weight: 600;
  }

  .navbar a.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 3px;
    background: var(--primary);
    border-radius: 3px;
  }

  /* Sektionen */
  .section {
    min-height: 100vh;
    padding: 6rem 2rem 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }

  /* Startsektion */
  .start-section {
    background: linear-gradient(135deg, #3a0ca3 0%, #4361ee 100%);
    color: white;
    text-align: center;
  }

  .start-section h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .subtitle {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  .description {
    max-width: 700px;
    margin: 0 auto 3rem;
    font-size: 1.1rem;
  }

  .cta-button {
    background: white;
    color: var(--primary);
    border: none;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: 50px;
    cursor: pointer;
    transition: var(--transition);
    font-weight: 600;
  }

  .cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }

  /* Projekte */
  .projects-section {
    background: var(--light);
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .project-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    transition: var(--transition);
  }

  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }

  .project-card h3 {
    margin-bottom: 0.5rem;
    color: var(--primary);
  }

  .tag {
    display: inline-block;
    background: var(--primary-light);
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 50px;
    font-size: 0.8rem;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
  }

  /* Skills */
  .skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .skill-category {
    background: white;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  }

  .skill-category h3 {
    color: var(--primary);
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--primary-light);
  }

  .skill-category ul {
    list-style: none;
  }

  .skill-category li {
    padding: 0.5rem 0;
    position: relative;
    padding-left: 1.5rem;
  }

  .skill-category li::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: var(--primary-light);
  }

  /* Erfahrung */
  .timeline {
    position: relative;
    max-width: 800px;
    margin: 3rem auto 0;
  }

  .timeline::before {
    content: '';
    position: absolute;
    left: 50px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--primary-light);
  }

  .timeline-item {
    position: relative;
    padding-left: 100px;
    margin-bottom: 3rem;
  }

  .timeline-item h3 {
    color: var(--primary);
  }

  .date {
    color: var(--gray);
    font-size: 0.9rem;
    margin: 0.3rem 0;
  }

  .timeline-item::before {
    content: '';
    position: absolute;
    left: 42px;
    top: 5px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--primary);
    border: 3px solid var(--primary-light);
  }

  /* Kontakt */
  .contact-form {
    max-width: 600px;
    margin: 2rem auto;
    display: grid;
    gap: 1rem;
  }

  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-family: inherit;
  }

  .contact-form button {
    background: var(--primary);
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 5px;
    cursor: pointer;
    transition: var(--transition);
    font-weight: 600;
  }

  .contact-form button:hover {
    background: #3a56d4;
  }

  .contact-info {
    text-align: center;
    margin-top: 2rem;
  }

  /* Nach-oben-Button */
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

  .scroll-top-btn.visible {
    opacity: 1;
    visibility: visible;
  }

  .scroll-top-btn:hover {
    transform: translateY(-5px);
    background: #3a56d4;
  }

  /* Animationen */
  .animate-fade {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 1s forwards;
  }

  .animate-slide-up {
    opacity: 0;
    transform: translateY(50px);
    animation: slideUp 0.8s forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Responsive */
  @media (max-width: 768px) {
    .nav-container {
      padding: 0.5rem;
    }
    
    .navbar a {
      padding: 0.5rem;
      font-size: 0.9rem;
    }
    
    .section {
      padding: 5rem 1rem 3rem;
    }
    
    .timeline::before {
      left: 30px;
    }
    
    .timeline-item {
      padding-left: 60px;
    }
    
    .timeline-item::before {
      left: 22px;
    }
  }
</style>