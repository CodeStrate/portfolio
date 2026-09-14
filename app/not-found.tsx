import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-blue">ERROR / 404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text md:text-6xl">
        This page drifted off-graph.
      </h1>
      <Link
        href="/"
        className="mt-8 border border-blue bg-blue px-6 py-3 font-mono text-xs font-medium uppercase tracking-wider text-crust transition-colors hover:bg-transparent hover:text-blue"
      >
        Back to Home
      </Link>
    </div>
  );
}
