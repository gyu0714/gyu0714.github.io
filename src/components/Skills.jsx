import { strengths, tags } from '../data/portfolio'
import { useFadeIn } from '../hooks/useFadeIn'

export default function Skills() {
  const ref = useFadeIn()
  return (
    <section id="skills" className="py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto fade-in-section">
        {/* 섹션 헤더 */}
        <div className="text-center mb-6">
          <h2 className="section-title">Strengths</h2>
          <div className="section-divider mx-auto" />
        </div>

        {/* 태그 라인 (PDF 3페이지 상단) */}
        <p className="text-center text-text-muted text-sm mb-12">
          여러 기술 중에서도 핵심적으로{' '}
          {tags.map((tag, i) => (
            <span key={i}>
              <span className="inline-block bg-text text-white text-xs font-medium px-3 py-1 rounded-full mx-1">
                {tag}
              </span>
              {i < tags.length - 1 && ' '}
            </span>
          ))}{' '}
          등 다양한 강점을 가지고 있습니다.
        </p>

        {/* 강점 카드 3개 (PDF 3페이지 카드 그리드) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strengths.map((item, i) => (
            <div
              key={i}
              className="neu-card p-8 flex flex-col items-center text-center gap-5 transition-all duration-300 hover:translate-y-[-4px]"
              style={{
                transition: 'box-shadow 0.3s, transform 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  '12px 12px 24px #b8cce0, -12px -12px 24px #ffffff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  '8px 8px 16px #b8cce0, -8px -8px 16px #ffffff'
              }}
            >
              {/* 아이콘 뱃지 */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                style={{
                  background: 'linear-gradient(135deg, #5b9cf6, #1d6ae5)',
                  boxShadow: '3px 3px 8px #b8cce0, -3px -3px 8px #ffffff',
                }}
              >
                {item.icon}
              </div>

              <div>
                <p className="font-bold text-text text-base mb-2">{item.title}</p>
                <p className="text-sm text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
