'use client'
import { useState, useEffect } from 'react';

// Tamaños de pantalla definidos para el proyecto (Los mismos de TailwindCSS)
export const sizes = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

export const useMediaQuery = (screen: 'sm' | 'md' | 'lg' | 'xl' | '2xl') => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
      const query = `(min-width: ${sizes[screen]})`;
      const media = window.matchMedia(query)

      if (media.matches !== matches) {
          setMatches(media.matches)
      }

      // Listener para realizar la query cuando se varía el tamaño de la pantalla
      const listener = () => setMatches(media.matches)
      window.addEventListener('resize', listener)
      return () => window.removeEventListener('resize', listener)
  }, [matches, screen])

  /* 
    Devuelve un valor booleano que indica si la media query 
    coincide con el tamaño del dispositivo indicado en sizes.
  */
  return matches;
}