Place partner logos here so the site can be hosted 100% on GitHub Pages (no external image hotlinks).

Expected filenames (used by `index.html`):
- `samsung.png`
- `nvidia.svg`
- `herman-miller.png`
- `logitech.svg`

Tip (Windows PowerShell download examples):
1) Samsung (PNG)
   - `Invoke-WebRequest -Uri "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/640px-Samsung_Logo.svg.png" -OutFile "assets/logos/samsung.png"`
2) NVIDIA (SVG)
   - `Invoke-WebRequest -Uri "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg" -OutFile "assets/logos/nvidia.svg"`
3) Herman Miller (SVG)
   - `Invoke-WebRequest -Uri "https://upload.wikimedia.org/wikipedia/commons/d/d3/Herman_Miller_logo.svg" -OutFile "assets/logos/herman-miller.svg"`

If you download an SVG but want a PNG (or your download ends with `.svg.png`), rename it to match the expected names above.
