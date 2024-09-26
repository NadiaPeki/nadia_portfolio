'use client'
import { motion } from "framer-motion"
const Promotion = () => {
  return (
    <motion.div
    className="h-full"
    initial={{ y: '-200vh' }}
    animate={{ y: '0%' }}
    transition={{ duration: 1 }}>
    <div>page</div>
    </motion.div>
  )
}
export default Promotion