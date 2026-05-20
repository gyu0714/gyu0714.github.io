import { useState } from 'react'
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import { projects } from '../data/portfolio'
import { useFadeIn } from '../hooks/useFadeIn'

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="neu-card overflow-hidden">
      {/* 상단 헤더 */}
      <div className="p-8 border-b border-shadow-dark/30">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-text">{project.title}</h3>
              <span className="text-xs text-text-muted bg-card neu-card-sm px-3 py-1 rounded-full">
                {project.period}
              </span>
            </div>
            <p className="text-text-muted text-sm mb-3">{project.summary}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-2 shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="neu-btn p-3 rounded-xl text-text-muted hover:text-primary"
              >
                <Github size={16} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="neu-btn p-3 rounded-xl text-text-muted hover:text-primary"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* 상세 내용 토글 */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-8 py-4 flex items-center justify-between text-sm text-text-muted hover:text-primary transition-colors"
      >
        <span>{expanded ? '접기' : '상세 내용 보기'}</span>
        {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {expanded && (
        <div className="px-8 pb-8">
          {/* 두 컬럼 레이아웃 (PDF 프로젝트 페이지 스타일) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 왼쪽: 설명 */}
            <div>
              <p className="text-sm text-text-muted leading-relaxed mb-5">
                {project.description}
              </p>
              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">
                  주요 성과
                </p>
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2 text-sm text-text-muted">
                      <span className="text-primary font-bold shrink-0">{String(i + 1).padStart(2, '0')}</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 오른쪽: 스크린샷 */}
            <div>
              {project.screenshots.length > 0 ? (
                <div className="grid grid-cols-2 gap-3">
                  {project.screenshots.map((src, i) => (
                    <div key={i} className="neu-card-sm overflow-hidden aspect-[9/16]">
                      <img
                        src={src}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full min-h-[160px] neu-card-sm flex items-center justify-center rounded-2xl">
                  <p className="text-text-muted text-sm">
                    스크린샷을 추가해주세요
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  const ref = useFadeIn()
  return (
    <section id="projects" className="py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto fade-in-section">
        <div className="text-center mb-4">
          <h2 className="section-title">Projects</h2>
          <div className="section-divider mx-auto" />
        </div>

        {/* 프로젝트 안내 (PDF 4페이지 스타일) */}
        <div className="neu-card p-6 mb-10 text-sm text-text-muted space-y-1">
          <p>· 공개 가능한 범위 내에서 분야별 중복되지 않는 프로젝트를 선별하여 작성하였습니다.</p>
          <p>· 각 프로젝트의 <strong className="text-text">문제 정의와 기술적 해결 과정</strong>을 중점적으로 기재하였습니다.</p>
          <p>· 기재되지 않은 프로젝트 및 기타 사항은 Contact를 통해 확인하실 수 있습니다.</p>
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
