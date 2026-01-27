import { motion, type Variants, AnimatePresence } from 'framer-motion'
import { NavContenido } from './NavContenido';
import Historia from './Historia';
import { Contenido } from './Contenido';
import SobreEllos from './SobreEllos';
import { useSection } from '../hooks/useSection';
import { useIsMobile } from '../hooks/useIsMobile';




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

const leftDoorVariantsMobile: Variants = {
    closed: { y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.76, 1] } },
    open: { y: '-80%', transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1] } }
};

const rightDoorVariantsMobile: Variants = {
    closed: { y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.76, 1] } },
    open: { y: '80%', transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1] } }
};

const leftDoorVariantsDesktop: Variants = {
    closed: { x: 0, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.76, 1] } },
    open: { x: '-60%', y: '20%', transition: { duration: 1, ease: [0.77, 0, 0.175, 1] } }
}

const rightDoorVariantsDesktop: Variants = {
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

    const isMobile = useIsMobile({})
    const { section, setSection } = useSection()

    return (
        <>
            <motion.div className='relative z-10 w-full h-full min-h-screen pointer-events-none'
            >
                <motion.div
                    ref={leftDoorRef}
                    className='fixed top-0 left-0 z-40 w-full bg-cover cursor-pointer pointer-events-auto h-1/2 md:h-screen md:top-0 md:w-1/2'
                    style={{
                        backgroundImage: `url(${leftImages[currentLeft]})`, backgroundPosition: 'left', transition: 'background-image 0.3s ease'
                    }}
                    variants={isMobile ? leftDoorVariantsMobile : leftDoorVariantsDesktop}

                    animate={isOpen ? 'open' : 'closed'}
                    onClick={toggle}
                />
                <motion.div
                    ref={rightDoorRef}
                    className='fixed bottom-0 right-0 z-40 w-full bg-cover cursor-pointer pointer-events-auto h-1/2 md:bottom-0 md:h-screen md:top-0 md:w-1/2'
                    style={{
                        backgroundImage: `url(${rightImages[currentRight]})`, backgroundPosition: 'center', transition: 'background-image 0.3s ease'
                    }}
                    variants={isMobile ? rightDoorVariantsMobile : rightDoorVariantsDesktop}
                    animate={isOpen ? 'open' : 'closed'}
                    onClick={toggle}
                />
                {/* contenido animado según nav */}
                <div className="relative z-20 flex flex-col w-full h-full overflow-y-auto bg-[#FCFEFC] pointer-events-auto">
                    <NavContenido setSection={setSection} isOpen={isOpen} section={section} />
                    <AnimatePresence mode='wait'>
                        <Contenido key={section}  >
                            {section === 'historia' && <Historia />}
                            {section === 'sobre' && <SobreEllos />}
                        </Contenido>
                    </AnimatePresence>
                </div>
            </motion.div>


        </>
    )
}
