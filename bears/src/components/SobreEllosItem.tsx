import { useImageCarousel } from "../hooks/useImageCarousel";
import { type sobreEllosTypes } from "../json/sobreEllos";
import ImagePopup from "./ImagePopup";
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
    data: sobreEllosTypes,
}

export const SobreEllosItem = ({ data }: Props) => {
    const { currentImg, setIsPaused, selectedImg, setSelectedImg } = useImageCarousel(data.imgs)

    return (
        <div className="flex flex-col gap-3"
        >
            <h3 className="font-medium text-main">n.{data.number} {data.title}</h3>
            <AnimatePresence mode="wait">

                <motion.img
                    key={currentImg}
                    src={currentImg}
                    alt={`Imagen sobre ${data.title}`}
                    initial={{ opacity: 0.8, }}
                    animate={{ opacity: 1, }}
                    transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
                    className="transition duration-200 cursor-pointer hover:saturate-120 hover:scale-102"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onClick={() => setSelectedImg(currentImg)}
                />
            </AnimatePresence>
            <p className="text-sm text-main">{data.paragraph}</p>

            {selectedImg && (
                <ImagePopup img={selectedImg} onClose={() => setSelectedImg(undefined)} />
            )}
        </div>
    );
}

