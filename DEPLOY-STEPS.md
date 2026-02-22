# Put Bedtime Stories on GitHub and Vercel

Run these steps in **Terminal** (or Cursor’s terminal). Replace `YOUR_GITHUB_USERNAME` with your real GitHub username.

---

## Part 1: GitHub

### Step 1 – Create the repo on GitHub (in your browser)

1. Open **https://github.com/new**
2. **Repository name:** `bedtime-stories` (or any name you like)
3. Leave **Public** selected
4. **Do not** check “Add a README” (you already have one)
5. Click **Create repository**

### Step 2 – Push your code from Terminal

Open **Terminal** and run these commands one by one (paste and press Enter):

```bash
cd /Users/subspetmac/bedtime-stories
```

```bash
git init
```

```bash
git add .
```

```bash
git commit -m "Bedtime Stories app"
```

```bash
git branch -M main
```

Now add your GitHub repo:

```bash
git remote add origin https://github.com/subramanians/bedtime-stories.git
```

Then push:

```bash
git push -u origin main
```

You may be asked to sign in to GitHub (browser or password/token). Do that, then run `git push` again if it didn’t succeed the first time.

When it works, your code is on GitHub.

---

## Part 2: Vercel

### Step 1 – Sign in to Vercel

1. Open **https://vercel.com**
2. Click **Sign Up** or **Log In**
3. Choose **Continue with GitHub** and approve so Vercel can see your repos

### Step 2 – Import the project

1. Click **Add New…** → **Project**
2. Find **bedtime-stories** in the list and click **Import** next to it
3. On the next screen, **before** clicking Deploy, open **Environment Variables**
4. Add one variable:
   - **Name:** `OPENAI_API_KEY`
   - **Value:** your OpenAI API key (create a new one at https://platform.openai.com/api-keys for production)
5. Click **Deploy**
6. Wait for the build to finish. You’ll get a URL like `https://bedtime-stories-xxxx.vercel.app`

That URL is your live app. You can share it or add a custom domain later in **Project → Settings → Domains**.

---

## Quick reference

| Step              | Where        | What to do                                      |
|-------------------|-------------|--------------------------------------------------|
| Create repo       | github.com  | New repo, name `bedtime-stories`, no README      |
| Push code         | Terminal    | `git init`, `add`, `commit`, `remote`, `push`   |
| Deploy            | vercel.com  | Import repo, add `OPENAI_API_KEY`, Deploy       |
