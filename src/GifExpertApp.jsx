import React, { useState } from 'react'
import {AddCategory, GifGrid} from './components';

const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([]);

  const onAddCategory = ( newCategory ) => {

    //validamos que la categoria exista para asi no mostrarla en caso de que se repita
    if( categories.includes(newCategory) ) return;
    setCategories( [ newCategory, ...categories ] );
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory 
        // setCategories={setCategories}
        onNewCategory={ onAddCategory }
      />

      {/* Listado imagenes */}
      
      { 
        categories.map( category => {
          return(
            <GifGrid key={ category } category={ category }/>
          );
        }) 
      }

      {/* gif item */}
    </>
  )
}

export default GifExpertApp


