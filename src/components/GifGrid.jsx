
import { useEffect, useState } from 'react';
import GifItem from './GifItem';
import getGifs from './../helpers/GetGifs';



const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async() => {
    const newImages = await getGifs( category );
    setImages(newImages);
    setIsLoading(false);
  }


  useEffect( () => {
    getImages();
  }, [])
 

  return (
    <>
      <h3> { category } </h3>

      {
        isLoading ? ( <h2> Loading... </h2> ) : null 
      }

      <div className='card-grid'>
        { images.map( ( image ) => (
          <GifItem key={ image.id } { ...image } /> // Esa desestructuración de "image" hace que todas las props se vuelquen en el componente GifItem.
        )) }
        
      </div>
      
    </>
  )
}

export default GifGrid;
