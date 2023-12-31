import { motion, useScroll, useSpring } from "framer-motion"
import Animation from "./Animation"
import { useRef } from "react";
import { UseFollowPointer } from "../helpers/UseFollowPointer";

const Home = () => {

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // const ref = useRef(null);
    const [{x,y}, ref] = UseFollowPointer();


    return (
        <motion.div>
            <motion.div
                className="fixed top-0 left-0 right-0 h-2 bg-tailwind-2 origin-left"
                style={{ scaleX: scrollYProgress }}
            />

            <motion.div
                ref={ref}
                className="w-16 h-16 rounded-[50%] border border-black"
                animate={{ x, y }}
                transition={{
                    type: "spring",
                    damping: 3,
                    stiffness: 50,
                    restDelta: 0.001
                }}
            />
            <Animation />

            <section className="content">
                <div className="name-container">
                    <h4 className="hero-title font-semibold">Hi, I am</h4>
                    <h2 className="name text-5xl font-extrabold text-tailwind-3 py-3"><span className="text-tailwind-2">MOUNIR </span>AYAD</h2>
                    <p className="subtitle  p-2">Full Stack Web Developer</p>
                </div>
                <p className="desc py-2 text-gray-800">
                    Welcome to my portfolio. I create elegant and functional web solutions that leave an impact.
                </p>

                <br />

                <motion.div
                    className="contact-btn cursor-pointer my-5 inline-flex items-center justify-center gap-1 px-4 py-2 text-base font-medium bg-gray-900 text-teal-50 rounded-lg hover:bg-slate-700 "
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    Contact Me <i className="fa-solid fa-circle-arrow-right fa-fade"></i>
                </motion.div>

            </section>



            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Get started
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Speak to Sales
                        </a>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default Home