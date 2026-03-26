import React from "react";

const modules = import.meta.glob("../assets/brands/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
});

const logos = Object.values(modules)
  .map((m) => m.default)
  .filter(Boolean);

export default function Brands() {
  const loop = [...logos, ...logos];

  return (
    <section id="gallery" className="relative py-20 bg-[#f6f7f8]">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
          MARKALAR
        </h2>

        <div className="relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#f6f7f8] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#f6f7f8] to-transparent z-10" />

          <div className="marquee">
            <div className="marquee-track">
              {loop.map((src, idx) => (
                <div key={idx} className="brand-card">
                  <img src={src} alt="Hedef Power referans araç markası" draggable={false} loading="lazy" decoding="async" width={140} height={52} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .marquee { overflow: hidden; width: 100%; }
        .marquee-track {
          display: flex;
          width: fit-content;
          gap: 24px;
          padding: 16px 0;
          animation: scroll 55s linear infinite;
          will-change: transform;
        }
        .brand-card {
          flex: 0 0 auto;
          width: 140px;
          height: 92px;
          border-radius: 16px;
          background: white;
          border: 1px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px;
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
          cursor: pointer;
        }
        .brand-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(0,0,0,0.10);
          border-color: #d1d5db;
        }
        .brand-card img {
          max-height: 52px;
          width: auto;
          object-fit: contain;
          opacity: .95;
        }
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </section>
  );
}