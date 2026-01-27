import { FooterContenido } from "./FooterContenido";
import { motion } from 'framer-motion'

type Props = {
    children: React.ReactNode

}
export const Contenido = ({ children }: Props) => {
    return (

        <motion.div
            className="relative flex flex-col items-center w-full min-h-screen pl-8 pr-8 overflow-hidden pt-52 md:pt-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
            <div className="h-full md:w-3/5">
                {children}
            </div>
            <FooterContenido />
        </motion.div>
    );
}