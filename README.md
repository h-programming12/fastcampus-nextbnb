## 프로젝트 소개
- 패스트캠퍼스의 [7개 프로젝트로 완벽 대비하는 Next.js 실무 ft. 성능 개선](https://fastcampus.co.kr/dev_online_nextjs7) 중 마지막 파트인 **Next.js 13으로 숙박 예약 플랫폼 만들기** 입니다.
- Next.js 13을 이용한 숙박 예약 플랫폼 프로젝트입니다.

### 학습 목표
- Route Handlers로 서버 구현하기
- Recoil로 전역 상태관리 하기
- 페이지별로 다른 렌더링 전략 세우고 적용하기
- Meta Data로 SEO 적용하기
  
## 챕터별 목차 및 작업 내역

- 코드가 있는 챕터는 PR [링크] 표시

### 1강. 애플리케이션 요구사항 분석
1. 강사 소개 및 만들어볼 서비스 설명
2. 숙박 예약 플랫폼 요구사항 분석하기
3. 요구사항에 맞춰 아키텍처 설계하기
4. 요구사항에 맞춰 API 설계하기
5. 사용 기술 알아보기 - React 18, Next.js 13, Next.js API Routes, Prisma, Tailwindcss, Recoil, React Query, Cypress, Vercel

### 2강. 개발 환경 설정
1. 왜 Next.js 13를 사용하는가?
2. Next.js 13 개발 환경 구성하기
3. Eslint 및 Prettier 적용하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/1)
4. Supabase 및 Prisma 환경 구성하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/2)
5. 데이터베이스 모델링 및 Schema 구성하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/3)

### 3강. 공통 레이아웃 개발하기
1. Tailwind 알아보기
2. Tailwind를 이용해서 공통 레이아웃 개발하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/4)

### 4강. 효율적인 개발을 위해 모킹 데이터 생성하기
1. Prisma 문법 알아보기
2. Prisma로 Mock 데이터 생성하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/5)

### 5강. 숙박 예약 플랫폼 메인 페이지 개발하기
1. 메인페이지 검색 필터 구현하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/6)
2. react-calendar를 사용해 검색 필터내 달력 컴포넌트 구현하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/7)
3. Recoil 알아보기 & 세팅하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/8)
4. Recoil 적용해서 필터 전역 상태 관리하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/9)
5. Next.js 13 Data Fetching 알아보기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/10)
6. Next.js 13 Route Handlers 알아보기
7. 숙박 리스트 및 카테고리 구현하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/11)
8. React Query 알아보기 & 세팅하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/12)
9. 숙박 리스트 무한 스크롤 적용하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/13)
10. Error Handling 알아보기 & 적용하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/14)

### 6강. 숙박 예약 플랫폼 지도 페이지 개발하기
1. Next/Script 및 Kakao Map API 알아보기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/15)
2. Kakao Map으로 지도 컴포넌트 개발하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/16)
3. Kakao Map으로 기본 마커 구현하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/17)
4. Kakao Map으로 커스텀 마커 구현하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/18)
5. 선택한 숙소 UI 구현하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/19)
6. 지도 및 마커 컴포넌트 Recoil 이용해 전역적으로 관리하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/20)

### 7강. 숙소 상세 페이지 개발하기
1. 숙박 상세 페이지 UI 개발하기 (1) [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/21)
2. 숙박 상세 페이지 UI 개발하기 (2) [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/21)
3. 숙박 상세 페이지 지도 띄우기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/22)
4. react-calendar를 사용해 숙박 상세 페이지 달력 컴포넌트 구현하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/23)
5. 숙박 상세 페이지 공유하기 버튼 기능 구현하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/24)

### 8강. 사용자 인증 구현하기
1. Next-auth 알아보기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/25)
2. Next-auth로 구글 로그인 구현하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/26)
3. Next-auth로 네이버 로그인 구현하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/27)
4. Next-auth로 카카오 로그인 구현하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/28)
5. 마이페이지 구현하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/29)
6. 사용자 정보 수정 폼 작업 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/30)

