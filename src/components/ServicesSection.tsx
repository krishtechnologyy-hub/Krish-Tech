import { useState } from 'react';
import {
  Camera,
  Cctv,
  DoorClosed,
  MessageCircle,
  MonitorCheck,
  Settings,
  ShieldAlert,
  SlidersHorizontal,
  Wrench,
  ArrowUpRight,
} from 'lucide-react';
import { SERVICES, type ServiceItem, getWhatsAppUrl } from '../data/business';
import { ResilientImage } from './ResilientImage';

type FilterTab = 'all' | 'cctv' | 'gates';

interface ServicesSectionProps {
  onSelectServiceForEnquiry: (serviceTitle: string) => void;
}

function ServiceIcon({ name }: { name: ServiceItem['iconName'] }) {
  const iconClass = 'w-5 h-5 text-blue-400 shrink-0';
  switch (name) {
    case 'cctv':
      return <Cctv className={iconClass} aria-hidden="true" />;
    case 'wrench':
      return <Wrench className={iconClass} aria-hidden="true" />;
    case 'camera':
      return <Camera className={iconClass} aria-hidden="true" />;
    case 'monitor':
      return <MonitorCheck className={iconClass} aria-hidden="true" />;
    case 'door':
      return <DoorClosed className={iconClass} aria-hidden="true" />;
    case 'sliders':
      return <SlidersHorizontal className={iconClass} aria-hidden="true" />;
    case 'shield':
      return <ShieldAlert className={iconClass} aria-hidden="true" />;
    case 'settings':
      return <Settings className={iconClass} aria-hidden="true" />;
  }
}

export function ServicesSection({ onSelectServiceForEnquiry }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');

  const filteredServices = SERVICES.filter((service) =>
    activeTab === 'all' ? true : service.category === activeTab
  );

  return (
    <section id="services" className="bg-[#071226] text-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-8 border-b border-white/10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-400 tracking-wide mb-3">
              Our Services
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-3"
              style={{ textWrap: 'balance' }}
            >
              Complete CCTV Surveillance &amp; Entrance Automation Solutions
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              From single-home camera installations to commercial multi-lane boom barriers and
              preventive maintenance across Ramanathapuram.
            </p>
          </div>

          {/* Interactive Category Filter Segmented Control */}
          <div
            role="group"
            aria-label="Filter services by category"
            className="inline-flex items-center gap-1 p-1 bg-[#0D1D3A] border border-white/10 rounded-lg self-start lg:self-auto"
          >
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              All Services (8)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('cctv')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                activeTab === 'cctv'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              CCTV Systems
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('gates')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                activeTab === 'gates'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Gates &amp; Barriers
            </button>
          </div>
        </div>

        {/* Asymmetric Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredServices.map((service) => {
            const hasImage = Boolean(service.image);
            return (
              <article
                key={service.id}
                className={`rounded-xl border border-white/10 bg-[#0B1933] overflow-hidden flex flex-col justify-between transition-colors duration-200 hover:border-blue-400/50 ${
                  hasImage ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {service.image && (
                    <div className="aspect-[16/9] sm:aspect-[4/3] w-full overflow-hidden bg-[#061022] border-b border-white/10">
                      <ResilientImage
                        src={service.image}
                        alt={service.imageAlt || service.title}
                        className="w-full h-full object-cover"
                        containerClassName="w-full h-full"
                        fallbackTitle={service.title}
                      />
                    </div>
                  )}

                  <div className="p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-2.5 text-xs font-medium text-blue-300">
                        <span className="font-mono tabular-nums text-blue-400">
                          {service.number}
                        </span>
                        <span aria-hidden="true" className="text-slate-500">
                          ·
                        </span>
                        <span>{service.categoryLabel}</span>
                      </div>
                      <div className="w-9 h-9 rounded-lg bg-[#071226] border border-white/10 flex items-center justify-center shrink-0">
                        <ServiceIcon name={service.iconName} />
                      </div>
                    </div>

                    <h3 className="font-display text-xl font-bold text-white tracking-tight mb-3">
                      {service.number}. {service.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-5">
                      {service.description}
                    </p>

                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300 border-t border-white/10 pt-4">
                      {service.highlights.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span
                            className="text-blue-400 font-bold leading-5 shrink-0"
                            aria-hidden="true"
                          >
                            —
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Footer */}
                <div className="px-6 sm:px-7 pb-6 pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectServiceForEnquiry(service.title)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                  >
                    <span>Request Quote</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </button>

                  <a
                    href={getWhatsAppUrl(
                      '9025691764',
                      `Hello Krish Technology Solutions, I would like to enquire about ${service.title}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-medium text-slate-200 hover:text-white border border-white/15 hover:border-white/30 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
