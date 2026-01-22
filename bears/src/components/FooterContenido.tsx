import { useState } from "react";
import { motion } from 'framer-motion'

export const FooterContenido = () => {
    const [footerOpen, setFooterOpen] = useState(false)
    return (
        <footer className="w-3/5"

        >
            <motion.div className="flex justify-between w-full"
                animate={{ y: footerOpen ? -20 : 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
                <button onClick={() => setFooterOpen(!footerOpen)} className="cursor-pointer text-main">CRÉDITOS</button>
                <a className="text-main" href="https://github.com/JaumeEsquerdo" target="_blank"
                    rel="noopener noreferrer">© creado por Jaume</a>
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    height: footerOpen ? 'auto' : 0,
                    opacity: footerOpen ? 1 : 0
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className=""
            >
                <p>contenido footer</p>
                <p>contenido footer</p>
                <p>contenido footer</p>
                <p>contenido footer</p>
                <p>contenido footer</p>
                <p>contenido footer</p>
                <p>contenido footer</p>
                <p>contenido footer</p>
                <p>contenido footer</p>
                <p>contenido footer</p>
                <p>contenido footer</p>
                <p>contenido footer</p>
                <p>contenido footer</p>
                <p>contenido footer</p>
                <p>contenido footer</p>
                <p>contenido footer</p>
                <p>contenido footer</p>
                <p>contenido footer</p>
                <p>contenido footer</p>
                <p>contenido footer</p>
                <p>contenido footer</p>
                <p>contenido footer</p>
                <p>contenido footer</p>
                <p>contenido footer</p>
                <p>contenido footer</p>
                <p>contenido footer</p>
                <p>contenido footer</p>
                <p>contenido footer</p>
                <p>contenido footer</p>
            </motion.div>
        </footer>
    );
}

