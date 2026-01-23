interface ImagePopupProps {
    img: string;
    onClose: () => void
}

const ImagePopup = ({ img, onClose }: ImagePopupProps) => {
    return (
        <div
            onClick={onClose}
            className="fixed inset-0 flex items-center justify-center z-10000 bg-black/70">
            <img src={img} alt={`Imagen ampliada`}
                className="max-w-[50%] max-h[50%]"
            />
        </div>
    )
}

export default ImagePopup