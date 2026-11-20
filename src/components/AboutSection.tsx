import { CheckCircle2, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO, IMAGES } from '../data/business';
import { ResilientImage } from './ResilientImage';

const COMMITMENTS = [
  'Site-specific camera placement and blind-spot planning before installation',
  'Clean, weather-sealed wiring and durable mounting hardware built for local conditions',
  'Responsive after-sales service, repair, and technical support for cameras, gates, and barriers',
  'Clear handover and mobile viewing configuration so you stay in control from anywhere',
];

export function AboutSection() {
  return (
    <section id="about" className="bg-white text-slate-900 py-20 sm:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Image Column */}
          <div className="lg:col-span-5 flex">
            <div className="w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100 min-h-[280px] sm:min-h-[360px]">
              <ResilientImage
                src={IMAGES.aboutInstallation}
                alt="Technician configuring multi-channel NVR surveillance monitor and structured network cabling"
                className="w-full h-full object-cover lg:h-full"
                containerClassName="w-full h-full min-h-[280px]"
                fallbackTitle="Surveillance Calibration & Technical Support"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-sm font-semibold text-blue-700 tracking-wide mb-3">
              About Krish Technology Solutions
            </p>

            <h2
              className="font-display text-3xl sm:text-4xl font-bold text-[#071226] tracking-tight leading-tight mb-5"
              style={{ textWrap: 'balance' }}
            >
              Practical Security Engineering &amp; Reliable Automation in Ramanathapuram
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Based in Achunthanvayal, Ramanathapuram, Krish Technology Solutions provides
              dependable CCTV sales and service, automatic gate automation, and commercial boom
              barrier installations for residential properties, retail storefronts, educational
              campuses, warehouses, and industrial sites.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-7">
              We focus on getting the fundamentals right: selecting reliable hardware, routing
              cabling neatly, calibrating motors and safety sensors carefully, and standing behind
              every installation with direct local technical support.
            </p>

            <ul className="space-y-3 mb-8 border-t border-slate-200 pt-6">
              {COMMITMENTS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                  <CheckCircle2
                    className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0" aria-hidden="true" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <a
                href={BUSINESS_INFO.primaryTelHref}
                className="inline-flex items-center gap-2 font-semibold text-[#071226] hover:text-blue-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-600 shrink-0" aria-hidden="true" />
                <span className="font-mono tabular-nums">{BUSINESS_INFO.primaryPhoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
