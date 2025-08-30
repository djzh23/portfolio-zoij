<script>
  import { slide } from 'svelte/transition';
  import { onMount } from 'svelte';

  // State for expanded cards
  let expandedCards = {
    myit: false,
    me2be: false,
    verein: false,
    firma3: false
  };

  const toggleCard = (cardId) => {
    expandedCards[cardId] = !expandedCards[cardId];
    expandedCards = expandedCards; // Trigger reactivity
  };

  // Experience data
  const experiences = [
    {
      id: 'myit',
      company: 'Sentialnet Personal Networks GmbH',
      role: 'Werkstudent & Thesis – Entwicklung einer .NET MAUI Blazor Business-App',
      period: '06/2023 – 07/2024',
      location: 'Remote',
      color: '#3B82F6',
      badges: ['.NET MAUI', 'Blazor', 'C#', 'REST', 'SQL Server', 'MVVM', 'Clean Code'],
      summary: 'Cross-Platform-App zur Digitalisierung interner Prozesse (Mobile, Desktop, Web).',
      highlights: [
        'Entwicklung wiederverwendbarer UI-Komponenten, State & Navigation (MVVM)',
        'REST-API-Anbindung, Auth, Caching; ~35 % kürzere Ladezeiten',
        'Charts/Reports, Dateihandling (PDF/CSV), Offline-freundliche Views',
        'Code-Qualität: SOLID, DI, Schichten-Architektur; erste Unit-Tests'
      ],
      cta: {
        type: 'github',
        url: '#',
        label: 'Code-Beispiele'
      }
    },
    {
      id: 'me2be',
      company: 'ME2BE Medien GmbH',
      role: 'Werkstudent Webentwicklung & Redaktion',
      period: '10/2021 – 03/2023',
      location: 'Hamburg',
      color: '#10B981',
      badges: ['React', 'Node.js', 'MongoDB', 'AWS', 'UI/UX'],
      summary: 'Mitarbeit an einer Plattform für Berufsorientierung (60+ Schulen).',
      highlights: [
        'Frontend-Module & Content-Features in React; einfache Backend-Tasks in Node',
        'Deployment-Support (AWS), Basic-Monitoring',
        'Developer-Wiki aufgebaut → Team-Onboarding spürbar beschleunigt'
      ],
      cta: {
        type: 'reference',
        url: '#',
        label: 'Referenz'
      }
    },
    {
      id: 'verein',
      company: 'Verein (Honorarkraft)',
      role: 'Betreuung & Organisation – Kinderrechte/Spielräume',
      period: '10/2022 – 09/2024',
      location: 'Lokal',
      color: '#8B5CF6',
      badges: ['Teamwork', 'Kommunikation', 'Verantwortung'],
      summary: 'Gestaltung von Spiel- & Lernangeboten; sichere Räume für Teilhabe.',
      highlights: [
        'Planung kleiner Events, Dokumentation & Abstimmung im Team',
        'Impuls für Thesis-Projekt: Vereinsverwaltung digitalisieren (.NET MAUI + Laravel)',
        'Gestärkt: Empathie, Klarheit in Kommunikation, Zuverlässigkeit'
      ]
      /*,
      cta: {
        type: 'certificate',
        url: '#',
        label: 'Zeugnis'
      }*/
    },
    {
      id: 'firma3',
      company: 'ONP (Praktikum)',
      role: 'Praktikant – C# & Datenbanken',
      period: '04/2014 – 07/2014',
      location: 'Casablanca',
      color: '#F59E0B',
      badges: ['C#', 'WinForms/WPF', 'MySQL', 'Automatisierung'],
      summary: 'Unterstützung bei einer Schichtplanung- & Urlaubsworkflow-App.',
      highlights: [
        'UI-Anpassungen, Validierungen, kleine Automationen',
        'Unterstützung in der MySQL-Verwaltung (Schemata, einfache Queries)',
        'Saubere Übergabe & Kurz-Doku'
      ]
      /*,
      cta: {
        type: 'certificate',
        url: '#',
        label: 'Zeugnis'
      }*/
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

    const section = document.getElementById('projekte');
    if (section) {
      observer.observe(section);
    }
  });
</script>

