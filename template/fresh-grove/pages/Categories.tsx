// config import removed to fix TS6133
export default function Categories() {
  const categories = [
    { name: "Furniture", icon: "https://picsum.photos/id/40/200/200" },
    { name: "Lighting", icon: "https://picsum.photos/id/41/200/200" },
    { name: "Fabric & Rugs", icon: "https://picsum.photos/id/42/200/200" },
    { name: "Tableware", icon: "https://picsum.photos/id/43/200/200" },
    { name: "Decoration", icon: "https://picsum.photos/id/44/200/200" },
    { name: "Plants", icon: "https://picsum.photos/id/45/200/200" }
  ];

  return (
    <div className="w-full py-16 bg-[#fafafa] border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-nowrap overflow-x-auto gap-8 sm:gap-12 md:justify-center scrollbar-hide py-4 px-8 md:px-12">
          {categories.map((c, i) => (
            <div key={i} className="flex flex-col items-center flex-shrink-0 group cursor-pointer w-[90px] sm:w-auto">
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-4 shadow-sm border border-black/5 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                <img src={c.icon} alt={c.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100" />
              </div>
              <span className="text-[10px] sm:text-sm font-bold tracking-widest uppercase text-gray-600 group-hover:text-black transition-colors text-center leading-tight">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
