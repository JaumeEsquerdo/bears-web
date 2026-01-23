import { useEffect, useRef, useState } from "react";

export const useImageCarousel = (imgs: string[], interval = 3000) => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string | undefined>(undefined);

  const timerRef = useRef<number | null>(null);
  const loadedRef = useRef<Set<string>>(new Set());

  /* loadedRef actúa de memoria y este useEffect la llema de las imgs precargadas */
  useEffect(() => {
    imgs.forEach((src) => {
      if (loadedRef.current.has(src)) return;

      const img = new Image();

      img.src = src;
      /* onload se dispara cuando la imagen está lista */
      img.onload = () => loadedRef.current.add(src); // guardamos la URL en el Set, para saber q existe y esta en memoria
    });
  }, [imgs]);

  useEffect(() => {
    if (isPaused || selectedImg) return;

    timerRef.current = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % imgs.length;
        /* si la imagen siguiente esta cargada la cambia, si no sigue la anterior */
        return loadedRef.current.has(imgs[next]) ? next : prev;
      });
    }, interval);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [imgs.length, interval, isPaused, selectedImg, imgs]);

  return {
    currentImg: imgs[index],
    setIsPaused,
    selectedImg,
    setSelectedImg,
  };
};
