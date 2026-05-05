import config from '../theme-config.json';
import '@packages/ui/ProductCard';

const products = [
  { name: "Natural Oak Lounge Chair", price: 450000, category: "Furniture", image: "https://picsum.photos/id/10/800/1000", desc: "편안하고 튼튼한 오크 소재 라운지 체어" },
  { name: "Ceramic Table Lamp", price: 120000, category: "Lighting", image: "https://picsum.photos/id/15/800/1000", desc: "따뜻한 빛으로 분위기를 더하는 조명" },
  { name: "Linen Sofa Cover", price: 280000, category: "Fabric", image: "https://picsum.photos/id/20/800/1000", desc: "고급 린넨 소재의 푹신한 소파 커버" },
  { name: "Wooden Side Table", price: 180000, category: "Furniture", image: "https://picsum.photos/id/25/800/1000", desc: "간결한 디자인의 베이직 사이드 테이블" }
];

export default function BestProducts() {
  return (
    <div className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl mb-16 text-center uppercase tracking-widest font-black" style={{ fontFamily: config.fonts.heading, color: config.colors.primary }}>
          Best Choices
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            /* @ts-ignore -- Custom element */
            <fw-product-card
              key={i}
              name={p.name}
              price={p.price.toString()}
              image={p.image}
              category={p.category}
              description={p.desc}
              show-badge="true"
              show-description="true"
              is-elevated="true"
              has-quick-add="true"
              has-quick-view="true"
            ></fw-product-card>
          ))}
        </div>
      </div>
    </div>
  );
}
