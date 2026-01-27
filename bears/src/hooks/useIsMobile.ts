import { useState, useEffect } from "react";

interface PropsIsMobile {
  breakpoint?: number;
}

/* HOOK PARA SABER SI ESTA EN MOBILE */

export const useIsMobile = ({ breakpoint = 768 }: PropsIsMobile) => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : true,
  );
  /* el true es un fallback por si da undefined, dando por hecho q es mobile */

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};
