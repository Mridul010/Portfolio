# ⬡ MC. — Cyberpunk Portfolio

> **A cinematic, cyberpunk-themed developer portfolio** built with zero frameworks — just raw HTML, CSS, and JavaScript.

🔗 **Live:** [mridul010.github.io/Portfolio](https://mridul010.github.io/Portfolio)

---

## ⚡ Features

- 🎬 **Cinematic Experience** — CRT scanline overlay, vignette effect, and particle-driven Three.js background that shifts color as you scroll
- 🎮 **Cyberpunk UI** — Orbitron typography, glitch effects on the hero name, neon cyan/magenta palette, HUD-inspired navigation
- 🔊 **Immersive SFX** — Web Audio API-powered sound engine with hover pulses, cyber clicks, card scans, and section-change chords (toggle with ♪)
- 📜 **Horizontal Scroll Missions** — GSAP-pinned horizontal project showcase with smooth scrub
- ⌨️ **Typewriter Role Cycler** — Animated role titles with blinking cursor
- 📊 **Scroll-Triggered Animations** — Bio word reveal, skill bar fills, timeline draw, stat counters, staggered card reveals
- 🖱️ **Custom Cursor** — GPU-composited dot + ring with hover expansion on interactive elements
- 📱 **Fully Responsive** — Polished mobile layout with bottom tab navigation, reduced particles, and touch-friendly targets

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Structure** | HTML5, Semantic Markup |
| **Styling** | Vanilla CSS, CSS Custom Properties, Clamp Typography |
| **Animation** | GSAP 3 + ScrollTrigger |
| **3D Background** | Three.js (WebGL Particles) |
| **Sound** | Web Audio API (no dependencies) |
| **Deployment** | GitHub Pages |

## 🚀 Performance

- Single unified `requestAnimationFrame` loop (cursor + Three.js + scroll)
- GPU compositing via `translate3d` and `will-change`
- Pixel ratio capped at 2× for HiDPI screens
- Scroll work offloaded to rAF cache — zero heavy computation on scroll events
- Mobile: 800 particles (vs 1500 desktop), antialiasing disabled
- CSS `contain: layout style` on sections for isolated repaints

## 📂 Structure

```
├── index.html    # Single-file portfolio (HTML + CSS + JS)
├── image.png     # Profile photo
└── README.md
```

## 🎨 Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--cyan` | `#00f0ff` | Primary accent, links, borders |
| `--magenta` | `#ff0080` | Secondary accent, highlights |
| `--yellow` | `#f5ff00` | Particle color shift |
| `--bg` | `#030309` | Background |
| `--text` | `#b8c8e8` | Body text |

---

<p align="center">
  <b>MC<span style="color:#ff0080">.</span></b> — Designed & Developed by <a href="https://github.com/Mridul010">Mridul Chundaran</a>
</p>
