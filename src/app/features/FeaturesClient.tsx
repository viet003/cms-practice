'use client';

import { useState } from 'react';
import Image from 'next/image';
import { featChat, featDiscover, featSearch, featShare, featSuggest } from '../../assets/images';

const SkeletonImage = ({ className }: { className?: string }) => (
  <div className={`bg-gray-200 animate-pulse rounded-2xl ${className}`}></div>
);

export default function FeaturesClient() {
  const [imageLoading, setImageLoading] = useState({
    feat1: true,
    feat2: true,
    feat3: true,
    feat4: true,
    feat5: true
  });

  const handleImageLoad = (imageKey: keyof typeof imageLoading) => {
    setImageLoading(prev => ({ ...prev, [imageKey]: false }));
  };

  const handleImageError = (imageKey: keyof typeof imageLoading) => {
    console.log(`Image failed to load: ${imageKey}`);
    setImageLoading(prev => ({ ...prev, [imageKey]: false }));
  };

  return (
    <div className="w-full">
      {/* First Feature Section */}
      <div className="py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-5xl lg:text-6xl font-bold text-blue-600 mb-8 leading-tight">
                <div>Tạo.</div>
                <div>Quản lý.</div>
                <div>Xuất bản.</div>
              </h1>
              <p className="text-md text-gray-700 leading-relaxed max-w-2xl">
                Tạo nội dung chất lượng cao, quản lý tài nguyên một cách hiệu quả và xuất bản nội dung trên nhiều nền tảng khác nhau - tất cả trong một hệ thống quản lý nội dung hiện đại.
              </p>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end w-full">
              {imageLoading.feat1 ? (
                <SkeletonImage 
                  className="!w-full !h-64 sm:!w-full sm:!h-80 md:!w-full md:!h-96 lg:!w-full lg:!h-[400px] max-w-md sm:max-w-lg lg:max-w-2xl"
                />
              ) : null}
              <Image
                src={featChat}
                alt="Feature 1 - Create, Manage, Publish"
                width={600}
                height={400}
                className={`w-full max-w-md sm:max-w-lg lg:max-w-2xl h-auto rounded-2xl ${imageLoading.feat1 ? 'hidden' : 'block'}`}
                onLoad={() => handleImageLoad('feat1')}
                onError={() => handleImageError('feat1')}
              />
            </div>
          </div>
        </div>
      </div>


      {/* Second Feature Section: Collaborate and share */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <p className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-4">CỘNG TÁC VÀ CHIA SẺ</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                <div>Cộng tác với nhóm,</div>
                <div>chia sẻ nội dung</div>
              </h2>
              <p className="text-md text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Làm việc cùng nhau với nhóm của bạn, chia sẻ tài nguyên và quản lý quy trình làm việc một cách hiệu quả.
              </p>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end w-full">
              {imageLoading.feat2 ? (
                <SkeletonImage 
                  className="!w-full !h-64 sm:!w-full sm:!h-80 md:!w-full md:!h-96 lg:!w-full lg:!h-[400px] max-w-md sm:max-w-lg lg:max-w-2xl"
                />
              ) : null}
              <Image
                src={featShare}
                alt="Feature 2 - Collaborate and share content"
                width={600}
                height={400}
                className={`w-full max-w-md sm:max-w-lg lg:max-w-2xl h-auto rounded-2xl ${imageLoading.feat2 ? 'hidden' : 'block'}`}
                onLoad={() => handleImageLoad('feat2')}
                onError={() => handleImageError('feat2')}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Third Feature Section: Smart content suggestions */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 flex justify-center lg:justify-start order-2 lg:order-1 w-full">
              {imageLoading.feat3 ? (
                <SkeletonImage 
                  className="!w-full !h-64 sm:!w-full sm:!h-80 md:!w-full md:!h-96 lg:!w-full lg:!h-[400px] max-w-md sm:max-w-lg lg:max-w-2xl"
                />
              ) : null}
              <Image
                src={featSuggest}
                alt="Feature 3 - Smart Content Suggestions"
                width={600}
                height={400}
                className={`w-full max-w-md sm:max-w-lg lg:max-w-2xl h-auto rounded-2xl ${imageLoading.feat3 ? 'hidden' : 'block'}`}
                onLoad={() => handleImageLoad('feat3')}
                onError={() => handleImageError('feat3')}
              />
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <p className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-4">GỢI Ý NỘI DUNG THÔNG MINH</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                <div>Nhận gợi ý nội dung</div>
                <div>thông minh</div>
              </h2>
              <p className="text-md text-gray-700 leading-relaxed max-w-2xl mb-4">
                Sử dụng AI để nhận gợi ý nội dung phù hợp, tối ưu hóa SEO và tăng cường hiệu quả làm việc của bạn.
              </p>
              <p className="text-sm text-gray-500">
                *Hệ thống AI sẽ phân tích nội dung và đưa ra gợi ý để cải thiện chất lượng và hiệu quả
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Feature Section: Advanced search and analytics */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <p className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-4">TÌM KIẾM VÀ PHÂN TÍCH</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                <div>Tìm kiếm nội dung</div>
                <div>và phân tích hiệu quả</div>
              </h2>
              <p className="text-md text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Tìm kiếm nội dung một cách thông minh, theo dõi hiệu suất và phân tích dữ liệu để tối ưu hóa chiến lược nội dung.
              </p>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end w-full">
              {imageLoading.feat4 ? (
                <SkeletonImage 
                  className="!w-full !h-64 sm:!w-full sm:!h-80 md:!w-full md:!h-96 lg:!w-full lg:!h-[400px] max-w-md sm:max-w-lg lg:max-w-2xl"
                />
              ) : null}
              <Image
                src={featSearch}
                alt="Feature 4 - Search and analytics"
                width={600}
                height={400}
                className={`w-full max-w-md sm:max-w-lg lg:max-w-2xl h-auto rounded-2xl ${imageLoading.feat4 ? 'hidden' : 'block'}`}
                onLoad={() => handleImageLoad('feat4')}
                onError={() => handleImageError('feat4')}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Fifth Feature Section: Discover and organize */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 flex justify-center lg:justify-start order-2 lg:order-1 w-full">
              {imageLoading.feat5 ? (
                <SkeletonImage 
                  className="!w-full !h-64 sm:!w-full sm:!h-80 md:!w-full md:!h-96 lg:!w-full lg:!h-[400px] max-w-md sm:max-w-lg lg:max-w-2xl"
                />
              ) : null}
              <Image
                src={featDiscover}
                alt="Feature 5 - Discover and organize"
                width={600}
                height={400}
                className={`w-full max-w-md sm:max-w-lg lg:max-w-2xl h-auto rounded-2xl ${imageLoading.feat5 ? 'hidden' : 'block'}`}
                onLoad={() => handleImageLoad('feat5')}
                onError={() => handleImageError('feat5')}
              />
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <p className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-4">KHÁM PHÁ VÀ TỔ CHỨC</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                <div>Khám phá và</div>
                <div>tổ chức nội dung</div>
              </h2>
              <p className="text-md text-gray-700 leading-relaxed max-w-2xl mb-4">
                Khám phá các mẫu nội dung có sẵn, tổ chức thư viện tài nguyên và quản lý workflow một cách hiệu quả.
              </p>
              <p className="text-sm text-gray-500">
                Hệ thống quản lý nội dung thông minh giúp bạn tổ chức và tìm kiếm nội dung một cách dễ dàng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
