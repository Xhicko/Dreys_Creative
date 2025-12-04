import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"
import { motion, AnimatePresence } from "framer-motion"
import RevealOnScroll from "./RevealOnScroll"
import Image from "./Image" // Import the custom Image component

// Import Images (using placeholder URLs)
import DreysCreative from "../Images/DREY_CREATIVE.jpg"
import MMM from "../Images/mnm.jpg"
import Creativity2 from "../Images/MY_CREATIVITY_ROOM2.jpg"
import Creativity3 from "../Images/MY_CREATIVITY_ROOM3.jpg"
import Megan from "../Images/MISS_MEGAN ART.jpg"
import MjTouch from "../Images/MA-J'S_TOUCH.jpg"
import Timeless from "../Images/ONYI_TIMELESS_CUISINE.jpg"
import Poolfest from "../Images/POOL_FEST_GRAPHICS.jpg"
import Sacs from "../Images/SACS.jpg"
import Sips from "../Images/SIP_&_PAINT.jpg"
import Marketplace from "../Images/MARKET_GIRL.jpg"
import KlafPlug from "../Images/KLAFPLUG.jpg"
import GameFiesta from "../Images/GAME FIESTA.jpg"
import RootedRythmA1 from "../Images/rooted_rythm_A1.jpg"
import BurialPosterA2 from "../Images/burial_Poster_Create_A2.jpg"
import BlueOakA3 from "../Images/blue_oak_A3.jpg"
import PreJoyA4 from "../Images/pre_joy_A4.jpg"
import LukassVisualA5 from "../Images/lukass_visual_A5.jpg"
import VelonixA6 from "../Images/VELONIX_A6.jpg"
import VelonixA7 from "../Images/VELONIX_A7.jpg"
import DavidoA8 from "../Images/davido_A8.jpg"
import OsimhenA9 from "../Images/osimhen_A9.jpg"
import DreyDecemberA10 from "../Images/drey_december_A10.jpg"


const galleryItems = [
  { id: 1, src: DreysCreative, alt: "Dreys Creative" },
  { id: 2, src: MMM, alt: "M&M" },
  { id: 3, src: Creativity2, alt: "Creativity Room 2" },
  { id: 4, src: Creativity3, alt: "Creativity Room 3" },
  { id: 5, src: Megan, alt: "Miss Megan Art" },
  { id: 6, src: MjTouch, alt: "Mj Touch" },
  { id: 7, src: Timeless, alt: "Onyi Timeless Cuisine" },
  { id: 8, src: Poolfest, alt: "Pool Fest" },
  { id: 9, src: Sacs, alt: "Sacs" },
  { id: 10, src: Sips, alt: "Sips and Paint" },
  { id: 11, src: Marketplace, alt: "Market Place" },
  { id: 12, src: KlafPlug, alt: "Klaf Plug" },
  { id: 13, src: GameFiesta, alt: "Game Fiesta" },
  { id: 14, src: RootedRythmA1, alt: "Rooted Rythm" },
  { id: 15, src: BurialPosterA2, alt: "Burial Poster" },
  { id: 16, src: BlueOakA3, alt: "Blue Oak " },
  { id: 17, src: PreJoyA4, alt: "Pre Joy " },
  { id: 18, src: LukassVisualA5, alt: "Lukass Visual" },
  { id: 19, src: VelonixA6, alt: "Velonix" },
  { id: 20, src: VelonixA7, alt: "Velonix" },
  { id: 21, src: DavidoA8, alt: "Davido" },
  { id: 22, src: OsimhenA9, alt: "Osimhen" },
  { id: 23, src: DreyDecemberA10, alt: "December" },
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

