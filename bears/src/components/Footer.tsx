import { motion } from 'framer-motion'

type FooterProps = {
    isOpen: boolean
}
export const Footer = ({ isOpen }: FooterProps) => {

    const footerVariants = {
        open: {
            y: 0,
            opacity: 1,
            pointerEvents: 'auto'
        },
        closed: {
            y: 100,
            opacity: 0,
            pointerEvents: 'none'
        }
    }
    /* ¡RECORDATORIO para UI animadas!
    absolute = vive dentro del documento
    fixed = vive encima del documento */
    return (
        <motion.footer
            variants={footerVariants}
            initial='closed'
            animate={isOpen ? 'closed' : 'open'}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="fixed left-0 z-50 flex justify-center w-full pt-5 bottom-10">
            <h2 className="text-lg text-white font-base ">La naturaleza es salvaje</h2>
        </motion.footer>
    );
}