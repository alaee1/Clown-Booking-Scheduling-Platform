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

-
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


## License

Private project — all rights reserved.
