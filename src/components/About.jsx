import { summary, experiences, tools } from '../data/portfolio'
import { useFadeIn } from '../hooks/useFadeIn'

export default function About() {
  const ref = useFadeIn()
  return (
    <section id="about" className="py-24 px-6">

      <div ref={ref} className="max-w-5xl mx-auto fade-in-section">
        {/* 섹션 헤더 */}
        <div className="text-center mb-14">
          <h2 className="section-title">About</h2>
          <div className="section-divider mx-auto" />
          <p className="text-text-muted leading-relaxed max-w-2xl mx-auto">
            {summary.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 경력 카드 (PDF 2페이지 왼쪽) */}
          <div className="neu-card p-8">
            <div className="mb-6">
              <p className="text-xs text-text-muted uppercase tracking-widest mb-1">
                Total Experience
              </p>
              <p className="text-2xl font-bold text-primary">
                총 경력 {summary.careerYears}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {experiences.map((exp, i) => (
                <div key={i} className="neu-card-sm p-5 flex gap-4 items-start">
                  {/* 로고 영역 */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-primary text-lg shrink-0"
                    style={{
                      boxShadow: '3px 3px 6px #b8cce0, -3px -3px 6px #ffffff',
                    }}
                  >
                    {exp.logo ? (
                      <img src={exp.logo} alt={exp.company} className="w-10 h-10 object-contain" />
                    ) : (
                      exp.company.charAt(0)
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-text">{exp.company}</p>
                    <p className="text-xs text-text-muted mb-2">{exp.period}</p>
                    <ul className="text-sm text-text-muted space-y-1">
                      {exp.tasks.map((task, j) => (
                        <li key={j} className="flex gap-1">
                          <span className="text-primary shrink-0">·</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 툴 카드 (PDF 2페이지 오른쪽) */}
          <div className="neu-card p-8">
            <div className="mb-6">
              <p className="text-xs text-text-muted uppercase tracking-widest mb-1">
                Tools & Skills
              </p>
              <p className="text-lg font-bold text-text leading-snug">
                명확한 아이디어 구현과<br />
                소통을 위해 다양한 툴을 활용합니다.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {tools.map((tool, i) => (
                <div key={i} className="neu-card-sm p-4 flex flex-col items-center gap-2">
                  <span className="text-2xl">{tool.icon}</span>
                  <span className="text-xs font-medium text-text-muted text-center">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
