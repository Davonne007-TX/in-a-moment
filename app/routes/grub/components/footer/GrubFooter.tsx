import GrubSubscribe from "./GrubSubscribe";

export default function GrubFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#FFF8F5]">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,#FF6B4A_1px,transparent_0)] [background-size:24px_24px]" />

      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#FF8E72]/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="rounded-[40px] border border-[#FFD8CF] bg-white/70 p-10 shadow-[0_30px_80px_rgba(255,107,74,0.08)] backdrop-blur-xl md:p-16">
          <div className="flex flex-col gap-14 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#FF6B4A]/70">
                GOOD FOOD • GOOD PEOPLE
              </p>

              <h1 className="font-bow text-6xl leading-[0.9] tracking-tight text-[#FF6B4A] md:text-8xl">
                Let's
                <br />
                Grub.
              </h1>

              <p className="mt-8 max-w-lg text-lg leading-relaxed text-[#8B5E55] md:text-xl">
                Summer's calling. Discover hidden gems, invite your crew, and
                make every meal worth remembering.
              </p>
            </div>

            <div className="w-full max-w-md">
              <div className="rounded-3xl bg-[#FFF3EF] p-6 ring-1 ring-[#FFD7CC]">
                <h2 className="mb-2 text-xl font-semibold text-[#5A3D36]">
                  Stay Hungry.
                </h2>

                <p className="mb-6 text-[#8B5E55]">
                  New spots. Local favorites. Weekly food inspiration.
                </p>

                <GrubSubscribe />
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-16 border-t border-[#F3D6CF] pt-10">
            <div className="grid gap-10 md:grid-cols-4">
              <div>
                <h3 className="mb-4 font-semibold text-[#5A3D36]">
                  Let's Grub
                </h3>
                <p className="text-sm leading-6 text-[#8B5E55]">
                  Finding your next favorite restaurant, one bite at a time.
                </p>
              </div>

              <div>
                <h4 className="mb-4 font-semibold text-[#5A3D36]">Explore</h4>
                <ul className="space-y-3 text-[#8B5E55]">
                  <li>
                    <a
                      href="/restaurants"
                      className="hover:text-[#FF6B4A] transition"
                    >
                      Restaurants
                    </a>
                  </li>
                  <li>
                    <a
                      href="/categories"
                      className="hover:text-[#FF6B4A] transition"
                    >
                      Categories
                    </a>
                  </li>
                  <li>
                    <a
                      href="/favorites"
                      className="hover:text-[#FF6B4A] transition"
                    >
                      Favorites
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4 font-semibold text-[#5A3D36]">Company</h4>
                <ul className="space-y-3 text-[#8B5E55]">
                  <li>
                    <a
                      href="/about"
                      className="hover:text-[#FF6B4A] transition"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="hover:text-[#FF6B4A] transition"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="/careers"
                      className="hover:text-[#FF6B4A] transition"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4 font-semibold text-[#5A3D36]">Follow</h4>
                <ul className="space-y-3 text-[#8B5E55]">
                  <li>
                    <a href="#" className="hover:text-[#FF6B4A] transition">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#FF6B4A] transition">
                      TikTok
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#FF6B4A] transition">
                      X / Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#F3D6CF] pt-6 text-sm text-[#A07A70] md:flex-row">
              <p>
                © {new Date().getFullYear()} Let's Grub. All rights reserved.
              </p>

              <div className="flex gap-6">
                <animateTransform
                  href="/privacy"
                  className="hover:text-[#FF6B4A] transition"
                >
                  Privacy
                </animateTransform>
                <a href="/terms" className="hover:text-[#FF6B4A] transition">
                  Terms
                </a>
                <a href="/cookies" className="hover:text-[#FF6B4A] transition">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
