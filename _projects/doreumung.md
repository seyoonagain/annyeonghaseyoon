---
team: 도르멍
description: 여행 경로 생성 서비스
startedAt: 2024-12-18
endedAt: 2025-01-16
techStack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'motion']
github: https://github.com/Doreumung/Doreumung-FE
demo: https://www.doreumung.site
image: /assets/projects/doreumung.png
---

## Responsibilities

- 웹소켓(`useWebSocket`)을 이용하여 좋아요 수 및 댓글의 실시간 업데이트 기능 구현
- Next.js의 Middleware를 활용하여 페이지 접근 제어 및 리디렉션 기능 구현
- Motion과 Swiper를 활용한 애니메이션 구현
- WYSIWYG 텍스트 에디터 커스터마이징
- React Hook Form과 Zod를 이용한 유효성 검사 및 CRUD 기능 개발

## Improvements

### 웹소켓 연결 최적화를 통한 리소스 절약

- **배경**: 여러 컴포넌트에서 각각 웹소켓에 연결되어 불필요한 리소스 사용 증가
- **방식**: 웹소켓 연결을 전역 상태(`useContext`)로 관리하여 하나의 연결을 여러 컴포넌트에서 공유
- **성과**: 중복 연결 제거로 성능 최적화 및 네트워크 리소스 절약

### 페이지 접근 제어 최적화

- **배경**: 사용자 인증 및 인가 여부에 따라 접근 제어 필요
- **방식**:
  - 정적 제어: Next.js Middleware를 활용한 인증 기반 접근 제어
  - 동적 제어: `ProtectedRoute`를 통한 인가 기반 동적 접근 제어
- **성과**: 적절한 리디렉션을 통한 UX 개선 및 페이지 보안 강화
- **과제**: 접근 제어 로직이 분산되어 있어 통합 방안에 대한 고민 필요

## Insights

### 멘토링을 통해 웹 접근성과 웹 표준에 대한 중요성 인식

- 랜딩페이지의 Lighthouse 접근성 점수를 89점에서 100점으로 향상

## Teamwork

### 백엔드와 원활한 협업 유지

- 데이터 구조 변경 시 적극적으로 소통하여 API 연동 시 오류 없이 개발 진행

### 프로젝트 관리 역량 강화

- 데일리 스크럼을 통해 업무 가시성 향상 및 우선순위 조정을 통한 생산성 극대화
