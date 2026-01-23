import { useImageCarousel } from "../hooks/useImageCarousel";
import { type sobreEllosTypes } from "../json/sobreEllos";
import ImagePopup from "./ImagePopup";
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
    data: sobreEllosTypes
}

export const SobreEllosItem = ({ data }: Props) => {
    const { currentImg, setIsPaused, selectedImg, setSelectedImg } = useImageCarousel(data.imgs)

    return (
        <div className="flex flex-col gap-3" >
            <h3 className="font-bold text-main">n.{data.number} {data.title}</h3>
            <AnimatePresence mode="wait">

                <motion.img src={selectedImg ?? currentImg} alt={`Imagen sobre ${data.title}`
                }
                    key={selectedImg ?? currentImg}
                    initial={{ opacity: 0.6, }}
                    animate={{ opacity: 1, }}
                    exit={{ opacity: 0.6 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="cursor-pointer"
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

