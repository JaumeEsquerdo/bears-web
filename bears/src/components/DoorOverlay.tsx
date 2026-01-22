import { motion, type Variants } from 'framer-motion'
import { NavContenido } from './NavContenido';
import Historia from './Historia';
import { Contenido } from './Contenido';
import SobreEllos from './SobreEllos';
import { useSection } from '../hooks/useSection';



type DoorOverlayProps = {
    isOpen: boolean,
    toggle: () => void,
    rightImages: string[],
    leftImages: string[],
    currentLeft: number,
    currentRight: number,
    leftDoorRef: React.RefObject<HTMLDivElement>,
    rightDoorRef: React.RefObject<HTMLDivElement>
}

const leftDoorVariants: Variants = {
    closed: { x: 0, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.76, 1] } },
    open: { x: '-60%', y: '20%', transition: { duration: 1, ease: [0.77, 0, 0.175, 1] } }
}

const rightDoorVariants: Variants = {
    closed: { x: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.76, 1] } },
    open: { x: '60%', transition: { duration: 1, ease: [0.77, 0, 0.175, 1] } }
}

export const DoorOverlay = ({
    isOpen,
    toggle,
    leftImages,
    rightImages,
    currentLeft,
    currentRight,
    leftDoorRef,
    rightDoorRef,
}: DoorOverlayProps) => {

    const { section, setSection } = useSection()

    return (
        <>
            <motion.div className='relative z-10 w-full h-screen overflow-hidden pointer-events-none'
            >
                <motion.div
                    ref={leftDoorRef}
                    className='absolute z-40 w-1/2 h-full bg-cover cursor-pointer pointer-events-auto'
                    style={{
                        backgroundImage: `url(${leftImages[currentLeft]})`, backgroundPosition: 'center', transition: 'background-image 0.3s ease'
                    }}
                    variants={leftDoorVariants}

                    animate={isOpen ? 'open' : 'closed'}
                    onClick={toggle}
                />
                <motion.div
                    ref={rightDoorRef}
                    className='absolute right-0 z-40 w-1/2 h-full bg-cover cursor-pointer pointer-events-auto'
                    style={{
                        backgroundImage: `url(${rightImages[currentRight]})`, backgroundPosition: 'center', transition: 'background-image 0.3s ease'
                    }}
                    variants={rightDoorVariants}
                    animate={isOpen ? 'open' : 'closed'}
                    onClick={toggle}
                />
                {/* contenido animado según nav */}
                <div className="absolute inset-0 z-20 flex flex-col pointer-events-auto">
                    <NavContenido setSection={setSection} isOpen={isOpen} section={section} />
                    <Contenido  >
                        {section === 'historia' && <Historia />}
                        {section === 'sobre' && <SobreEllos />}
                    </Contenido>
                </div>
            </motion.div>


        </>
    )
}