<section id="projekte" class="section projects-section">
  <div class="content" class:animate-slide-up={isVisible}>
    <div class="section-header">
      <h2>💼 Berufserfahrungen</h2>
      <p class="section-subtitle">Kurz & konkret: Was ich in Projekten und Jobs wirklich gebaut, verbessert und gelernt habe.</p>
    </div>
    
    <div class="experience-grid">
      {#each experiences as experience}
                 <div class="experience-card" class:expanded={expandedCards[experience.id]} style="--accent-color: {experience.color}">
          <!-- Top Border -->
          <div class="card-border"></div>
          
          <!-- Header -->
          <div class="card-header" on:click={() => toggleCard(experience.id)}>
            <div class="header-main">
              <h3>{experience.company}</h3>
              <p class="role">{experience.role}</p>
              <div class="meta-info">
                <span class="period">{experience.period}</span>
                {#if experience.location}
                  <span class="location">📍 {experience.location}</span>
                {/if}
              </div>
            </div>
            <div class="header-actions">
              <div class="chevron" class:expanded={expandedCards[experience.id]}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </div>
              {#if experience.cta}
                <a href={experience.cta.url} class="cta-button" class:github={experience.cta.type === 'github'} class:reference={experience.cta.type === 'reference'} class:certificate={experience.cta.type === 'certificate'}>
                  {experience.cta.label}
                </a>
              {/if}
            </div>
          </div>

          <!-- Tech Badges -->
          <div class="tech-badges">
            {#each experience.badges as badge}
              <span class="tech-badge">{badge}</span>
            {/each}
          </div>

          <!-- Summary -->
          <div class="summary">
            <p>{experience.summary}</p>
          </div>

          <!-- Expandable Content -->
          {#if expandedCards[experience.id]}
            <div class="expanded-content" transition:slide={{ duration: 300 }}>
              <div class="highlights">
                <h4>Mehr anzeigen:</h4>
                <ul>
                  {#each experience.highlights as highlight}
                    <li>{highlight}</li>
                  {/each}
                </ul>
              </div>
            </div>
          {/if}
        </div>
      {/each}
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
    margin-bottom: 4rem;
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
    max-width: 600px;
    margin: 0 auto;
  }

  /* Single Column Layout */
  .experience-grid {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 800px;
    margin: 0 auto;
  }

  /* Experience Cards */
  .experience-card {
    background: var(--bg-card);
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid var(--border-color);
    position: relative;
    min-height: 120px; /* Compact collapsed state */
    display: flex;
    flex-direction: column;
  }

  .experience-card.expanded {
    min-height: 400px; /* Expanded state */
  }

  .experience-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: var(--accent-color);
  }

  /* Top Border */
  .card-border {
    height: 4px;
    background: var(--accent-color);
    width: 100%;
  }

  /* Card Header */
  .card-header {
    padding: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
  }

  .card-header:hover {
    background: rgba(102, 126, 234, 0.02);
  }

  .header-main {
    flex: 1;
  }

  .header-main h3 {
    font-size: 1.3rem;
    margin: 0 0 0.5rem 0;
    color: var(--text-primary);
    font-weight: 700;
  }

  .role {
    font-size: 1rem;
    color: var(--accent-color);
    margin: 0 0 0.8rem 0;
    font-weight: 600;
  }

  .meta-info {
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
  }

  .period {
    color: var(--text-secondary);
    font-size: 0.9rem;
    font-weight: 500;
  }

  .location {
    color: var(--text-secondary);
    font-size: 0.85rem;
    opacity: 0.8;
  }

  .header-actions {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.8rem;
  }

  .chevron {
    color: var(--accent-color);
    transition: transform 0.3s ease;
  }

  .chevron.expanded {
    transform: rotate(180deg);
  }

  .cta-button {
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
    border: 1px solid;
  }

  .cta-button.github {
    background: rgba(59, 130, 246, 0.1);
    color: #3B82F6;
    border-color: rgba(59, 130, 246, 0.3);
  }

  .cta-button.reference {
    background: rgba(16, 185, 129, 0.1);
    color: #10B981;
    border-color: rgba(16, 185, 129, 0.3);
  }

  .cta-button.certificate {
    background: rgba(139, 92, 246, 0.1);
    color: #8B5CF6;
    border-color: rgba(139, 92, 246, 0.3);
  }

  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  /* Tech Badges */
  .tech-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    padding: 0 1.5rem 1rem 1.5rem;
    border-bottom: 1px solid var(--border-color);
  }

  .tech-badge {
    background: rgba(102, 126, 234, 0.08);
    color: var(--text-primary);
    padding: 0.3rem 0.7rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 500;
    border: 1px solid rgba(102, 126, 234, 0.15);
  }

  /* Summary */
  .summary {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .summary p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0;
    font-size: 0.95rem;
  }

  /* Expanded Content */
  .expanded-content {
    padding: 0 1.5rem 1.5rem 1.5rem;
    background: rgba(102, 126, 234, 0.02);
    border-top: 1px solid var(--border-color);
  }

  .highlights h4 {
    color: var(--text-primary);
    margin: 0 0 1rem 0;
    font-size: 1rem;
    font-weight: 600;
  }

  .highlights ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .highlights li {
    color: var(--text-secondary);
    margin-bottom: 0.8rem;
    padding-left: 1.5rem;
    position: relative;
    line-height: 1.5;
    font-size: 0.9rem;
  }

  .highlights li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: var(--accent-color);
    font-weight: bold;
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

    .experience-grid {
      gap: 1.2rem;
    }

    .experience-card.expanded {
      min-height: 350px;
    }

    .card-header {
      padding: 1rem;
      flex-direction: column;
      align-items: flex-start;
    }

    .header-actions {
      flex-direction: row;
      align-items: center;
      width: 100%;
      justify-content: space-between;
    }

    .meta-info {
      gap: 0.5rem;
    }

    .tech-badges {
      padding: 0 1rem 1rem 1rem;
    }

    .summary {
      padding: 1rem;
    }

    .expanded-content {
      padding: 0 1rem 1rem 1rem;
    }

    .highlights li {
      font-size: 0.85rem;
      padding-left: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    .section {
      padding: 50px 10px;
    }

    h2 {
      font-size: 1.8rem;
    }

    .experience-card.expanded {
      min-height: 300px;
    }

    .header-main h3 {
      font-size: 1.1rem;
    }

    .role {
      font-size: 0.9rem;
    }

    .tech-badge {
      font-size: 0.75rem;
      padding: 0.25rem 0.6rem;
    }

    .cta-button {
      font-size: 0.7rem;
      padding: 0.3rem 0.6rem;
    }
  }
</style>
