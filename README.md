# 🧊 사르르


![메인페이지](https://github.com/user-attachments/assets/db6ec033-055f-4520-9414-09c8921afdbf)

[프로젝트 전체 리드미](https://github.com/ssafyhapy/client)

# 목차
1. [서비스 소개](#-서비스-소개)
2. [담당 역할](#-담당-역할)
3. [기술 스택](#-기술-스택)
4. [서비스 아키텍처](#-서비스-아키텍처)

# ✨ 서비스 소개
### 기획 배경
**AS-IS**
- 오프라인에 한정 : 온라인으로 만나는 모임은 점점 증가 하지만 친해질 수 있는 통로 부재
- 진행자의 부담 : 진행자가 게임을 모두 기획, 준비하며 아이스브레이킹 진행 부담

**TO-BE**
- 언제 어디서나 인터넷만 있다면
- 다양한 컨텐츠 활용 가능
- 대화 내용 기록 및 보관
- 다양한 상호작용

### 타켓
- 어색한 분위기 속 아이스크레이킹이 필요항 사람들
- 물리적인 이유로 사람들을 만나지 못하는 사람들

### 주요 기능
1. WebRTC를 활용해 비대면으로 아이스 브레이킹 게임을 즐길 수 있는 환경 제공
2. 한 줄 자기소개, 나를 맞춰봐(OX게임), 밸런스게임 등 서로를 충분히 알아갈 수 있는 게임 요소 제공
3. 게임 결과를 기록하여 추억을 돌아볼 수 있는 결과 레포트 제공



# 💻 담당 역할
- Oauth 기반의 소셜 로그인 연동
- 온보딩, 회원 관련 페이지, 게임 준비 및 결과 페이지 구현

<details>
 <summary>📢구현 사항</summary>
 <div markdonw="1">
  
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
![슬라이드32](https://github.com/user-attachments/assets/59cb0541-4c36-4e9e-827e-ac3de469c796)
 </div>
</details>

# 🛠 기술 스택


# 🎨 서비스 아키텍처

![](https://i.imgur.com/yinPQjZ.png)


- 사용자의 요청이 `nginx`의 `reverse proxy`를 이용하여 라우팅 됨.
  - `/` 주소에 대해서 frontend page로 라우팅
  - `/api` 주소에 대해서 backend api 요청`주황색` 라인에 대해서 `gitlab-runner`를 이용하여 자동 배포를 위한 `cicd` 구축
  - `openvidu` 는 backend에서 사용자 인증 후에 `8443` 포트의 openvidu backend server에서 `token` 반환
- `Jenkinsfile` 을 통한 깃허브, 깃랩 자동 CI/CD 구현
