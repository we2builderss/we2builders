'use client';
import Image from 'next/image';

const LocationPin = () => {
    const address = "We2 builders No:5381/A S.kuppchipalayam,Allalapuram road ,ugayanur,Tirupur -641605";
    const coordinates = { lat: 11.041236074644122, lng: 77.353156 };
    const googleMapsUrl = `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}&z=16`;

    return (
        <div className="w-full py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Our Location</h2>
                    <p className="mt-4 text-lg text-gray-500">
                        {address}
                    </p>
                </div>
                <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:opacity-90 transition-opacity"
                >
                    <div className="relative w-full h-[400px] rounded-lg shadow-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5!2d77.353156!3d11.041236074644122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAyJzI4LjUiTiA3N8KwMjEnMTEuNCJF!5e0!3m2!1sen!2sin!4v1697301234567!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        <div className="absolute bottom-4 left-4">
                            <div className="bg-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-gray-800 font-medium">View Larger Map</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default LocationPin;