'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const WHATSAPP_NUMBER = '5511999999999'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`

  const menuItems = [
    { href: '#sabores', label: 'Sabores' },
    { href: '#como-funciona', label: 'Como funciona' },
    { href: '#para-negocios', label: 'Para negócios' },
    { href: '#sobre', label: 'Sobre a tovah' },
    { href: '#contato', label: 'Contato' },
  ]

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b border-slate-100/50 transition-shadow duration-300 ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo-tovah.svg"
              alt="tovah"
              width={200}
              height={60}
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-10">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#3E3E3E] hover:text-[#173F4F] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Botão WhatsApp Desktop */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block btn-primary"
          >
            Pedir pelo WhatsApp
          </a>

          {/* Botão Menu Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#173F4F] p-2"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 border-t border-slate-100 mt-4 pt-6">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-[#3E3E3E] hover:text-[#173F4F] transition-colors duration-200 py-2"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center mt-2"
              >
                Pedir pelo WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
