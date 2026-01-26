import { useEffect, useRef, useState } from "react";

/* El navegador descarga las imágenes una vez
El hook solo decide QUÉ imagen renderizar seguro */

export const useImageCarousel = (imgs: string[], interval = 3000) => {
  const [displayImg, setDisplayImg] = useState(imgs[0]);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string | undefined>(undefined);

  /* Referencia al setInterval para poder limpiarlo */
  const timerRef = useRef<number | null>(null);
  /*Set que recuerda qué imágenes ya se han cargado sin causar renders */
  const loadedRef = useRef<Set<string>>(new Set());
  /* guardamos las ref de las img */
  const preloadedImagesRef = useRef<HTMLImageElement[]>([]);
  const currentIndexRef = useRef(0); // guardamos índice actual del estado sin estado para evitar renders

  // ───────────────────────────────────────────────
  //  PRELOAD DE TODAS LAS IMÁGENES
  // ───────────────────────────────────────────────
  useEffect(() => {
    let cancelled = false;
    preloadedImagesRef.current = [];

    imgs.forEach((src) => {
      /* Si la imagen no está cargada todavía */
      if (!loadedRef.current.has(src)) {
        const img = new Image();
        img.src = src;
        /* cuando la img está lsita... */
        img.onload = () => {
          if (cancelled) return;

          /* Guardamos la URL en el Set */
          loadedRef.current.add(src);
        };

        /* Guardamos el objeto Image para mantenerlo vivo */
        preloadedImagesRef.current.push(img);
      } else {
        /*
          Si ya estaba cargada:
          - Creamos el objeto Image
          - El navegador NO la vuelve a descargar
          - Sale directamente del cache
        */
        const img = new Image();
        img.src = src;
        preloadedImagesRef.current.push(img);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [imgs]);

  // ───────────────────────────────────────────────
  //  CAROUSEL AUTOMÁTICO
  // ───────────────────────────────────────────────
  useEffect(() => {
    /* si está pausado o está el pop up return */
    if (isPaused || selectedImg) return;

    timerRef.current = setInterval(() => {
      const next = (currentIndexRef.current + 1) % imgs.length;

      /*
        Solo cambiamos de imagen si:
        - La siguiente ya está cargada
        - Así evitamos pantallazos o flashes
      */
      if (loadedRef.current.has(imgs[next])) {
        currentIndexRef.current = next;
        /* Solo se actualiza displayImg para renderizar otra vez → Framer Motion puede hacer el fade */
        setDisplayImg(imgs[next]);
      }
      // si no está cargada, nos quedamos en la actual
    }, interval);

    return () => {
      /* Limpiamos el intervalo al desmontar o cambiar deps */
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [interval, isPaused, selectedImg, imgs]);

  return {
    currentImg: displayImg,
    setIsPaused,
    selectedImg,
    setSelectedImg,
  };
};
