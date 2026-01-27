
import { motion } from 'framer-motion'

type Section = 'historia' | 'sobre';

type NavContenidoProps = {
    isOpen: boolean;
    setSection: (section: Section) => void;
    section: Section
};

export const NavContenido = ({ isOpen, setSection, section }: NavContenidoProps) => {

    return (
        <motion.nav
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -50 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className={` z-40 fixed flex flex-col items-start gap-5 pointer-events-auto top-10 left-12`}>
            <button
                data-active={section === 'historia'}
                className={`text-xl text-main data-[active=true]:font-extrabold transition-transform duration-200 data-[active=true]:scale-105
 cursor-pointer`} onClick={() => setSection('historia')}>Historia</button>
            <button
                data-active={section === 'sobre'}
                className={`text-xl text-main data-[active=true]:font-extrabold transition-transform duration-200 data-[active=true]:scale-105 cursor-pointer`} onClick={() => setSection('sobre')}>Sobre ellos</button>
        </motion.nav >
    );
}
