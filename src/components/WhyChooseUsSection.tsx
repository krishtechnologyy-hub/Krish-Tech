import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, WHY_CHOOSE_ITEMS, getWhatsAppUrl } from '../data/business';

export function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      className="bg-[#F4F7FB] text-slate-900 py-20 sm:py-24 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Sticky Summary */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <p className="text-sm font-semibold text-blue-700 tracking-wide mb-3">
              Why Choose Us
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold text-[#071226] tracking-tight leading-tight mb-4"
              style={{ textWrap: 'balance' }}
            >
              Dependable Workmanship Without Compromise
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-7">
              Security systems only protect your premises when every camera angle, cable joint,
              limit switch, and motor mount is done properly. We prioritize honest recommendations,
              tidy installation, and accessible support.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={BUSINESS_INFO.primaryTelHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#071226] hover:bg-[#0D1E3D] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Speak With Us</span>
              </a>
              <a
                href={getWhatsAppUrl('9025691764')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#071226] bg-white border border-slate-300 hover:border-blue-600 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <MessageCircle className="w-4 h-4 text-[#15803D] shrink-0" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Editorial Pillars List */}
          <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200 divide-y divide-slate-200">
            {WHY_CHOOSE_ITEMS.map((item) => (
              <div
                key={item.number}
                className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8"
              >
                <div className="font-mono tabular-nums text-sm font-semibold text-blue-700 shrink-0 pt-1">
                  {item.number}.
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-[#071226] tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
