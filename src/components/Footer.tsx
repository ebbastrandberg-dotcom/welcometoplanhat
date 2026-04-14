export default function Footer() {
  return (
    <footer className="bg-light-bg border-t border-light-divider py-8">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-light-muted text-xs">
        <span>&copy; 2026 Planhat Inc.</span>
        <span>The Agentic Customer Platform</span>
        <a
          href="https://planhat.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-light-text transition-colors"
        >
          planhat.com
        </a>
      </div>
    </footer>
  );
}
