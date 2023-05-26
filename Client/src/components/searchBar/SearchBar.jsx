import style from './search.module.css'
import { useState } from 'react';

const SearchBar = ({onSearch}) => {
   const[id, setId] = useState('');

   const handleChange= (event)=>{
      setId(event.target.value) //aqui se guarda el id que ingresamos por el input
   };

   return ( // todo del parentesis es lo que va a renderizar el componente
      <div className={style.contenedor}> 
         <input type='search' value={id} onChange={handleChange} placeholder='Ingresar ID'/>
         <button onClick={()=> onSearch(id)}>Agregar</button> 
      </div>
   );
}

export default SearchBar;
