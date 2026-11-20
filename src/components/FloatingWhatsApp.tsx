import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/business';

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2">
      {open && (
        <div
          role="dialog"
          aria-label="WhatsApp contact options"
          className="w-72 bg-white text-slate-900 rounded-xl border border-slate-200 shadow-2xl p-4"
        >
          <div className="flex items-center justify-between gap-2 pb-2.5 mb-3 border-b border-slate-200">
            <p className="font-display text-sm font-bold text-[#071226]">
              Chat on WhatsApp
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close WhatsApp options"
              className="w-7 h-7 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 flex items-center justify-center"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="space-y-2">
            <a
              href={getWhatsAppUrl('9025691764')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 p-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
            >
              <div>
                <p className="text-xs font-medium text-emerald-800">Primary WhatsApp</p>
                <p className="font-mono tabular-nums text-sm font-bold text-slate-900">
                  {BUSINESS_INFO.primaryPhoneFormatted}
                </p>
              </div>
              <MessageCircle className="w-5 h-5 text-[#15803D] shrink-0" aria-hidden="true" />
            </a>

            <a
              href={getWhatsAppUrl('7904401290')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
            >
              <div>
                <p className="text-xs font-medium text-slate-600">Alternative WhatsApp</p>
                <p className="font-mono tabular-nums text-sm font-bold text-slate-900">
                  {BUSINESS_INFO.alternativePhoneFormatted}
                </p>
              </div>
              <MessageCircle className="w-5 h-5 text-[#15803D] shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label="Open WhatsApp contact options"
        className="h-12 w-12 sm:w-auto sm:px-4 rounded-full bg-[#15803D] hover:bg-[#166534] text-white shadow-lg shadow-slate-950/30 flex items-center justify-center gap-2 transition-transform duration-150 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
      >
        <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline text-sm font-semibold whitespace-nowrap">
          WhatsApp
        </span>
      </button>
    </div>
  );
}
