import Image from 'next/image'
import Link from 'next/link'
import { Home, Clock, Shield, Leaf } from 'lucide-react'
import {
  IconHome2,
  IconClockFilled,
  IconShieldCheck,
  IconLeaf,
  IconPencil,
  IconTools,
  IconBuildingFactory2,
  IconTruck
} from '@tabler/icons-react'
import { AnimatedFeatureCard, AnimatedProcessStep } from './components/AnimatedFeature'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            Build Your Dream Home
            <span className="block text-emerald-400">In Record Time</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Premium readymade houses delivered and installed within weeks. Quality construction, sustainable materials, modern designs.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="#models" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition text-lg">
              View Our Models
            </Link>
            <Link href="#contact" className="px-8 py-4 bg-white hover:bg-gray-100 text-slate-900 font-semibold rounded-lg transition text-lg">
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-slate-900">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <AnimatedFeatureCard
              icon={<IconClockFilled size={48} strokeWidth={2} />}
              title="Quick Delivery"
              description="Houses ready in 4-8 weeks from order confirmation"
            />
            <AnimatedFeatureCard
              icon={<IconShieldCheck size={48} strokeWidth={2} />}
              title="Quality Assured"
              description="Premium materials with 10-year structural warranty"
            />
            <AnimatedFeatureCard
              icon={<IconLeaf size={48} strokeWidth={2} />}
              title="Eco-Friendly"
              description="Sustainable and energy-efficient construction"
            />
            <AnimatedFeatureCard
              icon={<IconHome2 size={48} strokeWidth={2} />}
              title="Customizable"
              description="Flexible designs to match your vision"
            />
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section id="models" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-slate-900">Our Popular Models</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ModelCard
              image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800"
              title="Compact Nest"
              size="600 sq ft"
              price="$75,000"
              bedrooms={1}
            />
            <ModelCard
              image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
              title="Family Haven"
              size="1200 sq ft"
              price="$135,000"
              bedrooms={3}
            />
            <ModelCard
              image="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800"
              title="Luxury Estate"
              size="2000 sq ft"
              price="$220,000"
              bedrooms={4}
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16">Simple Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <AnimatedProcessStep
              number="01"
              title="Choose Design"
              description="Select from our catalog or customize"
              icon={<IconPencil size={32} stroke={2} />}
            />
            <AnimatedProcessStep
              number="02"
              title="Site Preparation"
              description="We help prepare your land"
              icon={<IconTools size={32} stroke={2} />}
            />
            <AnimatedProcessStep
              number="03"
              title="Manufacturing"
              description="Your home is built in our facility"
              icon={<IconBuildingFactory2 size={32} stroke={2} />}
            />
            <AnimatedProcessStep
              number="04"
              title="Installation"
              description="Delivered and assembled on-site"
              icon={<IconTruck size={32} stroke={2} />}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-emerald-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 text-white">Ready to Start?</h2>
          <p className="text-xl text-emerald-50 mb-10">
            Get in touch with us today for a free consultation and quote
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:+1234567890" className="px-8 py-4 bg-white hover:bg-gray-100 text-slate-900 font-semibold rounded-lg transition text-lg">
              Call Us Now
            </a>
            <a href="mailto:info@readymadehomes.com" className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition text-lg">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="text-center p-6">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 text-emerald-600 rounded-2xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function ModelCard({ image, title, size, price, bedrooms }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
      <div className="relative h-64 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-slate-900">{title}</h3>
        <div className="flex justify-between items-center mb-4 text-gray-600">
          <span>{size}</span>
          <span>{bedrooms} Bed</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-emerald-600">{price}</span>
          <button className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition">
            Details
          </button>
        </div>
      </div>
    </div>
  )
}

function ProcessStep({ number, title, description }) {
  return (
    <div className="text-center">
      <div className="text-6xl font-bold text-emerald-400 mb-4">{number}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}