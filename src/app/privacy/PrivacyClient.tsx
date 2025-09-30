'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

// Custom Skeleton components
const SkeletonImage = ({ className }: { className?: string }) => (
  <div className={`bg-gray-200 animate-pulse rounded-2xl ${className}`}></div>
);

const SkeletonAvatar = ({ size = 40 }: { size?: number }) => (
  <div className={`bg-gray-200 animate-pulse rounded-full`} style={{ width: size, height: size }}></div>
);

export default function PrivacyClient() {
  const [imageLoading, setImageLoading] = useState({
    hero: true,
    chatAvatar: true,
    locationShare: true,
    contentControl: true,
    trust: true
  });

  const handleImageLoad = (imageKey: keyof typeof imageLoading) => {
    setImageLoading(prev => ({ ...prev, [imageKey]: false }));
  };

  const handleImageError = (imageKey: keyof typeof imageLoading) => {
    console.error(`Failed to load image: ${imageKey}`);
    setImageLoading(prev => ({ ...prev, [imageKey]: false }));
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-20 px-4 text-center bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold text-gray-900 mb-4 sm:mb-6 text-left lg:text-center">
            <span className="text-blue-600">An toàn </span> quản lý
            <br />
            nội dung của bạn
          </h1>
          <div className="mb-12 w-full">
            <div className="relative w-full">
              {imageLoading.hero && (
                <SkeletonImage className="w-full h-64 sm:h-72 md:h-80 absolute inset-0" />
              )}
              <Image
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team working on content management"
                width={1170}
                height={400}
                className={`w-full h-80 object-cover rounded-2xl mx-auto shadow-lg transition-opacity duration-300 ${
                  imageLoading.hero ? 'opacity-0' : 'opacity-100'
                }`}
                onLoad={() => handleImageLoad('hero')}
                onError={() => handleImageError('hero')}
                priority
              />
            </div>
          </div>
          <p className="text-md text-gray-600 mb-8 max-w-2xl mx-auto">
            Quản lý và bảo vệ nội dung của bạn một cách an toàn và bảo mật với
            hệ thống CMS hiện đại và đội ngũ chuyên nghiệp
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-8 sm:py-12 lg:py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Icon icon="fluent:shield-24-regular" className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Bảo mật tuyệt đối</h3>
            <p className="text-gray-600 text-sm">
              Dữ liệu và nội dung được bảo vệ bằng công nghệ mã hóa tiên tiến
            </p>
          </div>
          <div className="text-center p-6">
            <Icon icon="fluent:people-24-regular" className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Quản lý nhóm</h3>
            <p className="text-gray-600 text-sm">
              Cộng tác an toàn với đội ngũ và kiểm soát quyền truy cập
            </p>
          </div>
          <div className="text-center p-6">
            <Icon icon="fluent:document-24-regular" className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Quản lý nội dung</h3>
            <p className="text-gray-600 text-sm">
              Tạo, chỉnh sửa và xuất bản nội dung một cách an toàn
            </p>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-8 sm:py-12 lg:py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-3 sm:mb-4">
            Bảo vệ hệ thống quản lý
            <br />
            nội dung của chúng tôi
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Chúng tôi xây dựng một môi trường an toàn và đáng tin cậy để mọi người có thể
            quản lý nội dung một cách tự tin và bảo mật.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ngăn chặn truy cập trái phép</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Chúng tôi có các biện pháp bảo vệ để ngăn chặn truy cập trái phép, thay đổi nội dung không được phép và các hoạt động đáng ngờ trong hệ thống CMS.
                </p>
              </div>
              <a href="#" className="text-blue-600 underline hover:text-blue-700 transition-colors cursor-pointer">
                Tìm hiểu thêm
              </a>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cung cấp quyền kiểm soát hoàn toàn</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Bạn có toàn quyền kiểm soát nội dung, ai có thể truy cập và chỉnh sửa, cũng như cách quản lý workflow trong hệ thống CMS.
                </p>
              </div>
              <a href="#" className="text-blue-600 underline hover:text-blue-700 transition-colors cursor-pointer">
                Tìm hiểu thêm
              </a>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hỗ trợ chuyên nghiệp</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Chúng tôi có đội ngũ hỗ trợ chuyên nghiệp để xem xét và xử lý các vấn đề bảo mật. Chúng tôi tuân thủ <a href="#" className="text-blue-600 underline hover:text-blue-700 transition-colors cursor-pointer">Tiêu chuẩn bảo mật</a> của mình và luôn sẵn sàng hỗ trợ bạn khi cần thiết.
                </p>
                <a href="#" className="text-blue-600 underline hover:text-blue-700 transition-colors cursor-pointer">
                  Tìm hiểu thêm
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Features */}
      <section className="py-8 sm:py-12 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Feature 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-blue-50 rounded-3xl p-8">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center gap-3 mb-4 w-full">
                    <div className="relative w-10 h-10">
                      {imageLoading.chatAvatar && (
                        <SkeletonAvatar size={40} />
                      )}
                      <Image
                        src="https://i.pinimg.com/736x/66/82/08/668208d192e8f1940477efab820751fe.jpg"
                        alt="Content Manager"
                        width={40}
                        height={40}
                        className={`w-10 h-10 rounded-full object-cover transition-opacity duration-300 ${
                          imageLoading.chatAvatar ? 'opacity-0' : 'opacity-100'
                        }`}
                        onLoad={() => handleImageLoad('chatAvatar')}
                        onError={() => handleImageError('chatAvatar')}
                      />
                    </div>
                    <div>
                      <div className="font-medium">Content Manager</div>
                      <div className="text-sm text-gray-500">Đang làm việc trên dự án CMS</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-blue-600 text-white p-3 rounded-2xl rounded-br-md ml-auto max-w-xs">
                      Bạn có thể review bản draft mới của tôi không?
                    </div>
                    <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-md max-w-xs">
                      Chắc chắn! Tôi sẽ kiểm tra ngay 😊
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Cộng tác dễ dàng với
                <br />
                <span className="text-blue-600">đội ngũ quản lý nội dung</span>
              </h3>
              <p className="text-gray-600 mb-6">
                Làm việc cùng nhau với đội ngũ, chia sẻ tài nguyên và quản lý workflow
                một cách hiệu quả và an toàn.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2 w-full">
              <div className="relative w-full">
                {imageLoading.locationShare && (
                  <SkeletonImage className="w-full h-64 sm:h-72 md:h-80 absolute inset-0" />
                )}
                <Image
                  src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Secure content management"
                  width={1170}
                  height={400}
                  className={`w-full h-80 object-cover rounded-2xl shadow-lg transition-opacity duration-300 ${
                    imageLoading.locationShare ? 'opacity-0' : 'opacity-100'
                  }`}
                  onLoad={() => handleImageLoad('locationShare')}
                  onError={() => handleImageError('locationShare')}
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                <span className="text-blue-600">Quản lý nội dung</span> an toàn
                <br />
                và bảo mật
              </h3>
              <p className="text-gray-600 mb-6">
                Quản lý và chia sẻ nội dung một cách an toàn với các tính năng bảo mật
                tiên tiến và kiểm soát quyền truy cập chặt chẽ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Control Section */}
      <section className="py-8 sm:py-12 lg:py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Kiểm soát <span className="text-blue-600">hoàn toàn</span>
            <br />
            <span className="text-blue-600">quyền truy cập</span> nội dung
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Bạn có toàn quyền kiểm soát ai có thể truy cập và chỉnh sửa nội dung.
            Thiết lập quyền hạn, workflow và mức độ bảo mật phù hợp với tổ chức.
          </p>

          <div className="relative w-full">
            {imageLoading.contentControl && (
              <SkeletonImage className="w-full h-80 sm:h-96 md:h-[400px] absolute inset-0" />
            )}
            <Image
              src="https://images.unsplash.com/photo-1646337005884-20d2c95fa786?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Content access control"
              width={1170}
              height={400}
              className={`w-full h-96 object-cover rounded-2xl shadow-lg transition-opacity duration-300 ${
                imageLoading.contentControl ? 'opacity-0' : 'opacity-100'
              }`}
              onLoad={() => handleImageLoad('contentControl')}
              onError={() => handleImageError('contentControl')}
            />
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-8 sm:py-12 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12 sm:mb-16">
            <span className="text-blue-600">Bảo mật là ưu tiên hàng đầu</span> của chúng tôi
          </h2>

          <p className="text-gray-600 mb-8">
            Chúng tôi tin rằng bảo mật dữ liệu là nền tảng của mọi hệ thống CMS.
            Vì vậy, chúng tôi đã xây dựng CMS với các công cụ bảo mật mạnh mẽ
            để bảo vệ thông tin và nội dung của bạn.
          </p>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="h-[300px] flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-4 ">
                <div className="bg-white rounded-xl p-6 shadow-md text-center">
                  <Icon icon="fluent:shield-24-regular" className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Mã hóa dữ liệu</h4>
                  <p className="text-sm text-gray-600">Nội dung được bảo vệ an toàn</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md text-center">
                  <Icon icon="fluent:lock-24-regular" className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Kiểm soát truy cập</h4>
                  <p className="text-sm text-gray-600">Bạn quyết định ai có thể truy cập</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl p-8 h-[300px] hidden lg:grid">
              <div className="bg-white rounded-2xl shadow-lg p-8 h-[200px]">
                <div className="flex items-center gap-3 mb-4">
                  <Icon icon="fluent:shield-checkmark-24-regular" className="w-6 h-6 text-green-500" />
                  <span className="text-sm font-medium text-green-600">Được bảo vệ</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Nội dung của bạn</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Tất cả nội dung được bảo mật và chỉ những người được ủy quyền mới có thể truy cập.
                </p>
                <div className="flex items-center gap-2">
                  <Icon icon="fluent:heart-24-regular" className="w-4 h-4 text-red-500" />
                  <span className="text-xs text-gray-500">Được tin tưởng bởi hàng ngàn tổ chức</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-8 sm:py-12 lg:py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
            Cam kết bảo vệ
            <br />
            hệ thống quản lý nội dung
            <br />
            của chúng tôi
          </h2>

          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <div className="lg:w-1/2 w-full">
              <div className="relative w-full">
                {imageLoading.trust && (
                  <SkeletonImage className="w-full h-64 sm:h-72 md:h-80 absolute inset-0" />
                )}
                <Image
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Team working on CMS security"
                  width={1170}
                  height={400}
                  className={`w-full h-80 object-cover rounded-2xl shadow-lg transition-opacity duration-300 ${
                    imageLoading.trust ? 'opacity-0' : 'opacity-100'
                  }`}
                  onLoad={() => handleImageLoad('trust')}
                  onError={() => handleImageError('trust')}
                />
              </div>
            </div>
            <div className="lg:w-1/2 text-left">
              <p className="text-gray-600 mb-6">
                Chúng tôi cam kết xây dựng một hệ thống CMS an toàn và đáng tin cậy.
                Với đội ngũ phát triển chuyên nghiệp, chúng tôi không ngừng
                cải tiến để mang đến trải nghiệm quản lý nội dung tốt nhất.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Bảo mật đa lớp cho CMS</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Kiểm tra bảo mật định kỳ</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Hỗ trợ kỹ thuật 24/7</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-8 sm:py-12 lg:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12 sm:mb-16">
            Công nghệ được sử dụng
          </h2>

          <div className="bg-blue-50 rounded-3xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Bảo mật tiên tiến</h3>
                <p className="text-gray-600 text-sm">
                  Sử dụng các công nghệ bảo mật mới nhất để đảm bảo an toàn cho hệ thống CMS
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span>Mã hóa dữ liệu người dùng</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span>Bảo vệ thông tin tổ chức</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span>Xác thực đa yếu tố</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Trải nghiệm mượt mà</h3>
                <p className="text-gray-600 text-sm">
                  Tối ưu hóa để mang lại trải nghiệm quản lý nội dung mượt mà và hiệu quả
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span>Tạo nội dung tức thì</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span>Đồng bộ đa thiết bị</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span>Tối ưu hiệu suất</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Power Source */}
      <section className="py-8 sm:py-12 lg:py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-12 sm:mb-16">
            Bắt đầu sử dụng CMS<br />
            ngay hôm nay
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-2xl mx-auto">
            <button className="bg-black text-white px-3 py-2 rounded-xl flex items-center justify-center space-x-2 hover:bg-gray-800 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer transform flex-1">
              <Icon icon="fluent:document-24-regular" className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs">Bắt đầu</div>
                <div className="font-medium text-sm">Tạo dự án</div>
              </div>
            </button>

            <button className="bg-black text-white px-3 py-2 rounded-xl flex items-center justify-center space-x-2 hover:bg-gray-800 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer transform flex-1">
              <Icon icon="fluent:desktop-24-regular" className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs">Tải về</div>
                <div className="font-medium text-sm">Desktop App</div>
              </div>
            </button>

            <button className="bg-black text-white px-3 py-2 rounded-xl flex items-center justify-center space-x-2 hover:bg-gray-800 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer transform flex-1">
              <Icon icon="fluent:globe-24-regular" className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs">Truy cập</div>
                <div className="font-medium text-sm">Web Dashboard</div>
              </div>
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-gray-500">
            <span>Khả dụng trên</span>
            <div className="flex items-center gap-4">
              <Icon icon="fluent:phone-24-regular" className="w-6 h-6" />
              <Icon icon="fluent:globe-24-regular" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
