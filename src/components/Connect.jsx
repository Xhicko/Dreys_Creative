import { Button } from "./ui/button"
import { Instagram, PhoneIcon as WhatsApp } from 'lucide-react'
import { motion } from "framer-motion"
import RevealOnScroll from "./RevealOnScroll"

export default function Connect() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-[#121314] to-[#4A4C50] text-white">
      <div className="container mx-auto px-4 text-center">
         <RevealOnScroll>
            <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
         </RevealOnScroll>     

         <RevealOnScroll>
            <div className="flex justify-center space-x-6">
               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="secondary" className="bg-[#ffffff] text-[#121314] hover:bg-[#fffff]/90" asChild>
                  <a href="https://wa.me/message/R3OGBEM2VDO7B1" target="_blank" rel="noopener noreferrer">
                     <WhatsApp className="mr-2 h-5 w-5" /> WhatsApp
                  </a>
                  </Button>
               </motion.div>
               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="secondary" className="bg-[#ffffff] text-[#121314] hover:bg-[#fffff]/90" asChild>
                  <a href="https://www.instagram.com/_dreyscreative/profilecard/?igsh=ZWlsc2puaWQ2ZTBp" target="_blank" rel="noopener noreferrer">
                     <Instagram className="mr-2 h-5 w-5" /> Instagram
                  </a>
                  </Button>
               </motion.div>
            </div>
         </RevealOnScroll>
      </div>
    </section>
  )
}

