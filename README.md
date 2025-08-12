# 🧊 사르르


![메인페이지](https://github.com/user-attachments/assets/db6ec033-055f-4520-9414-09c8921afdbf)

## [프로젝트 전체 리드미](https://github.com/ssafyhapy/client)

## 목차

1. [주요 기능](#-주요-기능)
2. [개발 사항](#-개발-사항)
3. [구현 사항](#-구현-사항)
4. [기술 스택](#-기술-스택)
5. [배운점](#-배운점)

## ✨ 주요 기능
1. WebRTC를 활용해 비대면으로 아이스 브레이킹 게임을 즐길 수 있는 환경 제공
2. 한 줄 자기소개, 나를 맞춰봐(OX게임), 밸런스게임 등 서로를 충분히 알아갈 수 있는 게임 요소 제공
3. 게임 결과를 기록하여 추억을 돌아볼 수 있는 결과 레포트 제공

## 💻 개발 사항

- 사용자 인증 기능 구현
  - OAuth 2.0 기반 소셜 로그인 구현
  - JWT(세션 스토리지) + Refresh token 전략으로 **보안성** 강화
  - 토큰 자동 갱신 로직으로 재로그인 없는 **연속적인 인증 경험** 제공
- 사용자 플로우 고려
  - 직관적인 온보딩 페이지 구현으로 서비스 가치 전달, **신규 사용자 진입 장벽 완화**
  - 게임 결과 및 마이페이지 구현으로 사용자 **리텐션** 유도
  - 온보딩, 회원 관련 페이지, 게임 준비 및 결과 페이지 구현
- ESLint, Prettier 설정 등 프론트 개발 환경 세팅
- Figma를 활용한 와이어프레임 및 디자인 구성

## 📢 구현 사항
![슬라이드1](https://github.com/user-attachments/assets/c96bc0e0-7cc8-42b7-83fa-5aea529b1ca3)
![슬라이드2](https://github.com/user-attachments/assets/0865c3a4-be6a-45b5-a3e1-ff04cac9735c)
![메인페이지](https://github.com/user-attachments/assets/2688f44c-06f5-48a3-9e17-114dbe625071)
![슬라이드3](https://github.com/user-attachments/assets/8ec47129-28f9-46a3-97e0-f976953469dd)
![게임소개](https://github.com/user-attachments/assets/8548df2e-d8d2-4977-b0b9-58c11da62f99)
![슬라이드4](https://github.com/user-attachments/assets/7c29a6b6-eb40-4a51-bae9-40a1d74039ae)
![슬라이드5](https://github.com/user-attachments/assets/17a54549-45f9-4147-aaf8-361ad5898f45)
![슬라이드6](https://github.com/user-attachments/assets/990b450a-9351-404d-b6d9-f4aa8d357e6e)
![슬라이드24](https://github.com/user-attachments/assets/77ee52f8-cdc7-41c7-b9fe-795abd577aff)
![슬라이드25](https://github.com/user-attachments/assets/4db94483-053d-45ee-9a0c-46c75061ef77)
![슬라이드26](https://github.com/user-attachments/assets/c5e16305-9efc-4195-b3f7-13d49bc9ed12)
![슬라이드28](https://github.com/user-attachments/assets/7dd32c32-f1bb-4c2e-aeac-1516349a43e7)
![슬라이드29](https://github.com/user-attachments/assets/822148ae-b095-4573-a748-578f6101125f)

## 🛠 기술 스택
### React, Javascript, Tailwind CSS, Zustand, react-hook-form, framer-motion

### 기술 선정 이유
- Tailwind CSS : 기획 기간이 길어짐에 따라 개발 가능한 시간이 줄어, 빠른 개발이 가능한 유틸리티 기반의 CSS 프레임 워크인 Tailwind CSS를 선택함
- Zustand: 간결한 보일러플레이트와 낮은 러닝커브를 제공하며, 전역 상태 관리의 복잡도가 비교적으로 낮을 것으로 예상하였기 때문에 zustand의 경량성과 직관적인 사용 방식이 적합하다고 판단함.

## 📚 배운점
- 코드 컨벤션의 중요성
  - WebRTC 연결 문제로 페이지 구조를 바꿔야 할 때 팀원들의 코드를 이해하는 것이 어려움
  - git conflict의 주된 원인

- 소셜 로그인 연동 시 CORS 에러 발생
  - CORS 에러에 대한 학습, 클라이언트 - 서버 간의 요청 흐름의 이해
  - 로그인 후 리다이렉트 URL과 같은 설정의 중요성 -> 백엔드 팀원과의 소통 중요!

 
