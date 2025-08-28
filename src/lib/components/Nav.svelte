<script>
  import { onMount } from 'svelte';
  import { theme, toggleTheme } from '$lib/stores/theme.js';
  
  // ===== STATE MANAGEMENT =====
  let activeSection = 'start';
  let isMenuOpen = false;
  
  // ===== SCROLL FUNKTIONEN =====
  // Updated to match actual section order on the page
  const sections = ['start', 'skills', 'weitere-projekte', 'technische-skills', 'projekte', 'kontakt'];
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      activeSection = sectionId;
      if (isMenuOpen) isMenuOpen = false;
    }
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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeSection = entry.target.id;
        }
      });
    }, { threshold: 0.3 });
    
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
  });
</script>

<!-- ===== NAVIGATION ===== -->
<nav class="navbar">
  <div class="nav-container">
    <div class="logo">
      <a href="#start" on:click|preventDefault={() => scrollToSection('start')}>
        <span class="logo-text">ZI</span>
      </a>
    </div>
    
    <!-- Desktop Navigation -->
    <div class="desktop-nav">
      <a href="#start" class:active={activeSection === 'start'} on:click|preventDefault={() => scrollToSection('start')}>
        <i class="fas fa-home"></i>
        <span>Start</span>
      </a>
      <a href="#skills" class:active={activeSection === 'skills'} on:click|preventDefault={() => scrollToSection('skills')}>
        <i class="fas fa-chart-bar"></i>
        <span>Skills</span>
      </a>
      <a href="#weitere-projekte" class:active={activeSection === 'weitere-projekte'} on:click|preventDefault={() => scrollToSection('weitere-projekte')}>
        <i class="fas fa-code"></i>
        <span>Weitere Projekte</span>
      </a>
      <a href="#technische-skills" class:active={activeSection === 'technische-skills'} on:click|preventDefault={() => scrollToSection('technische-skills')}>
        <i class="fas fa-cogs"></i>
        <span>Technische Skills</span>
      </a>
      <a href="#projekte" class:active={activeSection === 'projekte'} on:click|preventDefault={() => scrollToSection('projekte')}>
        <i class="fas fa-briefcase"></i>
        <span>Erfahrungen</span>
      </a>
      <a href="#kontakt" class:active={activeSection === 'kontakt'} on:click|preventDefault={() => scrollToSection('kontakt')}>
        <i class="fas fa-envelope"></i>
        <span>Kontakt</span>
      </a>
      
      <!-- Theme Toggle Button -->
      <button 
        class="theme-toggle-nav" 
        on:click={toggleTheme}
        aria-label="Theme wechseln"
        title="Theme wechseln"
      >
        <i class="fas {$theme === 'dark' ? 'fa-sun' : 'fa-moon'}"></i>
      </button>
    </div>

    <!-- Mobile Navigation Toggle -->
    <button class="mobile-menu-toggle" on:click={toggleMenu} aria-label="Menü öffnen/schließen">
      <span class="hamburger"></span>
    </button>
  </div>

  <!-- Mobile Navigation Menu -->
  <div class="mobile-nav" class:open={isMenuOpen}>
    <a href="#start" class:active={activeSection === 'start'} on:click|preventDefault={() => scrollToSection('start')}>
      <i class="fas fa-home"></i>
      <span>Start</span>
    </a>
    <a href="#skills" class:active={activeSection === 'skills'} on:click|preventDefault={() => scrollToSection('skills')}>
      <i class="fas fa-chart-bar"></i>
      <span>Skills</span>
    </a>
    <a href="#weitere-projekte" class:active={activeSection === 'weitere-projekte'} on:click|preventDefault={() => scrollToSection('weitere-projekte')}>
      <i class="fas fa-code"></i>
      <span>Weitere Projekte</span>
    </a>
    <a href="#technische-skills" class:active={activeSection === 'technische-skills'} on:click|preventDefault={() => scrollToSection('technische-skills')}>
      <i class="fas fa-cogs"></i>
      <span>Technische Skills</span>
    </a>
    <a href="#projekte" class:active={activeSection === 'projekte'} on:click|preventDefault={() => scrollToSection('projekte')}>
      <i class="fas fa-briefcase"></i>
      <span>Erfahrungen</span>
    </a>
    <a href="#kontakt" class:active={activeSection === 'kontakt'} on:click|preventDefault={() => scrollToSection('kontakt')}>
      <i class="fas fa-envelope"></i>
      <span>Kontakt</span>
    </a>
    
    <!-- Mobile Theme Toggle -->
    <button 
      class="theme-toggle-mobile" 
      on:click={toggleTheme}
      aria-label="Theme wechseln"
      title="Theme wechseln"
    >
      <i class="fas fa-palette"></i>
      <span>Theme wechseln</span>
    </button>
  </div>
