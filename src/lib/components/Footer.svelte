<script>
  // Social media links
  const socialLinks = [
    {
      name: 'Email',
      icon: 'fas fa-envelope',
      url: 'mailto:zouh.ijd@gmail.com',
      color: '#EA4335'
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      url: 'https://linkedin.com/in/zouhair-ijaad',
      color: '#0077B5'
    },
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/djzh23',
      color: '#333333'
    }
  ];

  const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="footer-content">
    <div class="footer-section">
      <div class="footer-logo">
        <h3>Zouhair Ijaad</h3>
        <p>Full-Stack Entwickler & IT-Spezialist</p>
      </div>
      
      <div class="social-links">
        {#each socialLinks as link}
          <a 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            class="social-link"
            title={link.name}
            style="--hover-color: {link.color}"
          >
            <i class={link.icon}></i>
          </a>
        {/each}
      </div>
    </div>
    
    <div class="footer-section">
      <div class="footer-info">
        <p>&copy; {currentYear} Zouhair Ijaad. Alle Rechte vorbehalten.</p>
        <p>Entwickelt mit ❤️ und Svelte</p>
      </div>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 3rem 0 2rem;
    position: relative;
    overflow: hidden;
  }

  .footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.1)"/><circle cx="10" cy="60" r="0.5" fill="rgba(255,255,255,0.1)"/><circle cx="90" cy="40" r="0.5" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
  }

  .footer-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .footer-logo h3 {
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
    background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .footer-logo p {
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
    font-size: 1rem;
  }

  .social-links {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;
  }

  .social-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  .social-link:hover::before {
    left: 100%;
  }

  .social-link:hover {
    transform: translateY(-5px) scale(1.1);
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }

  .social-link i {
    font-size: 1.2rem;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
  }

  .social-link:hover i {
    color: var(--hover-color);
    transform: scale(1.2);
  }

  .footer-info {
    text-align: right;
  }

  .footer-info p {
    margin: 0.5rem 0;
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
  }

  .footer-info p:first-child {
    font-weight: 500;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .footer {
      padding: 2rem 0 1.5rem;
    }

    .footer-content {
      padding: 0 1rem;
    }

    .footer-section {
      flex-direction: column;
      text-align: center;
      gap: 1.5rem;
    }

    .footer-logo h3 {
      font-size: 1.5rem;
    }

    .social-links {
      justify-content: center;
    }

    .social-link {
      width: 45px;
      height: 45px;
    }

    .social-link i {
      font-size: 1.1rem;
    }

    .footer-info {
      text-align: center;
    }

    .footer-info p {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 480px) {
    .footer {
      padding: 1.5rem 0 1rem;
    }

    .footer-logo h3 {
      font-size: 1.3rem;
    }

    .footer-logo p {
      font-size: 0.9rem;
    }

    .social-links {
      gap: 0.75rem;
    }

    .social-link {
      width: 40px;
      height: 40px;
    }

    .social-link i {
      font-size: 1rem;
    }
  }

  /* Animation for social links */
  @keyframes socialFloat {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-3px);
    }
  }

  .social-link:nth-child(1) { animation: socialFloat 3s ease-in-out infinite; }
  .social-link:nth-child(2) { animation: socialFloat 3s ease-in-out infinite 0.5s; }
  .social-link:nth-child(3) { animation: socialFloat 3s ease-in-out infinite 1s; }
</style>
