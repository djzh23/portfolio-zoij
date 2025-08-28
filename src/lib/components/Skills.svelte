<script>
  import { onMount } from 'svelte';
  
  let animatedSkills = false;
  
  const skills = [
    { name: 'JavaScript/TypeScript', level: 90, icon: 'fab fa-js-square', color: '#f7df1e' },
    { name: 'React/React Native', level: 85, icon: 'fab fa-react', color: '#61dafb' },
    { name: 'Node.js', level: 80, icon: 'fab fa-node-js', color: '#339933' },
    { name: 'C#/.NET', level: 85, icon: 'fab fa-microsoft', color: '#512bd4' },
    { name: 'SQL/Databases', level: 75, icon: 'fas fa-database', color: '#336791' },
    { name: 'Git/GitHub', level: 90, icon: 'fab fa-github', color: '#181717' },
    { name: 'Docker', level: 70, icon: 'fab fa-docker', color: '#2496ed' },
    { name: 'AWS/Cloud', level: 65, icon: 'fab fa-aws', color: '#ff9900' }
  ];
  
  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animatedSkills = true;
        }
      });
    }, { threshold: 0.3 });
    
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }
  });
</script>

<section id="skills" class="section skills-section">
  <div class="content animate-slide-up">
    <h2>Skills & Technologien</h2>
    
    <div class="skills-container">
      <div class="skills-grid">
        {#each skills as skill, index}
          <div class="skill-card" style="animation-delay: {index * 0.1}s">
            <div class="skill-header">
              <div class="skill-icon" style="color: {skill.color}">
                <i class="{skill.icon}"></i>
              </div>
              <div class="skill-info">
                <h3>{skill.name}</h3>
                <span class="skill-level">{skill.level}%</span>
              </div>
            </div>
            
            <div class="skill-bar">
              <div class="skill-progress" 
                   style="width: {animatedSkills ? skill.level : 0}%; background: {skill.color}">
              </div>
            </div>
          </div>
        {/each}
      </div>
      
      <div class="skills-summary">
        <div class="summary-card">
          <h3>Full-Stack Entwicklung</h3>
          <p>Umfassende Erfahrung in der Entwicklung von Web- und Mobile-Anwendungen mit modernen Technologien und Frameworks.</p>
          <div class="tech-categories">
            <div class="category">
              <h4>Frontend</h4>
              <div class="tech-tags">
                <span>React</span>
                <span>Vue.js</span>
                <span>Angular</span>
                <span>HTML/CSS</span>
              </div>
            </div>
            <div class="category">
              <h4>Backend</h4>
              <div class="tech-tags">
                <span>Node.js</span>
                <span>.NET</span>
                <span>Express</span>
                <span>REST APIs</span>
              </div>
            </div>
            <div class="category">
              <h4>Mobile</h4>
              <div class="tech-tags">
                <span>React Native</span>
                <span>.NET MAUI</span>
                <span>Flutter</span>
                <span>iOS/Android</span>
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
    font-size: 2.5rem;
    margin-bottom: 3rem;
    text-align: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .skills-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
    align-items: start;
  }

  .skills-grid {
    display: grid;
    gap: 1.5rem;
  }

  .skill-card {
    background: var(--bg-card);
    backdrop-filter: blur(10px);
    border: 1px solid var(--border-color);
    border-radius: 15px;
    padding: 1.5rem;
    transition: all 0.3s ease;
    animation: slideInLeft 0.6s ease-out both;
  }

  .skill-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px var(--shadow-color);
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
  }

  .skill-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .skill-icon {
    font-size: 2rem;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-secondary);
    border-radius: 12px;
  }

  .skill-info {
    flex: 1;
  }

  .skill-info h3 {
    margin: 0 0 0.25rem 0;
    font-size: 1.1rem;
    color: var(--text-primary);
  }

  .skill-level {
    font-size: 0.9rem;
    color: var(--text-secondary);
    font-weight: 500;
  }

  .skill-bar {
    width: 100%;
    height: 8px;
    background: var(--bg-secondary);
    border-radius: 4px;
    overflow: hidden;
  }

  .skill-progress {
    height: 100%;
    border-radius: 4px;
    transition: width 1.5s ease-out;
    position: relative;
  }

  .skill-progress::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  .skills-summary {
    position: sticky;
    top: 100px;
  }

  .summary-card {
    background: var(--bg-card);
    backdrop-filter: blur(10px);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 8px 32px var(--shadow-color);
  }

  .summary-card h3 {
    margin: 0 0 1rem 0;
    color: var(--text-primary);
    font-size: 1.3rem;
  }

  .summary-card p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .tech-categories {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .category h4 {
    margin: 0 0 0.75rem 0;
    color: #667eea;
    font-size: 1rem;
    font-weight: 600;
  }

  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tech-tags span {
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    border: 1px solid rgba(102, 126, 234, 0.2);
    transition: all 0.3s ease;
  }

  .tech-tags span:hover {
    background: rgba(102, 126, 234, 0.2);
    transform: translateY(-2px);
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
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
      gap: 2rem;
    }
    
    .skills-summary {
      position: static;
    }
    
    .summary-card {
      padding: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .skill-card {
      padding: 1rem;
    }
    
    .skill-icon {
      font-size: 1.5rem;
      width: 40px;
      height: 40px;
    }
    
    .skill-info h3 {
      font-size: 1rem;
    }
  }
</style>
