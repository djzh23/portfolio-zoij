<script>
  import { onMount } from 'svelte';
  
  // ===== SKILLS DATA =====
  const skillCategories = [
    {
      title: 'Backend',
      skills: [
        { name: 'C# / .NET Core API', level: 85, icon: '⚙️', color: '#512BD4' },
        { name: 'PHP / Laravel', level: 82, icon: '🐘', color: '#FF2D20' },
        { name: 'Python / Flask', level: 75, icon: '🐍', color: '#3776AB' }
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML / CSS / Bootstrap', level: 90, icon: '🌐', color: '#1572B6' },
        { name: 'JavaScript (ES6+)', level: 85, icon: '🔺', color: '#F7DF1E' },
        { name: 'Svelte / SvelteKit', level: 80, icon: '🟣', color: '#FF3E00' },
        { name: '.NET Blazor / MAUI (XAML UI)', level: 75, icon: '🟦', color: '#512BD4' },
        { name: 'Blade / Jinja Templates', level: 70, icon: '🟤', color: '#FF2D20' }
      ]
    },
    {
      title: 'Datenbanken & Tools',
      skills: [
        { name: 'MySQL / MS-SQL', level: 85, icon: '🗄️', color: '#4479A1' },
        { name: 'PostgreSQL', level: 78, icon: '🐬', color: '#336791' },
        { name: 'ORM (Entity Framework, Eloquent)', level: 80, icon: '⚙️', color: '#512BD4' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'Docker (Basics)', level: 70, icon: '🐳', color: '#2496ED' },
        { name: 'Azure (Deployment, CI/CD)', level: 68, icon: '☁️', color: '#0078D4' },
        { name: 'AWS (Grundlagen)', level: 65, icon: '☁️', color: '#FF9900' },
        { name: 'Git / GitHub / GitLab', level: 90, icon: '🔄', color: '#333333' }
      ]
    }
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
    skillCategories.forEach((category, categoryIndex) => {
      category.skills.forEach((skill, skillIndex) => {
        setTimeout(() => {
          animatedSkills = [...animatedSkills, skill];
        }, (categoryIndex * category.skills.length + skillIndex) * 100);
      });
    });
  };
</script>

<section id="skills" class="skills-section">
  <div class="container">
    <div class="skills-header">
      <h2 class="section-title">Skills & Technologien</h2>
      <p class="section-subtitle">Meine technischen Fähigkeiten und Erfahrungen</p>
    </div>
    
    <div class="skills-categories">
      {#each skillCategories as category, categoryIndex}
        <div class="skill-category">
          <h3 class="category-title">{category.title}</h3>
          <div class="skills-grid">
            {#each category.skills as skill, skillIndex}
              <div class="skill-card" class:animate={animatedSkills.includes(skill)}>
                <div class="skill-header">
                  <div class="skill-icon" style="color: {skill.color}">
                    {skill.icon}
                  </div>
                  <div class="skill-info">
                    <h4 class="skill-name">{skill.name}</h4>
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

  .skills-categories {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .skill-category {
    margin-bottom: 2rem;
  }

  .category-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid rgba(102, 126, 234, 0.2);
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
    font-size: 1.2rem;
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

    .skills-categories {
      gap: 2rem;
    }

    .category-title {
      font-size: 1.3rem;
      margin-bottom: 1rem;
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
      font-size: 1rem;
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

    .skills-categories {
      gap: 1.5rem;
    }

    .category-title {
      font-size: 1.2rem;
      margin-bottom: 0.8rem;
    }

    .skill-header {
      gap: 0.5rem;
    }

    .skill-icon {
      width: 24px;
      height: 24px;
      font-size: 0.9rem;
    }

    .skill-name {
      font-size: 0.85rem;
    }

    .progress-bar {
      height: 4px;
    }
  }
</style>
