// config import removed to fix TS6133
import '@packages/ui/src/Features';

export default function Magazine() {
  const magazineItems = JSON.stringify([
    { title: "The Beauty of Empty Space", description: "Minimalist interior design focuses on the core elements...", icon: "<svg width='32' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><rect x='3' y='3' width='18' height='18' rx='2'/></svg>" },
    { title: "Living with Plants", description: "Bringing nature indoors can significantly improve air quality...", icon: "<svg width='32' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><path d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'/></svg>" },
    { title: "Sustainable Materials", description: "Eco-friendly materials that don't compromise on aesthetics...", icon: "<svg width='32' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><circle cx='12' cy='12' r='10'/></svg>" }
  ]);

  return (
    <div className="w-full bg-[#fcfcfc]">
      {/* @ts-ignore -- Custom element */}
      <fw-features
        title="Magazine"
        subtitle="Latest from our editors"
        columns="3"
        show-icons="true"
        has-border="false"
        is-card-style="true"
        items={magazineItems}
      ></fw-features>
    </div>
  );
}
