import { motion } from 'framer-motion'
import { Github, Mail, PhoneCall } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#121314] text-white py-8">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Dreys Grafix</h3>
            <p className="text-sm">Transforming Ideas into Visual Masterpieces</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-8 pt-8 border-t border-[#121314]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h4 className="text-xl font-semibold text-center mb-4">Need a website like this?</h4>
          <p className="text-center mb-6">Contact the developer and bring your ideas to life!</p>
          <div className="flex justify-center space-x-4">
            <motion.a
              href="https://wa.link/6i4y3h" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ffffff] hover:bg-[#4A4C50]/90 text-[#121314] p-3 rounded-full transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <PhoneCall size={24} />
            </motion.a>
            <motion.a
              href="https://github.com/Xhicko" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ffffff] hover:bg-[#4A4C50]/90 text-[#121314] p-3 rounded-full transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="mailto:otagadaisaac@gmail.com" 
              className="bg-[#ffffff] hover:bg-[#4A4C50]/90 text-[#121314] p-3 rounded-full transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={24} />
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-8 text-center text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>&copy; {new Date().getFullYear()} Dreys Grafix. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

