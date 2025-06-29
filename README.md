<div align="center">
  <img src="public/placeholder-logo.png" alt="Strayx Logo" width="120" height="120">
  
  # 🎮 Strayx
  
  **Community Games neu gedacht**
  
  *Die ultimative Open-Source Plattform für Streamer-Community Interaktionen*
  
  [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
  [![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC)](https://tailwindcss.com/)
  
  [🚀 Live Demo](https://your-demo-url.com) • [📖 Dokumentation](https://docs.strayx.com) • [💬 Discord](https://discord.gg/strayx)
</div>

---

## ✨ Was ist Strayx?

Strayx revolutioniert die Art, wie Streamer mit ihrer Community interagieren. Vergiss komplizierte Google Forms und chaotische Discord-Setups! Mit Strayx bekommst du eine All-in-One Lösung für:

- 🎬 **Clip Reactions** - Lass deine Community Clips bewerten und kommentieren
- 🎁 **Smart Giveaways** - Faire und transparente Verlosungen mit Anti-Cheat
- 🖼️ **Bilderreactions** - Zeige Bilder und sammle Live-Reaktionen
- ❓ **Q&A Sessions** - Sammle und moderiere Fragen mit Upvoting
- 📊 **Live Polls** - Interaktive Umfragen mit Echtzeit-Ergebnissen
- 🔗 **Stream Integration** - Nahtlose Integration mit OBS und Streamlabs

## 🎯 Features

### 🎮 Für Streamer
- **Plug & Play** - Keine API-Kenntnisse erforderlich
- **Multi-Platform** - Funktioniert mit Twitch, YouTube und allen Streaming-Plattformen
- **Echtzeit-Updates** - Alle Interaktionen werden live synchronisiert
- **Moderations-Tools** - Vollständige Kontrolle über Community-Inhalte
- **Analytics Dashboard** - Detaillierte Einblicke in Community-Engagement

### 👥 Für die Community
- **Einfache Teilnahme** - Nur ein Link, keine Registrierung nötig
- **Mobile-First** - Optimiert für Smartphone-Nutzung
- **Gamification** - Punkte, Badges und Leaderboards
- **Barrierefreiheit** - Vollständig zugänglich für alle Nutzer

### 🛠️ Für Entwickler
- **Open Source** - MIT Lizenz, komplett transparent
- **Modern Stack** - Next.js 15, TypeScript, Tailwind CSS
- **Erweiterbar** - Plugin-System für custom Features
- **API-First** - RESTful API für eigene Integrationen

## 🚀 Quick Start

### Voraussetzungen

- Node.js 18+ 
- npm oder yarn
- Git

### Installation

```bash
# Repository klonen
git clone https://github.com/yourusername/strayx.git
cd strayx

# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Die Anwendung ist nun unter `http://localhost:3000` verfügbar! 🎉

### Deployment

#### Vercel (Empfohlen)
```bash
# Vercel CLI installieren
npm i -g vercel

# Deployen
vercel
```

#### Docker
```bash
# Docker Image bauen
docker build -t strayx .

# Container starten
docker run -p 3000:3000 strayx
```

## 📁 Projekt-Struktur

```
strayx/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Landing Page
│   └── layout.tsx         # Root Layout
├── components/            # React Komponenten
│   ├── ui/               # shadcn/ui Komponenten
│   └── custom/           # Custom Komponenten
├── lib/                  # Utility Funktionen
├── public/               # Statische Assets
├── styles/               # Global Styles
└── types/                # TypeScript Definitionen
```

## 🎨 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) - React Framework mit App Router
- **Sprache:** [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS Framework
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) - Moderne React Komponenten
- **Icons:** [Lucide React](https://lucide.dev/) - Schöne SVG Icons
- **Deployment:** [Vercel](https://vercel.com/) - Optimiert für Next.js

## 🤝 Contributing

Wir freuen uns über jeden Beitrag! Strayx lebt von der Community.

### Wie du beitragen kannst:

1. **🐛 Bugs melden** - Erstelle ein Issue mit detaillierter Beschreibung
2. **💡 Features vorschlagen** - Teile deine Ideen in den Discussions
3. **🔧 Code beitragen** - Fork das Repo und erstelle einen Pull Request
4. **📖 Dokumentation** - Hilf dabei, die Docs zu verbessern
5. **🌍 Übersetzungen** - Unterstütze bei der Internationalisierung

### Development Setup

```bash
# Fork das Repository
git clone https://github.com/DEIN-USERNAME/strayx.git
cd strayx

# Dependencies installieren
npm install

# Pre-commit hooks einrichten
npm run prepare

# Development server starten
npm run dev
```

### Pull Request Guidelines

- ✅ Beschreibe deine Änderungen ausführlich
- ✅ Füge Screenshots bei UI-Änderungen hinzu
- ✅ Teste deine Änderungen gründlich
- ✅ Folge den bestehenden Code-Konventionen
- ✅ Aktualisiere die Dokumentation wenn nötig

## 🗺️ Roadmap

### 🎯 Version 1.0 (Q2 2024)
- [x] Landing Page
- [x] Basic UI Components
- [ ] Clip Reaction System
- [ ] Giveaway Engine
- [ ] User Authentication

### 🚀 Version 1.1 (Q3 2024)
- [ ] Real-time Chat Integration
- [ ] Advanced Analytics
- [ ] Mobile App (React Native)
- [ ] Plugin System

### 🌟 Version 2.0 (Q4 2024)
- [ ] Multi-language Support
- [ ] Advanced Moderation Tools
- [ ] Monetization Features
- [ ] Enterprise Features

[Vollständige Roadmap ansehen →](https://github.com/yourusername/strayx/projects/1)

## 📊 Community & Support

### 💬 Community Channels
- **Discord:** [Strayx Community](https://discord.gg/strayx) - Für Diskussionen und Support
- **Twitter:** [@StrayxApp](https://twitter.com/strayxapp) - News und Updates
- **Reddit:** [r/Strayx](https://reddit.com/r/strayx) - Community Discussions

### 🆘 Support
- **Bug Reports:** [GitHub Issues](https://github.com/yourusername/strayx/issues)
- **Feature Requests:** [GitHub Discussions](https://github.com/yourusername/strayx/discussions)
- **Email:** support@strayx.com

## 📄 Lizenz

Dieses Projekt steht unter der [MIT Lizenz](LICENSE) - siehe die LICENSE Datei für Details.

Das bedeutet:
- ✅ Kommerzielle Nutzung erlaubt
- ✅ Modifikation erlaubt
- ✅ Distribution erlaubt
- ✅ Private Nutzung erlaubt

## 🙏 Danksagungen

Strayx wäre nicht möglich ohne diese großartigen Open-Source Projekte:

- [Next.js](https://nextjs.org/) - Das React Framework für Production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS Framework
- [shadcn/ui](https://ui.shadcn.com/) - Wunderschöne UI Komponenten
- [Lucide](https://lucide.dev/) - Schöne & konsistente Icons
- [Vercel](https://vercel.com/) - Deployment & Hosting Platform

## 🌟 Unterstütze das Projekt

Wenn dir Strayx gefällt, unterstütze uns:

- ⭐ **Star** das Repository
- 🐦 **Teile** es auf Social Media
- 🐛 **Melde** Bugs oder **schlage** Features vor
- 💻 **Trage** Code bei
- ☕ **Spende** einen Kaffee (Coming Soon)

---

<div align="center">
  <p>
    Made with ❤️ by the Strayx Community
  </p>
  <p>
    <a href="https://github.com/yourusername/strayx/stargazers">⭐ Star us on GitHub</a> •
    <a href="https://discord.gg/strayx">💬 Join Discord</a> •
    <a href="https://twitter.com/strayxapp">🐦 Follow on Twitter</a>
  </p>
</div>
```

Diese README ist:

- **Visuell ansprechend** mit Emojis und strukturierter Formatierung
- **Informativ** mit allen wichtigen Projektdetails
- **Entwicklerfreundlich** mit klaren Setup-Anweisungen
- **Community-orientiert** mit Contributing Guidelines
- **Professionell** aber trotzdem zugänglich
- **Gaming-themed** passend zur Zielgruppe

Die README folgt den Best Practices für Open-Source Projekte und macht es einfach für neue Contributors, sich zu beteiligen! 🚀