</nav>

<style>
  /* ===== NAVIGATION STYLES ===== */
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.25rem 2rem;
    height: 70px;
  }

  .logo a {
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  .logo-text {
    font-size: 1.8rem;
    font-weight: 800;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transition: all 0.3s ease;
  }

  .logo a:hover .logo-text {
    transform: scale(1.1);
  }

  .desktop-nav {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }

  .navbar a {
    color: #2b2d42;
    text-decoration: none;
    padding: 0.75rem 1.25rem;
    border-radius: 25px;
    transition: all 0.3s ease;
    position: relative;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
    background: transparent;
    font-size: 0.95rem;
  }

  .navbar a i {
    font-size: 0.9rem;
    opacity: 0.8;
  }

  .navbar a:hover {
    color: #667eea;
    background: rgba(102, 126, 234, 0.1);
    transform: translateY(-2px);
  }

  .navbar a.active {
    color: white;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  }

  .navbar a.active i {
    opacity: 1;
  }

  /* Theme Toggle in Navigation */
  .theme-toggle-nav {
    background: rgba(102, 126, 234, 0.1);
    border: 1px solid rgba(102, 126, 234, 0.2);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #667eea;
    font-size: 0.9rem;
    margin-left: 0.5rem;
  }

  .theme-toggle-nav:hover {
    background: rgba(102, 126, 234, 0.2);
    transform: scale(1.1);
    color: #764ba2;
  }

  /* Mobile Menu Toggle */
  .mobile-menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 8px;
    transition: all 0.3s ease;
  }

  .mobile-menu-toggle:hover {
    background: rgba(102, 126, 234, 0.1);
  }

  .hamburger {
    display: block;
    width: 24px;
    height: 2px;
    background: #2b2d42;
    position: relative;
    transition: all 0.3s ease;
  }

  .hamburger::before,
  .hamburger::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #2b2d42;
    transition: all 0.3s ease;
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
    backdrop-filter: blur(20px);
    padding: 1rem;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .mobile-nav.open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .mobile-nav a {
    padding: 1rem 1.5rem;
    border-radius: 12px;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 500;
    transition: all 0.3s ease;
    color: #2b2d42;
  }

  .mobile-nav a:last-child {
    margin-bottom: 0;
  }

  .mobile-nav a i {
    font-size: 1.1rem;
    width: 20px;
    text-align: center;
  }

  .mobile-nav a:hover {
    background: rgba(102, 126, 234, 0.1);
    transform: translateX(10px);
    color: #667eea;
  }

  .mobile-nav a.active {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  }

  /* Mobile Theme Toggle */
  .theme-toggle-mobile {
    background: rgba(102, 126, 234, 0.1);
    border: 1px solid rgba(102, 126, 234, 0.2);
    border-radius: 12px;
    padding: 1rem 1.5rem;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #667eea;
    font-weight: 500;
    width: 100%;
    justify-content: flex-start;
  }

  .theme-toggle-mobile:hover {
    background: rgba(102, 126, 234, 0.2);
    transform: translateX(10px);
    color: #764ba2;
  }

  .theme-toggle-mobile i {
    font-size: 1.1rem;
    width: 20px;
    text-align: center;
  }

  /* Responsive Design */
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

    .nav-container {
      padding: 1rem;
      height: 60px;
    }
  }

  @media (max-width: 480px) {
    .nav-container {
      padding: 0.75rem;
      height: 55px;
    }

    .logo-text {
      font-size: 1.5rem;
    }

    .mobile-nav a {
      padding: 0.75rem 1rem;
      font-size: 0.9rem;
    }
  }
</style>