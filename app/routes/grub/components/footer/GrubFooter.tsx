import GrubSubscribe from "./GrubSubscribe";

export default function GrubFooter() {
  return (
    <footer className="bg-[#FFFAFA] mx-auto">
      <div className="max-w-7xl px-6 md:px-10 py-16 md:py-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-betweeen gap-8 space-x-40">
          <div className="space-y-4">
            <h1 className="font-bow text-4xl md:text-6xl text-[#FF6B4A] tracking-tight">
              Let's Grub
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-[#8B5E55] leading-relaxed">
              It's Summer Summer time. Grab your friends, hit the beach, and get
              some grub.
            </p>
          </div>

          <div className="w-full md:w-auto">
            <GrubSubscribe />
          </div>
        </div>
      </div>
    </footer>
  );
}
