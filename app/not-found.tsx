import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-overlay1">404</p>
      <h1 className="mt-4 font-serif text-4xl italic text-text md:text-5xl">
        This page drifted off-graph.
      </h1>
      <Link
        href="/"
        className="mt-8 rounded-full border border-surface2 px-6 py-2.5 text-sm font-medium text-text transition-colors hover:border-blue/50 hover:text-blue"
      >
        Back to Home
      </Link>
    </div>
  );
}
