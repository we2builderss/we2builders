import Image from 'next/image'
import { IconBuildingFactory2, IconUsers, IconAward, IconHeart } from '@tabler/icons-react'
import { AnimatedFeatureCard } from '../components/AnimatedFeature'

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                <div className="absolute inset-0 overflow-hidden">
                    <Image
                        src="/about-hero.jpg"
                        alt="About We2Builders"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                </div>
                <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-6">Building Dreams Since 2010</h1>
                    <p className="text-xl text-gray-300">
                        We're more than just builders - we're your partners in creating the perfect home for your family.
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                            <p className="text-gray-600 mb-4">
                                Founded in 2010, We2Builders has been at the forefront of innovative home construction,
                                combining traditional craftsmanship with modern building techniques.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Our journey began with a simple mission: to create homes that families would love for
                                generations. Today, we've built hundreds of homes across the region, each one a testament
                                to our commitment to quality and customer satisfaction.
                            </p>
                        </div>
                        <div className="relative h-[400px]">
                            <Image
                                src="/story-image.jpg"
                                alt="Our journey"
                                fill
                                className="object-cover rounded-lg shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">Our Core Values</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <AnimatedFeatureCard
                            icon={<IconBuildingFactory2 size={40} />}
                            title="Quality Construction"
                            description="We use only the finest materials and proven construction techniques."
                        />
                        <AnimatedFeatureCard
                            icon={<IconUsers size={40} />}
                            title="Customer Focus"
                            description="Your satisfaction is our top priority throughout the building process."
                        />
                        <AnimatedFeatureCard
                            icon={<IconAward size={40} />}
                            title="Excellence"
                            description="We strive for excellence in every project we undertake."
                        />
                        <AnimatedFeatureCard
                            icon={<IconHeart size={40} />}
                            title="Community"
                            description="Building not just homes, but stronger communities."
                        />
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">Meet Our Leadership</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'John Smith',
                                role: 'CEO & Founder',
                                image: '/team/ceo.jpg'
                            },
                            {
                                name: 'Sarah Johnson',
                                role: 'Head of Architecture',
                                image: '/team/architect.jpg'
                            },
                            {
                                name: 'Michael Brown',
                                role: 'Construction Director',
                                image: '/team/director.jpg'
                            }
                        ].map((member, index) => (
                            <div key={index} className="text-center">
                                <div className="relative h-[300px] mb-4">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 bg-emerald-500">
               <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 text-white">Ready to Start?</h2>
          <p className="text-xl text-emerald-50 mb-10">
            Get in touch with us today for a free consultation and quote
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:+916383702001" className="px-8 py-4 bg-white hover:bg-gray-100 text-slate-900 font-semibold rounded-lg transition text-lg">
              Call Us Now
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=we2builder@gmail.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition text-lg">
              Email Us
            </a>
          </div>
        </div>
            </section>
        </main>
    )
}