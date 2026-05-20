import { Github, Mail, ExternalLink } from 'lucide-react'
import { profile } from '../data/portfolio'
import { useFadeIn } from '../hooks/useFadeIn'

export default function Contact() {
  const ref = useFadeIn()
  return (
    <section id="contact" className="py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto fade-in-section">
        <div className="text-center mb-14">
          <h2 className="section-title">Contact</h2>
          <div className="section-divider mx-auto" />
          <p className="text-text-muted">
            새로운 기회나 협업에 대해 이야기 나누고 싶으시면 언제든지 연락주세요.
          </p>
        </div>

        <div className="neu-card p-12 max-w-2xl mx-auto">
          <div className="flex flex-col gap-5">
            <a
              href={`mailto:${profile.email}`}
              className="neu-card-sm flex items-center gap-5 p-5 hover:translate-y-[-2px] transition-transform duration-200 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #5b9cf6, #1d6ae5)' }}
              >
                <Mail size={20} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wide mb-1">Email</p>
                <p className="font-medium text-text group-hover:text-primary transition-colors">
                  {profile.email}
                </p>
              </div>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="neu-card-sm flex items-center gap-5 p-5 hover:translate-y-[-2px] transition-transform duration-200 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #5b9cf6, #1d6ae5)' }}
              >
                <Github size={20} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wide mb-1">GitHub</p>
                <p className="font-medium text-text group-hover:text-primary transition-colors">
                  {profile.github}
                </p>
              </div>
            </a>

            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="neu-card-sm flex items-center gap-5 p-5 hover:translate-y-[-2px] transition-transform duration-200 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #5b9cf6, #1d6ae5)' }}
                >
                  <ExternalLink size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wide mb-1">LinkedIn</p>
                  <p className="font-medium text-text group-hover:text-primary transition-colors">
                    {profile.linkedin}
                  </p>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
