
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
            className={`absolute top-32 gap-12 z-40 w-full md:w-fit md:fixed flex justify-center md:flex-col md:items-start md:gap-5 pointer-events-auto md:top-10 md:left-12`}>
            <button
                // data-active={section === 'historia'}
                className={`text-xl text-main ${section === 'historia' ? 'font-extrabold scale-105' : ' scale-100 hover:text-gray-500'} transition-all  duration-200 
 cursor-pointer`} onClick={() => setSection('historia')}>Historia</button>
            <button
                // data-active={section === 'sobre'}
                className={`text-xl text-main ${section === 'sobre' ? 'font-extrabold scale-105' : ' scale-100 hover:text-gray-500'} transition-all  duration-200 cursor-pointer`} onClick={() => setSection('sobre')}>Sobre ellos</button>
        </motion.nav >
    );
}
