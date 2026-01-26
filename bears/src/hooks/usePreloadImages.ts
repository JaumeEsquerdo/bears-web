import { useEffect, useState } from "react";

/* hook para hacer saber si todas las imgs de la portada están listas
'No renderices nada hasta que esté TODO descargado'
*/

export const usePreloadImages = (images: string[]) => {
  const [loaded, setLoaded] = useState(false);

  /* cuando todas las imagenesestán cargadas para */
  useEffect(() => {
    let loadedCount = 0;
    let cancelled = false;

    const imageObjects = images.map((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        if (cancelled) return;

        loadedCount++;
        if (loadedCount === images.length) {
          setLoaded(true);
        }
      };
      return img;
    });

    return () => {
      cancelled = true;
      setLoaded(false);
      imageObjects.forEach((img) => {
        img.onload = null;
      });
    };
  }, [images]);
  return loaded;
};
