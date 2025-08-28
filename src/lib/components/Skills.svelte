<script>
  import { onMount } from 'svelte';
  
  // ===== SKILLS DATA =====
  const skills = [
    { name: 'JavaScript/TypeScript', level: 90, icon: 'fab fa-js-square', color: '#f7df1e' },
    { name: 'React/React Native', level: 85, icon: 'fab fa-react', color: '#61dafb' },
    { name: 'Node.js/Express', level: 88, icon: 'fab fa-node-js', color: '#339933' },
    { name: 'Python/Django', level: 82, icon: 'fab fa-python', color: '#3776ab' },
    { name: 'Vue.js/Nuxt', level: 80, icon: 'fab fa-vuejs', color: '#4fc08d' },
    { name: 'Svelte/SvelteKit', level: 85, icon: 'fas fa-bolt', color: '#ff3e00' },
    { name: 'PostgreSQL/MongoDB', level: 85, icon: 'fas fa-database', color: '#336791' },
    { name: 'Docker/Kubernetes', level: 75, icon: 'fab fa-docker', color: '#2496ed' },
    { name: 'AWS/Azure', level: 78, icon: 'fab fa-aws', color: '#ff9900' },
    { name: 'Git/GitHub', level: 92, icon: 'fab fa-github', color: '#333333' }
  ];

  let animatedSkills = [];
  let isVisible = false;

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible = true;
          animateSkills();
        }
      });
    }, { threshold: 0.3 });

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }
  });

  const animateSkills = () => {
    skills.forEach((skill, index) => {
      setTimeout(() => {
        animatedSkills = [...animatedSkills, skill];
      }, index * 100);
    });
  };
</script>

<section id="skills" class="skills-section">
  <div class="container">
    <div class="skills-header">
      <h2 class="section-title">Skills & Technologien</h2>
      <p class="section-subtitle">Meine technischen Fähigkeiten und Erfahrungen</p>
    </div>
    
    <div class="skills-grid">
      {#each skills as skill, index}
        <div class="skill-card" class:animate={animatedSkills.includes(skill)}>
          <div class="skill-header">
            <div class="skill-icon" style="color: {skill.color}">
              <i class={skill.icon}></i>
            </div>
            <div class="skill-info">
              <h3 class="skill-name">{skill.name}</h3>
              <span class="skill-level">{skill.level}%</span>
            </div>
          </div>
          
          <div class="progress-container">
            <div class="progress-bar">
              <div 
                class="progress-fill" 
                style="width: {isVisible ? skill.level : 0}%; background: {skill.color}"
              ></div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .skills-section {
    padding: 80px 20px;
    min-height: auto;
  }

  .container {
    max-width: 1000px;
    margin: 0 auto;
  }

  .skills-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .section-subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin: 0;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .skill-card {
    background: var(--bg-primary);
    border-radius: 12px;
    padding: 1.25rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(102, 126, 234, 0.1);
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(20px);
  }

  .skill-card.animate {
    opacity: 1;
    transform: translateY(0);
  }

  .skill-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(102, 126, 234, 0.15);
    border-color: rgba(102, 126, 234, 0.2);
  }

  .skill-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  .skill-icon {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: rgba(102, 126, 234, 0.1);
    font-size: 1rem;
  }

  .skill-info {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .skill-name {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0;
  }

  .skill-level {
    font-size: 0.85rem;
    font-weight: 600;
    color: #667eea;
    background: rgba(102, 126, 234, 0.1);
    padding: 0.25rem 0.5rem;
    border-radius: 12px;
  }

  .progress-container {
    margin-top: 0.5rem;
  }

  .progress-bar {
    width: 100%;
    height: 6px;
    background: rgba(102, 126, 234, 0.1);
    border-radius: 3px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    border-radius: 3px;
    transition: width 1.5s ease-out;
    position: relative;
  }

  .progress-fill::after {
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

  /* Responsive Design */
  @media (max-width: 768px) {
    .skills-section {
      padding: 60px 15px;
    }

    .section-title {
      font-size: 2rem;
    }

    .section-subtitle {
      font-size: 1rem;
    }

    .skills-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .skill-card {
      padding: 1rem;
    }

    .skill-icon {
      width: 28px;
      height: 28px;
      font-size: 0.9rem;
    }

    .skill-name {
      font-size: 0.9rem;
    }

    .skill-level {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    .skills-section {
      padding: 50px 10px;
    }

    .section-title {
      font-size: 1.8rem;
    }

    .skill-header {
      gap: 0.5rem;
    }

    .skill-icon {
      width: 24px;
      height: 24px;
      font-size: 0.8rem;
    }

    .skill-name {
      font-size: 0.85rem;
    }

    .progress-bar {
      height: 4px;
    }
  }
</style>
