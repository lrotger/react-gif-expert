import { useState } from "react"

export const AddCategory = ({onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');
    //const OnInputChange = ( event) => {
    
    const OnInputChange = ({target} ) => {
        //console.log(event.target.value);
        setInputValue( target.value )
    }

    const onSubmit = ( event ) => {                
        event.preventDefault();
        //console.log(inputValue);
        if ( inputValue.trim().length <= 1) return;
        
        //setCategories( categories => [ ...categories, inputValue ]);
        
        onNewCategory(inputValue.trim());
        setInputValue('');        
    }

  return (
    //<div>AddCategory</div>    
    // form importante para refresh
    //<form onSubmit={ (event) => onSubmit(event) }> 
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            //onChange={ (event) => OnInputChange(event) }        
            onChange={ OnInputChange }
        />
    </form>
  )
}
