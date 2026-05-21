export const profile = {
  name: '김민규',
  nameEn: 'Kim Mingyu',
  role: 'Full Stack Developer',
  birth: '1995.07.14',
  email: 'lagyu99@gmail.com',
  github: 'https://github.com/gyu0714',
  linkedin: '',
  intro: [
    '끝에서 끝까지 직접 설계하고 구현하는 Full Stack Developer,',
    '사용자 경험부터 서버 아키텍처까지 책임집니다.',
  ],
  intro2: [
    '빠른 실행력과 넓은 기술 스택을 바탕으로',
    '아이디어를 완성된 서비스로 만들어냅니다.',
  ],
  avatar: '/avatar.png',
}

export const summary = {
  careerYears: '3년 11개월',
  description:
    '누적 다운로드 60만+ 기업용 모바일 앱 개발에 참여하며, 출퇴근·전자결재·연말정산 등 실무에서 매일 사용되는 서비스를 직접 설계하고 구현했습니다. 공통 모듈과 컴포넌트 라이브러리 개발을 통해 팀 전체의 개발 효율을 높이는 데 기여했습니다.',
}

export const experiences = [
  {
    company: '더존비즈온',
    logo: null,
    type: '정직원',
    period: '2022.10.17 ~ 재직중',
    tasks: [
      '나하고 모바일 APP 개발 (누적 다운로드 60만+)',
      '출퇴근 · 전자결재 등 11개 마이크로서비스 개발',
      '공통 네트워크 통신 모듈 개발',
      '공통 컴포넌트 라이브러리 개발',
    ],
  },
  {
    company: '블루스카이',
    logo: null,
    type: '계약직',
    period: '2021.05.17 ~ 2021.09.11',
    tasks: [
      '경기도경제과학진흥원 홈페이지 리뉴얼',
    ],
  },
]

export const tools = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { name: 'Notion', icon: 'https://cdn.simpleicons.org/notion/000000' },
  { name: 'React Query', icon: 'https://cdn.simpleicons.org/reactquery' },
  { name: 'Zustand', icon: '🐻' },
]

export const strengths = [
  {
    icon: '📱',
    title: '대규모 모바일 앱 개발 경험',
    description: '누적 다운로드 60만+ 기업용 앱에서 11개 서비스를 개발하며, 실제 수십만 사용자에게 서비스되는 코드를 작성한 경험이 있습니다.',
  },
  {
    icon: '🧩',
    title: '공통 모듈 설계로 생산성 향상',
    description: '네트워크 통신 모듈과 컴포넌트 라이브러리를 직접 설계·구현하여 팀 전체의 개발 효율을 높이는 데 기여했습니다.',
  },
  {
    icon: '🚀',
    title: '빠른 학습과 넓은 기술 스택',
    description: 'React Native, Spring Boot, TypeScript 등 다양한 기술을 실무에서 직접 사용하며, 새로운 기술도 빠르게 익혀 서비스에 적용합니다.',
  },
]

export const tags = ['#ReactNative', '#TypeScript', '#컴포넌트설계']

export const projects = [
  {
    id: 1,
    title: '나하고 모바일',
    period: '2022.10 ~ 현재',
    summary: 'React Native 기반 기업용 올인원 모바일 앱 · 누적 다운로드 60만+',
    role: 'Mobile App Developer',
    tech: ['React Native', 'TypeScript', 'Expo', 'XState', 'Zustand', 'TanStack Query', 'Turborepo', 'pnpm'],
    description: '더존비즈온 나하고의 React Native 기반 기업용 올인원 모바일 앱. 출퇴근·전자결재·급여·연말정산·메신저 등 핵심 업무 기능을 단일 앱으로 통합 제공. Turborepo 모노레포 + 40개 마이크로서비스 구조로 높은 확장성을 유지하며, XState 상태머신으로 앱 초기화 플로우를 안전하게 제어합니다.',
    highlights: [
      '누적 다운로드 60만+ 달성한 기업용 핵심 서비스 개발 참여',
      '마이크로서비스 아키텍처 도입으로 신규 서비스 추가 비용 최소화',
      'XState 상태머신으로 앱 초기화 플로우 (세션 · PIN Lock · 딥링크) 설계',
      'OTA 배포 체계 구축으로 스토어 심사 없이 즉시 핫픽스 배포 가능',
    ],
    github: 'https://github.com/gyu0714/douzone-nahago-mobile',
    demo: '',
    screenshots: [],
  },
  {
    id: 2,
    title: '프로젝트 이름 2',
    period: '20XX.XX ~ 20XX.XX',
    summary: '프로젝트 한 줄 요약',
    role: 'Frontend Developer',
    tech: ['React', 'Node.js'],
    description: '프로젝트에 대한 상세 설명을 여기에 작성하세요.',
    highlights: [
      '주요 성과 1',
      '주요 성과 2',
    ],
    github: 'https://github.com/gyu0714',
    demo: '',
    screenshots: [],
  },
]
