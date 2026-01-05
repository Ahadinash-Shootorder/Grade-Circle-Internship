import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0b0b0b] to-[#0f0f0f] px-4">
      <div className="max-w-3xl w-full bg-[#0a0a0a] rounded-2xl p-8 md:p-12 text-center shadow-lg border border-[#ffffff10]">
        <img
          src="https://c.animaapp.com/mjmwrwbp4K97wU/img/gradcircle--white-orange-logo--png-1.png"
          alt="GradCircle Logo"
          className="mx-auto w-[260px] h-auto object-contain mb-8"
        />

        <h1 className="text-white text-2xl md:text-3xl font-semibold mb-4">Thanks for reaching out!</h1>
        <p className="text-[#ffffffcc] text-base md:text-lg mb-6">
          Our team will contact you shortly to discuss your plans and next steps. If you provided a phone
          number, expect a call or message within 1-2 business days.
        </p>

        <Link to="/" className="inline-block px-6 py-3 bg-[#ef7f1a] text-white rounded-md font-medium hover:bg-[#d66f15]">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
