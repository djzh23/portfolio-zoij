# Portfolio - Zouhair Ijaad

Ein modernes, responsives Portfolio für Full-Stack Entwickler, erstellt mit SvelteKit.

## ✨ Features

- **Modernes Design**: Glassmorphism-Effekte und Gradienten
- **Responsive**: Optimiert für alle Geräte
- **Smooth Scrolling**: Flüssige Navigation zwischen Sektionen
- **Animierte Komponenten**: CSS-Animationen und Transitions
- **Accessibility**: Barrierefreie Navigation und Interaktionen
- **Performance**: Optimiert für schnelle Ladezeiten

## 🚀 Technologien

- **SvelteKit** - Full-Stack Framework
- **CSS3** - Moderne Styling-Techniken
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## 📁 Projektstruktur

```
src/
├── lib/
│   └── components/
│       ├── Nav.svelte          # Navigation mit aktiver Sektion-Erkennung
│       ├── Hero.svelte         # Startsektion mit Glitch-Effekt
│       ├── Skills.svelte       # Skills mit animierten Progress-Bars
│       ├── Projects.svelte     # Berufserfahrungen mit expandierbaren Karten
│       └── Contact.svelte      # Kontaktformular mit Validierung
├── routes/
│   ├── +layout.svelte          # Layout-Wrapper
│   └── +page.svelte            # Hauptseite
└── app.css                     # Globale Styles
```

## 🎨 Design-Highlights

### Navigation
- Sticky Navigation mit Blur-Effekt
- Aktive Sektion-Erkennung beim Scrollen
- Responsive Hamburger-Menü für Mobile
- Smooth Scroll zwischen Sektionen

### Hero-Sektion
- Glitch-Animation für den Namen
- Gradient-Text-Effekte
- Animierte Hintergrund-Patterns
- Call-to-Action Buttons

### Skills-Sektion
- Animierte Progress-Bars
- Intersection Observer für Scroll-Animationen
- Kategorisierte Technologie-Tags
- Sticky Summary-Card

### Projekte-Sektion
- Expandierbare Erfahrungskarten
- Technologie-Tags mit Icons
- Metriken und Erfolge
- Hover-Effekte

### Kontakt-Sektion
- Funktionales Kontaktformular
- Erfolgs-/Fehlermeldungen
- Kontaktinformationen mit Icons
- Responsive Grid-Layout

## 🛠️ Installation & Entwicklung

1. **Repository klonen**
   ```bash
   git clone <repository-url>
   cd portfolio-zoij
   ```

2. **Dependencies installieren**
   ```bash
   npm install
   ```

3. **Entwicklungsserver starten**
   ```bash
   npm run dev
   ```

4. **Browser öffnen**
   ```
   http://localhost:5173
   ```

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px - 480px
- **Mobile**: < 480px

## 🎯 Verbesserungen

### Behobene Probleme:
- ✅ Leere Komponenten (Projects, Contact) implementiert
- ✅ Doppelte Navigation entfernt
- ✅ Übermäßig große Hero-Komponente vereinfacht
- ✅ Inkonsistente Struktur bereinigt
- ✅ Moderne CSS-Techniken implementiert
- ✅ Accessibility verbessert
- ✅ Performance optimiert

### Neue Features:
- ✅ Skills-Sektion mit animierten Progress-Bars
- ✅ Moderne Glassmorphism-Effekte
- ✅ Responsive Navigation mit aktiver Sektion-Erkennung
- ✅ Smooth Scroll zwischen Sektionen
- ✅ Kontaktformular mit Validierung
- ✅ Hover-Effekte und Animationen
- ✅ Gradient-Text-Effekte

## 🚀 Deployment

Das Projekt kann auf verschiedenen Plattformen deployed werden:

- **Vercel**: `npm run build && vercel --prod`
- **Netlify**: `npm run build`
- **GitHub Pages**: Über GitHub Actions

## 📄 Lizenz

MIT License - siehe LICENSE-Datei für Details.

## 👨‍💻 Autor

**Zouhair Ijaad**
- Full-Stack Entwickler
- Spezialisiert auf moderne Web- und Mobile-Entwicklung
- 8+ Jahre Erfahrung in der Software-Entwicklung
