import { useEffect, useRef, useState } from "react"
import { Contenido } from "./components/Contenido"
import { Header } from "./components/Header"
import { Mensaje } from "./components/Mensaje"
import { DoorOverlay } from "./components/DoorOverlay";
import { motion, useTransform } from 'framer-motion'
import { useTitleOverDoors } from "./hooks/useTitlteOverDoors";


const leftImages = [
  '/imgs/bear-amenaza-2.jpg',
  '/imgs/bear-dondeViven-3.jpg',
  '/imgs/bear-amenaza-3.jpg',
  '/imgs/bear-futuro-2.jpg',
  '/imgs/bear-dondeViven-2.jpg',
  '/imgs/bear-futuro.jpg',
]
const rightImages = [
  '/imgs/bear-otoño.webp',
  '/imgs/bear-interaccion-2.jpg',
  '/imgs/bear-futuro-3.jpg',
  '/imgs/bear-amenaza.jpg',
  '/imgs/bear-futuro-4.jpg',
  '/imgs/bear-dondeViven-3.jpg',
]

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLeft, setCurrentLeft] = useState(0)
  const [currentRight, setCurrentRight] = useState(0)

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

    }, 2000)
    return () => clearInterval(interval)
  }, [isOpen])

  const toggleDoors = () => setIsOpen(prev => !prev)



  return (
    <>
      <Header />
      <motion.h1
        ref={titleRef}
        className="fixed z-40 text-6xl font-bold -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        style={{ color }}
      >
        BEARS
      </motion.h1>
      <div>
        <Contenido >
          <Mensaje />
        </Contenido>
      </div>
      {/* overlay de puertas */}
      <DoorOverlay isOpen={isOpen} toggle={toggleDoors} leftImages={leftImages} rightImages={rightImages} currentLeft={currentLeft} currentRight={currentRight}
        leftDoorRef={leftDoorRef} rightDoorRef={rightDoorRef}
      />

    </>
  )
}

export default App
