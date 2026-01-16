import { useMotionValue } from "framer-motion";
/* useMotionValue → crea un valor reactivo optimizado para animaciones (no causa re-renders). */
import { useEffect } from "react";

export const useTitleOverDoors = (
  titleRef: React.RefObject<HTMLElement | null>,
  doorRefs: React.RefObject<HTMLElement | null>[]
) => {
  /* Valor entre 0 → 1
Representa qué porcentaje del título está cubierto por las puertas */
  const overlap = useMotionValue(0);

  useEffect(() => {
    //función q recalcula el solapamiento
    const update = () => {
      if (!titleRef.current) return;

      /* posición + tamaño del título en viewport. */
      const titleRect = titleRef.current.getBoundingClientRect();
      let totalOverlap = 0;

      doorRefs.forEach((ref) => {
        if (!ref.current) return;
        // posición + tamaño de esa puerta.
        const doorRect = ref.current.getBoundingClientRect();

        //calcula el ancho compartido del titulo y de la puerta, 0 si no se cruzan, y ancho exacto si hay solapamiento
        const xOverlap = Math.max(
          0,
          Math.min(titleRect.right, doorRect.right) -
            Math.max(titleRect.left, doorRect.left)
        );
        //calculo solapamiento en vertical
        const yOverlap = Math.max(
          0,
          Math.min(titleRect.bottom, doorRect.bottom) -
            Math.max(titleRect.top, doorRect.top)
        );

        /* “¿Qué porcentaje del título está cubierto por las puertas en este frame?”
        Área solapada = ancho común × alto común
        / entre
        Área total del titulo
         */
        totalOverlap +=
          (xOverlap * yOverlap) / (titleRect.width * titleRect.height); // normalized
      });

      //asegura q nunca pase de 1
      overlap.set(Math.min(1, totalOverlap));
    };

    // continua actualización (uno por fuera para dispararse al principio y otro dentro para generar un loop y se vaya actualizando)
    const frame = () => {
      update();
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);

    return () => {}; // cleanup not strictly needed here
  }, [titleRef, doorRefs, overlap]);

  return overlap;
};
