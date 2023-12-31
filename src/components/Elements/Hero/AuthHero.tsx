import { motion } from "framer-motion";

const AuthHero = () => {
    return (
        <motion.aside initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}
        className="hidden md:flex w-[480px] h-[610px] lg:w-[500px] 2xl:w-[680px] 2xl:h-[926px] hero-auth bg-cover overflow-hidden bg-no-repeat rounded-[24px] flex-col justify-end bg-center ">
            <div className="w-full h-52 bg-gradient-to-t from-slate-950 to-transparent p-6 flex flex-col justify-end">
                <h1 className="text-white text-3xl font-semibold 2xl:text-[48px] 2xl:leading-normal">Kopi Yang Sempurna Dimulai Dengan Biji Kopi Hijau Yang Sempurna</h1>
            </div>
        </motion.aside>
    )
}

export default AuthHero;