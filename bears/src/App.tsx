import { useEffect, useRef, useState } from "react"

import { Header } from "./components/Header"
import { DoorOverlay } from "./components/DoorOverlay";
import { motion, useTransform } from 'framer-motion'
import { useTitleOverDoors } from "./hooks/useTitlteOverDoors";
import { Footer } from "./components/Footer";
import { usePreloadImages } from "./hooks/usePreloadImages";
import Cargando from "./pages/Cargando";
import { useMemo } from "react";


const leftImages = [
  '/imgs/bear-imgRight-1.png',
  '/imgs/bear-imgLeft-4.png',
  '/imgs/bear-imgLeft-3.png',
  '/imgs/bear-imgLeft-5.png',
]
const rightImages = [
  '/imgs/bear-imgRight-2.png',
  '/imgs/bear-imgRight-3.png',
  '/imgs/bear-imgLeft-2.png',
  '/imgs/bear-imgRight-5.png',
]



function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLeft, setCurrentLeft] = useState(0)
  const [currentRight, setCurrentRight] = useState(0)


  /* CARGA DE IMGS
  - allImages se memoriza con useMemo para que su referencia no cambie entre renders.
  - Esto asegura que usePreloadImages solo se ejecute una vez.
  - Las imágenes se precargan en memoria del navegador y no se descargan de nuevo al cambiar currentLeft/currentRight.
  */
  const allImages = useMemo(() => {
    return [...leftImages, ...rightImages]
  }, [])
  const imagesLoaded = usePreloadImages(allImages);

  const titleRef = useRef<HTMLHeadingElement>(null)
  const leftDoorRef = useRef<HTMLDivElement>(null)
  const rightDoorRef = useRef<HTMLDivElement>(null)
  // MotionValue (0–1) que indica cuánto del título está cubierto por las puertas
  const overlap = useTitleOverDoors(titleRef, [leftDoorRef, rightDoorRef])
  // Interpola el color del título según el solapamiento (cerrado → oscuro, abierto → blanco)
  const color = useTransform(overlap, [0, 1], ['#333333', '#ffffff',])

  // para cambiar cada x segundo de imgs cuando están cerradas
  useEffect(() => {

    if (isOpen) return

    const interval = setInterval(() => {
      setCurrentLeft(prev => (prev + 1) % leftImages.length)
      setCurrentRight(prev => (prev + 1) % rightImages.length)

    }, 4000)
    return () => clearInterval(interval)
  }, [isOpen])

  const toggleDoors = () => setIsOpen(prev => !prev)



  return (
    <>
      {imagesLoaded ?
        <>
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
          <motion.h1
            ref={titleRef}
            className="fixed z-40 text-6xl font-bold -translate-x-1/2 -translate-y-1/2 pointer-events-none top-[36%] left-1/2"
            style={{ color }}
          >
            BEARS
          </motion.h1>

          {/* overlay de puertas */}
          <DoorOverlay isOpen={isOpen} toggle={toggleDoors} leftImages={leftImages} rightImages={rightImages} currentLeft={currentLeft} currentRight={currentRight}
            leftDoorRef={leftDoorRef} rightDoorRef={rightDoorRef}
          />
          <Footer isOpen={isOpen} />
        </>
        :
        <Cargando />
      }


    </>
  )
}

export default App
