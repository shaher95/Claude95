import { platforms } from "@/data/site";
import PlatformIcon from "./PlatformIcon";

export default function Platforms() {
  return (
    <section id="platforms" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Three platforms. One control room.
          </h2>
          <p className="mt-4 text-lg text-muted">
            Stop juggling three ads managers. AdOrbit speaks each platform&apos;s
            native API and handles the differences for you.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {platforms.map((platform) => (
            <article
              key={platform.id}
              className="rounded-2xl border border-border bg-surface p-8 transition hover:border-muted/50"
            >
              <div className="flex items-center gap-3">
                <PlatformIcon platform={platform.id} className={`h-8 w-8 ${platform.colorClass}`} />
                <h3 className="text-xl font-semibold">{platform.name}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {platform.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {platform.placements.map((placement) => (
                  <li
                    key={placement}
                    className="rounded-full border border-border bg-surface-raised px-3 py-1 text-xs text-muted"
                  >
                    {placement}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
