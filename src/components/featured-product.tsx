import Image from "next/image"
// import { Button } from "../ui/button"

interface FeaturedProductProps {
  title: string
  description: string
  imageSrc: string
  bgColor: string
  textColor: string
}

export default function FeaturedProduct({ title, description, imageSrc, bgColor, textColor }: FeaturedProductProps) {
  return (
    <div className={`${bgColor} ${textColor} rounded-lg overflow-hidden`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-12">
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
          <p className="mb-8 opacity-75">{description}</p>
          {/* <Button className="bg-black hover:bg-gray-800 text-white uppercase font-bold">See Product</Button> */}
        </div>
        <div className="flex justify-center">
          <Image src={imageSrc || "/placeholder.svg"} alt={title} width={400} height={400} className="object-contain" />
        </div>
      </div>
    </div>
  )
}

