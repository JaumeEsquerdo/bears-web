import { useImageCarousel } from "../hooks/useImageCarousel";
import { type sobreEllosTypes } from "../json/sobreEllos";
import ImagePopup from "./ImagePopup";

interface Props {
    data: sobreEllosTypes,
}

export const SobreEllosItem = ({ data }: Props) => {
    const { currentImg, setIsPaused, selectedImg, setSelectedImg } = useImageCarousel(data.imgs)

    return (
        <div className="flex flex-col gap-3"
        >
            <h3 className="font-medium text-main">n.{data.number} {data.title}</h3>


            <img
                src={currentImg}
                alt={`Imagen sobre ${data.title}`}
                className="transition duration-200 cursor-pointer hover:saturate-120 hover:scale-102"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onClick={() => setSelectedImg(currentImg)}
            />

            <p className="text-sm text-main">{data.paragraph}</p>

            {
                selectedImg && (
                    <ImagePopup img={selectedImg} onClose={() => setSelectedImg(undefined)} />
                )
            }
        </div >
    );
}

