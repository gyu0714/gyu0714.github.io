import { Github, Mail } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20 pb-10"
    >
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* 프로필 카드 — PDF 1페이지 왼쪽 카드 구조 */}
        <div className="flex justify-center md:justify-end">
          <div className="neu-card p-8 flex flex-col gap-5 w-80">

            {/* 아바타 */}
            <div className="flex justify-center">
              <div
                className="w-32 h-32 rounded-full flex items-center justify-center text-5xl shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #5b9cf6, #1d6ae5)',
                  boxShadow: '4px 4px 10px #b8cce0, -4px -4px 10px #ffffff',
                }}
              >
                {profile.avatar ? (
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  '👤'
                )}
              </div>
            </div>

            {/* 역할 + 생년월일 / 이름 */}
            <div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-primary">{profile.role}</span>
                <span className="text-xs text-text-muted">{profile.birth}</span>
              </div>
              <p className="text-2xl font-bold text-text mt-0.5">{profile.name}</p>
            </div>

            {/* 인사말 + 자기소개 */}
            <div>
              <p className="text-sm text-text-muted">{profile.greeting}</p>
              <p className="text-sm font-bold text-text mt-0.5">{profile.selfIntro}</p>
            </div>

            {/* 정보 항목 */}
            <div className="flex flex-col gap-1.5">
              {profile.infoItems.map((item, i) => (
                <p key={i} className="text-xs text-text-muted">{item}</p>
              ))}
            </div>

            {/* 소셜 링크 */}
            <div className="flex gap-2 pt-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="neu-btn p-2.5 rounded-xl text-text-muted hover:text-primary"
              >
                <Github size={15} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="neu-btn p-2.5 rounded-xl text-text-muted hover:text-primary"
              >
                <Mail size={15} />
              </a>
            </div>

          </div>
        </div>

        {/* 인트로 텍스트 — PDF 1페이지 오른쪽 구조 */}
        <div className="flex flex-col gap-10 text-center md:text-left">

          <div>
            <p className="text-base text-text mb-2">
              As a <span className="font-bold text-primary">{profile.introLabel}</span>
            </p>
            <p className="text-text-muted leading-relaxed text-sm">
              {profile.intro.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < profile.intro.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          <div>
            <p className="text-base text-text mb-2">
              Like a <span className="font-bold text-primary">{profile.intro2Label}</span>
            </p>
            <p className="text-text-muted leading-relaxed text-sm">
              {profile.intro2.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < profile.intro2.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          <div className="flex gap-3 flex-wrap justify-center md:justify-start">
            <a href="#projects" className="neu-btn text-primary font-semibold text-sm px-5 py-2.5">
              프로젝트 보기
            </a>
            <a href="#contact" className="neu-btn text-text-muted text-sm px-5 py-2.5">
              연락하기
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
