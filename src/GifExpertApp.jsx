import React from 'react'
import { useState } from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['matrix', 'dumbo']);

    const onAddCategory = ( newCategory ) => {
        console.log( newCategory );

        if (categories.includes(newCategory)) return;
        setCategories([ newCategory.toLowerCase(), ...categories ]);
    }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory

        onNewCategory = { event => onAddCategory(event) }
      />

      <ol>
        {categories.map( category => {
            return <li key={category}> {category} </li>;
        })}
      </ol> 
    </>
  )
}

export default GifExpertApp
