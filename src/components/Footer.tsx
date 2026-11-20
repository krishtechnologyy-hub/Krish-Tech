import { MapPin, MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, getWhatsAppUrl } from '../data/business';

export function Footer() {
  return (
    <footer className="bg-[#040B18] text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/10">
          {/* Business Summary */}
          <div className="md:col-span-5">
            <h2 className="font-display text-lg font-bold text-white mb-3">
              {BUSINESS_INFO.name}
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-5 max-w-md">
              {BUSINESS_INFO.category}. Dependable surveillance systems, motorized sliding &amp;
              swing gates, and commercial boom barriers serving Ramanathapuram and surrounding
              areas.
            </p>
            <div className="flex items-start gap-2.5 text-sm text-slate-300">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-1" aria-hidden="true" />
              <span>{BUSINESS_INFO.address}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="font-display text-sm font-semibold text-white mb-4">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Our Services ({SERVICES.length})
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Project Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-4">
            <h3 className="font-display text-sm font-semibold text-white mb-4">
              Direct Phone &amp; WhatsApp
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-xs text-slate-400 mb-1">Primary Contact</p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={BUSINESS_INFO.primaryTelHref}
                    className="inline-flex items-center gap-1.5 font-mono tabular-nums font-semibold text-white hover:text-blue-300"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
                    <span>{BUSINESS_INFO.primaryPhoneFormatted}</span>
                  </a>
                  <a
                    href={getWhatsAppUrl('9025691764')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400 hover:text-emerald-300"
                  >
                    <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              <div>
                <p className="text-xs text-slate-400 mb-1">Alternative Contact</p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={BUSINESS_INFO.alternativeTelHref}
                    className="inline-flex items-center gap-1.5 font-mono tabular-nums font-semibold text-white hover:text-blue-300"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
                    <span>{BUSINESS_INFO.alternativePhoneFormatted}</span>
                  </a>
                  <a
                    href={getWhatsAppUrl('7904401290')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400 hover:text-emerald-300"
                  >
                    <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <p>
            Location map powered by{' '}
            <a
              href="https://cloud.google.com/maps-platform/terms?utm_campaign=gmp_mcp_codeassist_v1_aistudio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white underline underline-offset-2"
            >
              Google Maps Platform
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
