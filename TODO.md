# 📋 Sage Exchange — MVP Todo List

> **Timeline:** 7-Day Development Sprint
> **Tagline:** *Retire from work. Not from mattering.*

---

## Day 1: Foundation & Setup

### Project Initialization
- [x] Initialize Next.js 14 project (App Router)
- [x] Configure Tailwind CSS
- [x] Install & configure shadcn/ui + Headless UI components
- [x] Set up Zustand for global state management
- [x] Set up React Query (TanStack Query) for server state
- [ ] Deploy initial skeleton to Vercel

### Design System Implementation
- [x] Define color tokens (Deep Navy `#1A365D`, Warm Gold `#D69E2E`, Sage Green `#38A169`, Cream `#FFFAF0`, full gray scale)
- [x] Set up typography: Inter (headings/UI) + Georgia (body text)
- [x] Implement 8px spacing system (xs → 3xl tokens)
- [x] Implement elevation/shadow system (4 levels)
- [x] Implement border-radius scale (4px → 9999px)
- [x] Create reusable button components (Primary, Secondary, Ghost)
- [x] Create form input components (text input, textarea, labels, error states)
- [x] Ensure all touch targets ≥ 44px, WCAG AA+ contrast ratios

### Database & Auth
- [ ] Set up Supabase project (PostgreSQL)
- [ ] Design & create database schema (users, experts, sessions, bookings, ratings, payments)
- [ ] Configure Supabase Auth (Google OAuth + email/password)
- [ ] Implement Row-Level Security policies
- [ ] Set up Supabase Storage bucket (avatars, session recordings)

### Expert Onboarding
- [ ] Build expert signup form (email, password, Google OAuth)
- [ ] Build expert profile creation page (name, bio, expertise tags, hourly rate, photo upload)
- [ ] Build manual availability input (no calendar integration)
- [ ] **CRITICAL:** Integrate VibeFlow rate suggestion workflow (job title + years experience → suggested rate)

---

## Day 2: Student Discovery & AI Matching

### Expert Browse Page
- [ ] Build expert card grid layout (responsive: 3-col desktop, 2-col tablet, 1-col mobile)
- [ ] Implement Expert Profile Card component per design spec:
  - [ ] 80px avatar with gold border
  - [ ] Name (Inter Semi-Bold 20px) + Professional Title (Georgia 16px)
  - [ ] Stats row (rating, session count, hourly rate)
  - [ ] Expertise tags (pill badges, max 3 visible + overflow)
  - [ ] CTA buttons: "Book Session →" (primary) + "View Profile" (secondary)
  - [ ] Hover state: elevation lift, scale(1.02), gold border, 200ms ease-out
  - [ ] Unavailable state: opacity 0.6, grayscale, badge

### Search & Discovery
- [ ] Implement basic keyword search (expertise tags)
- [ ] Build expert profile detail page (bio, rate, availability, booking button)
- [ ] **CRITICAL:** Integrate VibeFlow smart matching (student problem description → top 3 expert recommendations with reasoning)

---

## Day 3–4: Booking & Payment Flow

### Booking System
- [ ] Build booking form: date/time picker, duration selector (30 or 60 min), problem description textarea
- [ ] Display total cost breakdown (expert rate + 20% platform fee)
- [ ] Add consent checkbox for session recording
- [ ] Build expert dashboard: view/accept/decline incoming bookings

### Payments
- [ ] Set up Stripe Connect for marketplace payments
- [ ] Integrate Stripe Checkout for student payments
- [ ] Implement 80/20 revenue split (expert/platform)
- [ ] Build manual payout trigger in admin dashboard

### Email Notifications
- [ ] Set up Resend for transactional email
- [ ] Booking request email to expert
- [ ] Booking acceptance email to student (with video call link)
- [ ] Session reminder emails

---

## Day 5: Video Sessions

### Daily.co Integration
- [ ] Integrate Daily.co WebRTC API
- [ ] Generate unique room URLs per booked session
- [ ] Embed Daily.co video player in session page
- [ ] Implement session countdown timer
- [ ] Enable auto-recording (store in Supabase Storage)
- [ ] *(Nice-to-have)* ElevenLabs voice intro for expert profiles

---

## Day 6: Post-Session AI Features

### AI Session Summary
- [ ] Extract audio from recorded session
- [ ] *(Nice-to-have)* Transcribe using Deepgram real-time API
- [ ] Integrate Claude API to generate session summary from transcript
- [ ] Email summary + recording link to both participants (within 10 min)

### Rating System
- [ ] Build simple 1–5 star rating prompt
- [ ] Send rating email 1 hour after session ends
- [ ] Store ratings in Supabase

---

## Day 7: Polish, Admin & Demo Prep

### Expert Dashboard
- [ ] Show upcoming sessions
- [ ] Show total earnings
- [ ] Show payout status
- [ ] Manual payout request button

### UI Polish
- [ ] Responsive design fixes across all breakpoints (mobile/tablet/desktop)
- [ ] Implement skeleton loading states (pulsing gray rectangles)
- [ ] Implement modal entrance/exit animations (scale + fade, 250ms)
- [ ] Button press micro-interaction (scale 0.98, 100ms)
- [ ] Respect `prefers-reduced-motion` for all animations
- [ ] Hamburger menu + full-screen overlay for mobile nav

### Error Handling & Edge Cases
- [ ] Form validation & error states across all forms
- [ ] Empty states for search results, no bookings, etc.
- [ ] Loading spinners for async actions (18px, Warm Gold)

### Demo Prep
- [ ] Seed database with 5 demo expert profiles
- [ ] Create demo video showing full user journey
- [ ] Prepare 5-minute pitch deck
- [ ] Pre-record backup video session (risk mitigation for live demo failure)

---

## Nice-to-Have (If Time Permits)
- [ ] LinkedIn profile import for expert onboarding
- [ ] Live transcription during session (Deepgram)
- [ ] AI-extracted action items from session
- [ ] Profile verification badge
- [ ] ElevenLabs AI-generated session recap narrations

## Out of Scope (V2+)
- Google Calendar integration
- Group sessions
- Mobile apps (iOS/Android)
- Advanced search filters / Algolia
- Subscription pricing model

---

## Monitoring & Observability (Post-MVP)
- [ ] Set up Sentry for production error tracking
- [ ] Set up PostHog for product analytics & session replay
- [ ] Configure Vercel Cron Jobs / Inngest for background tasks
