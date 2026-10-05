# SkillForge

The first React screen for SkillForge: a responsive dashboard with Dashboard and Courses navigation. Course cards are starter examples, not a confirmed catalog.

## Run locally

Don't open `index.html` by double-clicking it. SkillForge is a React app, so Vite must serve it over localhost for the browser to load its modules.

After the one-time dependency install, double-click `start-skillforge.bat` to start the local server and open the site. Keep the terminal window open while using the site; press `Ctrl+C` there to stop the server.

```sh
npm install
npm run dev -- --open
```

The current version uses React state to switch between the Dashboard and Courses views. It does not add a router or backend yet; those fit later steps in the agreed learning roadmap.
