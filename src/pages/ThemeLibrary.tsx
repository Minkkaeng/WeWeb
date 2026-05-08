import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemePreviewModal } from "../components/ThemePreviewModal";

// Assets - Import aliases are consistent with filenames
import freshActualImg from "../assets/images/fresh_grove_actual.png";
import freshMobileActualImg from "../assets/images/fresh_grove_mobile_actual.png";
import wiseActualImg from "../assets/images/wise_actual.png";
import wiseMobileActualImg from "../assets/images/wise_mobile_actual.png";
import pickActualImg from "../assets/images/pick_actual.png";
import pickMobileActualImg from "../assets/images/pick_mobile_actual.png";
import minimalActualImg from "../assets/images/minimalist_studio_actual.png";
import minimalMobileActualImg from "../assets/images/minimalist_studio_mobile_actual.png";
import naamActualImg from "../assets/images/naam_actual.png";
import naamMobileActualImg from "../assets/images/naam_mobile_actual.png";
import knexusActualImg from "../assets/images/knexus_actual.png";
import knexusMobileActualImg from "../assets/images/knexus_mobile_actual.png";
import kookmin25ActualImg from "../assets/images/kookmin25_actual.png";
import kookmin25MobileActualImg from "../assets/images/kookmin25_mobile_actual.png";
import bokjiActualImg from "../assets/images/bokji_actual.png";
import bokjiMobileActualImg from "../assets/images/bokji_mobile_actual.png";
import evergovNetworkActualImg from "../assets/images/evergov_network_actual.png";
import evergovNetworkMobileActualImg from "../assets/images/evergov_network_mobile_actual.png";
import kareumDesktopImg from "../assets/images/kareum_actual.png";
import kareumMobileImg from "../assets/images/kareum_mobile_actual.png";
import leafLineActualImg from "../assets/images/leaf_line_actual.png";
import leafLineMobileActualImg from "../assets/images/leaf_line_mobile_actual.png";
import allpetActualImg from "../assets/images/allpet_actual.png";
import allpetMobileActualImg from "../assets/images/allpet_mobile_actual.png";
import grandTasteActualImg from "../assets/images/grand_taste_actual.png";
import grandTasteMobileActualImg from "../assets/images/grand_taste_mobile_actual.png";
import brunLoveTannActualImg from "../assets/images/brun_love_tann_actual.png";
import brunLoveTannMobileActualImg from "../assets/images/brun_love_tann_mobile_actual.png";
import luvidActualImg from "../assets/images/luvid_actual.png";
import luvidMobileActualImg from "../assets/images/luvid_mobile_actual.png";
import veloceActualImg from "../assets/images/veloce_actual.png";
import veloceMobileActualImg from "../assets/images/veloce_mobile_actual.png";
import archivActualImg from "../assets/images/archiv_actual.png";
import archivMobileActualImg from "../assets/images/archiv_mobile_actual.png";

const categories = ["ALL", "쇼핑몰", "기업 브랜드", "관공서", "포털사이트", "기타"];

