import React from 'react'
import { motion } from "framer-motion"
import { Palette, Lightbulb, Target, Zap, ChevronRight } from 'lucide-react'
import RevealOnScroll from "./RevealOnScroll"
import Image from "./Image"
import About_Image from '../Images/About_Image.jpg'

const journey = [
   { year: 2021, title: "The Spark", description: "Picked up a sketchpad and started exploring the world of design, fueled by curiosity and a love for creativity." },
   { year: 2022, title: "First Steps", description: "Took on small freelance projects, learning the ropes and building confidence with every design." },
   { year: 2023, title: "Breaking Through", description: "Created a standout portfolio piece that caught the attention of local businesses and peers." },
   { year: 2024, title: "Building Momentum", description: "Started collaborating with startups, helping them shape their brands with fresh, innovative designs." },
   { year: 2025, title: "The Future", description: "Dreaming big—ready to take on larger challenges, expand my skills, and make a lasting mark in the design world." }
 ];

const areasOfExpertise = [
  { icon: Palette, title: "Brand Identity", description: "Crafting unique visual languages for brands" },
  { icon: Lightbulb, title: "Creative Strategy", description: "Developing innovative marketing approaches" },
  { icon: Target, title: "Digital Marketing", description: "Navigating the digital landscape for maximum impact" },
  { icon: Zap, title: "Rapid Prototyping", description: "Bringing ideas to life quickly and efficiently" }
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#ffffff]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center mb-20">
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
          <div className="md:w-1/2">
            <RevealOnScroll>
              <h2 className="text-4xl font-bold mb-6 text-[#121314] text-center md:text-left">About Dreys Grafix</h2>
            </RevealOnScroll>
            <RevealOnScroll>
              <p className="text-lg mb-3 text-gray-700 text-justify">
              I started with a sketch pad and a dream, turning sketches into a passion for design. For me, it’s about solving problems and telling stories that connect. As the founder of Drey's Grafix, I create designs that elevate brands and inspire audiences. From logos to full branding, I help businesses tell their story and achieve their goals. Design is my way of making an impact.
              </p>
            </RevealOnScroll>
          </div>
        </div>

        <RevealOnScroll>
          <h3 className="text-2xl font-semibold mb-8 text-center text-[#121314]">My Creative Journey</h3>
        </RevealOnScroll>
        <div className="space-y-8 mb-20">
          {journey.map((step, index) => (
            <RevealOnScroll key={index}>
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-24 h-24 bg-[#121314] rounded-full flex items-center justify-center text-white font-bold mr-6">
                  {step.year}
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-[#121314]">{step.title}</h4>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <h3 className="text-2xl font-semibold mb-8 text-center text-[#121314]">Areas of Expertise</h3>
        </RevealOnScroll>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {areasOfExpertise.map((item, index) => (
            <RevealOnScroll key={index}>
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-12 h-12 text-[#121314] mb-4" />
                <h4 className="text-xl font-semibold mb-2 text-[#121314]">{item.title}</h4>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <div className="text-center bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-[#121314]">Let's Create Something Amazing Together</h3>
            <p className="text-gray-700 mb-6">
              Every project is an opportunity to push boundaries and create something truly unique. 
              I'm always excited to take on new challenges and bring fresh ideas to the table.
            </p>
            <motion.a 
              href="https://wa.me/message/R3OGBEM2VDO7B1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#121314] text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center mx-auto cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
              <ChevronRight className="ml-2 w-5 h-5" />
            </motion.a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

