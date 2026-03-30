"use client"

import { HttpTypes } from "@medusajs/types"
import { Container } from "@medusajs/ui"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
  })

  return (
    <div className="embla w-full">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="embla__slide flex-[0_0_100%] relative"
            >
              <Container className="aspect-square w-full overflow-hidden bg-ui-bg-subtle">
                {!!image.url && (
                  <Image
                    src={image.url}
                    priority={index <= 2}
                    className="absolute inset-0 rounded-rounded basis-1/2"
                    alt={`Product image ${index + 1}`}
                    fill
                    sizes="(max-width: 400px) 280px, (max-width: 400px) 480px, 800px"
                    style={{ objectFit: "cover" }}
                  />
                )}
              </Container>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageGallery