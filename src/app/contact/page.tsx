import React from 'react';
import { MdEmail } from 'react-icons/md';
import WindowTemplate from '@/components/WindowTemplate';

export default function ContactPage() {
  return (
    <WindowTemplate
      title="Contact"
      icon={MdEmail}
    >
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold mb-6 text-[#222266]">Contact Me</h1>
        <p className="text-lg mb-8 text-[#222266]">
          Please feel free to contact me via email or any social media platforms.
        </p>
        <a
          href="mailto:tomohiroyoshida10@gmail.com"
          className="inline-block bg-[#c0c0c0] text-black px-6 py-2 border-2 border-[#808080] hover:bg-[#d0d0d0] transition-colors duration-200"
        >
          Send me an email
        </a>
      </div>
    </WindowTemplate>
  );
}
