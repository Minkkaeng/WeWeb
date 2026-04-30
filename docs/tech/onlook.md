# Onlook: Visual Editor for React & Next.js

Onlook은 React 및 Next.js 애플리케이션을 위한 AI 기반 비주얼 에디터로, 디자인과 개발 사이의 간극을 줄이는 것을 목표로 합니다.

## 1. 개요 (Overview)
- **목적**: Figma와 같은 시각적 UI 편집 환경을 코드베이스와 직접 연결.
- **주요 기술**: React, Next.js, Tailwind CSS, AST(코드 구문 분석).
- **작동 방식**: 화면에서 요소를 수정하면 Onlook이 소스 코드를 직접 수정(Write-back).

## 2. 주요 기능 (Key Features)
- **Visual Inspector**: 브라우저에서 요소를 선택하여 스타일, 레이아웃 직접 수정.
- **Tailwind Integration**: 모든 시각적 변경 사항을 Tailwind CSS 클래스로 변환.
- **AI Chat & Code Generation**: AI를 통한 컴포넌트 생성 및 수정 제안.
- **Figma Import**: Figma 디자인을 실제 React 컴포넌트로 변환.
- **Git Workflow**: 변경 사항을 Git 커밋으로 관리 가능.

## 3. 설치 및 요구사항 (Requirements)
- **Node.js**: v20.16.0 이상 권장.
- **프레임워크**: Next.js (App Router 권장) 또는 React.
- **런타임**: 로컬 개발 시 `Bun` 사용 권장 (프로젝트 자체 개발 시).
- **Backend (선택)**: Self-hosting 시 Docker와 Supabase 필요.

## 4. 사용 방법 (Usage)
### 4.1 기존 프로젝트 통합
1. 패키지 설치:
   ```bash
   npm install --save-dev @onlook/nextjs
   ```
2. `next.config.js` 설정 추가.
3. 전용 브라우저/앱 실행:
   ```bash
   npx onlook dev
   ```

## 5. 장단점 분석
| 장점 | 단점 |
| :--- | :--- |
| 디자인-개발 동기화 (Single Source of Truth) | 특정 프레임워크(React/Next)에 국한됨 |
| 직관적인 Tailwind CSS 편집 | 로컬 개발 환경 설정이 필요함 |
| AI 기반 생산성 향상 | 생성된 코드에 대한 코드 리뷰 필요 |

## 6. 결론 (Conclusion)
Onlook은 시각적 편집이 필요한 프론트엔드 개발자나 디자이너에게 매우 강력한 도구입니다. 하지만 코드베이스를 직접 수정하므로, 도입 전 팀 내 코드 컨벤션과의 호환성을 확인하는 과정이 필요합니다.
