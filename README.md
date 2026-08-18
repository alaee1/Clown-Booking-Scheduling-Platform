 # 🤡 Clown Booking & Scheduling Platform

A booking and scheduling web app for a professional clown performer, featuring a public-facing booking page and a secure admin dashboard for managing requests.

Built with **Next.js 15 (App Router)**, **Tailwind CSS 4**, **Supabase** (Postgres + Auth), and **Resend** (email notifications).

---

## Features

- 🎪 Public booking page with a validated, animated booking form
- 🔐 Secure admin dashboard (email/password auth via Supabase)
- ✅ Accept / cancel workflow for pending bookings
- 📧 Automated email notifications on status change (via Resend + React Email)
- 🎨 Responsive, glassmorphic circus-themed UI with dark mode support

---

## Tech Stack

| Layer         | Technology                          |
|---------------|--------------------------------------|
| Framework     | Next.js 15 (App Router)             |
| Styling       | Tailwind CSS 4                      |
| Database/Auth | Supabase (PostgreSQL + Auth)        |
| Email         | Resend + React Email                |
| Language      | TypeScript                          |

---

## Getting Started

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd clown-booking
npm install
```

### 2. Set Up Supabase

1. Create a project at [supabase.com](https://supabase.com).
2. Go to **Project Settings → API** and copy your project URL and anon key.
3. Open the **SQL Editor** in Supabase and run the migration in `supabase/schema.sql` to create the `bookings` table and Row Level Security (RLS) policies.
4. Go to **Authentication → Users → Add User** and manually create an admin account (email + password). This account will be used to log in to `/admin/dashboard`.

### 3. Set Up Resend

1. Create an account at [resend.com](https://resend.com).
2. Grab your API key from the dashboard.
3. Either verify your own sending domain, or use the sandbox address `onboarding@resend.dev` for local testing.

### 4. Configure Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=onboarding@resend.dev
```

### 5. Run Locally

```bash
npm run dev
```

Visit `http://localhost:3000` for the public booking page, and `http://localhost:3000/admin/login` to sign in as admin.

---

## Project Structure

```
clown-booking/
├── supabase/
│   └── schema.sql              # Database schema + RLS policies
├── src/
│   ├── lib/
│   │   ├── supabase/           # Browser, server, and middleware Supabase clients
│   │   └── types.ts            # Shared TypeScript types
│   ├── emails/
│   │   └── BookingStatusEmail.tsx
│   ├── components/
│   │   ├── BookingForm.tsx
│   │   ├── BookingCard.tsx
│   │   ├── Navbar.tsx
│   │   └── SuccessModal.tsx
│   ├── app/
│   │   ├── page.tsx             # Public booking page
│   │   ├── admin/
│   │   │   ├── login/page.tsx
│   │   │   └── dashboard/page.tsx
│   │   └── api/
│   │       └── update-booking/route.ts
│   └── middleware.ts            # Protects /admin/dashboard
```

---

## How It Works

1. **Client books an event** — fills out the public form (name, email, date, time, event details). This inserts a row into `bookings` with status `pending`.
2. **Admin reviews requests** — logs in at `/admin/login`, sees all bookings on the dashboard, grouped/filterable by status.
3. **Admin accepts or cancels** — clicking a button calls `/api/update-booking`, which verifies the admin session, updates the row, and triggers a status email to the client via Resend.

---

## Deployment

This app is designed to deploy cleanly on **Vercel**:

1. Push the repo to GitHub.
2. Import the project into Vercel.
3. Add the same environment variables from `.env.local` to your Vercel project settings.
4. Deploy.

---

## Known Limitations / Roadmap

- No double-booking protection yet — consider a uniqueness constraint on `(event_date, event_time)` for accepted bookings.
- No spam protection on the public form (consider adding a CAPTCHA or honeypot field).
- No immediate "request received" email to the client — only status-change emails are sent currently.
- No timezone handling — all times are assumed to be in the performer's local timezone.
- No reschedule flow for existing bookings.

---

## License

Private project — all rights reserved.
