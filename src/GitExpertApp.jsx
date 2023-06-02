// NO hace falta... ->
// import React from 'react'

import { useState } from "react"
import { AddCategory, GifGrid } from "./components";



export const GitExpertApp = () => {
    
    const [categories, setCategories] = useState([ 'One Punch' ]); //,'Dragon Ball'
    //console.log(categories)

    // tarea
    const onAddCategory = ( newCategory ) => {
        //console.log(newEvent);        
        //categories.push(newEvent);
        if ( categories.includes(newCategory) ) return;
        setCategories([ ...categories, newCategory ]); // detras
        //setCategories([ 'Valorant', ...categories ]); // delante
    }

    return (
    <>
        {/* título */}
        <h1>GitExpertApp</h1>
        
        {/* Input */}
        <AddCategory 
            //setCategories2={ setCategories } 
            onNewCategory = { event => onAddCategory(event) }
        />

        {/* Listado de Gif */}
        {/* <button onClick={ onAddCategory }> Agregar </button> */}
        <ol>
            { 
                categories.map( ( category ) => (
                   //return <li key={ category } >{ category }</li>
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />
                ) )
            }            
        </ol>
        {/* Gif Item */}

    </>
  )
}

