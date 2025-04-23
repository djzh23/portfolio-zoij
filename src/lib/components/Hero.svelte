<!-- 
  Hero.svelte - Hauptkomponente für das Portfolio
  Enthält Navigation, Startseite, Projekte, Skills, Erfahrung und Kontakt
-->

<script>
  // ===== IMPORTS =====
  import { onMount } from 'svelte';
  
  // ===== STATE MANAGEMENT =====
  let activeSection = 'start'; // Aktive Sektion für Navigation
  let isMenuOpen = false;
  let isAtBottom = false;
  let expandedCards = {
    myit: false,
    me2be: false
  };
  
  // ===== SCROLL FUNKTIONEN =====
  const sections = ['start', 'projekte', 'skills', 'erfahrung', 'kontakt'];
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      activeSection = sectionId;
      isAtBottom = sectionId === 'kontakt';
      if (isMenuOpen) isMenuOpen = false;
    }
  };
  
  const scrollToNextSection = () => {
    const currentIndex = sections.indexOf(activeSection);
    let nextSection;
    
    if (currentIndex === sections.length - 1) {
      nextSection = 'start';
      isAtBottom = true;
    } else {
      nextSection = sections[currentIndex + 1];
      isAtBottom = false;
    }
    
    scrollToSection(nextSection);
  };
  
  /**
   * Scrollt zurück zum Seitenanfang
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    activeSection = 'start';
    isAtBottom = false;
  };

  /**
   * Toggle für das mobile Menü
   */
  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };
  
  // ===== INTERSECTION OBSERVER =====
  /**
   * Beobachtet Sektionen und aktualisiert die aktive Navigation
   */
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

  const scrollToNext = () => {
    const nextSection = document.getElementById('projekte');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Aktualisiere isAtBottom basierend auf der aktiven Sektion
  $: isAtBottom = activeSection === 'kontakt';

  const toggleCard = (cardId) => {
    expandedCards[cardId] = !expandedCards[cardId];
  };
</script>

<!-- ===== HEAD ELEMENTE ===== -->
<svelte:head>
  <title>Mein Portfolio | Full-Stack Entwickler</title>
  <link href="https://fonts.googleapis.com/css2?family=Special+Gothic+Expanded+One&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</svelte:head>

<!-- ===== NAVIGATION ===== -->
<nav class="navbar">
  <div class="nav-container">
    <div class="logo">
      <a href="#start" on:click|preventDefault={() => scrollToSection('start')}>ZI</a>
    </div>
    
    <!-- Desktop Navigation -->
    <div class="desktop-nav">
      <a href="#start" class:active={activeSection === 'start'} on:click|preventDefault={() => scrollToSection('start')}>Start</a>
      <a href="#projekte" class:active={activeSection === 'projekte'} on:click|preventDefault={() => scrollToSection('projekte')}>Projekte</a>
      <a href="#skills" class:active={activeSection === 'skills'} on:click|preventDefault={() => scrollToSection('skills')}>Skills</a>
      <a href="#erfahrung" class:active={activeSection === 'erfahrung'} on:click|preventDefault={() => scrollToSection('erfahrung')}>Erfahrung</a>
      <a href="#kontakt" class:active={activeSection === 'kontakt'} on:click|preventDefault={() => scrollToSection('kontakt')}>Kontakt</a>
    </div>

    <!-- Mobile Navigation Toggle -->
    <button class="mobile-menu-toggle" on:click={toggleMenu} aria-label="Menü öffnen/schließen">
      <span class="hamburger"></span>
    </button>
  </div>

  <!-- Mobile Navigation Menu -->
  <div class="mobile-nav" class:open={isMenuOpen}>
    <a href="#start" class:active={activeSection === 'start'} on:click|preventDefault={() => scrollToSection('start')}>Start</a>
    <a href="#projekte" class:active={activeSection === 'projekte'} on:click|preventDefault={() => scrollToSection('projekte')}>Projekte</a>
    <a href="#skills" class:active={activeSection === 'skills'} on:click|preventDefault={() => scrollToSection('skills')}>Skills</a>
    <a href="#erfahrung" class:active={activeSection === 'erfahrung'} on:click|preventDefault={() => scrollToSection('erfahrung')}>Erfahrung</a>
    <a href="#kontakt" class:active={activeSection === 'kontakt'} on:click|preventDefault={() => scrollToSection('kontakt')}>Kontakt</a>
  </div>
</nav>

<!-- ===== HAUPTINHALT ===== -->
<main>
  <!-- Startsektion -->
  <section id="start" class="section start-section">
    <div class="hero-background">
      <div class="overlay"></div>
      <div class="pattern"></div>
    </div>
    
    <div class="content animate-fade">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="glitch" data-text="Zouhair Ijaad">Zouhair Ijaad</h1>
          <p class="subtitle">Full-Stack Entwickler & IT-Spezialist</p>
          <div class="description">
            <p>8+ Jahre Erfahrung in der Entwicklung moderner Web- und Mobile-Anwendungen. Spezialisiert auf plattformübergreifende Lösungen und innovative Technologien.</p>
          </div>
          <div class="hero-buttons">
            <button class="cta-button primary" on:click={() => scrollToSection('projekte')}>
              Meine Projekte entdecken
            </button>
            <button class="cta-button secondary" on:click={() => scrollToSection('kontakt')}>
              Kontakt aufnehmen
            </button>
          </div>
        </div>
        
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">2+</span>
            <span class="stat-label">Jahre Erfahrung</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">15+</span>
            <span class="stat-label">Projekte</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">5+</span>
            <span class="stat-label">Technologien</span>
          </div>
        </div>
      </div>
      
      <div class="scroll-indicator" 
        on:click={scrollToNextSection}
        on:keydown={(e) => e.key === 'Enter' && scrollToNextSection()}
        role="button"
        tabindex="0"
        aria-label={isAtBottom ? "Nach oben scrollen" : "Weiter scrollen"}
      >
        <div class="scroll-text">
          <span>{isAtBottom ? 'Nach oben' : 'Weiter'}</span>
          <div class="arrow-container">
            <svg 
              class="arrow" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style="transform: rotate({isAtBottom ? '180deg' : '0deg'})"
            >
              <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Projekte Sektion -->
  <section id="projekte" class="section projects-section">
    <div class="content animate-slide-up">
      <h2>Berufserfahrungen</h2>
      
      <!-- Berufserfahrung -->
      <div class="experience-cards">
        <div class="project-card gradient-card">
          <div class="card-header clickable" 
               on:click={() => toggleCard('myit')} 
               on:keydown={(e) => e.key === 'Enter' && toggleCard('myit')} 
               role="button" 
               tabindex="0">
            <div class="header-content">
              <div class="header-main">
                <h3>Sentialnet Personal Networks GmbH</h3>
                <p class="subtitle">Business Network App</p>
                <p class="location">Versmold, Nordrhein-Westfalen</p>
                <span class="date">06/2023 – 01/2025 · Werkstudent</span>
              </div>
              <div class="header-icon">
                <i class="fas fa-chevron-{expandedCards.myit ? 'up' : 'down'}"></i>
              </div>
            </div>
            <div class="tech-stack">
              <span class="tech-tag"><i class="fab fa-microsoft"></i> .NET MAUI</span>
              <span class="tech-tag"><i class="fab fa-microsoft"></i> Blazor</span>
              <span class="tech-tag"><i class="fas fa-code"></i> C#</span>
              <span class="tech-tag"><i class="fas fa-database"></i> SQL Server</span>
              <span class="tech-tag"><i class="fas fa-layer-group"></i> MVVM</span>
            </div>
          </div>

          <div class="card-content" class:expanded={expandedCards.myit}>
            <div class="project-overview">
              <p>Entwicklung einer umfassenden Business-Netzwerk-Plattform für interne Kommunikation und Prozessmanagement. Die Anwendung ermöglicht Mitarbeitern den sicheren Austausch von Dokumenten, die Koordination von Projekten und die Verwaltung interner Abläufe.</p>
            </div>

            <div class="features-list">
              <div class="feature-group">
                <h5>Hauptverantwortlichkeiten:</h5>
                <div class="feature-item">
                  <i class="fas fa-check"></i>
                  <span>Entwicklung der Cross-Platform App für Mobile, Desktop und Web</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-check"></i>
                  <span>Implementierung der MVVM-Architektur und Clean Code Prinzipien</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-check"></i>
                  <span>Integration von REST-APIs und Backend-Services</span>
                </div>
              </div>

              <div class="feature-group">
                <h5>Technische Highlights:</h5>
                <div class="feature-item">
                  <i class="fas fa-check"></i>
                  <span>Entwicklung wiederverwendbarer UI-Komponenten mit Blazor</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-check"></i>
                  <span>Implementierung von Real-time Updates via SignalR</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-check"></i>
                  <span>Optimierung der Datenbankabfragen und Caching-Strategien</span>
                </div>
              </div>
            </div>

            <div class="achievements">
              <h5>Erfolge & Metriken:</h5>
              <div class="metrics-grid">
                <div class="metric">
                  <i class="fas fa-tachometer-alt"></i>
                  <div class="metric-content">
                    <span class="metric-title">Performance</span>
                    <span class="metric-value">+35% Steigerung</span>
                    <span class="metric-detail">durch Caching & Optimierung</span>
                  </div>
                </div>
                <div class="metric">
                  <i class="fas fa-users"></i>
                  <div class="metric-content">
                    <span class="metric-title">Nutzerbasis</span>
                    <span class="metric-value">50+ aktive Nutzer</span>
                    <span class="metric-detail">tägliche Nutzung</span>
                  </div>
                </div>
                <div class="metric">
                  <i class="fas fa-code-branch"></i>
                  <div class="metric-content">
                    <span class="metric-title">Entwicklung</span>
                    <span class="metric-value">100+ PRs</span>
                    <span class="metric-detail">erfolgreich deployed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="project-card gradient-card">
          <div class="card-header clickable" 
               on:click={() => toggleCard('me2be')} 
               on:keydown={(e) => e.key === 'Enter' && toggleCard('me2be')} 
               role="button" 
               tabindex="0">
            <div class="header-content">
              <div class="header-main">
                <h3>ME2BE Medien GmbH</h3>
                <p class="subtitle">Schulplattform</p>
                <p class="location">Sehestedt, Schleswig-Holstein</p>
                <span class="date">10/2021 – 03/2022 · Hybrid</span>
              </div>
              <div class="header-icon">
                <i class="fas fa-chevron-{expandedCards.me2be ? 'up' : 'down'}"></i>
              </div>
            </div>
            <div class="tech-stack">
              <span class="tech-tag"><i class="fab fa-laravel"></i> PHP</span>
              <span class="tech-tag"><i class="fab fa-js"></i> JavaScript</span>
              <span class="tech-tag"><i class="fab fa-wordpress"></i> WordPress</span>
              <span class="tech-tag"><i class="fab fa-html5"></i> HTML/CSS</span>
              <span class="tech-tag"><i class="fas fa-database"></i> Redaktion und Veröffentlichung von Inhalten</span>
            </div>
          </div>

          <div class="card-content" class:expanded={expandedCards.me2be}>
            <div class="project-overview">
              <p>Entwicklung und Betreuung einer innovativen Bildungsplattform für die digitale Berufsorientierung. Das System unterstützt über 60 Schulen bei der Verwaltung und Durchführung von Berufsorientierungsmaßnahmen und verbindet Schüler mit potenziellen Arbeitgebern.</p>
            </div>

            <div class="features-list">
              <div class="feature-group">
                <h5>Kernaufgaben:</h5>
                <div class="feature-item">
                  <i class="fas fa-check"></i>
                  <span>Frontend-Entwicklung mit Fokus auf Responsive Design</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-check"></i>
                  <span>WordPress-Theme Entwicklung und Customizing</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-check"></i>
                  <span>Integration von CMS-Funktionen und Content-Management</span>
                </div>
              </div>

              <div class="feature-group">
                <h5>Projektbeiträge:</h5>
                <div class="feature-item">
                  <i class="fas fa-check"></i>
                  <span>Entwicklung einer internen Wissensdatenbank</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-check"></i>
                  <span>Implementierung von Schnittstellen für Schulportale</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-check"></i>
                  <span>Optimierung der Benutzerführung für Bildungszielgruppen</span>
                </div>
              </div>
            </div>

            <div class="achievements">
              <h5 class="section-subtitle">Highlights & Ergebnisse:</h5>
              <div class="achievement-grid">
                <div class="achievement-card">
                  <div class="achievement-icon">
                    <i class="fas fa-users"></i>
                  </div>
                  <div class="achievement-content">
                    <span class="achievement-title">Nutzerreichweite</span>
                    <span class="achievement-value">60+ Schulen</span>
                    <span class="achievement-detail">Erfolgreiche Integration und aktive Nutzung</span>
                  </div>
                </div>
                <div class="achievement-card">
                  <div class="achievement-icon">
                    <i class="fas fa-paint-brush"></i>
                  </div>
                  <div class="achievement-content">
                    <span class="achievement-title">UI/UX-Optimierung</span>
                    <span class="achievement-value">+40% Engagement</span>
                    <span class="achievement-detail">Verbesserte Nutzererfahrung für Schüler und Lehrer</span>
                  </div>
                </div>
                <div class="achievement-card">
                  <div class="achievement-icon">
                    <i class="fas fa-book"></i>
                  </div>
                  <div class="achievement-content">
                    <span class="achievement-title">Wissensdatenbank</span>
                    <span class="achievement-value">200+ Artikel</span>
                    <span class="achievement-detail">Umfassende Dokumentation und Tutorials</span>
                  </div>
                </div>
                <div class="achievement-card">
                  <div class="achievement-icon">
                    <i class="fas fa-tasks"></i>
                  </div>
                  <div class="achievement-content">
                    <span class="achievement-title">System-Migration</span>
                    <span class="achievement-value">100% Erfolg</span>
                    <span class="achievement-detail">Reibungslose CMS-Migration und Wartung</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 class="section-title">Weitere Projekte</h3>
      
      <div class="projects-grid">
        <!-- Spieleentwicklung -->
        <div class="project-card">
          <div class="card-header">
            <div class="header-title">
              <h4>Spieleentwicklung</h4>
              <i class="fas fa-gamepad"></i>
            </div>
          </div>
          <div class="card-content visible">
            <div class="tech-stack">
              <span class="tech-tag"><i class="fab fa-java"></i> Java</span>
              <span class="tech-tag"><i class="fab fa-unity"></i> Unity</span>
              <span class="tech-tag"><i class="fas fa-code"></i> C#</span>
              <span class="tech-tag"><i class="fas fa-code"></i> Elm</span>
            </div>
            <div class="project-overview">
              <p>Entwicklung verschiedener Spiele zur Vertiefung von Programmierkonzepten und Spielelogik. Von klassischen Brettspielen bis hin zu 3D-Anwendungen.</p>
            </div>
            <div class="project-details">
              <div class="project-item">
                <h5>XO-Game & Schach</h5>
                <p>Java-basierte Implementierung mit Fokus auf OOP-Prinzipien und KI-Algorithmen</p>
                <ul>
                  <li>Minimax-Algorithmus für KI-Gegner</li>
                  <li>Modulares Design mit Factory Pattern</li>
                  <li>Unit Tests für Spielregeln</li>
                </ul>
              </div>
              <div class="project-item">
                <h5>RollingBall 3D</h5>
                <p>Unity-Spiel mit C# für physikbasierte Spielmechaniken</p>
                <ul>
                  <li>3D-Physik und Kollisionserkennung</li>
                  <li>Level-Design und Gameplay-Balancing</li>
                  <li>UI-System für Score und Menüs</li>
                </ul>
              </div>
              <div class="project-item">
                <h5>Snake-Game (Elm)</h5>
                <p>Funktionale Implementierung mit Elm</p>
                <ul>
                  <li>Reaktive UI mit Elm Architecture</li>
                  <li>Zustandsmanagement mit Pure Functions</li>
                  <li>Performance-Optimierung</li>
                </ul>
              </div>
            </div>
            <div class="key-features">
              <span class="key-feature">OOP Prinzipien</span>
              <span class="key-feature">Game Design</span>
              <span class="key-feature">Collision Detection</span>
              <span class="key-feature">AI Implementation</span>
            </div>
          </div>
        </div>

        <!-- Web & Mobile Apps -->
        <div class="project-card">
          <div class="card-header">
            <div class="header-title">
              <h4>Web & Mobile Apps</h4>
              <i class="fas fa-mobile-alt"></i>
            </div>
          </div>
          <div class="card-content visible">
            <div class="tech-stack">
              <span class="tech-tag"><i class="fab fa-microsoft"></i> .NET MAUI</span>
              <span class="tech-tag"><i class="fab fa-laravel"></i> Laravel</span>
              <span class="tech-tag"><i class="fab fa-android"></i> Kotlin</span>
              <span class="tech-tag"><i class="fas fa-database"></i> SQLite</span>
            </div>
            <div class="project-overview">
              <p>Entwicklung moderner Cross-Platform Anwendungen mit Fokus auf native Features und intuitive Benutzeroberflächen.</p>
            </div>
            <div class="project-details">
              <div class="project-item">
                <h5>FlashCards App</h5>
                <p>.NET MAUI Anwendung mit MVVM-Pattern</p>
                <ul>
                  <li>Datenbindung und Commands</li>
                  <li>SQLite-Datenbankintegration</li>
                  <li>Responsive UI für alle Plattformen</li>
                </ul>
              </div>
              <div class="project-item">
                <h5>StrandKorb-System</h5>
                <p>Kotlin-basierte Verwaltungsplattform</p>
                <ul>
                  <li>RESTful API Integration</li>
                  <li>Offline-First Konzept</li>
                  <li>Material Design UI</li>
                </ul>
              </div>
              <div class="project-item">
                <h5>Time Tracking App</h5>
                <p>Elm-basierte Webanwendung</p>
                <ul>
                  <li>Automatisierte Timeline-UI</li>
                  <li>Datenvisualisierung</li>
                  <li>Export-Funktionen</li>
                </ul>
              </div>
            </div>
            <div class="key-features">
              <span class="key-feature">MVVM Pattern</span>
              <span class="key-feature">Clean Architecture</span>
              <span class="key-feature">Native APIs</span>
              <span class="key-feature">Offline First</span>
            </div>
          </div>
        </div>

        <!-- Funktionale Projekte -->
        <div class="project-card">
          <div class="card-header">
            <div class="header-title">
              <h4>Funktionale Projekte</h4>
              <i class="fas fa-code"></i>
            </div>
          </div>
          <div class="card-content visible">
            <div class="tech-stack">
              <span class="tech-tag"><i class="fas fa-code"></i> Elm</span>
              <span class="tech-tag"><i class="fas fa-code"></i> Haskell</span>
            </div>
            <div class="project-overview">
              <p>Exploration funktionaler Programmierkonzepte durch praktische Anwendungen mit Fokus auf Typsicherheit und reaktive UI.</p>
            </div>
            <div class="project-details">
              <div class="project-item">
                <h5>Time Tracking App</h5>
                <p>Elm-basierte Anwendung mit automatischer Timeline</p>
                <ul>
                  <li>Reaktive UI-Komponenten</li>
                  <li>Zustandsmanagement mit Elm Architecture</li>
                  <li>Typsichere Datenverarbeitung</li>
                </ul>
              </div>
              <div class="project-item">
                <h5>Snake-Game</h5>
                <p>Funktionale Implementierung in Elm</p>
                <ul>
                  <li>Pure Functions für Spiel-Logik</li>
                  <li>Immutable Data Structures</li>
                  <li>Event-driven Architecture</li>
                </ul>
              </div>
              <div class="project-item">
                <h5>Haskell Projekte</h5>
                <p>Algorithmen und Datenstrukturen</p>
                <ul>
                  <li>Funktionale Algorithmen</li>
                  <li>Monaden und Type Classes</li>
                  <li>Pattern Matching</li>
                </ul>
              </div>
            </div>
            <div class="key-features">
              <span class="key-feature">Pure Functions</span>
              <span class="key-feature">Type Safety</span>
              <span class="key-feature">Reactive UI</span>
              <span class="key-feature">Immutable Data</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills Sektion -->
  <section id="skills" class="section skills-section">
    <div class="content animate-slide-up">
      <h2>Technische Skills</h2>
      <div class="skills-container">
        <div class="skill-category">
          <h3>Software-Architekturen & Modellierung</h3>
          <ul>
            <li>
              <i class="fas fa-project-diagram"></i>
              <span>UML (Klassen-, Sequenz-, Use-Case-Diagramme)</span>
            </li>
            <li>
              <i class="fas fa-database"></i>
              <span>Merise (Datenbankmodellierung)</span>
            </li>
            <li>
              <i class="fas fa-sitemap"></i>
              <span>MVC/MVVM (Laravel, .NET MAUI Blazor)</span>
            </li>
            <li>
              <i class="fas fa-diagram-project"></i>
              <span>BPMN (Prozessmodellierung)</span>
            </li>
            <li>
              <i class="fas fa-arrows-split-up-and-left"></i>
              <span>Monolith ↔ Service-basiert</span>
            </li>
            <li>
              <i class="fas fa-memory"></i>
              <span>Redis (Caching-Strategien)</span>
            </li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Programmierparadigmen</h3>
          <ul>
            <li>
              <i class="fas fa-function"></i>
              <span>Funktionale Programmierung (Haskell, Elm)</span>
            </li>
            <li>
              <i class="fas fa-code"></i>
              <span>Deklarative Programmierung</span>
            </li>
            <li>
              <i class="fas fa-cube"></i>
              <span>OOP (C#, Java)</span>
            </li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Frontend</h3>
          <ul>
            <li>
              <i class="fab fa-html5"></i>
              <span>HTML5/CSS3 (Semantik, Accessibility)</span>
            </li>
            <li>
              <i class="fab fa-js"></i>
              <span>JavaScript (Vanilla ES6+)</span>
            </li>
            <li>
              <img src="https://www.svgrepo.com/show/349522/svelte.svg" alt="Svelte" class="svelte-icon">
              <span>Svelte (Lightweight Components)</span>
            </li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Backend</h3>
          <ul>
            <li>
              <i class="fab fa-microsoft"></i>
              <span>C#/.NET (Core, Web API, Entity Framework)</span>
            </li>
            <li>
              <i class="fab fa-java"></i>
              <span>Java (Spring Boot Grundlagen)</span>
            </li>
            <li>
              <i class="fab fa-php"></i>
              <span>PHP (Laravel)</span>
            </li>
            <li>
              <i class="fab fa-python"></i>
              <span>Python (Skripting)</span>
            </li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Frameworks</h3>
          <ul>
            <li>
              <i class="fas fa-code"></i>
              <span>.NET MAUI (Cross-Platform: Mobile, Desktop, Web)</span>
            </li>
            <li>
              <i class="fas fa-code"></i>
              <span>WPF (Desktop-Apps)</span>
            </li>
            <li>
              <i class="fab fa-laravel"></i>
              <span>Laravel (Eloquent ORM)</span>
            </li>
            <li>
              <i class="fab fa-python"></i>
              <span>Flask & Jinja (Web APIs & Templates)</span>
            </li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Tools</h3>
          <ul>
            <li>
              <i class="fab fa-git"></i>
              <span>Git | Docker | CLI</span>
            </li>
            <li>
              <i class="fas fa-database"></i>
              <span>SQL Server | MySQL | MongoDB</span>
            </li>
            <li>
              <i class="fas fa-fire"></i>
              <span>Firebase (Realtime DB, Auth)</span>
            </li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Best Practices</h3>
          <ul>
            <li>
              <i class="fas fa-broom"></i>
              <span>Clean Code | SOLID</span>
            </li>
            <li>
              <i class="fas fa-vial"></i>
              <span>TDD (xUnit)</span>
            </li>
            <li>
              <i class="fas fa-project-diagram"></i>
              <span>Agile (Scrum/Kanban)</span>
            </li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Aktueller Fokus</h3>
          <ul>
            <li>
              <i class="fas fa-network-wired"></i>
              <span>Microservices mit .NET</span>
            </li>
            <li>
              <i class="fas fa-bolt"></i>
              <span>Event-Driven Architecture</span>
            </li>
            <li>
              <i class="fab fa-microsoft"></i>
              <span>Azure Cloud (AZ-900)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Berufserfahrung Sektion -->
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

  <!-- Kontakt Sektion -->
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

<!-- ===== SCROLL-TO-TOP BUTTON ===== -->
<button class="scroll-top-btn" on:click={scrollToTop} aria-label="Nach oben scrollen">
  ↑
</button>

<!-- Verbesserter Scroll Button mit unterschiedlichen Icons -->
<button class="scroll-btn" on:click={scrollToNextSection} aria-label={isAtBottom ? "Nach oben scrollen" : "Weiter scrollen"}>
  {#if isAtBottom}
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 19V5M5 12L12 5L19 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  {:else}
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 10L12 15L17 10" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  {/if}
</button>

<!-- ===== STYLES ===== -->
<style>
  /* ===== IMPORTS ===== */
  @import url('https://fonts.googleapis.com/css2?family=Special+Gothic+Expanded+One&display=swap');

  /* ===== VARIABLEN & IMPORTS ===== */
  :root {
    --primary: #4361ee;
    --primary-light: #4cc9f0;
    --dark: #2b2d42;
    --light: #f8f9fa;
    --gray: #6c757d;
    --transition: all 0.4s cubic-bezier(0.65, 0, 0.35, 1);
    --text-primary: #1a365d;
    --text-secondary: #2d4a6d;
    --text-accent: #4cc9f0;
  }

  /* ===== GLOBALE STYLES ===== */
  :global(body) {
    font-family: "Special Gothic Expanded One", sans-serif;
    color: var(--dark);
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3 {
    font-family: "Special Gothic Expanded One", sans-serif;
    font-weight: 600;
  }

  /* ===== NAVIGATION STYLES ===== */
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
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
  }

  .logo a {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--primary);
    text-decoration: none;
    padding: 0.5rem;
  }

  .desktop-nav {
    display: flex;
    gap: 1rem;
  }

  .navbar a {
    color: var(--gray);
    text-decoration: none;
    padding: 0.5rem 1rem;
    transition: var(--transition);
    position: relative;
    white-space: nowrap;
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

  /* Mobile Menu Toggle */
  .mobile-menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
  }

  .hamburger {
    display: block;
    width: 25px;
    height: 2px;
    background: var(--primary);
    position: relative;
    transition: var(--transition);
  }

  .hamburger::before,
  .hamburger::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--primary);
    transition: var(--transition);
  }

  .hamburger::before {
    top: -8px;
  }

  .hamburger::after {
    bottom: -8px;
  }

  /* Mobile Navigation */
  .mobile-nav {
    display: none;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.98);
    padding: 1rem;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
  }

  .mobile-nav.open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  /* ===== SEKTIONS STYLES ===== */
  .section {
    min-height: 100vh;
    padding: 6rem 2rem 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .start-section {
    position: relative;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    color: white;
    text-align: center;
    overflow: hidden;
  }

  .start-section .content {
    background: transparent;
    box-shadow: none;
    backdrop-filter: none;
    padding: 0;
  }

  .projects-section {
    background: var(--section-bg-projects);
    padding: 4rem 1rem;
  }

  .projects-section h2 {
    text-align: center;
    margin-bottom: 3rem;
    color: var(--primary);
  }

  .section-title {
    color: var(--primary);
    margin: 3rem 0 2rem;
    font-size: 1.8rem;
    position: relative;
  }

  .experience-cards {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 0 auto 3rem;
    max-width: 800px;
    width: 90%;
  }

  .projects-grid {
    display: grid;
    gap: 2rem;
    margin-top: 1rem;
  }

  .project-card {
    width: 100%;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid rgba(67, 97, 238, 0.1);
  }

  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(67, 97, 238, 0.15);
  }

  .card-content {
    padding: 1.5rem;
    background: white;
    height: auto;
    max-height: none;
    opacity: 1;
    visibility: visible;
    transition: all 0.3s ease;
  }

  .card-header {
    background: linear-gradient(135deg, #4361ee 0%, #4cc9f0 100%);
    padding: 1.5rem;
    color: white;
  }

  .card-header.clickable {
    cursor: pointer;
    user-select: none;
    transition: background-color 0.3s ease;
  }

  .card-header.clickable:hover {
    background: linear-gradient(135deg, #3a56d4 0%, #41b9e0 100%);
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .header-main {
    flex: 1;
  }

  .header-main h3 {
    color: #ffffff;
    margin: 0;
    font-size: 1.4rem;
    font-weight: 600;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  .subtitle {
    color: rgba(255, 255, 255, 0.95);
    font-size: 1.1rem;
    margin: 0.5rem 0;
    font-weight: 500;
  }

  .location {
    color: rgba(255, 255, 255, 0.85);
    font-size: 0.9rem;
    margin: 0.2rem 0;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .date {
    color: var(--dark);
    font-size: 0.9rem;
    display: block;
    margin-top: 0.2rem;
    font-weight: 400;
  }

  .header-icon {
    font-size: 1.2rem;
    color: white;
    transition: transform 0.3s ease;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .tech-tag {
    background: rgba(255, 255, 255, 0.12);
    color: #ffffff;
    padding: 0.4rem 0.8rem;
    border-radius: 50px;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    backdrop-filter: blur(5px);
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .tech-tag:hover {
    background: rgba(255, 255, 255, 0.18);
    transform: translateY(-1px);
    border-color: rgba(255, 255, 255, 0.2);
  }

  .tech-tag i {
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.9rem;
  }

  .project-overview {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 8px;
    padding: 1.2rem;
    margin: 1rem 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  .project-overview p {
    color: var(--text-primary);
    margin: 0;
    line-height: 1.6;
    font-size: 0.95rem;
  }

  .features-list {
    padding: 0 1rem;
  }

  .feature-group {
    margin-bottom: 1.5rem;
  }

  .feature-group h5 {
    color: var(--text-primary);
    margin-bottom: 1rem;
    font-size: 1.05rem;
    font-weight: 600;
  }

  .feature-item {
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;
    margin-bottom: 0.8rem;
  }

  .feature-item i {
    color: var(--text-accent);
    font-size: 0.9rem;
    margin-top: 0.2rem;
  }

  .feature-item span {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .achievements {
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(76, 201, 240, 0.2);
  }

  .achievements h5 {
    color: var(--text-primary);
    margin-bottom: 1.2rem;
    font-size: 1.05rem;
    font-weight: 600;
  }

  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }

  .metric {
    background: rgba(255, 255, 255, 0.95);
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  .metric i {
    color: var(--text-accent);
  }

  .metric-title {
    color: var(--text-secondary);
    font-size: 0.9rem;
    font-weight: 500;
  }

  .metric-value {
    color: var(--text-primary);
    font-size: 1.2rem;
    font-weight: 600;
  }

  .metric-detail {
    color: var(--text-secondary);
    font-size: 0.85rem;
    line-height: 1.4;
  }

  .achievement-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }

  .achievement-card {
    background: rgba(255, 255, 255, 0.95);
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  .achievement-icon {
    background: rgba(76, 201, 240, 0.1);
    color: var(--text-accent);
    width: 40px;
    height: 40px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  .achievement-title {
    color: var(--text-primary);
    font-weight: 600;
    font-size: 0.95rem;
  }

  .achievement-value {
    color: var(--text-primary);
    font-weight: 700;
    font-size: 1.1rem;
  }

  .achievement-detail {
    color: var(--text-secondary);
    font-size: 0.85rem;
    line-height: 1.4;
  }

  @media (max-width: 900px) {
    .experience-cards {
      width: 95%;
    }
    
    .metrics-grid,
    .achievement-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 600px) {
    .card-header {
      padding: 1.2rem;
    }

    .header-main h3 {
      font-size: 1.2rem;
    }

    .subtitle {
      font-size: 1rem;
    }

    .tech-stack {
      margin-top: 0.8rem;
    }

    .tech-tag {
      font-size: 0.8rem;
      padding: 0.3rem 0.6rem;
    }

    .card-content {
      padding: 1rem;
    }

    .feature-group h5 {
      font-size: 0.95rem;
    }

    .feature-item span {
      font-size: 0.9rem;
    }
  }

  .hero-content {
    position: relative;
    z-index: 3;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .hero-text {
    margin-bottom: 3rem;
  }

  .glitch {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    text-transform: uppercase;
    position: relative;
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
                 0.025em 0.04em 0 #fffc00;
    animation: glitch 725ms infinite;
  }

  @keyframes glitch {
    0% {
      text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
                   0.025em 0.04em 0 #fffc00;
    }
    15% {
      text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
                   0.025em 0.04em 0 #fffc00;
    }
    16% {
      text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
                   -0.05em -0.05em 0 #fffc00;
    }
    49% {
      text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
                   -0.05em -0.05em 0 #fffc00;
    }
    50% {
      text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
                   0.03em -0.04em 0 #fffc00;
    }
    99% {
      text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
                   0.03em -0.04em 0 #fffc00;
    }
    100% {
      text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff,
                   -0.04em -0.025em 0 #fffc00;
    }
  }

  .subtitle {
    font-size: 1.5rem;
    margin: 1rem 0 2rem;
    opacity: 0.9;
    color: var(--primary-light);
  }

  .description {
    max-width: 700px;
    margin: 0 auto 3rem;
    font-size: 1.1rem;
    line-height: 1.8;
  }

  .hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }

  .cta-button {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
    border-radius: 8px;
    cursor: pointer;
    transition: var(--transition);
    font-weight: 600;
    border: none;
    min-width: 160px;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  .cta-button.primary {
    background: var(--primary);
    color: white;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  .cta-button.secondary {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
  }

  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  }

  .cta-button.primary:hover {
    background: #3a56d4;
  }

  .cta-button.secondary:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }

  .hero-stats {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-top: 3rem;
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    backdrop-filter: blur(5px);
    min-width: 120px;
  }

  .stat-number {
    font-size: 2rem;
    font-weight: 800;
    color: var(--primary-light);
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-size: 0.9rem;
    opacity: 0.9;
    text-align: center;
  }

  /* ===== SKILLS STYLES ===== */
  .skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .skill-category {
    background: white;
    padding: 1.2rem;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    transition: var(--transition);
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    min-height: 0;
  }

  .skill-category h3 {
    color: var(--primary);
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--primary-light);
    font-size: 1.2rem;
    text-align: center;
  }

  .skill-category ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0;
    margin: 0;
    flex: 1;
  }

  .skill-category li {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.5rem;
    background: rgba(67, 97, 238, 0.05);
    border-radius: 8px;
    transition: var(--transition);
    width: 100%;
    box-sizing: border-box;
    min-height: 36px;
  }

  .skill-category li i,
  .skill-category li .svelte-icon {
    font-size: 1.1rem;
    width: 20px;
    text-align: center;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .skill-category li span {
    font-size: 0.9rem;
    line-height: 1.3;
    flex: 1;
  }

  .skill-category li:hover {
    background: rgba(67, 97, 238, 0.1);
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    .skills-section {
      padding: 1rem;
    }

    .skills-container {
      grid-template-columns: 1fr;
      gap: 1rem;
      padding: 0;
      width: 100%;
    }

    .skill-category {
      padding: 1.5rem;
    }

    .skill-category h3 {
      font-size: 1.1rem;
      margin-bottom: 0.8rem;
    }

    .skill-category ul {
      gap: 0.4rem;
    }

    .skill-category li {
      padding: 0.6rem;
    }

    .skill-category li i {
      font-size: 1.2rem;
    }

    .content {
      padding: 1.5rem;
    }

    .start-section .content {
      padding: 0;
    }

    .svelte-icon {
      width: 20px;
      height: 20px;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .skills-container {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      max-width: 900px;
    }
  }

  @media (min-width: 1025px) {
    .skills-container {
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      max-width: 1200px;
    }
  }

  /* Spezifische Icon-Farben */
  .fa-html5 { color: #E34F26; }
  .fa-js { color: #F7DF1E; }
  .svelte-icon { color: #FF3E00; }
  .fa-microsoft { color: #00A4EF; }
  .fa-java { color: #007396; }
  .fa-php { color: #777BB4; }
  .fa-python { color: #3776AB; }
  .fa-laravel { color: #FF2D20; }
  .fa-git { color: #F05032; }
  .fa-database { color: #00758F; }
  .fa-code { color: #4361EE; }

  .fa-cube { color: #6B46C1; }
  .fa-broom { color: #4299E1; }
  .fa-project-diagram { color: #48BB78; }
  .fa-network-wired { color: #667EEA; }
  .fa-sitemap { color: #9F7AEA; }
  .fa-diagram-project { color: #4299E1; }
  .fa-arrows-split-up-and-left { color: #667EEA; }
  .fa-memory { color: #ED8936; }
  .fa-function { color: #48BB78; }
  .fa-vial { color: #ECC94B; }
  .fa-bolt { color: #F6AD55; }
  .fa-fire { color: #FFA000; }

  /* Icon Hover Effekte */
  .skill-category li:hover .fa-html5 { color: #C73E1F; }
  .skill-category li:hover .fa-js { color: #E6C91A; }
  .skill-category li:hover .svelte-icon { color: #E63600; }
  .skill-category li:hover .fa-microsoft { color: #0093D6; }
  .skill-category li:hover .fa-java { color: #00627D; }
  .skill-category li:hover .fa-php { color: #666A9D; }
  .skill-category li:hover .fa-python { color: #2D5F8C; }
  .skill-category li:hover .fa-laravel { color: #E6261C; }
  .skill-category li:hover .fa-git { color: #D43A1C; }
  .skill-category li:hover .fa-database { color: #00647F; }
  .skill-category li:hover .fa-code { color: #3A56D4; }
  .skill-category li:hover .fa-cube { color: #553C9A; }
  .skill-category li:hover .fa-broom { color: #3182CE; }
  .skill-category li:hover .fa-project-diagram { color: #38A169; }
  .skill-category li:hover .fa-network-wired { color: #5A67D8; }
  .skill-category li:hover .fa-sitemap { color: #805AD5; }
  .skill-category li:hover .fa-diagram-project { color: #3182CE; }
  .skill-category li:hover .fa-arrows-split-up-and-left { color: #5A67D8; }
  .skill-category li:hover .fa-memory { color: #DD6B20; }
  .skill-category li:hover .fa-function { color: #38A169; }
  .skill-category li:hover .fa-vial { color: #D69E2E; }
  .skill-category li:hover .fa-bolt { color: #ED8936; }
  .skill-category li:hover .fa-fire { color: #E68A00; }

  /* ===== ERFAHRUNG STYLES ===== */
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
    color: var(--dark);
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

  /* ===== KONTAKT STYLES ===== */
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

  /* ===== ANIMATIONEN ===== */
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

  /* ===== RESPONSIVE STYLES ===== */
  @media (max-width: 768px) {
    .desktop-nav {
      display: none;
    }

    .mobile-menu-toggle {
      display: block;
    }

    .mobile-nav {
      display: flex;
    }

    .mobile-nav a {
      padding: 1rem;
      text-align: center;
      border-bottom: 1px solid rgba(0,0,0,0.1);
    }

    .mobile-nav a:last-child {
      border-bottom: none;
    }

    .section {
      padding: 5rem 1rem 3rem;
    }

    .nav-container {
      padding: 0.5rem 1rem;
    }

    .hero-content {
      padding: 1.5rem;
    }

    .hero-text {
      margin-bottom: 2rem;
    }

    .hero-buttons {
      flex-direction: column;
      gap: 0.8rem;
      margin-bottom: 1.5rem;
    }

    .cta-button {
      width: 100%;
      max-width: 280px;
      margin: 0 auto;
      padding: 0.7rem 1.2rem;
      font-size: 0.85rem;
    }

    .hero-stats {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
      margin-top: 2rem;
    }

    .stat-item {
      min-width: calc(50% - 1rem);
      padding: 0.8rem;
    }

    .scroll-btn {
      right: 1rem;
      bottom: 1rem;
      width: 40px;
      height: 40px;
    }

    .scroll-btn svg {
      width: 18px;
      height: 18px;
    }

    .skills-container {
      grid-template-columns: 1fr;
    }

    .skill-category {
      padding: 1.5rem;
    }

    .skill-category li {
      padding: 0.6rem;
    }

    .skill-category li i {
      font-size: 1.2rem;
    }

    .content {
      padding: 1.5rem;
    }

    .start-section .content {
      padding: 0;
    }

    .svelte-icon {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 480px) {
    .logo a {
      font-size: 1.2rem;
    }

    .mobile-nav a {
      font-size: 0.9rem;
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
      padding: 0.6rem;
    }

    .stat-number {
      font-size: 1.5rem;
    }

    .stat-label {
      font-size: 0.7rem;
    }

    .cta-button {
      max-width: 240px;
      padding: 0.6rem 1rem;
      font-size: 0.8rem;
    }

    .scroll-btn {
      right: 0.8rem;
      bottom: 0.8rem;
      width: 36px;
      height: 36px;
    }

    .scroll-btn svg {
      width: 16px;
      height: 16px;
    }
  }

  /* Verbesserter Scroll Button */
  .scroll-btn {
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: rgba(67, 97, 238, 0.9); /* Primary color with transparency */
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.2);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.9;
    transition: var(--transition);
    z-index: 100;
    box-shadow: 0 4px 12px rgba(67, 97, 238, 0.2);
    backdrop-filter: blur(5px);
  }

  .scroll-btn:hover {
    opacity: 1;
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(67, 97, 238, 0.3);
    background: rgba(67, 97, 238, 1);
    border-color: rgba(255, 255, 255, 0.3);
  }

  .scroll-btn svg {
    width: 20px;
    height: 20px;
    animation: bounce 2s infinite;
    stroke: white;
    stroke-width: 2.5;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-5px);
    }
    60% {
      transform: translateY(-3px);
    }
  }

  .svelte-icon {
    width: 24px;
    height: 24px;
    color: #ff3e00;
  }

  .skill-category li:hover .svelte-icon {
    transform: scale(1.1);
  }

  .card-header{
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
    color: white;
    padding: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .date {
    font-size: 0.8rem;
    opacity: 0.8;
  }

  .card-content {
    padding: 1rem;
  }


  .tech-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    background: rgba(67, 97, 238, 0.1);
    color: var(--primary);
    padding: 0.3rem 0.6rem;
    border-radius: 50px;
    font-size: 0.8rem;
  }



  .metric {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.85rem;
    color: var(--gray);
  }

  .metric i {
    color: var(--primary-light);
  }

  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .card-header{
      padding: 1rem;
    }

    .card-content {
      padding: 0.8rem;
    }
  }

  @media (min-width: 769px) {
    .projects-grid {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }

  .project-overview {
    margin: 1rem 0;
    padding: 0.8rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .location {
    font-size: 0.9rem;
    opacity: 0.8;
    margin: 0.2rem 0;
  }

  .achievements {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .key-features {
    margin-top: 1.2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .key-feature {
    background: rgba(255, 255, 255, 0.2);
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.9);
  }

  .project-details {
    margin: 1.5rem 0;
  }

  .project-item {
    margin-bottom: 1.5rem;
  }

  .project-item h5 {
    color: white;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  .project-item p {
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
  }

  .project-item ul {
    list-style: none;
    padding-left: 1rem;
  }

  .project-item ul li {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
    position: relative;
  }

  .project-item ul li::before {
    content: "→";
    position: absolute;
    left: -1rem;
    color: rgba(255, 255, 255, 0.6);
  }

  .feature-group {
    margin-bottom: 1.5rem;
  }

  .feature-group h5 {
    color: white;
    margin-bottom: 0.8rem;
    font-size: 1rem;
    opacity: 0.9;
  }

  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }

  .metric-content {
    display: flex;
    flex-direction: column;
  }

  .metric-title {
    font-size: 0.8rem;
    opacity: 0.8;
  }

  .metric-value {
    font-size: 1.1rem;
    font-weight: 600;
  }

  .metric-detail {
    font-size: 0.8rem;
    opacity: 0.7;
  }

  .achievement-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }

  .achievement-content {
    display: flex;
    flex-direction: column;
  }

  .achievement-title {
    font-size: 0.95rem;
    font-weight: 500;
  }

  .achievement-detail {
    font-size: 0.85rem;
    opacity: 0.8;
  }

  .projects-grid {
    display: grid;
    gap: 2rem;
    margin-top: 2rem;
  }

  .project-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .gradient-card {
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    color: #2b2d42;
    border: 1px solid rgba(67, 97, 238, 0.1);
  }

  .card-header {
    background: linear-gradient(135deg, #4361ee 0%, #4cc9f0 100%);
    padding: 1.2rem;
    margin: -1px;
  }

  .header-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-title h4 {
    color: white;
    margin: 0;
    font-size: 1.4rem;
  }

  .header-title i {
    color: white;
    font-size: 1.4rem;
    opacity: 0.9;
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 1rem 0;
  }

  .tech-tag {
    background: rgba(67, 97, 238, 0.1);
    color: #4361ee;
    padding: 0.4rem 0.8rem;
    border-radius: 50px;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .tech-tag i {
    color: #4361ee;
    font-size: 0.9rem;
  }

  .project-overview {
    background: rgba(67, 97, 238, 0.05);
    border-radius: 8px;
    padding: 1rem;
    margin: 1rem 0;
  }

  .project-overview p {
    color: #2b2d42;
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .project-details {
    margin: 1.5rem 0;
  }

  .project-item {
    margin-bottom: 1.5rem;
  }

  .project-item h5 {
    color: #4361ee;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .project-item p {
    color: #2b2d42;
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
  }

  .project-item ul {
    list-style: none;
    padding-left: 1.2rem;
    margin: 0.5rem 0;
  }

  .project-item ul li {
    color: #2b2d42;
    font-size: 0.9rem;
    margin-bottom: 0.4rem;
    position: relative;
    line-height: 1.4;
  }

  .project-item ul li::before {
    content: "→";
    position: absolute;
    left: -1.2rem;
    color: #4361ee;
  }

  .key-features {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1.5rem;
  }

  .key-feature {
    background: rgba(67, 97, 238, 0.1);
    color: #4361ee;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    font-size: 0.85rem;
    transition: all 0.3s ease;
  }

  .key-feature:hover {
    background: rgba(67, 97, 238, 0.15);
    transform: translateY(-1px);
  }

  @media (min-width: 768px) {
    .projects-grid {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }

  .section-subtitle {
    color: #4361ee;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1.2rem;
  }

  .achievement-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.2rem;
    margin-top: 1rem;
  }

  .achievement-card {
    background: white;
    border-radius: 10px;
    padding: 1.2rem;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    transition: all 0.3s ease;
    border: 1px solid rgba(67, 97, 238, 0.1);
  }

  .achievement-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(67, 97, 238, 0.1);
    border-color: rgba(67, 97, 238, 0.2);
  }

  .achievement-icon {
    background: rgba(67, 97, 238, 0.1);
    color: #4361ee;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  .achievement-content {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .achievement-title {
    color: #4361ee;
    font-weight: 600;
    font-size: 0.95rem;
  }

  .achievement-value {
    color: #2b2d42;
    font-weight: 700;
    font-size: 1.1rem;
  }

  .achievement-detail {
    color: #6c757d;
    font-size: 0.85rem;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    .achievement-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .achievement-card {
      padding: 1rem;
    }

    .achievement-icon {
      width: 36px;
      height: 36px;
      font-size: 1rem;
    }
  }

  .card-content {
    padding: 1.5rem;
    background: white;
    height: auto;
    max-height: none;
    opacity: 1;
    visibility: visible;
    transition: all 0.3s ease;
  }

  .card-content.visible {
    max-height: none;
    opacity: 1;
    visibility: visible;
  }

  .project-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: auto;
  }

  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(67, 97, 238, 0.15);
  }

  .card-header {
    background: linear-gradient(135deg, #4361ee 0%, #4cc9f0 100%);
    padding: 1.5rem;
    color: white;
  }

  .header-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-title h4 {
    margin: 0;
    font-size: 1.4rem;
    color: white;
  }

  .header-title i {
    font-size: 1.4rem;
    opacity: 0.9;
    color: white;
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 1rem 0;
  }

  .tech-tag {
    background: rgba(67, 97, 238, 0.1);
    color: #4361ee;
    padding: 0.4rem 0.8rem;
    border-radius: 50px;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .project-overview {
    background: rgba(67, 97, 238, 0.05);
    border-radius: 8px;
    padding: 1rem;
    margin: 1rem 0;
  }

  .project-item h5 {
    color: #4361ee;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  .project-item p {
    color: #2b2d42;
    margin-bottom: 0.5rem;
  }

  .project-item ul {
    list-style: none;
    padding-left: 1.2rem;
  }

  .project-item ul li {
    color: #2b2d42;
    margin-bottom: 0.4rem;
    position: relative;
  }

  .project-item ul li::before {
    content: "→";
    position: absolute;
    left: -1.2rem;
    color: #4361ee;
  }

  .key-features {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .key-feature {
    background: rgba(67, 97, 238, 0.1);
    color: #4361ee;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    font-size: 0.85rem;
  }

  .card-header.clickable {
    cursor: pointer;
    user-select: none;
    transition: background-color 0.3s ease;
  }

  .card-header.clickable:hover {
    background: linear-gradient(135deg, #3a56d4 0%, #41b9e0 100%);
  }

  .card-content {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease-in-out;
    background: white;
    padding: 0 1.5rem;
  }

  .card-content.expanded {
    max-height: 2000px;
    opacity: 1;
    visibility: visible;
    padding: 1.5rem;
  }

  .header-icon i {
    transition: transform 0.3s ease;
  }

  .gradient-card .card-header {
    background: linear-gradient(135deg, #4361ee 0%, #4cc9f0 100%);
    color: white;
  }

  .gradient-card .card-content {
    border: 1px solid rgba(67, 97, 238, 0.1);
    border-top: none;
  }
</style>