import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"
import { motion, AnimatePresence } from "framer-motion"
import RevealOnScroll from "./RevealOnScroll"
import Image from "./Image" // Import the custom Image component

// Import Images (using placeholder URLs)
import DreysCreative from "../Images/DREY_CREATIVE.jpg"
import Creativity from "../Images/MY_CREATIVITY_ROOM.jpg"
import Creativity2 from "../Images/MY_CREATIVITY_ROOM2.jpg"
import Creativity3 from "../Images/MY_CREATIVITY_ROOM3.jpg"
import Megan from "../Images/MISS_MEGAN ART.jpg"
import MjTouch from "../Images/MA-J'S_TOUCH.jpg"
import Timeless from "../Images/ONYI_TIMELESS_CUISINE.jpg"
import Poolfest from "../Images/POOL_FEST_GRAPHICS.jpg"
import Sacs from "../Images/SACS.jpg"
import Sips from "../Images/SIP_&_PAINT.jpg"

const galleryItems = [
  { id: 1, src: DreysCreative, alt: "Dreys Creative" },
  { id: 2, src: Creativity, alt: "Creativity Room 1" },
  { id: 3, src: Creativity2, alt: "Creativity Room 2" },
  { id: 4, src: Creativity3, alt: "Creativity Room 3" },
  { id: 5, src: Megan, alt: "Miss Megan Art" },
  { id: 6, src: MjTouch, alt: "Mj Touch" },
  { id: 7, src: Timeless, alt: "Onyi Timeless Cuisine" },
  { id: 8, src: Poolfest, alt: "Pool Fest" },
  { id: 9, src: Sacs, alt: "Sacs" },
  { id: 10, src: Sips, alt: "Sips and Paint" },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="gallery" className="py-20 bg-[#ffffff]">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold text-center mb-12 text-[#121314]">
            Featured Works
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <RevealOnScroll key={item.id}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="p-0 w-full h-auto overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                      onClick={() => setSelectedImage(item)}
                    >
                      <div className="relative w-full h-96">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          layout="fill"
                          objectFit="cover"
                          quality={75}
                          style={{
                            transition: "transform 0.3s ease-in-out",
                          }}
                        />
                      </div>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <AnimatePresence>
                      {selectedImage && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="relative w-full h-[60vh]">
                            <Image
                              src={selectedImage.src}
                              alt={selectedImage.alt}
                              layout="fill"
                              objectFit="contain"
                              quality={90}
                            />
                          </div>
                          <p className="mt-2 text-center text-[#121314]">{selectedImage.alt}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </DialogContent>
                </Dialog>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

