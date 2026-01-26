import { FooterContenido } from "./FooterContenido";
import { motion } from 'framer-motion'

type Props = {
    children: React.ReactNode

}
export const Contenido = ({ children }: Props) => {
    return (

        <motion.div
            className="relative flex flex-col items-center w-full min-h-screen p-8 overflow-hidden"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
            <div className="w-3/5 h-full">
                {children}
            </div>
            <FooterContenido />
        </motion.div>
    );
}