const themeLibraryData = [
  {
    id: 1,
    title: "FRESH GROVE",
    category: "쇼핑몰",
    imgColor: "bg-emerald-50",
    desktopThumbnail: freshActualImg,
    mobileThumbnail: freshMobileActualImg,
  },
  {
    id: 2,
    title: "WISE",
    category: "쇼핑몰",
    imgColor: "bg-black",
    desktopThumbnail: wiseActualImg,
    mobileThumbnail: wiseMobileActualImg,
  },
  {
    id: 3,
    title: "BRUNLØVETANN",
    category: "쇼핑몰",
    imgColor: "bg-[#f3e9dc]",
    desktopThumbnail: pickActualImg,
    mobileThumbnail: pickMobileActualImg,
  },
  {
    id: 4,
    title: "MINIMAL",
    category: "기업 브랜드",
    imgColor: "bg-[#111111]",
    desktopThumbnail: minimalActualImg,
    mobileThumbnail: minimalMobileActualImg,
  },
  {
    id: 5,
    title: "NAAM",
    category: "쇼핑몰",
    imgColor: "bg-[#FDF6E3]",
    desktopThumbnail: naamActualImg,
    mobileThumbnail: naamMobileActualImg,
  },
  {
    id: 6,
    title: "K-NEXUS",
    category: "기업 브랜드",
    imgColor: "bg-[#0A0A0A]",
    desktopThumbnail: knexusActualImg,
    mobileThumbnail: knexusMobileActualImg,
  },
  {
    id: 7,
    title: "KOOKMIN25",
    category: "기타",
    imgColor: "bg-white",
    desktopThumbnail: kookmin25ActualImg,
    mobileThumbnail: kookmin25MobileActualImg,
  },
  {
    id: 8,
    title: "BOKJI",
    category: "관공서",
    imgColor: "bg-[#EEF2FF]",
    desktopThumbnail: bokjiActualImg,
    mobileThumbnail: bokjiMobileActualImg,
  },
  {
    id: 9,
    title: "EVERGOV-NETWORK",
    category: "관공서",
    imgColor: "bg-[#F8FAFC]",
    desktopThumbnail: evergovNetworkActualImg,
    mobileThumbnail: evergovNetworkMobileActualImg,
  },
  {
    id: 10,
    title: "KAREUM",
    category: "관공서",
    imgColor: "bg-[#FAFAFA]",
    desktopThumbnail: kareumDesktopImg,
    mobileThumbnail: kareumMobileImg,
  },
  {
    id: 11,
    title: "LEAF & LINE",
    category: "쇼핑몰",
    imgColor: "bg-white",
    desktopThumbnail: leafLineActualImg,
    mobileThumbnail: leafLineMobileActualImg,
  },
  {
    id: 12,
    title: "ALLPET",
    category: "포털사이트",
    imgColor: "bg-white",
    desktopThumbnail: allpetActualImg,
    mobileThumbnail: allpetMobileActualImg,
  },
  {
    id: 13,
    title: "GRAND-TASTE",
    category: "쇼핑몰",
    imgColor: "bg-black",
    desktopThumbnail: grandTasteActualImg,
    mobileThumbnail: grandTasteMobileActualImg,
  },
  {
    id: 15,
    title: "LUVID",
    category: "기업 브랜드",
    imgColor: "bg-[#FDFCFB]",
    desktopThumbnail: luvidActualImg,
    mobileThumbnail: luvidMobileActualImg,
  },
  {
    id: 16,
    title: "VELOCE",
    category: "기업 브랜드",
    imgColor: "bg-[#F9F9F9]",
    desktopThumbnail: veloceActualImg,
    mobileThumbnail: veloceMobileActualImg,
  },
  {
    id: 17,
    title: "ARCHIV",
    category: "포털사이트",
    imgColor: "bg-[#F8F7FF]",
    desktopThumbnail: archivActualImg,
    mobileThumbnail: archivMobileActualImg,
  }
];

export const ThemeLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState<any>(null);

  const filteredThemes = themeLibraryData.filter((theme) => {
    if (selectedCategory === "ALL") return true;
    return theme.category === selectedCategory;
  });

  const openPreview = (theme: any) => {
    setActiveTheme(theme);
    setIsPreviewOpen(true);
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-deep-black mb-4 tracking-tighter">Theme Library</h1>
          <p className="text-gray-500 font-light max-w-2xl">
            다양한 산업군에 최적화된 고품질 웹 템플릿을 경험해 보세요. <br/>
            모든 템플릿은 반응형 디자인과 최적화된 UX를 제공합니다.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-widest transition-all ${
                selectedCategory === category
                  ? "bg-blood-coral text-white shadow-lg shadow-blood-coral/20"
                  : "bg-gray-50 text-gray-400 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Theme Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredThemes.map((theme) => (
              <motion.div
                layout
                key={theme.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-700 cursor-pointer"
                onClick={() => openPreview(theme)}
              >
                <div className={`aspect-[16/10] overflow-hidden relative ${theme.imgColor}`}>
                  <img
                    src={theme.desktopThumbnail}
                    alt={theme.title}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold text-blood-coral tracking-widest uppercase">
                      {theme.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-deep-black tracking-tight group-hover:text-blood-coral transition-colors">
                    {theme.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {activeTheme && (
        <ThemePreviewModal
          isOpen={isPreviewOpen}
          onClose={() => setIsPreviewOpen(false)}
          themeTitle={activeTheme.title}
          themeCategory={activeTheme.category}
        />
      )}
    </div>
  );
};
