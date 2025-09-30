'use client';

import Link from 'next/link';
import Image from 'next/image';
import { path } from '../../utilities/path';
import { getDirectusAssetURL } from '../../lib/directus/directus-utils';
import { DirectusFile } from '../../types/directus-schema';

interface FooterProps {
  subLogo?: DirectusFile | string | null;
  siteTitle?: string | null;
}

const Footer: React.FC<FooterProps> = ({ subLogo: footerSubLogo, siteTitle }) => {
  return (
    <footer className="bg-white py-6 sm:py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center text-xs sm:text-sm text-gray-900 space-y-4 lg:space-y-0">
          <div className="text-gray-900 order-3 lg:order-1">© Travel Social 2025</div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 order-2">
            {[
              { text: "Chính sách quyền riêng tư", to: null },
              { text: "Chính sách cookie", to: null },
              { text: "Điều khoản", to: null },
              { text: "Tiếng Việt ▼", to: null },
            ].map((item, i) => (
              <Link
                key={i}
                href={item?.to || path.LANDING}
                className="font-medium cursor-pointer transition-all duration-200 
                hover:underline decoration-2 
                decoration-blue-600 
                hover:underline-offset-4"
              >
                {item.text}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-2 text-gray-400 order-1 lg:order-3">
            <Image
              src={getDirectusAssetURL(footerSubLogo)}
              alt={`${siteTitle || "Travel Social"} Sub Logo`}
              width={200}
              height={50}
              unoptimized={true}
              className="w-[200px] object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
