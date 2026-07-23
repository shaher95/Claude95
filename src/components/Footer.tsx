import Logo from "./Logo";

const columns = [
  {
    heading: "Product",
    links: ["Platforms", "Features", "How it works", "Pricing", "FAQ"],
    hrefs: ["#platforms", "#features", "#how-it-works", "#pricing", "#faq"],
  },
  {
    heading: "Company",
    links: ["About", "Careers", "Blog", "Press"],
    hrefs: ["#", "#", "#", "#"],
  },
  {
    heading: "Resources",
    links: ["Help center", "API docs", "Automation templates", "Status"],
    hrefs: ["#", "#", "#", "#"],
  },
  {
    heading: "Legal",
    links: ["Privacy policy", "Terms of service", "Security", "DPA"],
    hrefs: ["#", "#", "#", "#"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              The B2B platform for automating paid social across Meta, TikTok,
              and Snapchat.
            </p>
          </div>

          {columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-sm font-semibold">{column.heading}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {column.links.map((link, i) => (
                  <li key={link}>
                    <a
                      href={column.hrefs[i]}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} AdOrbit, Inc. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Meta, TikTok, and Snapchat are trademarks of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
