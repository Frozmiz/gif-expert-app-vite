import GifItem from './GifItem';
import useFetchGifs from '../hooks/useFetchGifs';


const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs ( category );

  console.log( {images, isLoading} );
 

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
