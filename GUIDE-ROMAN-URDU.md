# Primeloop — Aapki Blog Website Ka Complete Guide

## 1. Niche Kyun Choose Kiya
**AI Tools & Productivity** niche choose kiya gaya hai kyunke:
- 2025-2026 mein sabse fast-growing search category yehi hai (AI tools reviews, comparisons)
- CPC (per-click earning) tech/software niche mein average se zyada hoti hai
- Content easily scale hoti hai — har naya AI tool = ek naya post
- Evergreen bhi hai (log hamesha "best AI tool for X" search karte rahenge)

Content **English** mein rakha gaya hai kyunke AdSense ki earning English/global traffic se kaheen zyada hoti hai (Pakistan/India traffic ki CPC bohat kum hoti hai — $0.01-0.05, jabke US/UK traffic ki CPC $0.50-3+ ho sakti hai). Agar aap Urdu audience target karna chahte hain, bata dein, alag version bana denge.

## 2. Website Mein Kya Kya Hai
- `index.html` — Homepage (hero, featured post, blog grid, newsletter)
- `posts/` — 3 complete sample articles (real, SEO-optimized content)
- `about.html`, `contact.html` — Trust pages
- `privacy.html`, `terms.html`, `disclaimer.html` — **AdSense approval ke liye zaroori**
- `category-ai-tools.html`, `category-productivity.html` — Category pages
- `sitemap.xml`, `robots.txt` — Google ko site samjhane ke liye
- `style.css` — Poora design system (dark theme, amber/mint accents, Fraunces+Inter fonts)

## 3. Deploy Kaise Karein (Free, 10 minutes)
Website static HTML hai, isliye ye options fast aur bilkul FREE hain. Main aapke Vercel account mein direct login nahi kar sakta (mera access sirf is chat tak hai), lekin `vercel.json` already ready hai — bas neeche wala tareeqa follow karein:

### Option A — Vercel Dashboard (bina coding, sabse aasan)
1. `primeloop.zip` download karein aur apne computer per unzip kar lein
2. [vercel.com](https://vercel.com) per free account banayein (GitHub/Google se sign up ho jata hai)
3. Sabse pehle apna unzip kiya hua `primeloop` folder GitHub per upload karein (GitHub.com → New Repository → "uploading an existing file" wala link use karein, drag-drop se sab files daal dein)
4. Vercel dashboard mein **"Add New" → "Project"** → us GitHub repo ko **Import** karein → "Deploy" per click karein
5. 30-60 second mein live link mil jayega (e.g. `primeloop.vercel.app`)

### Option B — Vercel CLI (agar computer per Node.js installed hai)
Terminal/CMD kholein aur ye commands chalayein:
```
npm i -g vercel
cd primeloop
vercel login
vercel --prod
```
Ye seedha aapke Vercel account se login karke deploy kar dega — GitHub ki zaroorat nahi.

### Option C — Netlify / Cloudflare Pages (zero setup)
1. **Netlify**: netlify.com → "Deploy manually" → poora `primeloop` folder seedha drag-drop karein → live ho jayega
2. **Cloudflare Pages**: cloudflare.com/pages — same drag-drop process, aur bhi fast loading

Apna domain (e.g. primeloop.com) GoDaddy/Namecheap se kharidein (~$10/year) aur Netlify/Cloudflare mein connect kar dein — professional look ke liye domain zaroori hai.

## 4. Zaroori Changes Deploy Karne Se Pehle
- Har file mein `primeloop.example` ko apne asal domain se replace karein
- `privacy.html` mein apna real business name/country dalein
- `contact.html` mein real email address dalein
- Google Analytics add karein (free, traffic track karne ke liye)
- Fraunces/Inter fonts already Google Fonts se load ho rahi hain — internet chahiye

## 5. Jaldi Rank Karne Ke Liye (SEO Checklist)
1. **Google Search Console** mein site verify karein aur `sitemap.xml` submit karein
2. Har naya post likhte waqt: keyword research karein (Ubersuggest, Google Keyword Planner - free tools)
3. Hafte mein kam az kam 2-3 naye posts publish karein — consistency ranking ke liye sabse zyada important hai
4. Har post 1200+ words ka rakhein, real personal experience/testing ka andaz rakhein (Google "helpful content" ko prefer karta hai)
5. Internal linking karein — har naye post mein purane posts ka link dein (jaisa is site mein "Related posts" section hai)
6. Backlinks: Reddit, Quora, relevant Facebook groups mein apne posts share karein (spam na karein, genuinely helpful jawab dein)
7. Page speed fast rakhein — ye site already lightweight/static hai isliye Core Web Vitals acha score karegi

## 6. Google AdSense Approval Ke Liye
AdSense approve karne se pehle Google ye cheezein check karta hai:
- Kam az kam 15-20 quality posts (sirf 3 se approval mushkil hai — pehle 3-4 hafte content likhein)
- Privacy Policy, Terms, Disclaimer, About, Contact pages (✅ already ban chuke hain)
- Original content (copy-paste bilkul nahi, Google isko turant pakar leta hai)
- Domain kam az kam kuch weeks purana ho aur thora sa organic traffic ho

**Process:**
1. adsense.google.com per apply karein apne domain ke sath
2. Approval milne ke baad AdSense se "Auto ads" code milega
3. Wo code har HTML file ke `<head>` mein paste kar dein (ya `<!-- Ad Unit -->` wale dashed boxes ki jagah manual ad code paste karein)

## 7. Ad Slots Kahan Hain
Site mein already ye jagah reserved hain (dashed border boxes) jahan AdSense ka code paste karna hai:
- Homepage per top leaderboard + in-feed ad
- Har article ke top, middle (in-article), aur ek rectangle ad
Ye positions Google ke policies ke mutabiq hain (content ke sath overload nahi).

## 8. Content Plan (Pehle 30 Din)
- Week 1-2: 6-8 "best AI tool for X" posts (low competition keywords)
- Week 3: 2-3 comparison posts (X vs Y vs Z — high search volume)
- Week 4: 2-3 how-to/guide posts + newsletter promotion shuru karein

Agar chahen to main aapke liye agle 10 blog posts ka poora content (isi design mein) likh sakta hoon — bas topics bata dein ya keh dein "aap khud choose karein".
