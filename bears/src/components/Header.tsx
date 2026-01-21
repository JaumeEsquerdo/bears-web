import { motion } from 'framer-motion'

type HeaderProps = {
    isOpen: boolean
}

export const Header = ({ isOpen }: HeaderProps) => {

    const headerVariants = {
        open: {
            y: 0,
            opacity: 1,
        },
        closed: {
            y: -100,
            opacity: 0,
        }

    }
    return (
        <motion.header
            variants={headerVariants}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            initial='open'
            animate={isOpen ? 'closed' : 'open'}
            className="absolute flex justify-center gap-4 pt-5 text-white left-1/2 w-fit top-1/25 -translate-1/2 z-1000">
            <a className="text-2xl font-bold" href="#">Historia</a>
            <a className="text-2xl font-bold" href="#">Sobre ellos</a>
        </motion.header>
    );
}