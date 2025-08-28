<script>
  import { theme, toggleTheme } from '$lib/stores/theme.js';
</script>

<button 
  class="theme-toggle" 
  on:click={toggleTheme}
  aria-label="Theme wechseln"
  title="Theme wechseln"
>
  <div class="toggle-container">
    <div class="toggle-icon">
      {#if $theme === 'dark'}
        <i class="fas fa-sun"></i>
      {:else}
        <i class="fas fa-moon"></i>
      {/if}
    </div>
  </div>
</button>

<style>
  .theme-toggle {
    position: fixed;
    top: 25px;
    right: 25px;
    z-index: 1001;
    background: rgba(255, 255, 255, 0.95);
    border: 2px solid rgba(102, 126, 234, 0.2);
    border-radius: 50%;
    width: 55px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(20px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .theme-toggle:hover {
    transform: scale(1.1) rotate(15deg);
    box-shadow: 0 6px 25px rgba(102, 126, 234, 0.3);
    border-color: rgba(102, 126, 234, 0.4);
    background: rgba(255, 255, 255, 0.98);
  }

  .toggle-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .toggle-icon {
    color: #667eea;
    font-size: 1.3rem;
    transition: all 0.3s ease;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }

  .theme-toggle:hover .toggle-icon {
    color: #764ba2;
    transform: scale(1.1);
  }

  /* Dark theme specific styles */
  :global([data-theme="dark"]) .theme-toggle {
    background: rgba(30, 30, 30, 0.95);
    border-color: rgba(102, 126, 234, 0.3);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  :global([data-theme="dark"]) .theme-toggle:hover {
    background: rgba(40, 40, 40, 0.98);
    border-color: rgba(102, 126, 234, 0.5);
    box-shadow: 0 6px 25px rgba(102, 126, 234, 0.4);
  }

  :global([data-theme="dark"]) .toggle-icon {
    color: #4cc9f0;
  }

  :global([data-theme="dark"]) .theme-toggle:hover .toggle-icon {
    color: #667eea;
  }

  @media (max-width: 768px) {
    .theme-toggle {
      top: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
    }
    
    .toggle-icon {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    .theme-toggle {
      top: 15px;
      right: 15px;
      width: 45px;
      height: 45px;
    }
    
    .toggle-icon {
      font-size: 1.1rem;
    }
  }
</style>
