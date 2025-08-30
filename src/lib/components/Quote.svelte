<script>
  import { onMount } from 'svelte';
  
  let currentQuoteIndex = 0;
  let isVisible = false;
  
  const quotes = [
    {
      text: "Code ist wie Humor. Wenn du es erklären musst, ist es schlecht.",
      author: "Cory House",
      emoji: "😅"
    },
    {
      text: "Debugging ist wie ein Mordfall in einem Horrorfilm. Du bist sowohl der Detektiv als auch der Mörder.",
      author: "Filipe Fortes",
      emoji: "🕵️‍♂️"
    },
    {
      text: "Das beste Debugging-Tool ist ein guter Schlaf.",
      author: "Unbekannter Entwickler",
      emoji: "😴"
    },
    {
      text: "Programmieren ist die Kunst, einem Computer zu sagen, was er tun soll, wenn du nicht da bist.",
      author: "Andrew Hunt",
      emoji: "🤖"
    },
    {
      text: "99 kleine Bugs im Code, 99 kleine Bugs. Nimm einen raus, patche ihn rein, 127 kleine Bugs im Code.",
      author: "Programmierer-Wisdom",
      emoji: "🐛"
    },
    {
      text: "Der beste Code ist der, den du nicht schreiben musst.",
      author: "Robert C. Martin",
      emoji: "✨"
    },
    {
      text: "Stack Overflow ist mein bester Freund. Manchmal antwortet er sogar.",
      author: "Jeder Entwickler",
      emoji: "📚"
    },
    {
      text: "Git commit -m 'Fix stuff' - weil 'Zeug reparieren' zu unprofessionell klingt.",
      author: "Git-Humor",
      emoji: "🔧"
    }
  ];
  
  onMount(() => {
    isVisible = true;
    
    // Quote alle 5 Sekunden wechseln
    const interval = setInterval(() => {
      currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    }, 5000);
    
    return () => clearInterval(interval);
  });
  
  const nextQuote = () => {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  };
  
  const prevQuote = () => {
    currentQuoteIndex = currentQuoteIndex === 0 ? quotes.length - 1 : currentQuoteIndex - 1;
  };
</script>

<section id="quote" class="section quote-section">
  <div class="content" class:animate-slide-up={isVisible}>
    <h2>💭 Entwickler-Wisdom</h2>
    <p class="section-subtitle">Weisheiten aus der Welt des Programmierens</p>
    
    <div class="quote-container">
      <div class="quote-card">
        <div class="quote-emoji">
          {quotes[currentQuoteIndex].emoji}
        </div>
        
        <blockquote class="quote-text">
          "{quotes[currentQuoteIndex].text}"
        </blockquote>
        
        <cite class="quote-author">
          — {quotes[currentQuoteIndex].author}
        </cite>
        
        <div class="quote-navigation">
          <button class="nav-btn prev" on:click={prevQuote} aria-label="Vorherige Quote">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>
          
          <div class="quote-indicators">
            {#each quotes as _, index}
              <button 
                class="indicator" 
                class:active={index === currentQuoteIndex}
                on:click={() => currentQuoteIndex = index}
                aria-label="Quote {index + 1}"
              ></button>
            {/each}
          </div>
          
          <button class="nav-btn next" on:click={nextQuote} aria-label="Nächste Quote">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>
        </div>
      </div>
      
      <div class="fun-facts">
        <h3>🎯 Fun Facts über mich</h3>
        <ul>
          <li>Kann Kaffee in Code umwandeln ☕</li>
          <li>Debuggt im Schlaf 💤</li>
          <li>Git commit -m "Fix stuff" ist mein Lieblings-Command 🔧</li>
          <li>Stack Overflow ist mein zweites Zuhause 🏠</li>
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
    background: var(--bg-primary);
  }

  .content {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-align: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
  }

  .section-subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    text-align: center;
    margin-bottom: 3rem;
  }

  .quote-container {
    display: grid;
    gap: 3rem;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    .quote-container {
      grid-template-columns: 2fr 1fr;
      gap: 4rem;
    }
  }

  .quote-card {
    background: var(--bg-card);
    backdrop-filter: blur(10px);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 3rem;
    box-shadow: 0 8px 32px var(--shadow-color);
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .quote-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2);
  }

  .quote-emoji {
    font-size: 4rem;
    margin-bottom: 1.5rem;
    animation: bounce 2s ease-in-out infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }

  .quote-text {
    font-size: 1.4rem;
    line-height: 1.6;
    color: var(--text-primary);
    margin: 0 0 1.5rem 0;
    font-style: italic;
    position: relative;
  }

  .quote-text::before,
  .quote-text::after {
    content: '"';
    font-size: 3rem;
    color: var(--accent-color);
    position: absolute;
    opacity: 0.3;
  }

  .quote-text::before {
    top: -1rem;
    left: -1rem;
  }

  .quote-text::after {
    bottom: -2rem;
    right: -1rem;
  }

  .quote-author {
    font-size: 1.1rem;
    color: var(--accent-color);
    font-weight: 600;
    display: block;
    margin-bottom: 2rem;
  }

  .quote-navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .nav-btn {
    background: none;
    border: 2px solid var(--border-color);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    color: var(--text-secondary);
  }

  .nav-btn:hover {
    border-color: var(--accent-color);
    color: var(--accent-color);
    transform: scale(1.1);
  }

  .quote-indicators {
    display: flex;
    gap: 0.5rem;
  }

  .indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--border-color);
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .indicator.active {
    background: var(--accent-color);
    transform: scale(1.2);
  }

  .fun-facts {
    background: var(--bg-card);
    backdrop-filter: blur(10px);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 8px 32px var(--shadow-color);
  }

  .fun-facts h3 {
    font-size: 1.3rem;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .fun-facts ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .fun-facts li {
    color: var(--text-secondary);
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    position: relative;
    line-height: 1.5;
  }

  .fun-facts li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: var(--accent-color);
    font-weight: bold;
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
    .section {
      padding: 60px 15px;
    }

    h2 {
      font-size: 2rem;
    }

    .quote-card {
      padding: 2rem;
    }

    .quote-text {
      font-size: 1.2rem;
    }

    .quote-emoji {
      font-size: 3rem;
    }

    .fun-facts {
      padding: 1.5rem;
    }
  }
</style>