### 9강. 찜하기 및 댓글 기능 개발하기
1. 숙박 상세 페이지 찜하기 기능 설계하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/31)
2. 숙박 상세 페이지 찜하기 기능 구현하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/32)
3. 숙박 상세 페이지 댓글 기능 설계하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/33)
4. 숙박 상세 페이지 댓글 기능 구현하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/34)
5. 숙소 찜, 내가 쓴 댓글 리스트 구현하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/35)

### 10강. 숙소 예약 기능 개발하기
1. 숙박 예약 기능 설계하기
2. 숙박 예약 데이터 모델링 및 예약 요청 페이지 UI 구현 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/38)
3. 숙박 예약 기능 API 개발하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/39)
4. 숙박 예약 완료 리스트 개발하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/40)
5. 숙박 예약 취소 기능 개발하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/41)

### 11강. 숙박 결제 기능 개발하기
1. 결제 기능 설계하기
2. 토스 페이먼스 API 문서 확인하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/42)
3. 결제 기능 개발하기 (1): 토스 페이먼츠 API를 이용한 결제 모듈 개발하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/43)
4. 결제 기능 개발하기 (2):  토스 페이먼츠 API를 이용한 결제 성공 및 에러 처리 개발하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/44)

### 12강. 숙소 등록 기능 개발하기
1. React-hook-form으로 숙소 등록 폼 개발하기 (1) [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/45)
2. React-hook-form으로 숙소 등록 폼 개발하기 (2) [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/46)
3. 다음 주소 API 활용해서 숙소 주소 등록하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/47)
4. Firebase Storage 알아보기 & 세팅하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/48)
5. Firebase Storage로 이미지 업로드 구현하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/49)
6. 내가 등록한 숙소 리스트 작업하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/50)
7. 내가 등록한 숙소 수정 기능 구현하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/51)
8. 내가 등록한 숙소 삭제 기능 구현하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/52)

### 13강. 숙소 검색 기능 개발하기
1. 숙소 검색 기능 설계하기
2. 숙소 검색 기능 구현하기 (검색 필터 & 카테고리 탭) [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/53)

### 14강. E2E 테스트 적용하기
1. 프론트엔드 테스트 종류 및 필요성 알아보기
2. E2E 테스트 및 Cypress 개념 알아보기
3. Cypress 세팅하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/54)
4. Cypress를 이용하여 E2E 테스트 적용하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/55)

### 15강. 배포하기
1. Vercel 알아보기
2. Vercel로 배포하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/56)

### 16강. 성능 측정하기
1. Lighthouse로 성능 측정하기
2. @next/bundle-analyzer로 성능 측정하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/57)

### 17강. 성능 개선하기
1. Meta Data로 SEO 개선하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/58)
2. Lazy Loading 적용하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/59)
3. throttle, debounce로 검색 성능 개선하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/60)
4. tree-shaking 및 코드 정리로 번들 크기 개선하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/61)
5. 이미지 및 폰트 최적화 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/62)
6. next/navigation에 Prefetch 적용하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/63)
7. Loading UI로 스켈레톤 적용하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/64)
8. Next.js 13 Parallel Routes로 성능 개선하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/65)

### 18강. 도메인 설정하기
1. 도메인 개념 알아보기
2. Godaddy에서 내가 원하는 도메인으로 변경하기

### 19강. 웹 분석 도구 및 웹 마스터 도구 적용하기
1. Google Analytics 알아보기
2. Google Analytics 적용하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/66)
3. 네이버 서치 어드바이저에 사이트 등록하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/69)
4. Google Search Console에 사이트 등록하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/71)

### 부록: 1강. 디자인 시스템 구성하기
1. 디자인 시스템의 개념과 필요성 알아보기
2. 숙박 예약 플랫폼 디자인 시스템 컴포넌트 정의하기
3. StoryBook 알아보기 & 세팅하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/72)
4. 숙박 예약 플랫폼 디자인 시스템 Storybook 작성하기 [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/73)
5. 숙박 예약 플랫폼 디자인 시스템 Storybook 작성하기 (2) [링크](https://github.com/h-programming12/fastcampus-nextbnb/pull/74)





