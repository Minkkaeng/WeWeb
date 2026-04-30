# OpenUI (by W&B): AI-Powered UI Component Generator

OpenUI는 자연어 명령을 통해 실시간으로 UI 구성 요소를 생성하고 수정할 수 있는 오픈소스 도구입니다.

## 1. 개요 (Overview)
- **목적**: 자연어 설명이나 이미지를 기반으로 즉각적인 UI 프로토타이핑 및 코드 생성.
- **주요 기능**: 실시간 렌더링, 대화형 수정, 다중 프레임워크 코드 추출.
- **지원 프레임워크**: React, Svelte, Vue, HTML/CSS, Web Components.

## 2. 주요 기능 (Key Features)
- **Prompt-to-UI**: "검색 바가 있는 세련된 내비게이션 바를 만들어줘"와 같은 명령으로 즉시 UI 생성.
- **Interactive Refinement**: 생성된 결과물에 대해 "버튼 색상을 더 밝게 해줘", "간격을 넓혀줘" 등 추가 명령 가능.
- **Image-to-UI**: 업로드된 이미지를 분석하여 유사한 UI 컴포넌트로 구현.
- **Code Export**: 생성된 디자인을 실제 개발에 사용할 수 있도록 다양한 프레임워크 코드로 변환.
- **Model Flexibility**: OpenAI, Anthropic 모델뿐만 아니라 Ollama를 통한 로컬 LLM 연동 지원.

## 3. 설치 및 요구사항 (Requirements)
- **언어 및 환경**: Python (Backend), Node.js (Frontend).
- **의존성**: `pip install .` (Backend dependencies).
- **API Key**: OpenAI API Key 또는 Anthropic API Key 필요 (또는 로컬 Ollama 서버).
- **Docker (권장)**: 간편한 실행을 위해 Docker 이미지 제공.

## 4. 사용 방법 (Usage)
1. 저장소 클론: `git clone https://github.com/wandb/openui.git`
2. API Key 설정: `export OPENAI_API_KEY=sk-...`
3. 서버 실행: `python -m open_ui` (backend 기준)
4. 브라우저 접속: `http://localhost:7878`

## 5. 도입 검토 의견
- **활용성**: 새로운 디자인 컨셉을 잡거나 복잡한 UI 레이아웃의 초안을 작성할 때 매우 유용.
- **생산성**: 단순 반복적인 마크업 작업을 AI에 맡기고, 개발자는 로직에 집중할 수 있음.
- **EverSite 적용**: 신규 템플릿 제작 시 OpenUI에서 초안을 생성한 뒤, 추출된 React 코드를 프로젝트의 `template/` 폴더로 가져오는 방식으로 활용 가능.

## 6. 주의사항
- **정확도**: 복잡한 비즈니스 로직이 포함된 컴포넌트보다는 시각적인 UI 요소 생성에 최적화되어 있음.
- **구조**: 추출된 코드가 프로젝트의 기존 디자인 시스템(Tailwind 설정 등)과 완벽히 일치하지 않을 수 있으므로 수동 조정이 필요함.
