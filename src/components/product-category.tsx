import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

interface ProductCategoryProps {
  title: string
  imageSrc: string
}

export default function ProductCategory({ title, imageSrc }: ProductCategoryProps) {
  return (
    <div className="bg-gray-100 rounded-lg p-6 text-center relative pt-20 pb-6">
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} width={160} height={160} className="object-contain" />
      </div>
      <h3 className="font-bold text-lg mb-4">{title}</h3>
      <Link
        href={`/${title.toLowerCase()}`}
        className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-orange-500"
      >
        SHOP <ChevronRight className="h-4 w-4 ml-2" />
      </Link>
    </div>
  )
}

