'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Home } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-md'
      }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition">
            <div className="text-3xl font-bold">
              <span className="text-[#23affd]">WE</span>
              <span className="text-emerald-500">2</span>
              <span className="text-[#152259]">Builders</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#models" className="text-slate-700 hover:text-emerald-500 font-medium transition-colors">
              Models
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-emerald-500 font-medium transition-colors">
              About
            </Link>
            {/* <Link href="/process" className="text-slate-700 hover:text-emerald-500 font-medium transition-colors">
              Process
            </Link> */}
            <Link href="/gallery" className="text-slate-700 hover:text-emerald-500 font-medium transition-colors">
              Gallery
            </Link>
            {/* <Link href="/faq" className="text-slate-700 hover:text-emerald-500 font-medium transition-colors">
              FAQ
            </Link> */}
            <Link href="/#contact" className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all hover:shadow-lg">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-900 p-2 hover:bg-slate-100 rounded-lg transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 animate-in slide-in-from-top">
            <div className="flex flex-col gap-4">
              <Link
                href="/#models"
                className="text-slate-700 hover:text-emerald-500 font-medium transition-colors px-4 py-2 hover:bg-slate-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Models
              </Link>
              <Link
                href="/about"
                className="text-slate-700 hover:text-emerald-500 font-medium transition-colors px-4 py-2 hover:bg-slate-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              {/* <Link
                href="/process"
                className="text-slate-700 hover:text-emerald-500 font-medium transition-colors px-4 py-2 hover:bg-slate-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Process
              </Link> */}
              <Link
                href="/gallery"
                className="text-slate-700 hover:text-emerald-500 font-medium transition-colors px-4 py-2 hover:bg-slate-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              {/* <Link
                href="/faq"
                className="text-slate-700 hover:text-emerald-500 font-medium transition-colors px-4 py-2 hover:bg-slate-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link> */}
              <Link
                href="/#contact"
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition text-center mx-4"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
