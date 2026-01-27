import { motion } from 'framer-motion'
import { useSection } from '../hooks/useSection'
import type { Dispatch, SetStateAction } from 'react';


type HeaderProps = {
    isOpen: boolean
    /* Dispatch: función que recibe un argumento de tipo A y no devuelve nada (void) */
    /* y SetStateAction: qué puedes pasarle al setter: */
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const Header = ({ isOpen, setIsOpen }: HeaderProps) => {
    const { setSection } = useSection()

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

    const openHistoria = () => {
        if (!isOpen) {
            setSection('historia')
            setIsOpen(true)
        }
    };
    const openSobreEllos = () => {
        setSection('sobre')
        setIsOpen(true)
    };

    return (
        <motion.header
            variants={headerVariants}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            initial='open'
            animate={isOpen ? 'closed' : 'open'}
            className="fixed flex justify-center w-full pt-5 -translate-x-1/2 left-1/2 md:w-[-webkit-fill-available] top-1/25 z-1000">
            <nav className="grid grid-cols-2 justify-items-center gap-6 w-fit md:w-[-webkit-fill-available]">
                <button className="text-lg font-bold text-[#FCFEFC] transition-colors duration-200 cursor-pointer w-fit md:text-2xl hover:text-gray-200" onClick={openHistoria}>Historia</button>
                <button className="text-lg font-bold text-[#FCFEFC] transition-colors duration-200 cursor-pointer w-fit md:text-2xl hover:text-gray-200" onClick={openSobreEllos}>Sobre ellos</button>
            </nav>
        </motion.header>
    );
}