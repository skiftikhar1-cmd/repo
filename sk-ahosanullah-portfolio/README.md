# SK Ahosanullah Portfolio

A clean, animated Next.js portfolio with a Supabase-backed contact form.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Supabase setup

1. Open your Supabase project.
2. Go to SQL Editor.
3. Run `supabase.sql`.
4. Copy your Project URL and Service Role Key into `.env.local`.

`.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...
```

Never expose `SUPABASE_SERVICE_ROLE_KEY` in client-side code or commit it to GitHub.

## Deploy to Vercel

1. Push this project to GitHub.
2. Go to https://vercel.com/new
3. Import the GitHub repository.
4. Add the two environment variables above in Vercel Project Settings → Environment Variables.
5. Deploy.

The contact form will then save messages to the Supabase `messages` table.
