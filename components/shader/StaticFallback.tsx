export function StaticFallback() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10"
      style={{
        background:
          "radial-gradient(circle at 30% 20%, var(--color-surface0) 0%, var(--color-base) 45%, var(--color-crust) 100%)",
      }}
    />
  );
}
