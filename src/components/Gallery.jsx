import { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"
import { motion, AnimatePresence } from "framer-motion"

// Import Images
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
  { id: 5, src: Megan, alt: "Creativity Room 3" },
  { id: 6, src: MjTouch, alt: "Mj Touch" },
  { id: 7, src: Timeless, alt: "Onyi Timeless Cuisine" },
  { id: 8, src: Poolfest, alt: "Pool Fest" },
  { id: 9, src: Sacs, alt: "Sacs" },
  { id: 10, src: Sips, alt: "Sips and Paint" },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="gallery" className="py-20 bg-[#ffffff]">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-[#121314]"
        >
          Featured Works
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
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
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-96  transition-transform  shadow-2xl	 duration-300 hover:scale-105"
                    />
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
                        <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-auto" />
                        <p className="mt-2 text-center text-[#121314]">{selectedImage.alt}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

