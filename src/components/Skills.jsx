import Animation from './Animation'
import { motion } from 'framer-motion'

const Skills = () => {
    return (
        <motion.div>
            <Animation />
            <h1
                className='h-10 overflow-hidden w-60 flex justify-center items-center uppercase my-0 mx-auto'
            >
                <motion.span
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 0.2 }}
                >
                    Skills
                </motion.span>
            </h1>
        </motion.div>
    )
}

export default Skills