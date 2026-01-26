import { useState, useEffect } from "react";
import { motion } from 'framer-motion'
import { useSection } from "../hooks/useSection";


export const FooterContenido = () => {
    const [footerOpen, setFooterOpen] = useState(false)
    const section = useSection();

    useEffect(() => {
        // Usamos un temporizador para cambiar el estado justo después del render
        // Esto evita que React piense que estamos actualizando estado de forma sincrónica dentro del effect
        const id = setTimeout(() => setFooterOpen(false), 0);
        return () => clearTimeout(id);
    }, [section]);

    return (
        <footer className="w-3/5"

        >
            <motion.div className="flex justify-between w-full pt-40 pb-6"
            >
                <button onClick={() => setFooterOpen(!footerOpen)} className="text-sm cursor-pointer text-main">CRÉDITOS</button>
                <a className="text-sm text-main" href="https://github.com/JaumeEsquerdo" target="_blank"
                    rel="noopener noreferrer">© creado por Jaume</a>
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    height: footerOpen ? 'auto' : 0,
                    opacity: footerOpen ? 1 : 0
                }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="flex flex-col gap-3.5 pb-6 w-[48%]"
            >
                <p className="text-sm text-main">Las fotografías que aparecen en esta web son propiedad de David Bittner, investigador y protagonista de la película documental Bear‑Like (Como un Oso), en la que se relatan encuentros cercanos con osos pardos (grizzly) en la península de Alaska.</p>
                <p className="text-sm text-main">El material visual y las experiencias documentadas provienen de situaciones reales vividas durante la producción y el rodaje, y su inclusión aquí tiene el propósito de comparti ello sin que signifique una recomendación para replicar comportamientos similares en la naturaleza.</p>
                <p className="text-sm text-main">El texto informativo y divulgador presente en esta web sobre los acercamientos, las interacciones y la crítica a la relación entre seres humanos y osos grizzlies está formulado de manera intencionalmente abierta y ambigua. La historia del documental Grizzly Man (dirigido por Werner Herzog), por ejemplo, muestra a un activista que pasó años convivendo con osos salvajes y terminó muriendo junto con su compañera mientras lo hacía —un caso que ha generado amplios debates sobre los límites entre el activismo, la empatía hacia la fauna y la seguridad tanto de los animales como de las personas involucradas.</p>
                <p className="text-sm text-main">No pretendo imponer ninguna postura sobre si ciertos acercamientos son éticos o no. Más bien, transmito lo que ha pasado y lo que está pasando, invitando a cada visitante a cuestionarse y debatir consigo mismo.</p>
                <p className="text-sm text-main">Este sitio es conceptual y ha sido creado expresamente para explorar estas preguntas desde múltiples ángulos, sin pretender ofrecer una verdad definitiva. Su objetivo es fomentar la reflexión, acompañada de imágenes que muestran, sin lugar a dudas, la belleza de esta especie y su hábitat.</p>

            </motion.div>
        </footer>
    );
}

