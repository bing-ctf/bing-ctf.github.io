# Binghamton CTF Club Website (`bing-ctf.github.io`)

The official website for **Binghamton CTF Club** and the **Binghamton University MITRE eCTF Team** at the Thomas J. Watson College of Engineering and Applied Science, School of Computing.

**Live URL**: [https://bing-ctf.github.io/](https://bing-ctf.github.io/)

---

## Highlights

- **MITRE eCTF Recognition**: Ranked **#13 globally** out of 114 university teams in 2026, and **#1 in New York State** (only NY institution in the global Top 20).
- **Design Language**: Minimalist, hyper-refined light mode aesthetic inspired by [`pratikkamble.com`](https://pratikkamble.com) with Binghamton University Green (`#005A43`) branding and collegiate human touch.
- **Features**:
  - Pure, clean light mode interface with optimized vertical density and minimal scrolling.
  - Multi-page navigation (`Home`, `Team`, `eCTF`, `Sponsors`, `Join Us`) with Instagram-style mobile bottom navigation bar.
  - Structured sponsorship prospectus (Bronze $1,000, Silver $2,000, Gold $3,000; separating student funding needs vs. corporate return benefits).
  - High-resolution team photography, Past Squads side-by-side gallery, and Fab Lab meeting highlights.
  - One-click copyable email buttons across team and sponsorship pages.
  - One-click Discord invite (`https://discord.gg/Rn5ER6Tw`) with embedded scan QR code.
  - One-click GitHub organization link (`https://github.com/bing-ctf`).

---

## Directory Structure

```
bing-ctf.github.io/
├── index.html                   # Main Club Portal (Hero with Club Logo, Duo Ranks #13 & #1 NY, Focus Tracks, Meetings)
├── ectf.html                    # MITRE eCTF (Rank Progression, Past Squads Side-by-Side Photos)
├── sponsors.html                # Club Sponsorship (What Funds Support vs. What Sponsors Receive, Bronze/Silver/Gold)
├── team.html                    # Leadership & Team (Advisor Dr. Prakash, Co-Captains Samruddhi & Pratik, Student Testimonials)
├── join.html                    # New Member Guide (3-Step Onboarding, Discord QR, 4-Box Single-Row Courses & FAQ)
├── README.md                    # Repository documentation
└── assets/
    ├── css/
    │   ├── style.css            # Light mode design system tokens, typography, layout, buttons
    │   └── ectf.css             # Specialty styles for progression, tiers, and team
    ├── js/
    │   └── main.js              # Mobile navigation drawer, active link highlighting, copy utility
    └── images/
        ├── logo.png             # Canonical club logo
        ├── aravind-prakash.jpg  # Faculty advisor Dr. Aravind Prakash
        ├── samruddhi-deshpande.jpg # Co-captain Samruddhi Deshpande
        ├── pratik-kamble.jpg    # Co-captain Pratik Kamble
        ├── ectf-team-2026.jpg   # eCTF 2026 squad in the lab
        ├── ectf-team-2025.jpg   # eCTF 2025 inaugural team
        └── discord-qr.png       # Discord QR code for onboarding
```

---

## Local Development & Preview

This site is built with pure, modern vanilla HTML5, CSS3, and JavaScript: no build steps, bundlers, or npm installations are required.

To preview the website locally:

```bash
# Start a local HTTP server
python3 -m http.server 8080
```

Then visit [http://localhost:8080](http://localhost:8080) in your browser.

---

## Deployment on GitHub Pages

1. Commit and push the repository to the `main` branch of `bing-ctf/bing-ctf.github.io`.
2. In GitHub: go to **Settings** &rarr; **Pages**.
3. Under **Build and deployment**, ensure **Source** is set to **Deploy from a branch**, Branch is `main`, and Folder is `/ (root)`.
4. Your site will automatically go live at `https://bing-ctf.github.io/`.

---

## Contact & Inquiries

- **Co-Captain**: Samruddhi Deshpande (`sdeshp11@binghamton.edu`)
- **Co-Captain**: Pratik Kamble (`pkamble1@binghamton.edu` · [pratikkamble.com](https://pratikkamble.com))
- **Faculty Advisor**: Dr. Aravind Prakash (`aprakash@binghamton.edu` · [aravindprakash.com](https://www.aravindprakash.com))
- **Weekly Meetings**: Every Thursday at 5:00 PM in the Fab Lab · Engineering Building
- **Discord**: [discord.gg/Rn5ER6Tw](https://discord.gg/Rn5ER6Tw)
- **GitHub**: [github.com/bing-ctf](https://github.com/bing-ctf)
