<script>
  // No additional logic needed for this component
</script>

<section id="technische-skills" class="section technische-skills-section">
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
            <i class="fas fa-code-branch"></i>
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
    background: var(--bg-primary);
    color: var(--text-primary);
    padding: 1.2rem;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    border: 1px solid rgba(102, 126, 234, 0.1);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    min-height: 0;
  }

  .skill-category:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
    border-color: rgba(102, 126, 234, 0.2);
  }

  .skill-category h3 {
    color: #667eea;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid rgba(102, 126, 234, 0.3);
    font-size: 1.2rem;
    text-align: center;
    font-weight: 600;
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
    background: rgba(102, 126, 234, 0.05);
    color: var(--text-primary);
    border-radius: 8px;
    transition: all 0.3s ease;
    width: 100%;
    box-sizing: border-box;
    min-height: 36px;
  }

  .skill-category li:hover {
    background: rgba(102, 126, 234, 0.1);
    transform: translateX(5px);
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
    color: var(--text-primary);
  }

  .svelte-icon {
    width: 24px;
    height: 24px;
    color: #ff3e00;
  }

  .skill-category li:hover .svelte-icon {
    transform: scale(1.1);
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
  .fa-code-branch { color: #48BB78; }
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
  .skill-category li:hover .fa-code-branch { color: #38A169; }
  .skill-category li:hover .fa-vial { color: #D69E2E; }
  .skill-category li:hover .fa-bolt { color: #ED8936; }
  .skill-category li:hover .fa-fire { color: #E68A00; }

  /* Dark Mode Anpassungen */
  :global([data-theme="dark"]) .skill-category {
    background: rgba(30, 30, 30, 0.8);
    border-color: rgba(102, 126, 234, 0.2);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  :global([data-theme="dark"]) .skill-category:hover {
    background: rgba(40, 40, 40, 0.9);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.25);
    border-color: rgba(102, 126, 234, 0.3);
  }

  :global([data-theme="dark"]) .skill-category h3 {
    color: #4cc9f0;
    border-bottom-color: rgba(76, 201, 240, 0.3);
  }

  :global([data-theme="dark"]) .skill-category li {
    background: rgba(102, 126, 234, 0.1);
    color: #e0e0e0;
  }

  :global([data-theme="dark"]) .skill-category li:hover {
    background: rgba(102, 126, 234, 0.15);
  }

  :global([data-theme="dark"]) .skill-category li span {
    color: #e0e0e0;
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
</style>
