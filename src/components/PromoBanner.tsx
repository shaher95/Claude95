export default function PromoBanner() {
  return (
    <section className="animate-fade-in-up">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-emerald-600 to-primary-dark text-white">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/4" />
        </div>

        <div className="relative px-6 py-8 lg:px-10 lg:py-10">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full mb-3">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Limited Time Offer
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
                Ramadan Personal Care Sale
              </h2>
              <p className="text-sm text-white/80 mt-2 max-w-md">
                Get up to 40% off on all Himalaya personal care products.
                Free express delivery on orders over 75 SAR during Ramadan.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 mt-5">
                <button className="px-6 py-3 bg-white text-primary font-bold text-sm rounded-lg hover:bg-gray-100 active:scale-[0.98] transition-all shadow-lg">
                  Shop the Sale
                </button>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-white/70">Use code:</span>
                  <code className="bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-md font-mono font-bold text-accent tracking-wider">
                    RAMADAN40
                  </code>
                </div>
              </div>
            </div>

            {/* Countdown */}
            <div className="shrink-0">
              <p className="text-xs text-white/70 text-center mb-2 font-medium">
                Offer ends in
              </p>
              <div className="flex items-center gap-2">
                {[
                  { value: "03", label: "Days" },
                  { value: "14", label: "Hours" },
                  { value: "52", label: "Mins" },
                  { value: "08", label: "Secs" },
                ].map((item, i) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className="bg-white/15 backdrop-blur-sm rounded-lg px-3 py-2 text-center min-w-[52px]">
                      <div className="text-2xl font-bold font-mono">
                        {item.value}
                      </div>
                      <div className="text-[10px] text-white/70 font-medium -mt-0.5">
                        {item.label}
                      </div>
                    </div>
                    {i < 3 && (
                      <span className="text-xl font-bold text-white/40">:</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
