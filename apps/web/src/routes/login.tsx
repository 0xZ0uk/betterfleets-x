import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import SignInForm from '@/components/sign-in-form';
import SignUpForm from '@/components/sign-up-form';

export const Route = createFileRoute('/login')({
  component: RouteComponent,
});

function RouteComponent() {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <div className="relative mx-auto flex h-full w-full max-w-6xl items-stretch gap-6 md:py-8">
      {/* Background decorative gradients */}
      <div aria-hidden className="-z-10 pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] h-72 w-72 rounded-full bg-[radial-gradient(ellipse_at_center,theme(colors.primary/30),transparent_60%)] blur-2xl" />
        <div className="absolute right-[-10%] bottom-[-10%] h-80 w-80 rounded-full bg-[radial-gradient(ellipse_at_center,oklch(0.6_0.18_264/0.25),transparent_60%)] blur-2xl" />
      </div>

      {/* Left hero / brand panel */}
      <div className="hidden rounded-xl border bg-card/60 p-8 backdrop-blur supports-[backdrop-filter]:bg-card/60 md:flex md:w-1/2 md:flex-col md:justify-between">
        <div className="space-y-4">
          <span className="inline-block rounded-full border px-3 py-1 text-muted-foreground text-xs">
            BetterFleets
          </span>
          <h1 className="bg-gradient-to-br from-primary to-[oklch(0.6_0.18_264)] bg-clip-text font-extrabold text-4xl text-transparent leading-tight">
            Smarter fleet management starts here.
          </h1>
          <p className="text-base text-muted-foreground">
            Join thousands of operators leveraging real-time insights,
            predictive maintenance, and efficient routing.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="rounded-lg border p-4">
            <div className="font-semibold text-2xl">99.9%</div>
            <div className="text-muted-foreground text-xs">Uptime</div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="font-semibold text-2xl">24/7</div>
            <div className="text-muted-foreground text-xs">Support</div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="font-semibold text-2xl">SOC2</div>
            <div className="text-muted-foreground text-xs">Security</div>
          </div>
        </div>
      </div>

      {/* Right authentication card */}
      <div className="flex w-full items-center justify-center md:w-1/2">
        {showSignIn ? (
          <SignInForm onSwitchToSignUp={() => setShowSignIn(false)} />
        ) : (
          <SignUpForm onSwitchToSignIn={() => setShowSignIn(true)} />
        )}
      </div>
    </div>
  );
}
