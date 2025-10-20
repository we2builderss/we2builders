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
import LocationPin from './components/LocationPin'

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
            <span className="block mb-2">Premium readymade houses delivered and installed within weeks.</span>
            <span className="block text-emerald-300">Quality construction • Sustainable materials • Modern designs</span>
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
              image="/pic1.jpg"
              title="Studio Plus"
              size="120 sq"
              price="$75,000"
              dimensions="11 x 11"
              features={[
                "Smart Space Utilization",
                "Modern Kitchenette",
                "Built-in Storage Solutions"
              ]}
            />
            <ModelCard
              image="/pic1.jpg"
              title="Urban Comfort"
              size="180 sq"
              price="$135,000"
              dimensions="11 x 17"
              features={[
                "Spacious Living Area",
                "Contemporary Kitchen",
                "Elegant Master Suite"
              ]}
            />
            <ModelCard
              image="/pic3.jpg"
              title="Family Suite"
              size="231 sq"
              dimensions="11 x 21"
              price="$220,000"
              bedrooms={4}
              features={[
                "Premium Interior Finishes",
                "Grand Entertainment Space",
                "Luxury Master Suite"
              ]}
            />
            <ModelCard
              image="/pic2.jpg"
              title="Executive Home"
              size="475 sq"
              price="$220,000"
              bedrooms={1}
              features={[
                "Premium Interior Finishes",
                "Grand Entertainment Space",
                "Luxury Master Suite"
              ]}
            />
            <ModelCard
              image="/pic2.jpg"
              title="Grand Villa"
              size="720 sq"
              price="$220,000"
              bedrooms={2}
              features={[
                "Premium Interior Finishes",
                "Grand Entertainment Space",
                "Luxury Master Suite"
              ]}
            />
            <ModelCard
              image="/pic3.jpg"
              title="Premium Estate"
              size="1000 sq"
              price="$220,000"
              bedrooms={3}
              features={[
                "Premium Interior Finishes",
                "Grand Entertainment Space",
                "Luxury Master Suite"
              ]}
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
            <a href="tel:+919894619694" className="px-8 py-4 bg-white hover:bg-gray-100 text-slate-900 font-semibold rounded-lg transition text-lg">
              Call Us Now
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=we2builder@gmail.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition text-lg">
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <LocationPin />
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

function ModelCard({ image, title, size, price, bedrooms, dimensions, features = [] }) {

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
      <div className="relative h-64 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-slate-900">{title}</h3>
        <div className="flex justify-between items-center mb-4 text-gray-600">
          <span>{size}</span>
          <span>{dimensions ? dimensions : `${bedrooms} BHK`}</span>
        </div>
        {features.length > 0 && (
          <ul className="space-y-2 mb-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors">
                <svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        {/* <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-emerald-600">{price}</span>
          <button className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition">
            Details
          </button>
        </div> */}
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