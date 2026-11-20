import { MessageCircle, Phone, ArrowDownRight } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl, IMAGES } from '../data/business';
import { ResilientImage } from './ResilientImage';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-[#071226] text-white overflow-hidden"
    >
      {/* Background Architectural Security Visual */}
      <div className="absolute inset-0">
        <ResilientImage
          src={IMAGES.hero}
          alt="Commercial building protected by CCTV cameras and automatic gate automation"
          loading="eager"
          className="w-full h-full object-cover object-center"
          containerClassName="w-full h-full"
          fallbackTitle="Krish Technology Solutions — Security & Gate Automation"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#061022]/95 via-[#071226]/85 to-[#071226]/50"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#071226] via-transparent to-[#071226]/40"
          aria-hidden="true"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-blue-300 tracking-wide mb-4">
            Achunthanvayal, Ramanathapuram · Tamil Nadu
          </p>

          <h1
            className="font-display font-bold text-white tracking-tight leading-[1.1] mb-6"
            style={{
              fontSize: 'clamp(2.25rem, 4.2vw, 3.75rem)',
              textWrap: 'balance',
            }}
          >
            CCTV Surveillance &amp; Gate Automation Built for Lasting Protection
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mb-9">
            Krish Technology Solutions supplies, installs, and services HD and IP CCTV camera
            systems, motorized sliding and swing gates, and commercial boom barriers for homes,
            businesses, and institutions across Ramanathapuram.
          </p>

          {/* Prominent Call Now & WhatsApp Actions */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href={BUSINESS_INFO.primaryTelHref}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-950/50 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Call Now · {BUSINESS_INFO.primaryPhoneDisplay}</span>
            </a>

            <a
              href={getWhatsAppUrl('9025691764')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#15803D] hover:bg-[#166534] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
            >
              <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>WhatsApp Enquiry</span>
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-1.5 px-3 py-3 text-sm font-medium text-slate-200 hover:text-white transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg"
            >
              <span>Explore Services</span>
              <ArrowDownRight className="w-4 h-4 shrink-0 text-blue-400" aria-hidden="true" />
            </a>
          </div>

          {/* Direct Contact Bar (Clean unboxed metadata with typographic separators) */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-300">
            <span>
              Primary:{' '}
              <a
                href={BUSINESS_INFO.primaryTelHref}
                className="font-mono tabular-nums text-white hover:text-blue-300 underline-offset-4 hover:underline"
              >
                +91 {BUSINESS_INFO.primaryPhoneDisplay}
              </a>
            </span>
            <span aria-hidden="true" className="text-slate-500">
              ·
            </span>
            <span>
              Alternative:{' '}
              <a
                href={BUSINESS_INFO.alternativeTelHref}
                className="font-mono tabular-nums text-white hover:text-blue-300 underline-offset-4 hover:underline"
              >
                +91 {BUSINESS_INFO.alternativePhoneDisplay}
              </a>
            </span>
            <span aria-hidden="true" className="text-slate-500">
              ·
            </span>
            <span>CCTV Sales &amp; Service</span>
            <span aria-hidden="true" className="text-slate-500">
              ·
            </span>
            <span>Automatic Gates &amp; Boom Barriers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
