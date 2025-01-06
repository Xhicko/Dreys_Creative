import { motion } from "framer-motion"
import { CheckCircle } from 'lucide-react'
import About_Image from '../Images/About_Image.jpg'
import Image from "./Image"
import RevealOnScroll from "./RevealOnScroll"

const expertise = [
  "Brand Identity Design",
  "Print & Digital Marketing",
  "Social Media Strategy",
  "Advertising Campaigns",
  "Publication Design",
  "Visual Storytelling"
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#ffffff]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <RevealOnScroll>
               <div className="relative w-80 h-80 mx-auto overflow-hidden rounded-full border-4 border-[#121314] shadow-lg">
               <Image
                  src={About_Image}
                  alt='Oladipo Emmanuel'
                  layout="fill"
                  objectFit="cover"
                  quality={75}
                  style={{
                     transition: "transform 0.3s ease-in-out",
                  }}
               />
               </div>
            </RevealOnScroll>
          </div>

          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <RevealOnScroll>  <h2 className="text-4xl font-bold mb-6 text-[#121314] text-center">About Dreys Grafix</h2> </RevealOnScroll>
           <RevealOnScroll>
            <p className="text-lg mb-3 text-gray-700 text-justify">
              I'm Oladipo Emmanuel,  a visionary leader and the Executive Director of Drey's Grafix. With a passion for creativity and excellence, Oladipo has built a reputation for transforming ideas into compelling designs that resonate with audiences and elevate brands. His leadership is defined by a commitment to quality, attention to detail, and a dedication to empowering his team to push the boundaries of design.
               As a driven entrepreneur with a deep understanding of brand storytelling, Oladipo continues to inspire businesses to achieve their goals through the power of strategic and creative branding.
            </p>
           </RevealOnScroll>
           < RevealOnScroll>
            <p className="text-lg mb-3 text-gray-700 text-justify">
               From logo design to comprehensive branding solutions, I offer a wide range of services tailored 
               to meet your unique needs. My expertise includes:
               </p>
           </RevealOnScroll>            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertise.map((item, index) => (
               <RevealOnScroll key={index}>
                  <li className="flex items-center text-gray-700">
                     <CheckCircle className="w-5 h-5 mr-2 text-[#121314] flex-shrink-0" />
                     <span>{item}</span>
                </li>
               </RevealOnScroll>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
