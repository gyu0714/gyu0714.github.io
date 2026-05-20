import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/portfolio'

const navItems = [
  { label: 'Home', href: '#hero', id: 'hero' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="neu-card-sm flex items-center justify-between px-6 py-3">
          <span className="font-bold text-primary text-lg tracking-wide">
            {profile.nameEn}
          </span>

          {/* 데스크탑 메뉴 */}
          <ul className="hidden md:flex gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    active === item.id
                      ? 'text-primary bg-primary/10'
                      : 'text-text-muted hover:text-primary'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* 모바일 햄버거 버튼 */}
          <button
            className="md:hidden neu-btn p-2 rounded-xl text-text-muted"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="메뉴 열기"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* 모바일 드롭다운 메뉴 */}
        {menuOpen && (
          <div className="md:hidden mt-2 neu-card-sm px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active === item.id
                    ? 'text-primary bg-primary/10'
                    : 'text-text-muted hover:text-primary'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
