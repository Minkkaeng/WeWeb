# Puppeteer MCP Server 설정 및 가이드

## 개요
Puppeteer MCP(`@modelcontextprotocol/server-puppeteer`)는 LLM이 실제 웹 브라우저를 제어하고, 웹 페이지를 탐색(Navigate)하며, DOM 요소를 스크랩하고 스크린샷을 찍을 수 있도록 브라우저 컨트롤 권한을 부여하는 Model Context Protocol 서버입니다.

## 설정 방법 (Configuration)

### Claude Desktop / Cursor용 JSON 설정
설정 파일(`claude_desktop_config.json` 등)의 `mcpServers` 항목 내에 추가합니다.

#### 1. 일반 NPX 방식 (추천: 시각적 디버깅 가능)
```json
{
  "mcpServers": {
    "puppeteer": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-puppeteer"]
    }
  }
}
```

#### 2. Docker 기반 Headless 방식
```json
{
  "mcpServers": {
    "puppeteer": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "--init",
        "-e",
        "DOCKER_CONTAINER=true",
        "mcp/puppeteer"
      ]
    }
  }
}
```

## 주요 제공 도구 (Tools)
이 MCP를 활성화하면 LLM이 아래 도구들을 사용할 수 있게 됩니다.
- **`puppeteer_navigate`**: 지정된 URL로 이동
- **`puppeteer_screenshot`**: 전체 페이지나 특정 요소의 캡처 수행
- **`puppeteer_click`**: CSS 선택자를 이용하여 특정 요소 클릭
- **`puppeteer_hover`**: 특정 요소에 마우스 호버 처리 (CSS 호버 이벤트 추출 가능)
- **`puppeteer_evaluate`**: 브라우저 콘솔에서 커스텀 JavaScript 실행 (단, allowDangerous 옵션에 주의)
- **`puppeteer_fill` / `puppeteer_select`**: 폼 요소 입력 및 제어

## 활용 방안 (디자인 벤치마킹)
1. `puppeteer_navigate`로 타겟 템플릿(imweb.me 등) 접속.
2. `puppeteer_evaluate`로 메인 헤더 및 그리드 레이아웃의 실제 Computed CSS (여백, 폰트사이즈, HEX 컬러) 추출.
3. 해당 데이터를 바탕으로 완벽히 동일한 비율의 와이드형 데스크톱 디자인 코드 재생산.
