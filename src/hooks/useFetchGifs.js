import { useEffect, useState } from "react";
import getGifs from './../helpers/GetGifs';

const useFetchGifs = ( category ) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState( true );

  const getImages = async () => {
    const newImages = await getGifs( category );
    setImages(newImages);
    setIsLoading( false );
  };

  useEffect(() => {
    getImages();
  }, []);

  // Este return es un objeto
  return {
    images,
    isLoading
  };
};

export default useFetchGifs;
