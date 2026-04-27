import config from '../theme-config.json';
import '@packages/ui/src/Footer';

export default function BrandStory() {
  const footerLinks = JSON.stringify([
    { title: "Company", items: [{label: "About Us", href: "#"}, {label: "Careers", href: "#"}] },
    { title: "Support", items: [{label: "Contact", href: "#"}, {label: "FAQ", href: "#"}, {label: "Shipping", href: "#"}] }
  ]);

  return (
    <div className="w-full flex-col flex bg-white">
      <div className="flex-1 bg-[#F9F9F8] py-32 px-6 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-5xl mb-8 leading-relaxed max-w-4xl font-extrabold" style={{ fontFamily: config.fonts.heading, color: config.colors.text }}>
          "We believe the space you live in shapes the life you lead."
        </h2>
        <p className="text-base opacity-60 font-medium max-w-2xl leading-loose">
          Fresh Grove is dedicated to bringing natural textures, uncompromised quality, and thoughtful design into every home. Let your space breathe.
        </p>
      </div>
      {/* @ts-ignore -- Custom element */}
      <fw-footer
        description="Premium interior & lifestyle products designed for everyday comfort."
        show-newsletter="true"
        show-socials="true"
        has-border="false"
        is-dark="false"
        links={footerLinks}
      >
        <span slot="logo" className="text-2xl font-bold tracking-widest uppercase" style={{ color: config.colors.primary }}>
          {config.themeName}
        </span>
      </fw-footer>
    </div>
  );
}
