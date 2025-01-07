import {Button} from "./ui/button.jsx"
import { motion } from "framer-motion"
import { ChevronDown } from 'lucide-react'
import Image from "./Image.jsx"
import img from "../Images/Hero_Image.jpg"

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
       <Image
         src={img}
         alt="Professional black man"
         layout="fill"
         objectFit="cover"
         quality={100}
       />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-[0_5px_10px_rgba(0,0,0,0.7)] text-shadow-lg"
        >
          Drey's Grafix
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 text-white drop-shadow-[0_5px_10px_rgba(0,0,0,0.7)] text-shadow-lg"
        >
        elevating brands through creative design & strategic marketing  
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button size="lg" className="bg-white text-[#121314] hover:bg-white/90">Explore My Work</Button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-white animate-bounce" />
      </motion.div>
    </section>
  )
}
