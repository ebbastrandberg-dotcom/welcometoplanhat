export default function Footer() {
  return (
    <footer className="border-t border-divider py-8">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-muted text-xs">
        <span>&copy; 2026 Planhat Inc.</span>
        <span>The Agentic Customer Platform</span>
        <a
          href="https://planhat.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          planhat.com
        </a>
      </div>
    </footer>
  );
}
