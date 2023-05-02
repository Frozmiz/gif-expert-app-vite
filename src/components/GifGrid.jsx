
import getGifs from './../helpers/GetGifs';

const GifGrid = ({ category }) => {

  getGifs( category );

  return (
    <>
      <h3> { category } </h3>
      <p> Hola Mundo </p>
    </>
  )
}

export default GifGrid
