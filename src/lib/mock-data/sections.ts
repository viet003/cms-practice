export interface Section {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  content?: string;
  image?: string;
  section_type: 'hero' | 'feature' | 'about' | 'testimonial' | 'cta' | 'gallery';
  order: number;
  is_active: boolean;
  page: 'home' | 'features' | 'privacy' | 'about';
}

export const mockSections: Section[] = [
  // Home page sections
  {
    id: 1,
    title: "Khám phá.\nChia sẻ.\nKết nối.",
    description: "Khám phá những điểm đến tuyệt vời, chia sẻ trải nghiệm du lịch của bạn và kết nối với cộng đồng những người yêu thích du lịch trên toàn thế giới.",
    image: "/images/feat_chat.png",
    section_type: "hero",
    order: 1,
    is_active: true,
    page: "home"
  },
  {
    id: 2,
    title: "Chia sẻ hành trình,\nkết nối cộng đồng",
    subtitle: "CHIA SẺ TRẢI NGHIỆM",
    description: "Chia sẻ những khoảnh khắc đẹp trong chuyến du lịch, kết nối với bạn bè và khám phá những điểm đến mới thông qua cộng đồng.",
    image: "/images/feat_share.png",
    section_type: "feature",
    order: 2,
    is_active: true,
    page: "home"
  },
  {
    id: 3,
    title: "Nhận gợi ý điểm đến\nphù hợp với bạn",
    subtitle: "GỢI Ý ĐIỂM ĐẾN THÔNG MINH",
    description: "Sử dụng AI để nhận gợi ý điểm đến phù hợp với sở thích, ngân sách và thời gian của bạn.",
    content: "*Hệ thống AI sẽ phân tích sở thích du lịch và đưa ra gợi ý điểm đến phù hợp nhất",
    image: "/images/feat_suggest.png",
    section_type: "feature",
    order: 3,
    is_active: true,
    page: "home"
  },
  {
    id: 4,
    title: "Tìm kiếm điểm đến\nvà khám phá thế giới",
    subtitle: "TÌM KIẾM VÀ KHÁM PHÁ",
    description: "Tìm kiếm điểm đến mơ ước, khám phá những địa điểm ẩn và lập kế hoạch chuyến du lịch hoàn hảo.",
    image: "/images/feat_search.png",
    section_type: "feature",
    order: 4,
    is_active: true,
    page: "home"
  },
  {
    id: 5,
    title: "Kết nối với\ncộng đồng du lịch",
    subtitle: "KẾT NỐI VÀ TƯƠNG TÁC",
    description: "Kết nối với những người yêu thích du lịch, chia sẻ kinh nghiệm và tìm bạn đồng hành cho những chuyến đi.",
    content: "Tham gia cộng đồng du lịch lớn nhất để chia sẻ và học hỏi kinh nghiệm du lịch.",
    image: "/images/feat_discover.png",
    section_type: "feature",
    order: 5,
    is_active: true,
    page: "home"
  },
  // Features page sections
  {
    id: 6,
    title: "Khám phá.\nChia sẻ.\nKết nối.",
    description: "Khám phá những điểm đến tuyệt vời, chia sẻ trải nghiệm du lịch của bạn và kết nối với cộng đồng những người yêu thích du lịch trên toàn thế giới.",
    image: "/images/feat_chat.png",
    section_type: "hero",
    order: 1,
    is_active: true,
    page: "features"
  },
  {
    id: 7,
    title: "Chia sẻ hành trình,\nkết nối cộng đồng",
    subtitle: "CHIA SẺ TRẢI NGHIỆM",
    description: "Chia sẻ những khoảnh khắc đẹp trong chuyến du lịch, kết nối với bạn bè và khám phá những điểm đến mới thông qua cộng đồng.",
    image: "/images/feat_share.png",
    section_type: "feature",
    order: 2,
    is_active: true,
    page: "features"
  },
  {
    id: 8,
    title: "Nhận gợi ý điểm đến\nphù hợp với bạn",
    subtitle: "GỢI Ý ĐIỂM ĐẾN THÔNG MINH",
    description: "Sử dụng AI để nhận gợi ý điểm đến phù hợp với sở thích, ngân sách và thời gian của bạn.",
    content: "*Hệ thống AI sẽ phân tích sở thích du lịch và đưa ra gợi ý điểm đến phù hợp nhất",
    image: "/images/feat_suggest.png",
    section_type: "feature",
    order: 3,
    is_active: true,
    page: "features"
  },
  {
    id: 9,
    title: "Tìm kiếm điểm đến\nvà khám phá thế giới",
    subtitle: "TÌM KIẾM VÀ KHÁM PHÁ",
    description: "Tìm kiếm điểm đến mơ ước, khám phá những địa điểm ẩn và lập kế hoạch chuyến du lịch hoàn hảo.",
    image: "/images/feat_search.png",
    section_type: "feature",
    order: 4,
    is_active: true,
    page: "features"
  },
  {
    id: 10,
    title: "Kết nối với\ncộng đồng du lịch",
    subtitle: "KẾT NỐI VÀ TƯƠNG TÁC",
    description: "Kết nối với những người yêu thích du lịch, chia sẻ kinh nghiệm và tìm bạn đồng hành cho những chuyến đi.",
    content: "Tham gia cộng đồng du lịch lớn nhất để chia sẻ và học hỏi kinh nghiệm du lịch.",
    image: "/images/feat_discover.png",
    section_type: "feature",
    order: 5,
    is_active: true,
    page: "features"
  }
];

export const getSectionsByPage = (page: string): Section[] => {
  return mockSections
    .filter(section => section.page === page && section.is_active)
    .sort((a, b) => a.order - b.order);
};
