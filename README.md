# Bedtime Stories

A small web app where users can create personalized bedtime stories by choosing age, gender, theme, level of humour, level of calmness, length, and optional character name or extra ideas.

## Features

- **Age** (1–12) – story language and complexity
- **Main character** – Any / Boy / Girl / Non-binary
- **Character name** (optional) – e.g. Luna, Max
- **Theme** – Adventure, Animals, Space, Magic, Dragons, etc.
- **Level of humour** (0–10) – from very gentle to playful
- **Level of calmness** (0–10) – from mild excitement to very soothing
- **Story length** – short, medium, or long
- **Extra ideas** (optional) – e.g. “Include a friendly dragon”

Stories are generated via the OpenAI API when `OPENAI_API_KEY` is set. Without it, the app shows a short demo story so you can try the flow.

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. (Optional) Add your OpenAI API key:

   ```bash
   cp .env.example .env.local
   # Edit .env.local and set OPENAI_API_KEY=sk-...
   ```

3. Run the dev server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

## Build & deploy

- **Build:** `npm run build`
- **Start:** `npm start`

### Publish with Vercel (recommended)

1. **Push your code to GitHub** (if you haven’t already):
   ```bash
   cd /Users/subspetmac/bedtime-stories
   git init
   git add .
   git commit -m "Bedtime Stories app"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/bedtime-stories.git
   git push -u origin main
   ```
   Create the repo at [github.com/new](https://github.com/new) first, then use your repo URL.

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign in (GitHub is easiest).
   - Click **Add New… → Project** and import your `bedtime-stories` repo.
   - Before deploying, open **Settings → Environment Variables** and add:
     - **Name:** `OPENAI_API_KEY`
     - **Value:** your OpenAI API key (use a new key for production; don’t paste the one from chat).
   - Click **Deploy**. Vercel will build and give you a URL like `bedtime-stories.vercel.app`.

3. **Optional:** In the project settings you can set a custom domain.

Your site will auto-update when you push to `main`.

## Tech

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
