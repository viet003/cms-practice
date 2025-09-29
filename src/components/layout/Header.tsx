'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { logo } from '../../assets/images';
import { path } from '../../utilities/path';

interface HeaderProps {
  isScrolled?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Disable scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-[60] w-full ${isScrolled
        ? 'backdrop-blur-lg bg-white/95 border-b border-gray-200'
        : 'bg-transparent'
        }`}>
        <nav className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px] rounded-full flex items-center justify-center overflow-hidden">
              <Link href={path.LANDING}>
                <Image
                  src={logo}
                  alt="CMS Logo"
                  width={90}
                  height={90}
                  className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity duration-200"
                />
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8 text-xs lg:text-[15px] text-gray-900 font-semibold">
            {[
              { text: "Tính năng ▼", to: "/features" },
              { text: "Quyền riêng tư và an toàn", to: "/privacy" },
              { text: "Ứng dụng dành cho máy tính", to: path.DESKTOP_APP },
              { text: "Dành cho nhà phát triển", to: path.LOGIN },
              { text: "Trung tâm trợ giúp", to: path.HELP },
            ].map((item, index) => (
              <Link
                key={index}
                href={item?.to || path.LANDING}
                className="font-medium cursor-pointer transition-all duration-200 
                 hover:underline decoration-3 
                 decoration-blue-600 
                 hover:underline-offset-4
                 text-gray-900"
              >
                {item.text}
              </Link>
            ))}
          </div>
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay - Outside header */}
      <div className={`md:hidden fixed inset-0 z-[70] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Side Menu */}
        <div className={`absolute left-0 top-0 h-screen w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-blue-50">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden">
                <Link href={path.LANDING}>
                  <Image
                    src={logo}
                    alt="CMS Logo"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity duration-200"
                  />
                </Link>
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-gray-900">CMS Practice</h2>
                <p className="text-xs text-gray-500">Content Management</p>
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full cursor-pointer transition-all duration-200"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Menu */}
          <div className="px-6 py-6 flex-1">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 sm:mb-4">Menu</h3>
            <div className="space-y-1">
              <Link
                href="/features"
                className="flex items-center space-x-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 group text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                <Icon icon="fluent:flash-24-regular" className="w-6 h-6 transition-colors duration-200 text-gray-600 group-hover:text-blue-600" />
                <span className="flex-1 text-sm sm:text-base font-medium cursor-pointer transition-all duration-200 
                hover:underline decoration-2 
                decoration-blue-600 
                hover:underline-offset-4">Tính năng</span>
                <Icon icon="fluent:chevron-right-24-regular" className="w-5 h-5 transition-colors duration-200 text-gray-400 group-hover:text-blue-600" />
              </Link>
              {[
                { text: "Quyền riêng tư và an toàn", icon: "fluent:shield-24-regular", to: "/privacy" },
                { text: "Ứng dụng dành cho máy tính", icon: "fluent:desktop-24-regular", to: path.DESKTOP_APP },
                { text: "Dành cho nhà phát triển", icon: "fluent:code-24-regular", to: null },
                { text: "Trung tâm trợ giúp", icon: "fluent:question-circle-24-regular", to: path.HELP },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item?.to || path.LANDING}
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 group text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                >
                  <Icon icon={item.icon} className="w-6 h-6 transition-colors duration-200 text-gray-600 group-hover:text-blue-600" />
                  <span className="flex-1 text-sm sm:text-base font-medium cursor-pointer transition-all duration-200 
                  hover:underline decoration-2 
                  decoration-blue-600 
                  hover:underline-offset-4">{item.text}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Info */}
          <div className="px-6 py-4 border-t border-gray-100 mt-auto">
            <div className="text-center">
              <p className="text-xs text-gray-400 mb-2">© CMS Practice 2025</p>
              <div className="flex justify-center space-x-4 text-xs">
                {[
                  { text: "Chính sách", to: path.PRIVACY },
                  { text: "Điều khoản", to: null },
                  { text: "Hỗ trợ", to: path.HELP },
                ].map((item, i) => (
                  <Link
                    key={i}
                    href={item?.to || path.LANDING}
                    className="font-medium
                    text-gray-400
                    cursor-pointer transition-all duration-200 
                    hover:underline decoration-2 
                    decoration-blue-600 
                    hover:underline-offset-4"
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
