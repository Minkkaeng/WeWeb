import config from '../theme-config.json';
import '@packages/ui/Hero'; // Register <fw-hero>

export default function Home() {
  return (
    <div className="w-full bg-white block">
      {/* @ts-ignore -- Custom element */}
      <fw-hero
        class="block w-full"
        title={config.hero.title}
        subtitle={config.hero.subtitle}
        description="자연 소재가 주는 편안함을 당신의 방 안에 채워보세요. 지속 가능한 리빙 라이프스타일을 제안합니다."
        background-image={config.hero.image}
        is-centered="true"
        is-full-height="true"
        is-full-width="true"
        primary-action-label="Shop Collection"
      ></fw-hero>
    </div>
  );
}
