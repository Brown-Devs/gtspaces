"use client";

import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export function MobileCallButton() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-px border-t border-ink-900/10 bg-white shadow-[0_-8px_24px_rgba(11,28,54,0.12)] lg:hidden">
      <a
        href={`tel:+91${siteConfig.phone}`}
        className="flex flex-1 items-center justify-center gap-2 bg-ink-900 py-3.5 text-sm font-semibold text-white"
      >
        <Phone size={16} /> Call Now
      </a>
      <a
        href={siteConfig.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-gold-gradient py-3.5 text-sm font-semibold text-ink-900"
      >
        <MessageCircle size={16} /> WhatsApp
      </a>
    </div>
  );
}
