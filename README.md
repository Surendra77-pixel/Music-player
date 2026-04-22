# Music Player

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vue.js](https://img.shields.io/badge/Vue.js_2-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)

A lightweight, browser-based music player with a clean UI, smooth album art transitions, and full playback controls — no build tools or dependencies required.

[View Demo](https://surendra77-pixel.github.io/Music-player) · [Report Bug](https://github.com/Surendra77-pixel/Music-player/issues) · [Request Feature](https://github.com/Surendra77-pixel/Music-player/issues)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Adding Your Own Music](#adding-your-own-music)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Music Player is a front-end web application that provides a fully functional audio playback experience in the browser. Built with Vue.js 2 for reactive state management, it delivers smooth transitions, real-time progress tracking, and an intuitive interface — all contained within a single HTML file with no backend or build pipeline required.

---

## Features

- **Playback Controls** — Play, pause, skip to the next or previous track
- **Interactive Progress Bar** — Click anywhere to seek to a specific position
- **Live Timestamps** — Displays elapsed time and total track duration in real time
- **Album Art Transitions** — Animated cover art that updates with each track
- **Favourites** — Mark and toggle tracks as favourites with a heart icon
- **External Source Link** — Opens the original track source in a new tab
- **Responsive Layout** — Adapts cleanly to both desktop and mobile viewports

---

## Project Structure

```
Music-player/
│
├── index.html          # Application shell, player markup, and inline SVG icons
├── style.css           # UI styling, layout, and transition animations
├── script.js           # Vue.js instance — track data, playback logic, and state
│
├── images/             # Album cover artwork (JPG/PNG)
└── music/              # Audio track files (MP3/OGG)
```

---

## Getting Started

No installation or package manager is needed. Follow the steps below to run the project locally.

### Prerequisites

Any modern web browser (Chrome, Firefox, Safari, Edge).

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Surendra77-pixel/Music-player.git
cd Music-player
```

**2. Launch the application**

Open `index.html` directly in your browser, or serve it via a local development server for proper audio file loading:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .
```

Then navigate to `http://localhost:8000` in your browser.

> **Note:** Opening the file directly via `file://` may block audio loading in some browsers due to CORS restrictions. A local server is recommended.

---

## Adding Your Own Music

1. Place your audio file (`.mp3` or `.ogg`) inside the `music/` folder.
2. Place the corresponding album artwork inside the `images/` folder.
3. Open `script.js` and add a new entry to the `tracks` array:

```javascript
{
  name: "Track Title",
  artist: "Artist Name",
  cover: "./images/your-cover.jpg",
  source: "./music/your-track.mp3",
  url: "https://source-url.com",
  favorited: false
}
```

Save the file and refresh your browser — the new track will appear in the playlist automatically.

---

## Technologies Used

| Technology | Role |
|---|---|
| HTML5 | Application structure and embedded SVG icon definitions |
| CSS3 | Styling, responsive layout, and animation |
| JavaScript (ES6) | Core scripting and browser Audio API integration |
| Vue.js 2 | Reactive data binding and component-driven UI |

---

## Contributing

Contributions are welcome and appreciated. To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Open a Pull Request

Please ensure your code is clean, well-commented, and consistent with the existing style.

---

## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for details.

---

<div align="center">

Made by [Surendra Manthri](https://github.com/Surendra77-pixel)

</div>
