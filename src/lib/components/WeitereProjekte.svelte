<script>
  import { slide } from 'svelte/transition';
  import { onMount } from 'svelte';

  // State for active card
  let activeCard = 'spiele';

  const setActiveCard = (cardId) => {
    activeCard = cardId;
  };

  // Project data with improved content
  const projectCategories = [
    {
      id: 'spiele',
      title: 'Spieleentwicklung',
      icon: '🎮',
      color: '#3B82F6',
      description: 'Programmierung von Spielen zur Vertiefung von OOP, Algorithmen und Design Patterns – von Brettspiel-Logik bis zu 3D-Mechaniken.',
      techStack: ['Java', 'Unity', 'C#', 'OOP'],
      projects: [
        {
          title: 'XO-Game & Schach',
          description: 'Java-basierte Implementierung mit Fokus auf OOP-Prinzipien und KI-Algorithmen',
          features: [
            'Minimax-Algorithmus für KI',
            'Factory Pattern für Modularität',
            'Unit Tests für Spielregeln'
          ]
        },
        {
          title: 'RollingBall 3D (Unity C#)',
          description: '3D-Spiel mit physikbasierten Spielmechaniken',
          features: [
            '3D-Physik & Kollisionserkennung',
            'Gameplay-Balancing & Level Design',
            'UI-System für Score und Menüs'
          ]
        }
      ],
      keyFeatures: ['OOP Prinzipien', 'Game Design', 'Collision Detection', 'AI Implementation']
    },
    {
      id: 'web-mobile',
      title: 'Web & Mobile Apps',
      icon: '📱',
      color: '#8B5CF6',
      description: 'Entwicklung moderner Cross-Platform-Apps mit Fokus auf saubere Architektur, Datenanbindung und performante Benutzeroberflächen.',
      techStack: ['.NET MAUI', 'Laravel', 'Kotlin', 'SQLite'],
      projects: [
        {
          title: 'FlashCards App (.NET MAUI, MVVM)',
          description: 'Cross-platform Lernanwendung mit MVVM-Pattern',
          features: [
            'SQLite Integration',
            'Responsive UI für Mobile/Desktop',
            'MVVM Architecture'
          ]
        },
        {
          title: 'Strandkorb-System (Kotlin)',
          description: 'Mobile Verwaltungsplattform mit RESTful API',
          features: [
            'RESTful API Integration',
            'Offline-First Konzept',
            'Material Design UI'
          ]
        },
        {
          title: 'FlexiBooker (Laravel + MAUI)',
          description: 'Multi-Tenant Buchungsplattform',
          features: [
            'Multi-Tenant Buchungsplattform',
            'RBAC & API-first Architektur',
            'Cross-platform Deployment'
          ]
        }
      ],
      keyFeatures: ['MVVM Pattern', 'Clean Architecture', 'Native APIs', 'Offline First']
    },
    {
      id: 'funktional',
      title: 'Funktionale Projekte',
      icon: '⚡',
      color: '#06B6D4',
      description: 'Erkundung funktionaler Konzepte (Elm, Haskell) mit Fokus auf reaktive UI und typsichere Architekturen.',
      techStack: ['Elm', 'Haskell', 'Functional Programming'],
      projects: [
        {
          title: 'Snake Game (Elm)',
          description: 'Funktionale Implementierung mit Elm Architecture',
          features: [
            'Event-driven Architecture',
            'Pure Functions für Logik',
            'Reaktive UI-Komponenten'
          ]
        },
        {
          title: 'Time Tracking App (Elm)',
          description: 'Webanwendung mit automatischer Timeline',
          features: [
            'Automatische Timeline',
            'Reaktive UI-Komponenten',
            'Typsichere Datenverarbeitung'
          ]
        }
      ],
      keyFeatures: ['Pure Functions', 'Type Safety', 'Reactive UI', 'Immutable Data']
    }
  ];

  let isVisible = false;

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible = true;
        }
      });
    }, { threshold: 0.3 });

    const section = document.getElementById('weitere-projekte');
    if (section) {
      observer.observe(section);
    }
  });
</script>

