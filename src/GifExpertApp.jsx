import React from 'react'
import { useState } from 'react';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Matrix', 'Dumbo']);

    const onAddCategory = () => {
        setCategories([ ...categories, 'Mulan']);
    }

  return (
    <>
      <h1>GifExpertApp</h1>

      <button onClick={onAddCategory}> Agregar </button>

      <ol>
        {categories.map( category => {
            return <li key={category}> {category} </li>;
        })}
      </ol> 
    </>
  )
}

export default GifExpertApp
