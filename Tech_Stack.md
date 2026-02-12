# 🚀 Tech Stack

## 🖥️ Frontend

### Framework: Next.js 14 (App Router)

-   Full-stack framework (frontend + API routes)
-   Server-side rendering for SEO (critical for expert discovery)
-   Built-in API routes eliminate need for separate backend
-   Excellent performance with React Server Components
-   Easy deployment on Vercel (zero config)
-   File-based routing saves time

### Styling: Tailwind CSS

-   Rapid prototyping (build cards in minutes)
-   Responsive utilities built-in
-   No CSS file management
-   Smaller bundle sizes than custom CSS
-   Great for component-based designs

### State Management: Zustand + React Query (TanStack Query)

-   Zustand: Simple, lightweight global state (auth, UI)
-   React Query: Server state management (automatic caching, refetching)
-   Avoids Redux complexity
-   Perfect for API-heavy apps

### UI Components: shadcn/ui + Headless UI

-   Copy-paste components (you own the code)
-   Built on Radix UI (accessible by default)
-   Customizable with Tailwind
-   No library lock-in

------------------------------------------------------------------------

## 🗄️ Backend / Database

### Database: Supabase (PostgreSQL)

-   Managed Postgres with built-in auth
-   Real-time subscriptions (live session updates)
-   Row-level security (data protection)
-   Storage included (session recordings, avatars)
-   Free tier is generous for MVP
-   Easy to scale

### Alternative: Postgres on Railway/Render + Prisma ORM

-   Full control over database
-   Prisma: Type-safe queries, excellent DX
-   More setup than Supabase

------------------------------------------------------------------------

## 🔐 Authentication

### Supabase Auth OR Clerk

-   Google OAuth + Email/Password out of box
-   Session management handled
-   Clerk: Better UX, pre-built components
-   Supabase: Free, integrated with database

------------------------------------------------------------------------

## 🤖 AI / ML Services

### LLM: Anthropic Claude API

-   Best-in-class for summarization (session summaries)
-   Excellent at structured output (action items)
-   Long context window (entire session transcripts)
-   Reliable instruction following

### Transcription: Deepgram

-   Real-time streaming transcription
-   High accuracy
-   Fast and affordable

### Embeddings: OpenAI (text-embedding-3-small)

-   For semantic search (expert matching)
-   Fast and cost-effective
-   Scales well

### Budget Alternatives

-   Whisper API (OpenAI): Cheaper transcription but not real-time
-   Sentence Transformers: Free embeddings but requires infrastructure

------------------------------------------------------------------------

## 🎥 Video Infrastructure

### Daily.co

-   WebRTC as a service
-   Built-in recording
-   Excellent SDK and docs
-   Free tier available
-   Handles NAT traversal automatically

### Alternatives

-   Agora.io
-   100ms
-   Building custom WebRTC (not recommended)

------------------------------------------------------------------------

## 💳 Payments

### Stripe Connect

-   Marketplace-ready payments
-   Handles expert payouts automatically
-   Compliance and tax handling built-in
-   Excellent documentation

------------------------------------------------------------------------

## 🔎 Search

### Algolia

-   Fast typo-tolerant search
-   Instant results
-   Faceted filtering
-   Free tier available

### MVP Alternative

-   PostgreSQL full-text search
-   Upgrade to Algolia when needed

------------------------------------------------------------------------

## 📦 File Storage

### Supabase Storage OR Cloudflare R2

-   Supabase: Integrated CDN
-   R2: Cheaper at scale
-   S3-compatible APIs

------------------------------------------------------------------------

## 📧 Email

### Resend

-   Modern DX with React Email templates
-   Reliable transactional email
-   Affordable pricing

### Alternative

-   AWS SES (cheapest at scale, harder setup)

------------------------------------------------------------------------

## 🚀 Hosting & Deployment

### Vercel

-   Zero-config deployment
-   Edge network
-   Preview deployments per PR
-   Free tier available
-   Automatic HTTPS

### Alternatives

-   Railway
-   Netlify

------------------------------------------------------------------------

## 📊 Monitoring & Analytics

### Sentry

-   Production error tracking
-   Source maps for debugging
-   Free tier for MVP

### PostHog

-   Product analytics
-   Session replay
-   Feature flags
-   Open-source option

------------------------------------------------------------------------

## ⏱️ Background Jobs

### Vercel Cron Jobs

-   Built-in scheduled tasks
-   Serverless

### Inngest

-   Workflow orchestration
-   Retries and scheduling built-in
-   No queue management required

### Alternative

-   BullMQ + Redis

------------------------------------------------------------------------

## 🏗️ Complete Stack Architecture

    FRONTEND (Next.js)
      - React 18 + Server Components
      - Tailwind CSS
      - shadcn/ui
      - Zustand + React Query
            ↓
    API LAYER (Next.js Routes)
      - Server Actions
      - Edge Functions
            ↓
    SERVICES & INTEGRATIONS
      - Supabase (DB + Auth + Storage)
      - Stripe Connect
      - Daily.co
      - Claude API
      - Deepgram
      - OpenAI Embeddings
      - Algolia
      - Resend
            ↓
    INFRASTRUCTURE & MONITORING
      - Vercel
      - Sentry
      - PostHog
