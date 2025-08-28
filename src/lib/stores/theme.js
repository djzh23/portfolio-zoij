import { writable } from 'svelte/store';

// Theme aus localStorage laden oder Standard (light) verwenden
const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('theme');
    return saved || 'light';
  }
  return 'light';
};

export const theme = writable(getInitialTheme());

// Theme in localStorage speichern und CSS-Variablen aktualisieren
export const toggleTheme = () => {
  theme.update(currentTheme => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
      updateCSSVariables(newTheme);
    }
    
    return newTheme;
  });
};

// CSS-Variablen basierend auf Theme aktualisieren
export const updateCSSVariables = (themeMode) => {
  if (typeof window === 'undefined') return;
  
  const root = document.documentElement;
  
  if (themeMode === 'dark') {
    root.style.setProperty('--bg-primary', '#0f0f23');
    root.style.setProperty('--bg-secondary', '#1a1a2e');
    root.style.setProperty('--bg-card', 'rgba(255, 255, 255, 0.05)');
    root.style.setProperty('--text-primary', '#ffffff');
    root.style.setProperty('--text-secondary', '#b0b0b0');
    root.style.setProperty('--text-muted', '#888888');
    root.style.setProperty('--border-color', 'rgba(255, 255, 255, 0.1)');
    root.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.3)');
    root.style.setProperty('--input-bg', 'rgba(255, 255, 255, 0.1)');
    root.style.setProperty('--input-border', 'rgba(255, 255, 255, 0.2)');
  } else {
    root.style.setProperty('--bg-primary', '#f5f7fa');
    root.style.setProperty('--bg-secondary', '#e8ecf1');
    root.style.setProperty('--bg-card', 'rgba(255, 255, 255, 0.8)');
    root.style.setProperty('--text-primary', '#2d3748');
    root.style.setProperty('--text-secondary', '#4a5568');
    root.style.setProperty('--text-muted', '#718096');
    root.style.setProperty('--border-color', 'rgba(226, 232, 240, 0.8)');
    root.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.08)');
    root.style.setProperty('--input-bg', 'rgba(255, 255, 255, 0.9)');
    root.style.setProperty('--input-border', 'rgba(102, 126, 234, 0.2)');
  }
};

// Initial CSS-Variablen setzen
if (typeof window !== 'undefined') {
  updateCSSVariables(getInitialTheme());
}
