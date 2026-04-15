// config import removed to fix TS6133
import '@packages/ui/src/Banner';

export default function EventBanner() {
  const images = JSON.stringify([
    { src: "https://picsum.photos/id/60/1920/800", title: "Summer Living Sale", subtitle: "Up to 50% Off" },
    { src: "https://picsum.photos/id/61/1920/800", title: "New Designer Collection", subtitle: "Seoul × Milan" }
  ]);

  return (
    <div className="w-full py-24 px-6 md:px-12 bg-white flex justify-center border-t border-gray-100">
      <div className="max-w-[1400px] w-full">
        {/* @ts-ignore -- Custom element */}
        <fw-banner images={images} has-arrows="true" has-dots="true" is-auto-slide="true"></fw-banner>
      </div>
    </div>
  );
}
