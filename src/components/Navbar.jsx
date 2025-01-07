import { useState, useEffect, useRef } from 'react'
import {Link} from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from 'lucide-react'
// import Image from './Image'
// import Logo from '../Images/Logo.png'

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50)
    }

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const scrollToSection = (e, href) => {
   e.preventDefault();
   const element = document.querySelector(href);
 
   if (element) {
     const navbarHeight = document.querySelector('nav').offsetHeight;
     const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
     const offsetPosition = elementPosition - navbarHeight;
 
     // Scroll smoothly to the target position
     window.scrollTo({
       top: offsetPosition,
       behavior: 'smooth',
     });
 
     // Wait for the scrolling to complete before closing the menu
     const handleScroll = () => {
       if (Math.abs(window.pageYOffset - offsetPosition) < 5) {
         setIsOpen(false);
         window.removeEventListener('scroll', handleScroll);
       }
     };
 
     window.addEventListener('scroll', handleScroll);
   }
 };
 

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 bg-[#ffffff] shadow-md transition-all duration-300 ${
        isSticky ? 'py-2' : 'py-4'
      }`}
      initial={false}
      animate={{
        y: isSticky ? 0 : -100,
        opacity: isSticky ? 1 : 0,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-1xl font-bold text-[#121314]">Dreys Grafix</Link>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-[#121314] hover:text-[#4A4C50]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
          <motion.button 
            className="md:hidden text-[#121314]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#ffffff]"
          >
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block py-2 text-[#121314] hover:text-[#4A4C50]"
                  whileHover={{ scale: 1.1, originX: 0 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}