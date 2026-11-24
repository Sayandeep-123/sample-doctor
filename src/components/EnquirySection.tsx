import React, { useState } from 'react';
import { 
  Calendar, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Sparkles,
  RefreshCw
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { EnquiryFormData } from '../types';

export const EnquirySection: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    reason: 'musculoskeletal',
    preferredContact: 'whatsapp',
    preferredTime: 'morning',
    briefNotes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate brief processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      reason: 'musculoskeletal',
      preferredContact: 'whatsapp',
      preferredTime: 'morning',
      briefNotes: '',
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column: Context & Contact Details */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#eaf1ed] px-3.5 py-1 text-xs font-semibold text-[#1b4332] mb-3">
              <Calendar className="h-3.5 w-3.5" />
              <span>Consultation Enquiry</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1c2826] tracking-tight leading-snug mb-4">
              Begin your conversation with our clinic.
            </h2>

            <p className="text-sm sm:text-base text-[#5e6c67] leading-relaxed mb-8">
              Whether you are recovering from an injury, managing persistent discomfort, or looking for posture guidance, we are happy to answer your initial questions and help schedule an assessment.
            </p>

            {/* Practical Clinic Contact Cards */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3.5 rounded-2xl bg-white p-4 border border-[#e7e2d7] shadow-2xs">
                <div className="p-2.5 rounded-xl bg-[#eaf1ed] text-[#1b4332] shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#5e6c67]">
                    Clinic Location (Illustrative)
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-[#1c2826] mt-0.5">
                    {CLINIC_INFO.address}
                  </p>
                  <p className="text-[11px] text-[#5e6c67] mt-0.5">
                    {CLINIC_INFO.landmark}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl bg-white p-4 border border-[#e7e2d7] shadow-2xs">
                <div className="p-2.5 rounded-xl bg-[#eaf1ed] text-[#1b4332] shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#5e6c67]">
                    Consultation Hours
                  </h4>
                  <p className="text-xs sm:text-sm text-[#1c2826] mt-0.5">
                    Mon – Fri: {CLINIC_INFO.hours.weekdays}
                  </p>
                  <p className="text-xs sm:text-sm text-[#1c2826]">
                    Saturday: {CLINIC_INFO.hours.saturday}
                  </p>
                  <p className="text-[11px] text-[#2d6a4f] font-medium mt-1">
                    {CLINIC_INFO.note}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl bg-white p-4 border border-[#e7e2d7] shadow-2xs">
                <div className="p-2.5 rounded-xl bg-[#eaf1ed] text-[#1b4332] shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#5e6c67]">
                    Telephone & Inquiries
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-[#1c2826] mt-0.5">
                    {CLINIC_INFO.displayPhone}
                  </p>
                  <p className="text-[11px] text-[#5e6c67]">
                    Reception responds during active clinic hours
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy & Scope Callout */}
            <div className="rounded-xl bg-[#f3efe6] p-3.5 border border-[#e7e2d7] text-xs text-[#5e6c67]">
              <span className="font-semibold text-[#1c2826] block mb-1">
                Patient Privacy Commitment:
              </span>
              We do not ask for sensitive medical records over preliminary web forms. A brief description of your general concern is all that is required for initial coordination.
            </div>
          </div>

          {/* Right Column: Interactive Demo Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-6 sm:p-9 border border-[#e7e2d7] shadow-md text-left relative">
              {/* Demo Watermark / Badge */}
              <div className="mb-6 flex items-center justify-between rounded-xl bg-[#eaf1ed] px-3.5 py-2 text-xs font-medium text-[#1b4332] border border-[#2d6a4f]/20">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Visual Concept Form (Demo Simulation)</span>
                </div>
                <span className="text-[11px] text-[#2d6a4f]">No Data Is Saved</span>
              </div>

              {submitted ? (
                /* Submission Confirmation State */
                <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="mx-auto h-16 w-16 rounded-full bg-[#eaf1ed] flex items-center justify-center text-[#1b4332]">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#1c2826]">
                    Demo Enquiry Received
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5e6c67] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#1c2826]">{formData.fullName || 'Prospective Patient'}</strong>. In a live deployment, this enquiry would be immediately routed to clinic reception or WhatsApp triage for appointment slot confirmation.
                  </p>
                  <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e7e2d7] text-left text-xs max-w-md mx-auto space-y-2">
                    <div>
                      <span className="text-[#5e6c67]">Enquiry Area:</span>{' '}
                      <strong className="text-[#1c2826] capitalize">{formData.reason.replace('-', ' ')}</strong>
                    </div>
                    <div>
                      <span className="text-[#5e6c67]">Preferred Contact:</span>{' '}
                      <strong className="text-[#1c2826] capitalize">{formData.preferredContact} ({formData.preferredTime})</strong>
                    </div>
                    <div>
                      <span className="text-[#5e6c67]">Expected Response:</span>{' '}
                      <strong className="text-[#2d6a4f]">Within 1 business day</strong>
                    </div>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1b4332] hover:underline"
                    >
                      <RefreshCw className="h-3.5 w-3.5" />
                      <span>Simulate Another Enquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Main Enquiry Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1c2826] mb-1.5">
                      Your Full Name <span className="text-[#b8623b]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full rounded-xl border border-[#e7e2d7] bg-[#faf8f5] px-3.5 py-2.5 text-sm text-[#1c2826] placeholder:text-[#a0a9a4] focus:border-[#1b4332] focus:bg-white focus:outline-none transition"
                    />
                  </div>

                  {/* Contact Fields: Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1c2826] mb-1.5">
                        Phone or WhatsApp <span className="text-[#b8623b]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98XXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-[#e7e2d7] bg-[#faf8f5] px-3.5 py-2.5 text-sm text-[#1c2826] placeholder:text-[#a0a9a4] focus:border-[#1b4332] focus:bg-white focus:outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1c2826] mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="priya@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-[#e7e2d7] bg-[#faf8f5] px-3.5 py-2.5 text-sm text-[#1c2826] placeholder:text-[#a0a9a4] focus:border-[#1b4332] focus:bg-white focus:outline-none transition"
                      />
                    </div>
                  </div>

                  {/* Broad Reason for Enquiry */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1c2826] mb-1.5">
                      Broad Reason for Enquiry
                    </label>
                    <select
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      className="w-full rounded-xl border border-[#e7e2d7] bg-[#faf8f5] px-3.5 py-2.5 text-sm text-[#1c2826] focus:border-[#1b4332] focus:bg-white focus:outline-none transition"
                    >
                      <option value="musculoskeletal">Musculoskeletal / Joint Stiffness / Muscle Strain</option>
                      <option value="orthopaedic">Orthopaedic Care / Chronic Joint Wear</option>
                      <option value="post-op">Post-Operative Recovery (Orthopaedic)</option>
                      <option value="pain-mobility">Persistent Discomfort & Mobility Pacing</option>
                      <option value="posture-ergonomics">Desk Ergonomics & Postural Fatigue</option>
                      <option value="general-inquiry">General Question Before Booking</option>
                    </select>
                  </div>

                  {/* Preferred Contact Method & Preferred Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1c2826] mb-1.5">
                        Preferred Contact Method
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {(['whatsapp', 'phone', 'email'] as const).map((method) => (
                          <button
                            type="button"
                            key={method}
                            onClick={() => setFormData({ ...formData, preferredContact: method })}
                            className={`py-2 px-2 text-xs font-medium rounded-xl border transition capitalize ${
                              formData.preferredContact === method
                                ? 'bg-[#1b4332] text-white border-[#1b4332]'
                                : 'bg-[#faf8f5] text-[#5e6c67] border-[#e7e2d7] hover:bg-[#f3efe6]'
                            }`}
                          >
                            {method}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1c2826] mb-1.5">
                        Preferred Time of Day
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {(['morning', 'afternoon', 'evening'] as const).map((time) => (
                          <button
                            type="button"
                            key={time}
                            onClick={() => setFormData({ ...formData, preferredTime: time })}
                            className={`py-2 px-2 text-xs font-medium rounded-xl border transition capitalize ${
                              formData.preferredTime === time
                                ? 'bg-[#1b4332] text-white border-[#1b4332]'
                                : 'bg-[#faf8f5] text-[#5e6c67] border-[#e7e2d7] hover:bg-[#f3efe6]'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Brief Note */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1c2826] mb-1.5">
                      Brief Note on What You Hope to Achieve (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Experiencing knee tightness when walking down stairs; hoping to resume weekend walking without discomfort."
                      value={formData.briefNotes}
                      onChange={(e) => setFormData({ ...formData, briefNotes: e.target.value })}
                      className="w-full rounded-xl border border-[#e7e2d7] bg-[#faf8f5] px-3.5 py-2 text-sm text-[#1c2826] placeholder:text-[#a0a9a4] focus:border-[#1b4332] focus:bg-white focus:outline-none transition resize-none"
                    />
                  </div>

                  {/* Notice & Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#1b4332] hover:bg-[#122b21] text-white py-3.5 text-sm font-medium transition shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-[#1b4332]/30 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Simulating submission...</span>
                      ) : (
                        <>
                          <Calendar className="h-4 w-4 text-[#eaf1ed]" />
                          <span>Submit Appointment Enquiry (Demo)</span>
                        </>
                      )}
                    </button>
                    <p className="mt-2 text-center text-[11px] text-[#5e6c67]">
                      Demo form: No patient records or sensitive information will be transmitted or stored.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
