import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full py-16 md:py-24 bg-[#F5F1EA] dark:bg-[#1F1F1F] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-theme-light-heading dark:text-white">
            Contact Us
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-theme-light-body dark:text-theme-dark-body px-2 max-w-2xl mx-auto">
            Get in touch with us for any inquiries or support
          </p>
          <div className="mt-4 sm:mt-6 mx-auto h-[3px] w-20 sm:w-28 md:w-32 bg-[var(--bridge-gold)] rounded-full" />
        </div>

        <div className="space-y-6 sm:space-y-8 max-w-3xl mx-auto">
          {/* Email */}
          <a 
            href="mailto:contact@gyansetu.com"
            className="group block"
          >
            <div className="flex items-center gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-white dark:bg-theme-dark-bg hover:bg-gradient-to-r hover:from-[var(--bridge-gold)]/10 hover:to-transparent ring-1 ring-[var(--bridge-gold)]/20 hover:ring-[var(--bridge-gold)]/40 transition-all duration-300 hover:shadow-lg">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-brand-orange flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-brand-orange/30">
                <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-base font-semibold text-theme-light-body dark:text-theme-dark-body mb-1">
                  Email
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-theme-light-heading dark:text-white truncate">
                  contact@gyansetu.com
                </p>
              </div>
            </div>
          </a>

          {/* Phone */}
          <a 
            href="tel:+911234567890"
            className="group block"
          >
            <div className="flex items-center gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-white dark:bg-theme-dark-bg hover:bg-gradient-to-r hover:from-[var(--bridge-gold)]/10 hover:to-transparent ring-1 ring-[var(--bridge-gold)]/20 hover:ring-[var(--bridge-gold)]/40 transition-all duration-300 hover:shadow-lg">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-brand-orange flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-brand-orange/30">
                <Phone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-base font-semibold text-theme-light-body dark:text-theme-dark-body mb-1">
                  Phone
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-theme-light-heading dark:text-white">
                  +91 123 456 7890
                </p>
              </div>
            </div>
          </a>

          {/* Address */}
          <div>
            <div className="flex items-start gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-white dark:bg-theme-dark-bg ring-1 ring-[var(--bridge-gold)]/20 transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-brand-orange flex items-center justify-center shadow-lg shadow-brand-orange/30">
                <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm sm:text-base font-semibold text-theme-light-body dark:text-theme-dark-body mb-1">
                  Address
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-theme-light-heading dark:text-white leading-relaxed">
                  123 Education Street,<br className="hidden sm:block" /> New Delhi, India 110001
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
