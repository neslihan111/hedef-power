import { useMemo } from "react";
import { Link } from "react-router-dom";

import footerLogo from "../assets/footer/logo.png";

// Tool logos
import autotuner from "../assets/footer/tools/autotuner.png";
import evc from "../assets/footer/tools/evc.png";
import fg from "../assets/footer/tools/fg.png";
import magicMotor from "../assets/footer/tools/magic-motor.png";

export default function Footer() {
  const nav = useMemo(
    () => [
      { label: "Anasayfa", path: "/#home" },
      { label: "Hakkımızda", path: "/#about" },
      { label: "Hizmetler", path: "/services" },
      { label: "Galeri", path: "/gallery" },
      { label: "İletişim", path: "/#contact" },
    ],
    []
  );

  const tools = useMemo(
    () => [
      { src: autotuner, alt: "Autotuner" },
      { src: evc, alt: "EVC" },
      { src: fg, alt: "FG Technology" },
      { src: magicMotor, alt: "Magic Motor Sport" },
    ],
    []
  );

  const mapLink =
    "https://www.google.com/maps/place/Hedef+Otogaz%26LPG/@36.996985,37.3799168,20.25z/data=!4m12!1m5!3m4!2zMzbCsDU5JzQ5LjIiTiAzN8KwMjInNDcuOCJF!8m2!3d36.9969925!4d37.3799556!3m5!1s0x1531df00714ac7cd:0xa4d3c0a3d309a994!8m2!3d36.9970726!4d37.3800118!16s%2Fg%2F11yjfvgy8j?hl=tr&entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D";

  // Google Maps embed: linkten bağımsız güvenli embed kullan
  const mapEmbed =
    "https://www.google.com/maps?q=Hedef%20Otogaz%26LPG&output=embed";

  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      {/* üst tool logosu şeridi */}
      <div className="bg-[#f6f7f8]">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {tools.map((t) => (
              <div
                key={t.alt}
                className="rounded-2xl border border-slate-200 bg-white shadow-sm p-4 grid place-items-center"
              >
                <img
                  src={t.src}
                  alt={t.alt}
                  className="h-10 w-auto object-contain opacity-90"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ana footer */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* SOL KOLON: Menü + Harita */}
          <div className="order-1 flex flex-col">
            <h3 className="text-sm font-semibold tracking-wide text-[#111]">
              MENÜ
            </h3>
            <nav aria-label="Footer Navigasyon" className="mt-4">
              <ul className="space-y-3">
                {nav.map((n) => (
                  <li key={n.label}>
                    <Link
                      to={n.path}
                      className="text-[#111] hover:text-[#555] hover:underline transition"
                    >
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Harita (Tablet & Desktop: Menü Altında) */}
            <div className="hidden md:block mt-8 w-full">
              <iframe
                title="Hedef Power Harita"
                src={mapEmbed}
                className="h-[220px] w-full rounded-lg border border-slate-200"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={mapLink}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm text-[#555] hover:text-[#111] transition"
              >
                Tam konum linki →
              </a>
            </div>
          </div>

          {/* ORTA KOLON: Logo + Slogan (Sola dayalı) */}
          <div className="order-2 md:order-last lg:order-none flex flex-col items-start lg:ml-0 md:pl-0">
            <img
              src={footerLogo}
              alt="Hedef Power Logo"
              className="h-16 md:h-20 lg:h-24 w-auto object-contain transition-all duration-300 hover:scale-105"
              draggable={false}
            />
            <p className="mt-5 max-w-xs text-[#111] leading-relaxed">
              Hedef Power, profesyonel montaj, bakım ve araç uyum çözümleriyle güven veren modern servis deneyimi sunar.
            </p>
          </div>

          {/* SAĞ KOLON: İletişim */}
          <div className="order-3 flex flex-col text-left">
            <h3 className="text-sm font-semibold tracking-wide text-[#111]">
              İLETİŞİM
            </h3>

            <div className="mt-4 space-y-4">
              <div>
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-[#111] hover:text-[#555] hover:underline transition"
                >
                  <span className="block font-medium mb-1">Adres</span>
                  135024 Nolu Sk. 1A, 27470 Gaziantep, Türkiye
                </a>
              </div>

              <div>
                <a
                  href="tel:+905384954616"
                  className="block text-[#111] hover:text-[#555] hover:underline transition"
                >
                  <span className="block font-medium mb-1">Telefon / WhatsApp</span>
                  0538 495 46 16
                </a>
              </div>

              <div>
                <a
                  href="mailto:hedefotogaz27@hotmail.com"
                  className="block text-[#111] hover:text-[#555] hover:underline transition"
                >
                  <span className="block font-medium mb-1">E-posta</span>
                  hedefotogaz27@hotmail.com
                </a>
              </div>

              <div className="text-[#111]">
                <div className="font-medium mb-1">Çalışma Saatleri</div>
                <div>Hafta içi: 07.30–20.00</div>
                <div>Hafta sonu: 10.00–18.00</div>
              </div>
            </div>

            {/* Sosyal linkler */}
            <div className="mt-6 flex flex-wrap gap-2">
              <a
                className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-[#111] hover:bg-[#111] hover:text-white hover:border-[#111] transition"
                href="https://www.instagram.com/hedefotogaz27/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Sayfası 1"
              >
                Instagram 1
              </a>
              <a
                className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-[#111] hover:bg-[#111] hover:text-white hover:border-[#111] transition"
                href="https://www.instagram.com/hedef_power_chiptuning/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Sayfası 2"
              >
                Instagram 2
              </a>
              <a
                className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-[#111] hover:bg-[#111] hover:text-white hover:border-[#111] transition"
                href="https://www.facebook.com/N.Ali2727?mibextid=wwXIfr&rdid=VDJi1DgzplBfrQXm&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Ds4jFoXTM%2F%3Fmibextid%3DwwXIfr#"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Sayfası"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Harita (Sadece Mobil: En Altta) */}
          <div className="order-4 md:hidden w-full mt-4">
            <iframe
              title="Hedef Power Harita Mobil"
              src={mapEmbed}
              className="h-[220px] w-full rounded-lg border border-slate-200"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={mapLink}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-sm text-[#555] hover:text-[#111] transition"
            >
              Tam konum linki →
            </a>
          </div>
        </div>

        {/* Alt Bar: Copyright */}
        <div className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-left">2022 © Copyrights Hedef Power</span>
          <span className="text-left sm:text-right">Hedef Power • Automotive & Chiptuning</span>
        </div>
      </div>
    </footer>
  );
}