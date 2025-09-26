import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase">
            Bringing you the <span className="text-orange-500">best</span> audio gear
          </h2>
          <p className="text-gray-500">
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones,
            speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you
            to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic
            people who make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        
      </div>
    </section>
  )
}

