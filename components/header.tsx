"use client"

import { useEffect, useState } from "react"

export default function Header() {
  const [shuffledImages, setShuffledImages] = useState<Array<{filename: string, status: 'SOLD' | 'CASHED' | null}>>([])

  useEffect(() => {
    // Create array of all image filenames
    const imageFiles = [
      "noFilter.webp",
      "noFilter-1.webp",
      "noFilter-4.webp",
      "noFilter-5.webp",
      "noFilter-6.webp",
      "noFilter-7.webp",
      "noFilter-8.webp",
      "noFilter-9.webp",
      "noFilter-10.webp",
      "noFilter-11.webp",
      "noFilter-12.webp",
      "noFilter-13.webp",
      "noFilter-14.webp",
      "noFilter-15.webp",
      "noFilter-16.webp",
      "noFilter-17.webp",
      "noFilter-18.webp",
      "noFilter-19.webp",
      "noFilter-20.webp",
      "noFilter-21.webp",
      "noFilter-22.webp",
      "noFilter-23.webp",
      "noFilter-25.webp",
      "noFilter-26.webp",
      "noFilter-27.webp",
      "noFilter-28.webp",
      "noFilter-29.webp"
    ]

    // Shuffle the array and add SOLD or CASHED status for some images
    const shuffled = [...imageFiles]
      .sort(() => Math.random() - 0.5)
      .map((image) => ({
        filename: image,
        status: Math.random() > 0.6 ? (Math.random() > 0.5 ? 'SOLD' : 'CASHED') : null,
      }))
    setShuffledImages(shuffled)
  }, [])

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      {/* Image Marquee */}
      <div className="bg-slate-800/50 overflow-hidden">
        <div className="relative">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            <div className="flex space-x-4 px-4 py-2">
              {shuffledImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border border-slate-700/50 shadow-lg hover:shadow-green-600/20 transition-all duration-300 hover:scale-105 relative"
                >
                  <img
                    src={`/badges/${image.filename}`}
                    alt={`Roblox item ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {image.status && (
                    <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center">
                      <img
                        src={image.status === 'SOLD' ? '/badges/sold.svg' : '/badges/cashed.svg'}
                        alt={image.status}
                        className="w-[80%] max-w-none opacity-60"
                        style={{ transform: "rotate(-20deg)" }}
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Duplicate for seamless loop */}
            <div className="flex space-x-4 px-4 py-2">
              {shuffledImages.map((image, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border border-slate-700/50 shadow-lg hover:shadow-green-600/20 transition-all duration-300 hover:scale-105 relative"
                >
                  <img
                    src={`/badges/${image.filename}`}
                    alt={`Roblox item ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {image.status && (
                    <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center">
                      <img
                        src={image.status === 'SOLD' ? '/badges/sold.svg' : '/badges/cashed.svg'}
                        alt={image.status}
                        className="w-[80%] max-w-none opacity-60"
                        style={{ transform: "rotate(-20deg)" }}
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
