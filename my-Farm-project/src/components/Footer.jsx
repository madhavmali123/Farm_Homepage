import React from 'react';
import { SocialIcon } from 'react-social-icons'
console.log()
function Footer() {
  return (
   <footer className="bg-gray-700 text-white px-8 py-6 mt-12">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left side */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">FarmMarket</h2>
          <p className="text-sm text-white">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Center - Links */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-green-600"  >Privacy Policy</a>
          <a href="#" className="hover:text-green-600">Terms</a>
          <a href="#" className="hover:text-green-600">Support</a>
        </div>

        {/* Right - Social Icons (optional emojis) */}
        <div className="flex gap-4 text-xl">
          <SocialIcon network = "instagram" url="https://www.instagram.com" />
          <SocialIcon network="facebook" url="https://www.facebook.com" />
          <SocialIcon network="twitter" url="https://www.twitter.com" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
