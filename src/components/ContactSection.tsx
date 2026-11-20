import { useEffect, useState, type FormEvent } from 'react';
import {
  CheckCircle2,
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES, getWhatsAppUrl } from '../data/business';
import { LocationMap } from './LocationMap';

interface ContactSectionProps {
  selectedService: string;
  quotaExceeded: boolean;
}

interface FormState {
  name: string;
  phone: string;
  service: string;
  location: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  message?: string;
}

export function ContactSection({
  selectedService,
  quotaExceeded,
}: ContactSectionProps) {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    service: selectedService || SERVICES[0].title,
    location: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setForm((prev) => ({ ...prev, service: selectedService }));
      setSubmitted(false);
    }
  }, [selectedService]);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      nextErrors.name = 'Please enter your name.';
    }
    const cleanedPhone = form.phone.replace(/\D/g, '');
    if (cleanedPhone.length < 10) {
      nextErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }
    if (!form.message.trim() || form.message.trim().length < 5) {
      nextErrors.message = 'Please briefly describe your requirement.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const buildEnquiryText = () => {
    const parts = [
      `Hello Krish Technology Solutions,`,
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Service Needed: ${form.service}`,
    ];
    if (form.location.trim()) {
      parts.push(`Site Location: ${form.location.trim()}`);
    }
    parts.push(`Requirement: ${form.message.trim()}`);
    return parts.join('\n');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({
      name: '',
      phone: '',
      service: SERVICES[0].title,
      location: '',
      message: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="contact" className="bg-[#071226] text-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-blue-400 tracking-wide mb-3">
            Contact Us
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-3"
            style={{ textWrap: 'balance' }}
          >
            Book a Site Visit or Request a Quote in Ramanathapuram
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Call us directly, message on WhatsApp, or submit your project requirements below. We
            respond promptly for new installations and urgent repair calls.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct Contacts + Verified Location Map */}
          <div className="lg:col-span-6 space-y-6">
            {/* Contact Numbers & Address Card */}
            <div className="rounded-xl border border-white/10 bg-[#0B1933] p-6 sm:p-7 space-y-6">
              {/* Primary Phone */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
                <div>
                  <p className="text-xs font-medium text-blue-300 mb-1">
                    Primary Contact Number
                  </p>
                  <a
                    href={BUSINESS_INFO.primaryTelHref}
                    className="font-mono tabular-nums text-xl sm:text-2xl font-bold text-white hover:text-blue-300 transition-colors"
                  >
                    {BUSINESS_INFO.primaryPhoneFormatted}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 shrink-0">
                  <a
                    href={BUSINESS_INFO.primaryTelHref}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={getWhatsAppUrl('9025691764')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#15803D] hover:bg-[#166534] rounded-lg transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Alternative Phone */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
                <div>
                  <p className="text-xs font-medium text-blue-300 mb-1">
                    Alternative Contact Number
                  </p>
                  <a
                    href={BUSINESS_INFO.alternativeTelHref}
                    className="font-mono tabular-nums text-xl sm:text-2xl font-bold text-white hover:text-blue-300 transition-colors"
                  >
                    {BUSINESS_INFO.alternativePhoneFormatted}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 shrink-0">
                  <a
                    href={BUSINESS_INFO.alternativeTelHref}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={getWhatsAppUrl('7904401290')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#15803D] hover:bg-[#166534] rounded-lg transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Business Address */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-medium text-blue-300 mb-1">Business Address</p>
                    <p className="text-sm sm:text-base text-white font-medium">
                      {BUSINESS_INFO.name}
                    </p>
                    <p className="text-sm text-slate-300">{BUSINESS_INFO.address}</p>
                  </div>
                </div>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-300 hover:text-white whitespace-nowrap shrink-0 mt-1"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Google Maps Platform Location Map */}
            <div>
              <div className="flex items-center justify-between gap-4 mb-2.5">
                <p className="text-xs font-medium text-slate-300">
                  Verified Service Location · {BUSINESS_INFO.address}
                </p>
              </div>
              <LocationMap quotaExceeded={quotaExceeded} />
            </div>
          </div>

          {/* Right Column: Functional Enquiry Form */}
          <div className="lg:col-span-6 bg-white text-slate-900 rounded-xl border border-slate-200 p-6 sm:p-8">
            {submitted ? (
              <div className="py-8 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-7 h-7 text-emerald-700" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#071226] mb-3">
                  Enquiry Prepared
                </h3>
                <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-900">{form.name}</span>.
                  For fastest response on your{' '}
                  <span className="font-semibold text-slate-900">{form.service}</span> enquiry,
                  send these details directly via WhatsApp or call us now.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
                  <a
                    href={getWhatsAppUrl('9025691764', buildEnquiryText())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#15803D] hover:bg-[#166534] rounded-lg transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Send via WhatsApp (9025691764)</span>
                  </a>
                  <a
                    href={BUSINESS_INFO.primaryTelHref}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Call Now</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="text-sm font-medium text-blue-700 hover:text-blue-600 underline underline-offset-4"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="pb-4 border-b border-slate-200">
                  <h3 className="font-display text-2xl font-bold text-[#071226] tracking-tight mb-1">
                    Send an Enquiry
                  </h3>
                  <p className="text-sm text-slate-600">
                    Share your requirement and we will assist you by phone or WhatsApp.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="enquiry-name"
                      className="block text-sm font-medium text-slate-800 mb-1.5"
                    >
                      Your Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="enquiry-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, name: e.target.value }));
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder="Enter your full name"
                      className="w-full px-3.5 py-2.5 text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-phone"
                      className="block text-sm font-medium text-slate-800 mb-1.5"
                    >
                      Phone / WhatsApp Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="enquiry-phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, phone: e.target.value }));
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                      }}
                      placeholder="10-digit mobile number"
                      className="w-full px-3.5 py-2.5 text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="enquiry-service"
                      className="block text-sm font-medium text-slate-800 mb-1.5"
                    >
                      Service Required
                    </label>
                    <select
                      id="enquiry-service"
                      value={form.service}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, service: e.target.value }))
                      }
                      className="w-full px-3.5 py-2.5 text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    >
                      {SERVICES.map((svc) => (
                        <option key={svc.id} value={svc.title}>
                          {svc.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-location"
                      className="block text-sm font-medium text-slate-800 mb-1.5"
                    >
                      Area / Town
                    </label>
                    <input
                      id="enquiry-location"
                      type="text"
                      value={form.location}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, location: e.target.value }))
                      }
                      placeholder="e.g., Ramanathapuram, Achunthanvayal"
                      className="w-full px-3.5 py-2.5 text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="enquiry-message"
                    className="block text-sm font-medium text-slate-800 mb-1.5"
                  >
                    Requirement Details <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="enquiry-message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => {
                      setForm((prev) => ({ ...prev, message: e.target.value }));
                      if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                    }}
                    placeholder="Number of cameras, gate width/type, boom barrier lane, or repair issue..."
                    className="w-full px-3.5 py-2.5 text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 resize-y"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    <Send className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Submit Enquiry</span>
                  </button>

                  <a
                    href={getWhatsAppUrl(
                      '9025691764',
                      form.name.trim() || form.message.trim()
                        ? buildEnquiryText()
                        : `Hello Krish Technology Solutions, I would like to enquire about ${form.service}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#15803D] hover:bg-[#166534] rounded-lg transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Direct WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
