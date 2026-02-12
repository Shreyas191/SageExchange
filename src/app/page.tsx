"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

const colorSwatches = [
  { name: "Deep Navy", hex: "#1A365D", className: "bg-navy", light: true },
  { name: "Navy Light", hex: "#2D4A7C", className: "bg-navy-light", light: true },
  { name: "Warm Gold", hex: "#D69E2E", className: "bg-gold", light: false },
  { name: "Sage Green", hex: "#38A169", className: "bg-sage", light: true },
  { name: "Cream", hex: "#FFFAF0", className: "bg-cream", light: false },
  { name: "Error Red", hex: "#E53E3E", className: "bg-error", light: true },
  { name: "Gray 900", hex: "#1A202C", className: "bg-gray-900", light: true },
  { name: "Gray 700", hex: "#2D3748", className: "bg-gray-700", light: true },
  { name: "Gray 500", hex: "#718096", className: "bg-gray-500", light: true },
  { name: "Gray 300", hex: "#CBD5E0", className: "bg-gray-300", light: false },
  { name: "Gray 100", hex: "#EDF2F7", className: "bg-gray-100", light: false },
  { name: "Gray 50", hex: "#F7FAFC", className: "bg-gray-50", light: false },
];

export default function DesignSystemPage() {
  return (
    <main className="max-w-[1200px] mx-auto px-lg py-3xl">
      {/* ===== HEADER ===== */}
      <header className="mb-3xl block w-full">
        <p className="font-sans font-semibold text-sm tracking-widest uppercase text-gold mb-sm">
          Design System v1.0
        </p>
        <h1 className="mb-md">Sage Exchange</h1>
        <p className="text-lg text-gray-700" style={{ maxWidth: "42rem" }}>
          Retire from work. Not from mattering. — A complete design system
          showcasing colors, typography, spacing, elevation, and all
          reusable components.
        </p>
      </header>

      {/* ===== COLORS ===== */}
      <section className="mb-3xl">
        <h2 className="mb-lg">Color Palette</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-md">
          {colorSwatches.map((c) => (
            <div key={c.name} className="flex flex-col">
              <div
                className={`${c.className} h-20 rounded-lg shadow-[var(--shadow-1)] border border-gray-200`}
              />
              <p className="font-sans font-semibold text-sm mt-sm text-gray-900">
                {c.name}
              </p>
              <p className="font-sans text-xs text-gray-500">{c.hex}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TYPOGRAPHY ===== */}
      <section className="mb-3xl">
        <h2 className="mb-lg">Typography</h2>
        <div className="bg-white rounded-lg p-lg shadow-[var(--shadow-1)] border border-gray-200 space-y-lg">
          <div>
            <p className="font-sans text-xs text-gray-500 uppercase tracking-wider mb-xs">
              H1 — Inter Bold 48px
            </p>
            <h1>The quick brown fox</h1>
          </div>
          <div>
            <p className="font-sans text-xs text-gray-500 uppercase tracking-wider mb-xs">
              H2 — Inter Bold 36px
            </p>
            <h2>The quick brown fox</h2>
          </div>
          <div>
            <p className="font-sans text-xs text-gray-500 uppercase tracking-wider mb-xs">
              H3 — Inter Bold 24px
            </p>
            <h3>The quick brown fox</h3>
          </div>
          <hr className="border-gray-200" />
          <div>
            <p className="font-sans text-xs text-gray-500 uppercase tracking-wider mb-xs">
              Body Large — Georgia 18px
            </p>
            <p className="text-lg leading-7">
              Sage Exchange connects retired professionals with students and
              entrepreneurs for affordable, meaningful mentorship sessions.
            </p>
          </div>
          <div>
            <p className="font-sans text-xs text-gray-500 uppercase tracking-wider mb-xs">
              Body — Georgia 16px
            </p>
            <p className="text-base leading-6">
              10,000 baby boomers retire daily with no outlet for their
              expertise. We&apos;re changing that, one session at a time.
            </p>
          </div>
          <div>
            <p className="font-sans text-xs text-gray-500 uppercase tracking-wider mb-xs">
              Body Small — 14px
            </p>
            <p className="text-sm leading-5 text-gray-700">
              Sessions start at $50/hr. Platform fee is 20%.
            </p>
          </div>
        </div>
      </section>

      {/* ===== ELEVATION ===== */}
      <section className="mb-3xl">
        <h2 className="mb-lg">Elevation &amp; Shadows</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-lg">
          {[1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className="bg-white rounded-lg p-lg flex flex-col items-center justify-center h-32 border border-gray-200"
              style={{ boxShadow: `var(--shadow-${level})` }}
            >
              <p className="font-sans font-semibold text-gray-900">
                Elevation {level}
              </p>
              <p className="font-sans text-xs text-gray-500">shadow-{level}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SPACING ===== */}
      <section className="mb-3xl">
        <h2 className="mb-lg">Spacing System (8px base)</h2>
        <div className="bg-white rounded-lg p-lg shadow-[var(--shadow-1)] border border-gray-200 space-y-md">
          {[
            { token: "xs", value: "4px" },
            { token: "sm", value: "8px" },
            { token: "md", value: "16px" },
            { token: "lg", value: "24px" },
            { token: "xl", value: "32px" },
            { token: "2xl", value: "48px" },
            { token: "3xl", value: "64px" },
          ].map((s) => (
            <div key={s.token} className="flex items-center gap-md">
              <p className="font-sans font-semibold text-sm w-12 text-gray-900">
                {s.token}
              </p>
              <div
                className="bg-gold/30 rounded-sm h-4"
                style={{ width: s.value }}
              />
              <p className="font-sans text-xs text-gray-500">{s.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== BORDER RADIUS ===== */}
      <section className="mb-3xl">
        <h2 className="mb-lg">Border Radius</h2>
        <div className="flex flex-wrap gap-lg items-end">
          {[
            { name: "Small (4px)", className: "rounded-sm" },
            { name: "Medium (8px)", className: "rounded-md" },
            { name: "Large (12px)", className: "rounded-lg" },
            { name: "XL (16px)", className: "rounded-xl" },
            { name: "Full", className: "rounded-full" },
          ].map((r) => (
            <div key={r.name} className="flex flex-col items-center gap-sm">
              <div
                className={`w-16 h-16 bg-navy ${r.className}`}
              />
              <p className="font-sans text-xs text-gray-500">{r.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== BUTTONS ===== */}
      <section className="mb-3xl">
        <h2 className="mb-lg">Buttons</h2>
        <div className="bg-white rounded-lg p-lg shadow-[var(--shadow-1)] border border-gray-200 space-y-xl">
          {/* Primary buttons */}
          <div>
            <p className="font-sans font-semibold text-sm text-gray-900 mb-md">
              Primary
            </p>
            <div className="flex flex-wrap items-center gap-md">
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="md">Book Session →</Button>
              <Button variant="primary" size="lg">Get Started</Button>
              <Button variant="primary" disabled>Disabled</Button>
            </div>
          </div>

          {/* Secondary buttons */}
          <div>
            <p className="font-sans font-semibold text-sm text-gray-900 mb-md">
              Secondary
            </p>
            <div className="flex flex-wrap items-center gap-md">
              <Button variant="secondary" size="sm">Cancel</Button>
              <Button variant="secondary" size="md">View Profile</Button>
              <Button variant="secondary" size="lg">Learn More</Button>
              <Button variant="secondary" disabled>Disabled</Button>
            </div>
          </div>

          {/* Ghost buttons */}
          <div>
            <p className="font-sans font-semibold text-sm text-gray-900 mb-md">
              Ghost
            </p>
            <div className="flex flex-wrap items-center gap-md">
              <Button variant="ghost" size="sm">Back</Button>
              <Button variant="ghost" size="md">View Details</Button>
              <Button variant="ghost" size="lg">Skip for Now</Button>
              <Button variant="ghost" disabled>Disabled</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FORM INPUTS ===== */}
      <section className="mb-3xl">
        <h2 className="mb-lg">Form Inputs</h2>
        <div className="bg-white rounded-lg p-lg shadow-[var(--shadow-1)] border border-gray-200">
          <div className="grid md:grid-cols-2 gap-lg">
            {/* Default */}
            <Input
              label="Full Name"
              placeholder="e.g. Margaret Williams"
              helperText="As it appears on your professional profile"
            />

            {/* Error */}
            <Input
              label="Email Address"
              placeholder="margaret@example.com"
              error="Please enter a valid email address"
              defaultValue="margaret@"
            />

            {/* Disabled */}
            <Input
              label="Account ID"
              value="SE-00142"
              disabled
              helperText="This field cannot be edited"
            />

            {/* With value */}
            <Input
              label="Hourly Rate ($)"
              type="number"
              placeholder="75"
              helperText="Suggested rate: $75/hr based on your experience"
            />
          </div>

          <hr className="border-gray-200 my-lg" />

          <div className="grid md:grid-cols-2 gap-lg">
            {/* Textarea default */}
            <Textarea
              label="Professional Bio"
              placeholder="Tell students about your career experience and what you can help with..."
              helperText="Minimum 50 characters recommended"
            />

            {/* Textarea error */}
            <Textarea
              label="Problem Description"
              placeholder="Describe what you need help with..."
              error="Description must be at least 20 characters"
              defaultValue="Need help"
            />
          </div>
        </div>
      </section>

      {/* ===== EXPERT CARD PREVIEW ===== */}
      <section className="mb-3xl">
        <h2 className="mb-lg">Expert Card Preview</h2>
        <div className="max-w-[360px]">
          <div
            className="bg-white rounded-lg p-lg border border-gray-200 transition-all duration-200 ease-out hover:shadow-[var(--shadow-2)] hover:scale-[1.02] hover:border-gold cursor-pointer"
            style={{ boxShadow: "var(--shadow-1)" }}
          >
            {/* Avatar + Name */}
            <div className="flex items-start gap-md mb-md">
              <div className="w-20 h-20 rounded-full border-3 border-gold bg-gray-200 flex-shrink-0 flex items-center justify-center">
                <span className="font-sans font-bold text-2xl text-gray-500">MW</span>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-xl text-gray-900 mb-xs">
                  Margaret Williams
                </h3>
                <p className="text-base text-gray-700">
                  Former FDA Medical Device Reviewer
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-sm text-sm text-gray-700 mb-md font-sans">
              <span>⭐ 4.9</span>
              <span className="text-gray-300">|</span>
              <span>(23 sessions)</span>
              <span className="text-gray-300">|</span>
              <span className="font-semibold">$85/hr</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-sm mb-lg">
              {["FDA Compliance", "Medical Devices", "Patents"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-gray-100 border border-gray-300 rounded-full text-sm font-sans text-gray-700"
                >
                  {tag}
                </span>
              ))}
              <span className="px-3 py-1.5 text-sm font-sans text-gray-500">
                +2 more
              </span>
            </div>

            {/* CTAs */}
            <div className="flex gap-md">
              <Button variant="primary" size="md" className="flex-1">
                Book Session →
              </Button>
              <Button variant="secondary" size="md" className="flex-1">
                View Profile
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-gray-200 pt-lg text-center">
        <p className="font-sans text-sm text-gray-500">
          Sage Exchange Design System v1.0 — Built with Next.js, Tailwind CSS &amp; shadcn/ui
        </p>
      </footer>
    </main>
  );
}
