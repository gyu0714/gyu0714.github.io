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
    '간략한 커리어 요약을 여기에 작성하세요. 어떤 분야에서 어떤 일을 해왔는지 2~3문장으로 소개합니다.',
}

export const experiences = [
  {
    company: '더존비즈온',
    logo: null,
    type: '정직원',
    period: '2022.10.17 ~ 재직중',
    tasks: [
      'React Native 기반 나하고 모바일 APP 개발 (누적 다운로드 60만+)',
      '출퇴근 · 전자결재 · 연말정산 · 메신저 등 40개 마이크로서비스 개발',
      '직원정보 · 급여명세서 · HR 관련 기능 개발',
      '전자문서지갑 개발',
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
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'Vite', icon: '⚡' },
  { name: 'Tailwind', icon: '💨' },
  { name: 'Git', icon: '🐙' },
  { name: 'Figma', icon: '🎨' },
  { name: 'Notion', icon: '📝' },
]

export const strengths = [
  {
    icon: '💻',
    title: '강점 제목 1',
    description: '강점에 대한 설명을 여기에 입력하세요.',
  },
  {
    icon: '🤝',
    title: '강점 제목 2',
    description: '강점에 대한 설명을 여기에 입력하세요.',
  },
  {
    icon: '🚀',
    title: '강점 제목 3',
    description: '강점에 대한 설명을 여기에 입력하세요.',
  },
]

export const tags = ['#태그1', '#태그2', '#태그3']

export const projects = [
  {
    id: 1,
    title: '나하고 모바일',
    period: '2022.10 ~ 현재',
    summary: 'React Native 기반 기업용 올인원 모바일 앱 · 누적 다운로드 60만+',
    role: 'Mobile App Developer',
    tech: ['React Native', 'TypeScript', 'Expo', 'XState', 'Zustand', 'TanStack Query', 'Turborepo', 'pnpm'],
    description: '두존 나하고 서비스의 React Native 기반 기업용 모바일 앱. 출퇴근 관리부터 전자결재, 급여 조회, 연말정산, 메신저까지 업무에 필요한 기능을 하나의 앱으로 통합 제공. Turborepo 모노레포 구조 하에 40개 독립 마이크로서비스로 구성되어 있으며, XState 상태머신으로 앱 초기화 플로우(세션 검증 → PIN Lock → 딥링크 처리)를 안전하게 제어. 3개 앱(nahago, wehago, wehagoq)과 11개 공유 패키지를 단일 모노레포에서 관리.',
    highlights: [
      '누적 다운로드 60만+ 달성',
      '40개 독립 마이크로서비스 아키텍처로 신규 서비스 추가 시 코드 결합도 최소화',
      'XState 상태머신으로 앱 부트스트랩 플로우(세션·딥링크·PIN Lock) 안전하게 제어',
      'Hot Updater OTA 배포로 스토어 심사 없이 JS 번들 실시간 업데이트',
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
