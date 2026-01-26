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
            className="fixed flex justify-center pt-5 text-white -translate-x-1/2 gap-9 left-1/2 w-fit top-1/25 z-1000">
            <nav className="grid grid-cols-2 gap-6">
                <button className="text-2xl font-bold cursor-pointer" onClick={openHistoria}>Historia</button>
                <button className="text-2xl font-bold cursor-pointer" onClick={openSobreEllos}>Sobre ellos</button>
            </nav>
        </motion.header>
    );
}