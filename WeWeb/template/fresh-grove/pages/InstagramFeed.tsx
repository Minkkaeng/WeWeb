// config import removed to fix TS6133

const feed = [
  "https://picsum.photos/id/70/500/500",
  "https://picsum.photos/id/71/500/500",
  "https://picsum.photos/id/72/500/500",
  "https://picsum.photos/id/73/500/500",
  "https://picsum.photos/id/74/500/500",
  "https://picsum.photos/id/75/500/500"
];

export default function InstagramFeed() {
  return (
    <div className="w-full py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-[#8FA893] mb-4">Follow Us</p>
          <h2 className="text-3xl font-black tracking-tight text-gray-900">@fresh_grove_official</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
          {feed.map((src, i) => (
            <div key={i} className="relative aspect-square overflow-hidden group cursor-pointer bg-gray-100">
              <img src={src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Instagram" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
