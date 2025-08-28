<script>
  let expandedCards = {
    myit: false,
    me2be: false
  };

  const toggleCard = (cardId) => {
    expandedCards[cardId] = !expandedCards[cardId];
  };
</script>

<section id="projekte" class="section projects-section">
  <div class="content animate-slide-up">
    <h2>Berufserfahrungen</h2>
    
    <div class="experience-cards">
      <!-- MYIT Personal Networks GmbH -->
      <div class="project-card gradient-card">
        <div class="card-header clickable" 
             on:click={() => toggleCard('myit')} 
             on:keydown={(e) => e.key === 'Enter' && toggleCard('myit')} 
             role="button" 
             tabindex="0">
          <div class="header-content">
            <div class="header-main">
              <h3>MYIT Personal Networks GmbH</h3>
              <p class="subtitle">Entwicklung einer .NET MAUI Blazor Business-App</p>
              <span class="date">06/2023 - heute</span>
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
        </div>
      </div>

      <!-- ME2BE Medien GmbH -->
      <div class="project-card gradient-card">
        <div class="card-header clickable" 
             on:click={() => toggleCard('me2be')} 
             on:keydown={(e) => e.key === 'Enter' && toggleCard('me2be')} 
             role="button" 
             tabindex="0">
          <div class="header-content">
            <div class="header-main">
              <h3>ME2BE Medien GmbH</h3>
              <p class="subtitle">Webentwicklung & Redaktion</p>
              <span class="date">10/2021 - 03/2023</span>
            </div>
            <div class="header-icon">
              <i class="fas fa-chevron-{expandedCards.me2be ? 'up' : 'down'}"></i>
            </div>
          </div>
          <div class="tech-stack">
            <span class="tech-tag"><i class="fab fa-react"></i> React</span>
            <span class="tech-tag"><i class="fab fa-node-js"></i> Node.js</span>
            <span class="tech-tag"><i class="fas fa-database"></i> MongoDB</span>
            <span class="tech-tag"><i class="fab fa-aws"></i> AWS</span>
          </div>
        </div>

        <div class="card-content" class:expanded={expandedCards.me2be}>
          <div class="project-overview">
            <p>Entwicklung und Wartung von Webanwendungen sowie redaktionelle Betreuung von digitalen Inhalten. Fokus auf moderne Webtechnologien und benutzerfreundliche Interfaces.</p>
          </div>

          <div class="features-list">
            <div class="feature-group">
              <h5>Hauptverantwortlichkeiten:</h5>
              <div class="feature-item">
                <i class="fas fa-check"></i>
                <span>Frontend-Entwicklung mit React und modernen JavaScript-Frameworks</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-check"></i>
                <span>Backend-Entwicklung mit Node.js und Express</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-check"></i>
                <span>Content Management und redaktionelle Betreuung</span>
              </div>
            </div>

            <div class="feature-group">
              <h5>Technische Highlights:</h5>
              <div class="feature-item">
                <i class="fas fa-check"></i>
                <span>Responsive Webdesign und Mobile-First Ansatz</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-check"></i>
                <span>SEO-Optimierung und Performance-Tuning</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-check"></i>
                <span>Integration von Analytics und Tracking-Tools</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .section {
    padding: 80px 20px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }

  h2 {
    font-size: 3rem;
    margin-bottom: 4rem;
    text-align: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
    letter-spacing: -0.02em;
    position: relative;
  }

  h2::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    border-radius: 2px;
  }

  .experience-cards {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }

  .project-card {
    background: var(--bg-card);
    backdrop-filter: blur(15px);
    border: 1px solid var(--border-color);
    border-radius: 24px;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 12px 40px var(--shadow-color);
    position: relative;
  }

  .project-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #667eea, #764ba2);
  }

  .project-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 25px 50px var(--shadow-color);
    border-color: rgba(102, 126, 234, 0.3);
  }

  .gradient-card {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%);
  }

  .card-header {
    padding: 2rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .card-header:hover {
    background: var(--bg-secondary);
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
  }

  .header-main h3 {
    font-size: 1.6rem;
    margin: 0 0 0.5rem 0;
    color: var(--text-primary);
    font-weight: 700;
    letter-spacing: -0.01em;
  }

  .subtitle {
    font-size: 1.1rem;
    color: #667eea;
    margin: 0 0 0.5rem 0;
    font-weight: 600;
    letter-spacing: 0.02em;
  }

  .date {
    color: var(--text-muted);
    font-size: 0.9rem;
    font-weight: 500;
  }

  .header-icon {
    color: #667eea;
    font-size: 1.2rem;
    transition: transform 0.3s ease;
  }

  .card-header.clickable:focus .header-icon {
    transform: scale(1.1);
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .tech-tag {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.12) 0%, rgba(118, 75, 162, 0.12) 100%);
    color: #667eea;
    padding: 0.4rem 1rem;
    border-radius: 25px;
    font-size: 0.85rem;
    font-weight: 500;
    border: 1px solid rgba(102, 126, 234, 0.25);
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
  }

  .tech-tag:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
    border-color: rgba(102, 126, 234, 0.4);
  }

  .card-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease;
    padding: 0 2rem;
  }

  .card-content.expanded {
    max-height: 1000px;
    padding: 0 2rem 2rem 2rem;
  }

  .project-overview {
    margin-bottom: 2rem;
  }

  .project-overview p {
    color: var(--text-secondary);
    line-height: 1.6;
  }

  .features-list {
    display: grid;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .feature-group h5 {
    color: var(--text-primary);
    margin: 0 0 1rem 0;
    font-size: 1rem;
  }

  .feature-item {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .feature-item i {
    color: #667eea;
    margin-top: 0.2rem;
  }

  .feature-item span {
    color: var(--text-secondary);
    line-height: 1.5;
  }

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

  @media (max-width: 768px) {
    .experience-cards {
      grid-template-columns: 1fr;
    }
    
    .header-content {
      flex-direction: column;
    }
  }
</style>
