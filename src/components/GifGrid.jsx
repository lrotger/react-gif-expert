//import { useState, useEffect } from "react";
import { GifItem } from "./GifItem";
//import { getGifs } from "../helpers/getGifs"
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {
    
  const { images, isLoading} = useFetchGifs( category );
  //console.log({images, isLoading});

  //const [counter, setCounter] = useState(10);
  // el código de aqui lo incluimos en el custom hook  
    
  return (
    <>
        <h3>{ category }</h3>
        {/* <h5>{ counter }</h5> */}
        {/* <button onClick={ () => setCounter( counter + 1 )}> +1 </button> */}
        {/* cargando */}
        {
          isLoading && ( <h2>Cargando...</h2>)
        }
        
        <div className="card-grid">
          {
            images.map( img => (
              //<li key={ img.id }>{ img.title }</li>
              <GifItem 
                key={ img.id } 
                { ...img }
                //image= { img.title }
                //url={img.url}
              />
              
            ))
          }         
          
        </div>  

    </>
  )
}
