"use client"
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container aspect-square ">
          <div className="embla__slide w-1/4 h-1/4 bg-red-500">Slide 1</div>


          <div className="embla__slide w-1/2">Slide 2</div>
          <div className="embla__slide w-1/2">Slide 3</div>
        </div>
      </div>


    </div>
  )
}