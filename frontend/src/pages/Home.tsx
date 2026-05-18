export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a1628] flex items-start justify-center px-4 pt-10">
      <div className="w-full max-w-2xl text-center">
        <a
          href="https://academy.endgameenhancements.com"
          aria-label="Go to Bio-Sync Academy"
          className="block"
        >
          <img
            src="/images/hero-logo.png"
            alt="Bio-Sync Academy"
            className="w-full h-auto object-contain"
          />
        </a>
        <p className="mt-6 text-sm text-blue-200">
          Click the logo to go to Bio-Sync Academy
        </p>
      </div>
    </div>
  );
}
