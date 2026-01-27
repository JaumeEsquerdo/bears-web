import { motion } from 'framer-motion'

type FooterProps = {
    isOpen: boolean
}
export const Footer = ({ isOpen }: FooterProps) => {

    const footerVariants = {
        open: {
            y: 0,
            opacity: 1,
        },
        closed: {
            y: 100,
            opacity: 0,
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
            className="fixed left-[50%] z-50 flex justify-center w-fit pt-5 pointer-events-none bottom-10 -translate-x-1/2">
            <h2 className="text-base text-[#FCFEFC] pointer-events-none md:text-lg font-base w-fit">La naturaleza es salvaje</h2>
        </motion.footer>
    );
}