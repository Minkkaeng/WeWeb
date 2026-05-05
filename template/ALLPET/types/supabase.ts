// Supabase 데이터베이스 스키마 및 연동 전략 정의 (Type-Only)

export interface Profile {
  id: string; // uuid
  nickname: string;
  avatar_url: string | null;
  has_pet: boolean;
  created_at: string;
}

export interface Pet {
  id: string; // uuid
  owner_id: string; // Profile.id
  name: string;
  species: string; // 'dog' | 'cat' | 'etc'
  age: number;
  photo_url: string | null;
  created_at: string;
}

export interface Post {
  id: string; // uuid
  author_id: string; // Profile.id
  category: 'info' | 'showoff' | 'question';
  title: string;
  content: string; // HTML or Markdown
  image_urls: string[]; // Supabase Storage URLs
  likes_count: number;
  created_at: string;
}

export interface Comment {
  id: string; // uuid
  post_id: string; // Post.id
  author_id: string; // Profile.id
  content: string;
  parent_id: string | null; // For replies
  created_at: string;
}

export interface Scrap {
  id: string; // uuid
  user_id: string; // Profile.id
  content_type: 'post' | 'news';
  content_id: string; 
  title: string;
  url: string;
  created_at: string;
}

/**
 * 💡 Supabase 3대 핵심 기능 활용 전략 (Frontend Mockup)
 * 
 * 1. RLS (Row Level Security):
 *    - 본인이 작성한 Post/Comment만 수정/삭제 가능하도록 DB 레벨 정책 수립.
 *    - 프론트엔드에서는 로그인한 유저의 ID와 author_id를 비교하여 수정/삭제 버튼 노출 제어.
 * 
 * 2. Storage:
 *    - Pets의 photo_url, Posts의 image_urls는 Supabase Storage의 public url 포맷을 사용.
 *    - '반려동물' 관련 더미 이미지를 활용.
 * 
 * 3. Realtime:
 *    - Posts나 Comments 테이블 변화 시 실시간 구독(Subscribe)하여 UI에 반영.
 *    - 프론트엔드에서는 setInterval을 이용해 실시간 피드가 업데이트되는 듯한 애니메이션 제공.
 */
