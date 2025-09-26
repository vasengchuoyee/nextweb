import Link from "next/link"
import Image from "next/image"
// import { Button } from "@/components/ui/button"
import ProductCategory from "@/components/product-category"
import AboutSection from "@/components/about-section"

export default function HomePage() {
  return (
    <div className="flex flex-col  min-h-screen">
      <header className="bg-black px-40 text-white">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between border-b border-gray-700 pb-8">
            <div className="md:hidden">
              <button className="text-white">
                <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="currentColor" fillRule="evenodd"/>
                </svg>
              </button>
            </div>
            <div className="flex-1 md:flex-none text-center md:text-left">
              <Link href="/" className="text-2xl font-bold">audiophile</Link>
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li><Link href="/" className="uppercase text-sm font-bold hover:text-orange-500">Home</Link></li>
                <li><Link href="/headphones" className="uppercase text-sm font-bold hover:text-orange-500">Headphones</Link></li>
                <li><Link href="/speakers" className="uppercase text-sm font-bold hover:text-orange-500">Speakers</Link></li>
                <li><Link href="/earphones" className="uppercase text-sm font-bold hover:text-orange-500">Earphones</Link></li>
              </ul>
            </nav>
            <div>
              <button className="text-white">
                <svg width="23" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z" fill="currentColor" fillRule="nonzero"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="py-24 text-center bg-[url('/hero-bg.jpg')] bg-cover bg-center">
          <div className="container mx-auto px-6">
            <p className="text-gray-400 uppercase tracking-[0.5em] mb-4">New product</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Audiophile</h1>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
              Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>
            <button className="bg-orange-500 hover:bg-orange-400 text-white uppercase font-bold">
              See Products
            </button>
          </div>
        </div>
      </header>      

      <main className="flex-1 px-40">
        <section className="container mx-auto px-6 py-24">

          <div className="grid grid-cols-1 gap-8">
            <div className="bg-orange-500 rounded-lg p-12 text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">ZX9 SPEAKER</h2>
                  <p className="mb-8">
                    Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                  </p>
                  <button className="bg-black hover:bg-gray-800 text-white uppercase font-bold">
                    See Product
                  </button>
                </div>
               
              </div>
            </div>
          </div>
        </section>

        <AboutSection />
      </main>

      <footer className="bg-black text-white">
        <div className="container px-40 mx-auto py-12">
          <div className="flex flex-col md:flex-row justify-between border-b border-gray-700 pb-12">
            <div>
              <Link href="/" className="text-2xl font-bold">audiophile</Link>
            </div>
            <nav className="mt-8 md:mt-0">
              <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                <li><Link href="/" className="uppercase text-sm font-bold hover:text-orange-500">Home</Link></li>
                <li><Link href="/headphones" className="uppercase text-sm font-bold hover:text-orange-500">Headphones</Link></li>
                <li><Link href="/speakers" className="uppercase text-sm font-bold hover:text-orange-500">Speakers</Link></li>
                <li><Link href="/earphones" className="uppercase text-sm font-bold hover:text-orange-500">Earphones</Link></li>
              </ul>
            </nav>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
            <div>
              <p className="text-gray-400">
                Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.
              </p>
            </div>
            <div className="md:text-right">
              <p className="text-gray-400">Copyright 2023. All Rights Reserved</p>
              <div className="flex mt-6 space-x-4 md:justify-end">
                <a href="#" className="text-white hover:text-orange-500">
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" fill="currentColor" fillRule="nonzero"/>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-orange-500">
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

