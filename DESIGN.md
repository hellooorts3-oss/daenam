---
omd: 0.1
brand: 선드림 에너지 (SunDream Energy)
bootstrapped_from: toss
bootstrapped_at: 2026-05-24T17:35:00Z
---

# DESIGN.md — 선드림 에너지 Design System (TDS-based)

본 디자인 가이드는 토스 디자인 시스템(TDS, Toss Design System)의 정수를 신재생에너지/태양광 시공 전문 기업인 **'선드림 에너지'**의 브랜딩과 결합하여 신뢰감 있고 혁신적인 디지털 경험을 창출하기 위해 정의되었습니다.

## §1. Visual Theme (시각적 테마)
*   **Calm White Canvas**: 군더더기 없는 순백색 백그라운드 위에서 정보와 수치가 가장 돋보이도록 구성합니다. 불필요한 테두리나 무거운 면 분할을 지양하고, 공백(Breathing Room)을 과감히 활용합니다.
*   **Optimistic Cerulean Interactions**: 토스의 시그니처 파란색(`--toss-blue: #3182f6`)을 메인 인터랙션 컬러로 활용하여 미래지향적이고 낙관적인 태양광 친환경 비전을 상징합니다.
*   **Clear Metric Focus**: 태양광 수익 계산기, 발전 효율, 연혁 등 정량적인 데이터와 성과가 숨 쉬듯 투명하게 전달되는 수치 디자인을 선호합니다.

## §2. Design Tokens (디자인 토큰)

### 2.1 Color Palette
*   `--background`: `#ffffff` (기본 배경)
*   `--foreground`: `#191f28` (주요 텍스트, TDS Grey 900)
*   `--toss-blue`: `#3182f6` (브랜드 주요 색상, 강조, 활성화)
*   `--toss-blue-dark`: `#1b64da` (호버/클릭 시 어두운 톤)
*   `--toss-blue-light`: `#e8f3ff` (배경 칩, 가벼운 강조 영역)
*   `--grey-50`: `#f9fafb` (카드 배경, 소프트한 대비)
*   `--grey-100`: `#f2f4f6` (구분선, 세틀 보더)
*   `--grey-200`: `#e5e8eb` (경계선, 비활성화 요소)
*   `--grey-500`: `#8b95a1` (설명글, 플레이스홀더)
*   `--grey-700`: `#4e5968` (부제목, 본문 텍스트)

### 2.2 Typography
*   **Font Family**: `Pretendard`, -apple-system, BlinkMacSystemFont, sans-serif
*   **Scale**:
    *   `Title Large`: `48px` / Semibold / `-0.03em` (히어로 헤드라인)
    *   `Title Medium`: `32px` / Semibold / `-0.02em` (섹션 헤딩)
    *   `Subtitle`: `20px` / Regular / `-0.01em` (리드 카피)
    *   `Body`: `16px` / Regular / `0em` (본문)
    *   `Caption`: `13px` / Regular / `0.01em` (부설명 및 메타데이터)

### 2.3 Roundness (Radius)
*   `Radius Small`: `8px` (버튼, 인풋, 작은 칩)
*   `Radius Medium`: `16px` (일반 카드, 팝업, 모달)
*   `Radius Large`: `24px` (대형 인포 카드, 배너)
*   `Radius Full`: `9999px` (알약 스타일 뱃지, 원형 컨트롤)

### 2.4 Layout & Spacing
*   **Container Width**: 최대 `1040px`로 가로폭을 일관되게 정렬합니다.
*   **Padding**: 모든 섹션의 이너 컨테이너는 가로 패딩 `24px` (`.container-inner`)로 정확히 일치하여 정렬 선이 끊기지 않게 합니다.

---

## §11. Brand Narrative (브랜드 내러티브)
*   **Project Name**: 선드림 에너지 (SunDream Energy)
*   **Core Thesis**: "지속 가능한 내일을 위한 태양광 에너지, 가장 가깝고 투명한 솔루션"
*   **Official Tagline**: "태양으로 꿈꾸는 내일, 선드림 에너지"
*   **Voice**: 친근하며(friendly) 명확하고 단도직입적인(short) 은유 없는 투명한 소통(plain).

## §12. Principles (디자인 원칙)
1.  **과장 없는 수치 제시**: 태양광 시공의 예상 수익, 시공비용, 발전량을 투명하고 직관적으로 제공하여 고객이 신뢰할 수 있게 합니다.
2.  **모바일 친화성 우선 (Mobile First Layout)**: 모든 주요 흐름은 모바일 화면에서도 탭 한 번으로 동작하며 걸림이 없어야 합니다.
3.  **동작의 낙관성**: 버튼 호버 시 밝아지거나, 데이터 변경 시 부드럽게 숫자가 전환되어 사용자에게 밝은 미래를 시각화합니다.

## §13. Personas (타겟 페르소나)
*   **김선동 (54세, 은퇴 준비 자영업자)**: 토지나 공장 지붕을 소유하고 있으며, 안정적인 노후 자금 마련을 위해 태양광 발전에 관심이 많음. 어렵고 복잡한 법률 및 전력 판매 구조 대신 직관적인 수익 계산과 친절한 상담이 절실함.
*   **이혜린 (32세, 친환경에 관심 많은 공장 운영 사장)**: RE100 달성을 위해 공장 지붕에 태양광 설비를 올리고자 함. 빠르고 합리적인 견적과 검증된 대기업 모듈 시공 사례를 투명하게 비교하고 싶어 함.

## §14. States (인터랙션 상태)
*   **Button Hover**: `--toss-blue`에서 `--toss-blue-dark`로 부드럽게 전환(transition-colors, duration-200).
*   **Card Hover**: 마우스를 올릴 때 아주 미세하게 위로 떠오르고(`-translate-y-1`), 가벼운 그림자(`shadow-sm`에서 `shadow-md`)가 추가되는 상호작용.

## §15. Motion & Easing (모션 및 타이밍)
*   **Duration**: 기본 애니메이션 `200ms` ~ `300ms`.
*   **Easing**: 토스 특유의 부드럽고 가속감 있는 베지어 곡선 `cubic-bezier(0.3, 0, 0.1, 1)`을 적용합니다.
