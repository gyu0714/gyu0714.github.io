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
  careerYears: '0년 0개월',
  description:
    '간략한 커리어 요약을 여기에 작성하세요. 어떤 분야에서 어떤 일을 해왔는지 2~3문장으로 소개합니다.',
}

export const experiences = [
  {
    company: '회사명',
    logo: null,           // TODO: 로고 이미지 경로
    period: '20XX.XX ~ 현재',
    tasks: [
      '주요 업무 1',
      '주요 업무 2',
      '주요 업무 3',
    ],
  },
  {
    company: '회사명 2',
    logo: null,
    period: '20XX.XX ~ 20XX.XX',
    tasks: [
      '주요 업무 1',
      '주요 업무 2',
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
    title: '프로젝트 이름',
    period: '20XX.XX ~ 20XX.XX',
    summary: '프로젝트 한 줄 요약',
    role: 'Frontend Developer',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    description: '프로젝트에 대한 상세 설명을 여기에 작성하세요. 어떤 문제를 해결했는지, 어떤 기여를 했는지 작성합니다.',
    highlights: [
      '주요 성과 1',
      '주요 성과 2',
      '주요 성과 3',
    ],
    github: 'https://github.com/gyu0714',
    demo: '',
    // TODO: 스크린샷 이미지 경로 배열
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
