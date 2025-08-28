<script>
  import { onMount } from 'svelte';
  
  let activeSection = 'start';
  let isMenuOpen = false;
  let isScrolled = false;
  
  const sections = ['start', 'skills', 'projekte', 'kontakt'];
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      activeSection = sectionId;
      if (isMenuOpen) isMenuOpen = false;
    }
  };
  
  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };
  
  onMount(() => {
    const handleScroll = () => {
      // Scroll-Erkennung für Navbar-Styling
      isScrolled = window.scrollY > 50;
      
      // Aktive Sektion-Erkennung
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          activeSection = sections[i];
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<nav class="navbar" class:scrolled={isScrolled}>
  <div class="nav-container">
    <div class="logo">
      <a href="#start" on:click|preventDefault={() => scrollToSection('start')}>
        ZI
      </a>
    </div>
    
    <!-- Desktop Navigation -->
    <div class="desktop-nav">
      <a 
        href="#start" 
        class:active={activeSection === 'start'} 
        on:click|preventDefault={() => scrollToSection('start')}
      >
        Start
      </a>
      <a 
        href="#skills" 
        class:active={activeSection === 'skills'} 
        on:click|preventDefault={() => scrollToSection('skills')}
      >
        Skills
      </a>
      <a 
        href="#projekte" 
        class:active={activeSection === 'projekte'} 
        on:click|preventDefault={() => scrollToSection('projekte')}
      >
        Projekte
      </a>
      <a 
        href="#kontakt" 
        class:active={activeSection === 'kontakt'} 
        on:click|preventDefault={() => scrollToSection('kontakt')}
      >
        Kontakt
      </a>
    </div>

    <!-- Mobile Navigation Toggle -->
    <button 
      class="mobile-menu-toggle" 
      on:click={toggleMenu} 
      aria-label="Menü öffnen/schließen"
      class:active={isMenuOpen}
    >
      <span class="hamburger"></span>
    </button>
  </div>

  <!-- Mobile Navigation Menu -->
  <div class="mobile-nav" class:open={isMenuOpen}>
    <a 
      href="#start" 
      class:active={activeSection === 'start'} 
      on:click|preventDefault={() => scrollToSection('start')}
    >
      Start
    </a>
    <a 
      href="#skills" 
      class:active={activeSection === 'skills'} 
      on:click|preventDefault={() => scrollToSection('skills')}
    >
      Skills
    </a>
    <a 
      href="#projekte" 
      class:active={activeSection === 'projekte'} 
      on:click|preventDefault={() => scrollToSection('projekte')}
    >
      Projekte
    </a>
    <a 
      href="#kontakt" 
      class:active={activeSection === 'kontakt'} 
      on:click|preventDefault={() => scrollToSection('kontakt')}
    >
      Kontakt
    </a>
  </div>
</nav>

<style>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    transition: all 0.3s ease;
    background: var(--bg-card);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border-color);
  }

  .navbar.scrolled {
    background: var(--bg-primary);
    box-shadow: 0 2px 20px var(--shadow-color);
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
  }

  .logo a {
    font-size: 1.8rem;
    font-weight: 700;
    color: #667eea;
    text-decoration: none;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transition: all 0.3s ease;
  }

  .logo a:hover {
    transform: scale(1.1);
  }

  .desktop-nav {
    display: flex;
    gap: 2rem;
  }

  .desktop-nav a {
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    transition: all 0.3s ease;
    position: relative;
  }

  .desktop-nav a:hover {
    color: #667eea;
    background: rgba(102, 126, 234, 0.1);
  }

  .desktop-nav a.active {
    color: #667eea;
    background: rgba(102, 126, 234, 0.1);
  }

  .desktop-nav a.active::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 2px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 1px;
  }

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
    background: var(--text-primary);
    position: relative;
    transition: all 0.3s ease;
  }

  .hamburger::before,
  .hamburger::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background: var(--text-primary);
    transition: all 0.3s ease;
  }

  .hamburger::before {
    top: -8px;
  }

  .hamburger::after {
    bottom: -8px;
  }

  .mobile-menu-toggle.active .hamburger {
    background: transparent;
  }

  .mobile-menu-toggle.active .hamburger::before {
    top: 0;
    transform: rotate(45deg);
  }

  .mobile-menu-toggle.active .hamburger::after {
    bottom: 0;
    transform: rotate(-45deg);
  }

  .mobile-nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--bg-primary);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border-color);
    box-shadow: 0 4px 20px var(--shadow-color);
    transform: translateY(-100%);
    opacity: 0;
    transition: all 0.3s ease;
  }

  .mobile-nav.open {
    transform: translateY(0);
    opacity: 1;
  }

  .mobile-nav a {
    display: block;
    padding: 1rem 2rem;
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 500;
    border-bottom: 1px solid var(--border-color);
    transition: all 0.3s ease;
  }

  .mobile-nav a:last-child {
    border-bottom: none;
  }

  .mobile-nav a:hover {
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
  }

  .mobile-nav a.active {
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
    border-left: 4px solid #667eea;
  }

  @media (max-width: 768px) {
    .desktop-nav {
      display: none;
    }

    .mobile-menu-toggle {
      display: block;
    }

    .mobile-nav {
      display: block;
    }

    .nav-container {
      padding: 0 1rem;
    }
  }

  @media (max-width: 480px) {
    .nav-container {
      padding: 0 0.5rem;
    }

    .logo a {
      font-size: 1.5rem;
    }
  }
</style>