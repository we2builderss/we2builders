import Link from 'next/link'
import Image from 'next/image'

const FacebookIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M24,12.073 C24,5.405 18.627,0 12,0 C5.373,0 0,5.405 0,12.073 C0,18.099 4.388,23.094 10.125,24 L10.125,15.563 L7.078,15.563 L7.078,12.073 L10.125,12.073 L10.125,9.413 C10.125,6.388 11.917,4.717 14.658,4.717 C15.97,4.717 17.344,4.952 17.344,4.952 L17.344,7.876 L15.83,7.876 C14.339,7.876 13.875,8.801 13.875,9.749 L13.875,12.073 L17.2,12.073 L16.67,15.563 L13.875,15.563 L13.875,24 C19.612,23.094 24,18.099 24,12.073" />
    </svg>
)

const InstagramIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12,0 C8.74,0 8.333,0.015 7.053,0.072 C5.775,0.132 4.905,0.333 4.14,0.63 C3.351,0.936 2.681,1.347 2.014,2.014 C1.347,2.681 0.935,3.35 0.63,4.14 C0.333,4.905 0.131,5.775 0.072,7.053 C0.012,8.333 0,8.74 0,12 C0,15.26 0.015,15.667 0.072,16.947 C0.132,18.224 0.333,19.095 0.63,19.86 C0.936,20.648 1.347,21.319 2.014,21.986 C2.681,22.652 3.35,23.065 4.14,23.37 C4.906,23.666 5.776,23.869 7.053,23.928 C8.333,23.988 8.74,24 12,24 C15.26,24 15.667,23.985 16.947,23.928 C18.224,23.868 19.095,23.666 19.86,23.37 C20.648,23.064 21.319,22.652 21.986,21.986 C22.652,21.319 23.065,20.651 23.37,19.86 C23.666,19.095 23.869,18.224 23.928,16.947 C23.988,15.667 24,15.26 24,12 C24,8.74 23.985,8.333 23.928,7.053 C23.868,5.776 23.666,4.904 23.37,4.14 C23.064,3.351 22.652,2.681 21.986,2.014 C21.319,1.347 20.651,0.935 19.86,0.63 C19.095,0.333 18.224,0.131 16.947,0.072 C15.667,0.012 15.26,0 12,0 Z M12,2.16 C15.203,2.16 15.585,2.176 16.846,2.231 C18.021,2.286 18.673,2.48 19.077,2.646 C19.605,2.863 19.988,3.123 20.39,3.525 C20.792,3.927 21.052,4.31 21.269,4.838 C21.435,5.242 21.63,5.894 21.684,7.069 C21.739,8.33 21.755,8.712 21.755,11.915 C21.755,15.118 21.739,15.5 21.684,16.761 C21.629,17.936 21.435,18.588 21.269,18.992 C21.052,19.52 20.792,19.903 20.39,20.305 C19.988,20.707 19.605,20.967 19.077,21.184 C18.673,21.35 18.021,21.545 16.846,21.6 C15.585,21.654 15.203,21.67 12,21.67 C8.797,21.67 8.415,21.654 7.154,21.6 C5.979,21.545 5.327,21.35 4.923,21.184 C4.395,20.967 4.012,20.707 3.61,20.305 C3.208,19.903 2.948,19.52 2.731,18.992 C2.565,18.588 2.37,17.936 2.316,16.761 C2.261,15.5 2.245,15.118 2.245,11.915 C2.245,8.712 2.261,8.33 2.316,7.069 C2.371,5.894 2.565,5.242 2.731,4.838 C2.948,4.31 3.208,3.927 3.61,3.525 C4.012,3.123 4.395,2.863 4.923,2.646 C5.327,2.48 5.979,2.286 7.154,2.231 C8.415,2.176 8.797,2.16 12,2.16" />
        <path d="M12,15.838 C9.73,15.838 7.893,14.001 7.893,11.731 C7.893,9.461 9.73,7.624 12,7.624 C14.27,7.624 16.107,9.461 16.107,11.731 C16.107,14.001 14.27,15.838 12,15.838 M12,5.454 C8.528,5.454 5.714,8.268 5.714,11.74 C5.714,15.212 8.528,18.026 12,18.026 C15.472,18.026 18.286,15.212 18.286,11.74 C18.286,8.268 15.472,5.454 12,5.454" />
        <path d="M18.406,5.269 C18.406,4.577 17.844,4.015 17.152,4.015 C16.46,4.015 15.898,4.577 15.898,5.269 C15.898,5.961 16.46,6.523 17.152,6.523 C17.844,6.523 18.406,5.961 18.406,5.269" />
    </svg>
)

const LinkedInIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447,20.452 L16.893,20.452 L16.893,14.883 C16.893,13.555 16.866,11.846 15.041,11.846 C13.188,11.846 12.905,13.291 12.905,14.785 L12.905,20.452 L9.351,20.452 L9.351,9 L12.765,9 L12.765,10.561 L12.811,10.561 C13.288,9.661 14.448,8.711 16.181,8.711 C19.782,8.711 20.448,11.081 20.448,14.166 L20.448,20.452 L20.447,20.452 Z M5.337,7.433 C4.193,7.433 3.274,6.507 3.274,5.368 C3.274,4.23 4.194,3.305 5.337,3.305 C6.477,3.305 7.401,4.23 7.401,5.368 C7.401,6.507 6.476,7.433 5.337,7.433 Z M7.119,20.452 L3.555,20.452 L3.555,9 L7.119,9 L7.119,20.452 Z M22.225,0 L1.771,0 C0.792,0 0,0.774 0,1.729 L0,22.271 C0,23.227 0.792,24 1.771,24 L22.222,24 C23.2,24 24,23.227 24,22.271 L24,1.729 C24,0.774 23.2,0 22.222,0 L22.225,0 Z" />
    </svg>
)

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4 md:col-span-3">
                        <div className="text-3xl font-bold">
                            <span className="text-[#23affd]">WE</span>
                            <span className="text-emerald-500">2</span>
                            <span className="text-white ">Builders</span>
                        </div>
                        <p className="text-[#23affd]">
                            Your Future our Build
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-white hover:text-emerald-500 transition-colors">Home</Link></li>
                            <li><Link href="/#models" className="text-white hover:text-emerald-500 transition-colors">Models</Link></li>
                            <li><Link href="/about" className="text-white hover:text-emerald-500 transition-colors">About</Link></li>
                            <li><Link href="/gallery" className="text-white hover:text-emerald-500 transition-colors">Gallery</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-4">
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-white">
                            <li style={{ whiteSpace: 'nowrap' }}>We2 builders,No:5381/A,S.kuppchipalayam,</li>
                            <li>Allalapuram road ,ugayanur,</li>
                            <li>Tirupur -641605.</li>
                            <li>Phone: 9894619694, 6383702001</li>
                            <li>Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=we2builder@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">we2builder@gmail.com</a></li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="md:col-span-3">
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-6">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-500 transition-colors">
                                <FacebookIcon />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-500 transition-colors">
                                <InstagramIcon />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-500 transition-colors">
                                <LinkedInIcon />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} WE2Builders. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