<section id="weitere-projekte" class="section weitere-projekte-section">
  <div class="content" class:animate-slide-up={isVisible}>
    <div class="section-header">
      <h2>🔹 Weitere Projekte</h2>
      <p class="section-subtitle">Praktische Erfahrungen in verschiedenen Entwicklungsbereichen</p>
    </div>
    
    <div class="projects-container">
      <!-- Category Navigation -->
      <div class="category-nav">
        {#each projectCategories as category}
          <button 
            class="nav-button" 
            class:active={activeCard === category.id}
            style="--category-color: {category.color}"
            on:click={() => setActiveCard(category.id)}
          >
            <span class="nav-icon">{category.icon}</span>
            <span class="nav-title">{category.title}</span>
          </button>
        {/each}
      </div>

      <!-- Content Area -->
      <div class="content-area">
        {#each projectCategories as category}
          <div class="content-panel" class:active={activeCard === category.id} transition:slide={{ duration: 400 }}>
            <div class="panel-header" style="background: linear-gradient(135deg, {category.color} 0%, {category.color}dd 100%)">
              <div class="header-content">
                <div class="header-icon">{category.icon}</div>
                <div class="header-info">
                  <h3>{category.title}</h3>
                  <p class="category-subtitle">{category.description}</p>
                </div>
              </div>
              <div class="tech-badges">
                {#each category.techStack as tech}
                  <span class="tech-badge">{tech}</span>
                {/each}
              </div>
            </div>
            
            <div class="panel-content">
              <div class="projects-list">
                {#each category.projects as project}
                  <div class="project-item">
                    <div class="project-header">
                      <h4>{project.title}</h4>
                    </div>
                    <p class="project-description">{project.description}</p>
                    <ul class="project-features">
                      {#each project.features as feature}
                        <li>{feature}</li>
                      {/each}
                    </ul>
                  </div>
                {/each}
              </div>
              
              <div class="key-features">
                {#each category.keyFeatures as feature}
                  <span class="key-feature" style="background: {category.color}15; color: {category.color}">
                    {feature}
                  </span>
                {/each}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .section {
    padding: 80px 20px;
    min-height: 100vh;
    background: var(--bg-primary);
    display: flex;
    align-items: center;
  }

  .content {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }

  .section-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .section-subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin: 0;
  }

  /* Horizontal Layout Container */
  .projects-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  /* Category Navigation */
  .category-nav {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .nav-button {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem 1.5rem;
    background: var(--bg-card);
    border: 2px solid var(--border-color);
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    color: var(--text-primary);
    font-weight: 600;
    font-size: 0.95rem;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);
  }

  .nav-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
    transition: left 0.6s ease;
  }

  .nav-button:hover::before {
    left: 100%;
  }

  .nav-button:hover {
    transform: translateY(-3px);
    border-color: var(--category-color);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
    background: var(--bg-card);
  }

  .nav-button.active {
    background: var(--category-color);
    color: #ffffff;
    border-color: var(--category-color);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1);
    font-weight: 700;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
    letter-spacing: 0.02em;
  }

  .nav-button.active::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 4px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
    border-radius: 2px;
    animation: glow 2s ease-in-out infinite alternate;
  }

  @keyframes glow {
    from {
      opacity: 0.6;
      transform: translateX(-50%) scaleX(0.8);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) scaleX(1);
    }
  }

  .nav-icon {
    font-size: 1.6rem;
    filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.15));
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    z-index: 2;
  }

  .nav-button:hover .nav-icon {
    transform: scale(1.15) rotate(5deg);
    filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.2));
  }

  .nav-button.active .nav-icon {
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4));
    transform: scale(1.2) rotate(0deg);
    animation: iconBounce 0.6s ease-out;
  }

  @keyframes iconBounce {
    0%, 20%, 50%, 80%, 100% {
      transform: scale(1.2) rotate(0deg);
    }
    40% {
      transform: scale(1.3) rotate(-2deg);
    }
    60% {
      transform: scale(1.25) rotate(1deg);
    }
  }

  .nav-title {
    font-weight: 600;
    letter-spacing: 0.02em;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    z-index: 2;
    text-transform: none;
  }

  .nav-button:hover .nav-title {
    letter-spacing: 0.03em;
    transform: translateX(2px);
  }

  .nav-button.active .nav-title {
    letter-spacing: 0.04em;
    font-weight: 800;
    transform: translateX(0);
  }

  /* Content Area */
  .content-area {
    position: relative;
    min-height: 600px;
  }

  .content-panel {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    transform: translateX(20px);
    transition: all 0.4s ease;
    height: 100%;
  }

  .content-panel.active {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
    position: relative;
  }

  /* Panel Header */
  .panel-header {
    padding: 2rem;
    color: white;
    border-radius: 16px 16px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
  }

  .header-content {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    flex: 1;
  }

  .header-icon {
    font-size: 3rem;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    backdrop-filter: blur(10px);
    flex-shrink: 0;
  }

  .header-info {
    flex: 1;
  }

  .header-info h3 {
    margin: 0 0 1rem 0;
    font-size: 2rem;
    font-weight: 700;
    color: white;
  }

  .category-subtitle {
    margin: 0;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;
    font-size: 1.1rem;
  }

  .tech-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-self: flex-start;
  }

  .tech-badge {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    backdrop-filter: blur(10px);
  }

  /* Panel Content */
  .panel-content {
    background: var(--bg-card);
    border-radius: 0 0 16px 16px;
    padding: 2rem;
    border: 1px solid var(--border-color);
    border-top: none;
    min-height: 400px;
  }

  /* Projects List */
  .projects-list {
    margin-bottom: 2rem;
  }

  .project-item {
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: rgba(102, 126, 234, 0.03);
    border-radius: 12px;
    border: 1px solid rgba(102, 126, 234, 0.1);
    transition: all 0.3s ease;
  }

  .project-item:hover {
    background: rgba(102, 126, 234, 0.06);
    border-color: rgba(102, 126, 234, 0.2);
    transform: translateY(-2px);
  }

  .project-item:last-child {
    margin-bottom: 0;
  }

  .project-header h4 {
    margin: 0 0 0.8rem 0;
    color: var(--text-primary);
    font-size: 1.3rem;
    font-weight: 600;
  }

  .project-description {
    margin: 0 0 1rem 0;
    color: var(--text-secondary);
    font-size: 1rem;
    line-height: 1.6;
  }

  .project-features {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .project-features li {
    color: var(--text-primary);
    margin-bottom: 0.6rem;
    font-size: 0.95rem;
    position: relative;
    padding-left: 1.5rem;
    line-height: 1.5;
  }

  .project-features li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: #667eea;
    font-weight: bold;
    font-size: 1.1rem;
  }

  /* Key Features */
  .key-features {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    padding-top: 1rem;
    border-top: 1px solid var(--border-color);
  }

  .key-feature {
    padding: 0.6rem 1rem;
    border-radius: 25px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .key-feature:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  /* Animations */
  .animate-slide-up {
    animation: slideUp 0.8s ease-out;
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .section {
      padding: 60px 15px;
    }

    h2 {
      font-size: 2rem;
    }

    .section-subtitle {
      font-size: 1rem;
    }

    .category-nav {
      gap: 0.5rem;
    }

    .nav-button {
      padding: 0.8rem 1rem;
      font-size: 0.9rem;
    }

    .nav-icon {
      font-size: 1.2rem;
    }

         .content-area {
       min-height: 500px;
     }

    .panel-header {
      padding: 1.5rem;
      flex-direction: column;
      gap: 1rem;
    }

    .header-content {
      gap: 1rem;
    }

    .header-icon {
      width: 60px;
      height: 60px;
      font-size: 2rem;
    }

    .header-info h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    .category-subtitle {
      font-size: 1rem;
    }

    .tech-badges {
      gap: 0.3rem;
    }

    .tech-badge {
      font-size: 0.75rem;
      padding: 0.3rem 0.6rem;
    }

         .panel-content {
       padding: 1.5rem;
       min-height: 300px;
     }

    .project-item {
      padding: 1rem;
      margin-bottom: 1.5rem;
    }

    .project-header h4 {
      font-size: 1.1rem;
    }

    .project-description {
      font-size: 0.9rem;
    }

    .project-features li {
      font-size: 0.85rem;
    }

    .key-features {
      gap: 0.5rem;
    }

    .key-feature {
      font-size: 0.8rem;
      padding: 0.4rem 0.8rem;
    }
  }

  @media (max-width: 480px) {
    .section {
      padding: 50px 10px;
    }

    h2 {
      font-size: 1.8rem;
    }

    .category-nav {
      flex-direction: column;
      align-items: center;
    }

    .nav-button {
      width: 100%;
      max-width: 300px;
      justify-content: center;
    }

         .content-area {
       min-height: 400px;
     }

    .panel-header {
      padding: 1rem;
    }

    .header-content {
      flex-direction: column;
      text-align: center;
    }

    .header-icon {
      width: 50px;
      height: 50px;
      font-size: 1.5rem;
    }

    .header-info h3 {
      font-size: 1.3rem;
    }

    .category-subtitle {
      font-size: 0.9rem;
    }

    .tech-badges {
      justify-content: center;
    }

         .panel-content {
       padding: 1rem;
       min-height: 250px;
     }

    .project-item {
      padding: 0.8rem;
    }

    .project-header h4 {
      font-size: 1rem;
    }

    .project-description {
      font-size: 0.85rem;
    }

    .project-features li {
      font-size: 0.8rem;
      padding-left: 1.2rem;
    }

    .key-features {
      gap: 0.3rem;
    }

    .key-feature {
      font-size: 0.75rem;
      padding: 0.3rem 0.6rem;
    }
  }
</style>
