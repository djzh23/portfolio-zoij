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
    top: 20px;
    right: 20px;
    z-index: 1001;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 20px var(--shadow-color);
  }

  .theme-toggle:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 25px var(--shadow-color);
  }

  .toggle-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .toggle-icon {
    color: var(--text-primary);
    font-size: 1.2rem;
    transition: all 0.3s ease;
  }

  .theme-toggle:hover .toggle-icon {
    color: #667eea;
  }

  @media (max-width: 768px) {
    .theme-toggle {
      top: 15px;
      right: 15px;
      width: 45px;
      height: 45px;
    }
    
    .toggle-icon {
      font-size: 1rem;
    }
  }
</style>
