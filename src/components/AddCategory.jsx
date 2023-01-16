import React, { useState } from 'react'

const AddCategory = ({ onNewCategory }) => {
  // Usamos el hook useState
  const [inputValue, setInputValue] = useState('');

  // Agregamos un cambio al input
  const onInputChange = (e) =>{
    setInputValue( e.target.value );
  }

/*prevenimos que el input no tenga nada, ademas de evaluar que minimo se tengan al menos 2 caracteres y por ultimo añadimos el valor del input a las categorias y limpiamos el input */
  const onSubmit = (e) => {
    e.preventDefault();

    if( inputValue.trim().length <= 1) return;
    // setCategories( categories => [ inputValue, ...categories]);
    onNewCategory( inputValue.trim() );
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        placeholder='Buscar gifs...' 
        value={ inputValue } 
        onChange={ onInputChange }
      />
    </form>
  );
}

export default AddCategory
