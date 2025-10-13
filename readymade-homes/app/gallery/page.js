import Image from 'next/image'

export default function Gallery() {
    const galleryImages = [
        {
            id: 1,
            src: '/gallery-1.svg',
            alt: 'Gallery Image 1',
            width: 400,
            height: 300,
        },
        {
            id: 2,
            src: '/gallery-2.svg',
            alt: 'Gallery Image 2',
            width: 400,
            height: 300,
        },
        {
            id: 3,
            src: '/gallery-3.svg',
            alt: 'Gallery Image 3',
            width: 400,
            height: 300,
        },
    ]

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 mt-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold text-center mb-6">Our Project Gallery</h1>
                    <p className="text-xl text-center text-blue-100 max-w-2xl mx-auto">
                        Explore our collection of stunning homes and architectural projects
                    </p>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryImages.map((image) => (
                        <div
                            key={image.id}
                            className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="aspect-w-4 aspect-h-3">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={image.width}
                                    height={image.height}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    <h3 className="text-xl font-semibold text-center">{image.alt}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}