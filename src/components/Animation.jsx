import { motion } from "framer-motion"

const Animation = () => {
    return (
        <>
            <motion.div
                className="bg-tailwind-1 h-screen w-full fixed top-0 bottom-0 right-full z-30"
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <motion.div
                className="bg-tailwind-2 h-screen w-full fixed top-0 bottom-0 right-full z-20"
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                // exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
                transition={{ delay:0.2, duration: 0.8, ease: "easeInOut" }}
            />
            <motion.div
                className="bg-tailwind-3 h-screen w-full fixed top-0 bottom-0 right-full z-10"
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                // exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
                transition={{ delay:0.4, duration: 0.8, ease: "easeInOut" }}
            />


        </>
    )
}

export default Animation