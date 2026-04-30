# EverSite 코드 리뷰 리포트

> 리뷰 일자: 2026-04-13
> 대상: Monorepo (UI 라이브러리), WeWeb (포트폴리오 웹사이트)
> 상태: **전체 수정 완료** (2026-04-13)

---

## 목차

1. [Monorepo → WeWeb 통합 평가](#monorepo--weweb-통합-평가)
2. [Monorepo 리뷰 (28건)](#monorepo-리뷰-28건)
3. [WeWeb 리뷰 (22건)](#weweb-리뷰-22건)
4. [우선순위 정리](#우선순위-정리)

---

## Monorepo → WeWeb 통합 평가

Monorepo를 WeWeb 사이트에 import해서 쓰려는 계획에 대한 평가.

### 현재 상태: 바로 쓸 수 없음

통합 전에 해결해야 할 문제가 있다.

### 1. React 버전 충돌

| 프로젝트 | React | 비고 |
|----------|-------|------|
| Monorepo (ui, hooks) | peer: `>=18`, 개발: `^18.2.0` | React 18 기반 |
| WeWeb | `^19.2.4` | React 19 사용 중 |

React 19는 하위 호환이지만, Monorepo가 React 18 기준으로만 테스트됨.
peer dependency를 `>=18`로 두고 있어서 설치는 되지만, React 19의 변경사항(use() hook, Server Components 등)과 충돌 가능성이 있다.

**해결:** Monorepo의 React를 19로 올리고 테스트.

### 2. 의존성 버전 불일치

| 패키지 | Monorepo UI | Monorepo Utils | WeWeb |
|--------|-------------|----------------|-------|
| clsx | ^2.1.0 | ^2.1.1 | ^2.1.1 |
| tailwind-merge | **^2.2.2** | ^3.5.0 | **^3.5.0** |
| lucide-react | **^0.363.0** | - | **^1.8.0** |

- `tailwind-merge`: UI 패키지가 v2, WeWeb이 v3. 메이저 버전 차이.
- `lucide-react`: UI 패키지가 v0.363, WeWeb이 v1.8. 아이콘 API가 변경됨.

**해결:** Monorepo UI의 `tailwind-merge`를 ^3.x, `lucide-react`를 ^1.x로 업그레이드.

### 3. 배포/설치 방식 미정

모든 패키지가 v0.0.0 (ui) 또는 v1.0.0 (나머지), npm에 미발행. WeWeb에서 가져다 쓰려면:

- **방법 A:** npm workspace로 묶기 (EverSite를 상위 workspace로)
- **방법 B:** `npm link`로 로컬 연결
- **방법 C:** npm/GitHub Packages에 발행

추천: WeWeb이 이 Monorepo를 계속 쓸 거라면 **방법 A**(workspace)가 가장 깔끔.

### 4. 빌드 깨짐 (import 경로 오류)

`ContactForm`, `Hero`, `Pricing` 3개 컴포넌트가 `../atoms/Button` 경로를 import하는데,
이 폴더가 존재하지 않아 빌드 자체가 안 된다. 통합 전에 반드시 수정 필요.

### 5. 컴포넌트 품질 평가

**바로 쓸 수 있는 것 (품질 양호):**
- `Button` — variant/size/loading 잘 설계됨
- `Input` — 에러 상태, 스타일 옵션 충분
- `Toast` + `useToastStore` — UI/로직 분리 깔끔
- `Accordion` — 단일/다중 열기 모드
- `useToggle`, `useClickAway`, `useScrollLock` — 간결하고 SSR 안전
- `cn()` (utils) — Tailwind 필수 유틸리티
- `debounce` (utils) — 기본 동작은 OK

**수정 후 쓸 수 있는 것:**
- `Modal` — `dangerouslySetInnerHTML` 제거, ESC/포커스트랩 추가 필요
- `Banner` — 타이머 로직 불안정, 접근성 누락
- `Navigation` — 모바일 대응 없음 (WeWeb의 Header와 중복)
- `SignupForm` — debounce 취소 로직 필요
- `Board`, `Scroll` — 헤드리스 설계는 좋으나 버그 있음

**WeWeb과 기능 중복:**
- `Navigation` ↔ WeWeb `Header` (둘 다 네비게이션)
- `ContactForm` ↔ WeWeb `Contact` (둘 다 연락 폼)
- `Hero` ↔ WeWeb `Hero` (둘 다 히어로 섹션)

중복 컴포넌트는 Monorepo 것으로 교체하거나, WeWeb 것을 유지하거나 결정 필요.

### 6. 결론

| 항목 | 상태 |
|------|------|
| 아키텍처 설계 | 좋음. 패키지 분리(ui/hooks/store/utils/config)가 깔끔 |
| Tailwind 기반 스타일링 | WeWeb과 동일 스택, 통합 자연스러움 |
| 한국어 로케일 기본값 | 좋음. `formatDate` 기본 ko-KR, 원화 포맷 |
| 헤드리스 컴포넌트 (Board, Scroll) | 좋은 방향. className 주입으로 유연함 |
| 즉시 통합 가능 여부 | **불가.** import 오류 3건 + 버전 충돌 먼저 해결 필요 |
| 예상 수정 시간 | import 경로 + 버전 업그레이드: 30분 내외 |

---

## Monorepo 리뷰 (28건)

### CRITICAL — 빌드/런타임 크래시 (4건)

#### #1 `packages/ui/src/ContactForm.tsx:4-5` — import 경로 오류
```
import { Button } from "../atoms/Button"   // atoms/ 폴더 없음
import { Input } from "../atoms/Input"     // atoms/ 폴더 없음
```
빌드 불가. `./Button`, `./Input`으로 변경.

#### #2 `packages/ui/src/Hero.tsx:3` — import 경로 오류
```
import { Button } from "../atoms/Button"   // atoms/ 폴더 없음
```
빌드 불가. `./Button`으로 변경.

#### #3 `packages/ui/src/Pricing.tsx:4` — import 경로 오류
```
import { Button } from "../atoms/Button"   // atoms/ 폴더 없음
```
빌드 불가. `./Button`으로 변경.

#### #4 `packages/hooks/src/useLocalStorage.ts:11` — SSR 환경 크래시
`useState` 초기화에서 `window.localStorage`에 직접 접근.
같은 패키지의 `useClickAway`, `useScrollLock`, `useWindowSize`는 모두 `typeof window` 가드가 있는데 이것만 빠짐.
Next.js SSR에서 `ReferenceError: window is not defined`.

**수정:** 초기화 함수 내 `if (typeof window === "undefined") return initialValue;` 추가.

---

### HIGH — 보안/데이터 문제 (4건)

#### #5 `packages/ui/src/Modal.tsx:70-73` — dangerouslySetInnerHTML
CSS를 `dangerouslySetInnerHTML`로 주입. 현재는 정적 문자열이라 XSS는 아니지만,
유지보수 중 동적 값이 들어가면 XSS 벡터가 됨. 또한 매 렌더마다 `<style>` 태그 생성.

**수정:** global CSS에 `.scrollbar-hide::-webkit-scrollbar { display: none; }` 한 번만 선언.

#### #6 `packages/store/src/auth/useAuthStore.ts:23` — 로그아웃 시 토큰 미정리
`logout()`이 Zustand state만 초기화하고, localStorage/sessionStorage의 토큰이나 쿠키를 정리하지 않음.
로그아웃 후에도 저장된 토큰이 남아있으면 인증 우회 가능.

**수정:** `logout`에서 `localStorage.removeItem('token')` 등 정리 로직 추가.

#### #7 `packages/store/src/toast/useToastStore.ts:25` — Date.now() ID 충돌
`Date.now()`로 ID 생성. 같은 밀리초에 `addToast` 두 번 호출하면 동일 ID.
`removeToast`가 두 토스트를 모두 제거함.

**수정:** 전역 카운터 `let counter = 0;` 사용, `id: ++counter`.

#### #8 `packages/ui/src/Scroll.tsx:14-15` — Division by zero
`height = scrollHeight - clientHeight`가 0일 때 (콘텐츠 < 뷰포트),
`(winScroll / 0) * 100 = NaN` 또는 `Infinity`가 DOM에 설정됨.

**수정:** `const scrolled = height > 0 ? (winScroll / height) * 100 : 0;`

---

### MEDIUM — 기능/성능/접근성 (13건)

#### #9 `packages/ui/src/SignupForm.tsx:43-65` — debounce 취소 불가
`useCallback(debounce(...), [])`로 생성. 컴포넌트 언마운트 시 pending된 debounce 콜백이 실행되어
unmounted 컴포넌트의 state를 업데이트하려 함.

**수정:** debounce에 `.cancel()` 메서드 추가, `useEffect` cleanup에서 호출.

#### #10 `packages/ui/src/Banner.tsx:31-45` — 자동슬라이드 타이머 불안정
`nextSlide`의 dependency에 `currentIndex` 포함 → 매 슬라이드 전환마다 함수 재생성 →
`useEffect`에서 타이머 해제/재설정 반복. interval이 불규칙해짐.

**수정:** `setCurrentIndex(prev => ...)` 함수형 업데이트 사용, dependency에서 `currentIndex` 제거.

#### #11 `packages/hooks/src/useLocalStorage.ts:9-30` — key 변경 시 stale 데이터
`useState` 초기값으로만 `initialData` 사용. key가 동적으로 바뀌어도 이전 값이 유지됨.

**수정:** `useEffect`로 key 변경 감지하여 localStorage에서 다시 읽기.

#### #12 `packages/ui/src/Board.tsx:109-113` — initialData 변경 시 폼 미갱신
게시글 수정 중 다른 게시글로 전환해도 이전 데이터가 남음.

**수정:** `useEffect`로 `initialData` 변경 감지, `setFormData` 호출.

#### #13 `packages/ui/src/CartSidebar.tsx:16,89` — index 기반 삭제
`onRemove(index)` 사용. 아이템 추가/삭제 시 잘못된 상품이 제거될 수 있음.

**수정:** `onRemove(item.id)` ID 기반 삭제로 변경.

#### #14 `packages/ui/src/Scroll.tsx:22-24, 64-66` — throttle 없는 scroll 이벤트
scroll 이벤트에 throttle/debounce 없이 직접 핸들러 바인딩. 초당 수백 회 발생.

**수정:** `requestAnimationFrame` 래핑.

#### #15 `packages/hooks/src/useWindowSize.ts:30` — throttle 없는 resize 이벤트
resize 이벤트에 throttle 없음. 창 크기 조절 중 과도한 리렌더링.

**수정:** debounce 또는 `requestAnimationFrame` 래핑.

#### #16 `packages/ui/src/Accordion.tsx:47-66` — ARIA 지원 없음
`aria-expanded`, `aria-controls`, `id`, `role` 속성 없음. 스크린리더가 열림/닫힘 상태를 인식 불가.

**수정:** `<button aria-expanded={isOpen} aria-controls={panel-${index}}>` 추가.

#### #17 `packages/ui/src/Banner.tsx:87-113` — 화살표/도트에 aria-label 없음
이전/다음 버튼, 도트 인디케이터에 텍스트도 `aria-label`도 없음.

**수정:** `aria-label="이전 슬라이드"`, `aria-label="다음 슬라이드"`, `aria-label="슬라이드 N으로 이동"` 추가.

#### #18 `packages/ui/src/Modal.tsx:19-82` — ESC 키 닫기/포커스 트랩 없음
`role="dialog"`, `aria-modal="true"` 없음. ESC 키로 닫기 안됨. Tab으로 모달 바깥 요소에 접근 가능.

**수정:** ESC 키 리스너 추가, `role="dialog"` `aria-modal="true"` 속성 추가.

#### #19 `packages/ui/src/CartSidebar.tsx:40-114` — ESC 키 닫기/포커스 트랩 없음
Modal과 동일한 문제.

**수정:** ESC 키 이벤트 리스너 추가.

#### #20 `packages/ui/src/Input.tsx:25-28` — label-input 미연결
`<label>`과 `<input>`이 `htmlFor`/`id`로 연결되지 않음. label 클릭 시 input에 포커스 안감.

**수정:** `id` prop을 받아 `<label htmlFor={id}>`, `<input id={id}>` 연결.

#### #21 `packages/ui/src/Footer.tsx:96-98` — 소셜 링크가 `<span>`
키보드로 접근 불가 (Tab 포커스 안됨). `<a>` 또는 `<button>` 필요.

---

### LOW — 타입/코드 품질 (3건)

#### #22 `packages/ui/src/SignupForm.tsx:10` — onSignup 파라미터 타입이 any
`onSignup?: (data: any) => void` — 타입 안전성 없음.

**수정:** `(data: { username: string; name: string; password: string }) => void`

#### #23 `packages/utils/src/debounce.ts:9-18` — cancel 메서드 없음
debounce된 함수에 `.cancel()` 없음. 컴포넌트 언마운트 시 타이머 취소 불가.

**수정:** 반환 함수에 `.cancel` 프로퍼티 추가.

#### #24 `packages/utils/src/formatDate.ts:10-11` — Invalid Date 미처리
`new Date("invalid")`가 들어오면 `"Invalid Date"` 문자열이 UI에 그대로 노출됨.

**수정:** `if (isNaN(d.getTime())) return "";`

---

## WeWeb 리뷰 (22건)

### CRITICAL — 동작 안함 (4건)

#### #25 `src/components/Header.tsx:19-20` — 네비게이션 링크 깨짐
`HashRouter` 사용 중인데 `<a href="/#about">`은 해시 라우터에서 동작 안함.
About, Contact 링크 클릭해도 해당 섹션으로 이동하지 않음.

**수정:** `useNavigate` + `document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })` 방식,
또는 `HashRouter` → `BrowserRouter` 전환 (GitHub Pages에서는 추가 설정 필요).

#### #26 `src/components/Header.tsx:16` — 모바일 네비게이션 없음
`hidden md:flex`로 nav를 숨기는데 햄버거 메뉴가 없음.
모바일 사용자는 /theme 페이지나 About/Contact 섹션에 접근 불가.

**수정:** 햄버거 메뉴 + 모바일 드로어 구현 필요.

#### #27 `src/components/Contact.tsx:19,22-44` — 폼이 아무 동작도 안함
- `onSubmit={(e) => e.preventDefault()}` — 기본 동작만 막고 전송 로직 없음
- input에 `value`/`onChange` 없음 (비제어 컴포넌트)
- state 바인딩 없어서 입력값을 읽을 방법 없음
- 사용자가 Send Message 눌러도 아무 피드백 없음

**수정:** `useState`로 각 필드 관리, 제출 시 최소한 "준비 중" 알림 표시.

#### #28 `src/App.tsx:11-14` — 404 라우트 없음
`/`와 `/theme`만 정의. 잘못된 URL 접근 시 빈 화면 (Header + Footer만 표시).

**수정:** `<Route path="*" element={<NotFound />} />` 추가.

---

### HIGH — 보안/안정성 (2건)

#### #29 `src/App.tsx` — Error Boundary 없음
컴포넌트 렌더링 에러 시 전체 앱이 흰 화면으로 크래시. 복구 불가.

**수정:** `react-error-boundary` 또는 커스텀 Error Boundary로 Routes 감싸기.

#### #30 `src/components/Contact.tsx:22-44` — 입력값 검증 없음
`required`, `maxLength`, `pattern` 등 없음. 서버 연결 시 XSS/injection 공격 벡터.

**수정:** `required` 속성 추가, `maxLength` 제한.

---

### MEDIUM — 접근성/성능 (10건)

#### #31 `src/components/ThemePreviewModal.tsx:12` — ESC 키 닫기 미구현
모달이 열려있을 때 ESC 키 핸들러 없음. WCAG 모달 패턴 위반.

**수정:**
```tsx
useEffect(() => {
  const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
  if (isOpen) window.addEventListener('keydown', handler);
  return () => window.removeEventListener('keydown', handler);
}, [isOpen, onClose]);
```

#### #32 `src/components/ThemePreviewModal.tsx:29-113` — role/aria-modal 없음
`role="dialog"`, `aria-modal="true"` 없음. 포커스 트랩 없음. Tab으로 모달 뒤 요소에 접근 가능.

#### #33 `src/components/ThemePreviewModal.tsx:57,63` — 디바이스 토글 aria-label 없음
Monitor/Smartphone 아이콘 버튼에 `aria-label` 없음.

**수정:** `aria-label="데스크톱 보기"`, `aria-label="모바일 보기"` 추가.

#### #34 `src/pages/ThemeLibrary.tsx:61` — 클릭 가능한 div에 키보드 접근 불가
`<motion.div onClick={...}>` — `tabIndex`, `role="button"`, `onKeyDown` 없음.

**수정:** `role="button" tabIndex={0} onKeyDown={...}` 추가.

#### #35 `src/pages/ThemeLibrary.tsx:85-87` — 중첩 인터랙티브 요소
클릭 가능한 div 안에 button. 이벤트 버블링으로 onClick이 두 번 실행될 수 있음.

**수정:** 내부 button에 `e.stopPropagation()` 추가.

#### #36 `src/components/Hero.tsx:34` — blur(80px) + mix-blend-multiply
GPU 합성 레이어를 강제 생성. 모바일 저사양 기기에서 프레임 드랍.

**수정:** `will-change: transform` 추가, 모바일에서 blur 값 축소 고려.

#### #37 `src/components/About.tsx:54-59` — 무한 회전 애니메이션이 화면 밖에서도 실행
`animate={{ rotate: 360 }}` + `repeat: Infinity` — 뷰포트 밖에서도 실행됨.

**수정:** `whileInView={{ rotate: 360 }}`로 변경.

#### #38 `src/pages/ThemeLibrary.tsx:55-60` — 카테고리 변경 시 모든 카드 리마운트
카테고리 전환 시 모든 카드가 `opacity: 0`부터 다시 시작. 깜빡이는 느낌.

**수정:** `AnimatePresence` + `layout` prop 사용, 또는 `initial={false}`.

#### #39 `src/components/Hero.tsx:38-46` — floating 무한 애니메이션
비활성 탭에서도 계속 실행됨. 리소스 낭비.

**수정:** `whileInView` 사용으로 최적화 가능.

#### #40 `src/main.tsx:7` — Non-null assertion
`document.getElementById('root')!` — null 체크 없이 `!` 연산자로 우회.

**수정:** null 체크 후 `throw new Error('Root element not found')`.

---

### LOW — 빌드/코드 품질 (3건)

#### #41 `package.json:2` — 프로젝트명 오타
`"name": "wewep"` → `"weweb"`으로 수정.

#### #42 `package.json:13-15` — 빌드 도구가 dependencies에
`autoprefixer`, `postcss`, `tailwindcss`는 빌드 시에만 필요. `devDependencies`로 이동.

#### #43 `src/App.css` — 사용되지 않는 CSS 파일
Vite 초기 템플릿 CSS. 어디서도 import 안됨. 삭제 가능.

---

## 우선순위 정리

### 즉시 수정 (빌드/기능 깨짐)

| 순위 | 대상 | 이슈 | 예상 시간 |
|------|------|------|-----------|
| 1 | Monorepo #1-3 | `../atoms/` import 경로 오류 3건 — 빌드 불가 | 5분 |
| 2 | WeWeb #25 | 해시 앵커 링크 깨짐 — 네비게이션 동작 안함 | 15분 |
| 3 | WeWeb #26 | 모바일 네비 없음 — 모바일 사용자 차단 | 30분 |
| 4 | Monorepo #4 | useLocalStorage SSR 크래시 | 5분 |

### 빠르게 수정 가능 (5분 미만)

| 순위 | 대상 | 이슈 |
|------|------|------|
| 5 | Monorepo #8 | ScrollProgress division by zero — 한 줄 수정 |
| 6 | Monorepo #7 | toast ID 충돌 — 카운터로 변경 |
| 7 | WeWeb #41 | 패키지명 오타 |
| 8 | WeWeb #43 | 데드 CSS 삭제 |
| 9 | WeWeb #28 | 404 라우트 추가 |

### 품질 개선 (시간 있을 때)

| 대상 | 이슈 |
|------|------|
| 양쪽 | 모달 ESC 키/포커스 트랩 (#18, #19, #31, #32) |
| 양쪽 | ARIA 속성 추가 (#16, #17, #20, #33, #34) |
| Monorepo | debounce cancel 메서드 (#23) |
| Monorepo | scroll/resize throttle (#14, #15) |
| WeWeb | Error Boundary 추가 (#29) |
| WeWeb | Contact 폼 기능 구현 (#27) |

### Monorepo → WeWeb 통합 전 필수

| 순위 | 작업 |
|------|------|
| 1 | import 경로 오류 수정 (#1-3) |
| 2 | React 19 + 의존성 버전 업그레이드 |
| 3 | 설치 방식 결정 (workspace / npm link / publish) |
| 4 | 중복 컴포넌트 정리 (Navigation/Header, ContactForm/Contact, Hero/Hero) |
