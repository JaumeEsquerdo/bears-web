
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
            <button className={`text-xl text-main ${section === 'historia' ? 'font-extrabold' : ''} cursor-pointer`} onClick={() => setSection('historia')}>Historia</button>
            <button className={`text-xl text-main ${section === 'sobre' ? 'font-extrabold' : ''} cursor-pointer`} onClick={() => setSection('sobre')}>Sobre ellos</button>
        </motion.nav >
    );
}
