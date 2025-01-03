import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { PenTool, FileImage, Megaphone, Book, Bookmark, Share2, Target, Palette } from 'lucide-react'
import { motion } from "framer-motion"

const services = [
  { 
    title: "Logo Design", 
    description: "Create a unique and memorable logo for your brand",
    icon: PenTool
  },
  { 
    title: "Flyers Design", 
    description: "Eye-catching flyers to promote your events or products",
    icon: FileImage
  },
  { 
    title: "Posters Design", 
    description: "Impactful posters that grab attention and convey your message",
    icon: Megaphone
  },
  { 
    title: "Magazine Design", 
    description: "Stylish and professional magazine layouts",
    icon: Book
  },
  { 
    title: "Brochure Design", 
    description: "Informative and visually appealing brochures",
    icon: Bookmark
  },
  { 
    title: "Social Media Management", 
    description: "Engaging content and strategy for your social platforms",
    icon: Share2
  },
  { 
    title: "Ads Management", 
    description: "Effective advertising campaigns to reach your target audience",
    icon: Target
  },
  { 
    title: "Branding", 
    description: "Comprehensive branding solutions to establish your unique identity",
    icon: Palette
  },
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
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#f8f8f8]">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-[#121314]"
        >
          My Services
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <Card className="h-full overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-[#121314]">
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                      className="mr-3"
                    >
                      <service.icon className="w-8 h-8" />
                    </motion.div>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}