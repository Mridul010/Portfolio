# ⬡ M.CHUNDARAN — Matrix Terminal Portfolio

> **A hacker-themed developer portfolio** with matrix rain, boot sequence, terminal UI, 3D card tilt, and decode animations — all in a single HTML file.

🔗 **Live:** [mridul010.github.io/Portfolio](https://mridul010.github.io/Portfolio)

---

## ⚡ Features

- 🖥️ **Boot Sequence** — Realistic OS boot animation with line-by-line display and progress bar
- 🌧️ **Matrix Rain** — Full canvas rain effect throttled to ~24fps for smooth performance
- ⌨️ **Terminal UI** — Bio displayed as `cat profile.json` in a styled terminal block
- 🃏 **3D Card Tilt** — rAF-lerped perspective transforms on hover (mouse) and gyroscope (mobile)
- 🔤 **Decode Text** — Section titles scramble through random characters before resolving
- 📊 **Animated Skill Bars** — CSS transition-based bars triggered by IntersectionObserver
- 🖱️ **Custom Cursor** — Dot + ring + crosshair, rAF-driven at 60fps
- 📱 **Mobile Optimized** — Touch detection, gyro tilt, fast boot, hidden cursor elements
- 🔐 **Email Obfuscation** — JS-assembled to prevent scraping

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Structure** | HTML5, Semantic Markup |
| **Styling** | Vanilla CSS, Custom Properties |
| **Animation** | CSS transitions + rAF JavaScript |
| **Matrix Rain** | Canvas 2D API (throttled) |
| **Scroll** | IntersectionObserver, eased JS scroll |
| **Deployment** | GitHub Pages |

## 🎨 Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--g` | `#00ff41` | Primary matrix green |
| `--g2` | `#00cc33` | Secondary green |
| `--g3` | `#008f11` | Muted green |
| `--g4` | `#003b00` | Dark green |
| `--black` | `#020c02` | Background |

## 🚀 Performance

- Matrix rain capped at ~24fps to prevent CPU overload
- Custom cursor via single rAF loop (no CSS transitions)
- 3D tilt uses lerp-based rAF with auto-stop when settled
- IntersectionObserver for all scroll reveals (zero scroll listeners)
- No `backdrop-filter` — solid backgrounds only
- Scanlines as GPU-cached SVG tile, not repeating-gradient
- Passive event listeners throughout

---

<p align="center">
  <b>M<span style="color:#008f11">.</span>CHUNDARAN</b> — Designed & Developed by <a href="https://github.com/Mridul010">Mridul Chundaran</a>
</p>
