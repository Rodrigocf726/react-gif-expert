import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

const useFetchGifs = ( category ) => {

  
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs( category );
    setImages( newImages );
    setIsLoading(false);
  }

  // Sirve para desatar efectos secundarios
  useEffect( () => {
    getImages( category );
  }, []);

  // //los corchetes indican que el efecto solo se lanzara una vez 

  return {
    images,
    isLoading
    
  }
}

export default useFetchGifs
