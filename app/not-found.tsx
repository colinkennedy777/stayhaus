import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center pt-20">
      <div className="container-page text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="font-display text-4xl sm:text-5xl text-ink">This stay doesn&rsquo;t exist.</h1>
        <p className="mt-5 text-ink-soft/70 max-w-md mx-auto">
          The page you're looking for may have moved. Let's get you back on track.
        </p>
        <div className="mt-9 flex justify-center gap-4">
          <Button href="/">Back Home</Button>
          <Button href="/stays" variant="secondary">Browse Stays</Button>
        </div>
      </div>
    </section>
  );
}
