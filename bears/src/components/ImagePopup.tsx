import { motion } from 'framer-motion'
/* renderizar un componente en un nodo distinto del DOM */
import { createPortal } from 'react-dom';

interface ImagePopupProps {
    img: string;
    onClose: () => void
}

const ImagePopup = ({ img, onClose }: ImagePopupProps) => {
    /* createPortal(children, container) para q aparezca fuera del flujo normal de React, sobre toda la página */
    return typeof document !== 'undefined' ? createPortal(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 flex items-center justify-center z-10000 bg-black/70">

            <motion.img src={img} alt={`Imagen ampliada`}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="max-w-[90%] object-cover object-center h-72 max-h-full md:object-contain md:h-auto md:max-w-[60%] md:max-h-[60%]"
                /* para q no se ejecute el click del padre */
                onClick={(e) => e.stopPropagation()}
            />
        </motion.div>,
        document.body
    ) : null
}

export default ImagePopup