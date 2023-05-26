import Card from '../card/Card';

import style from './cards.module.css'

const Cards = ({ characters, onClose, onSearch }) => {

   return (
      <div className={style.contenedor} >
         {characters.map(personaje => (
            <Card
               key={personaje.id}
               id={personaje.id}
               name={personaje.name}
               status={personaje.status}
               species={personaje.species}
               gender={personaje.gender}
               origin={personaje.origin}
               image={personaje.image}
               onClose={() => onClose(personaje.id)}
            />

         ))}
         <button className={style.ramdom} onClick={() => onSearch(Math.floor(Math.random()*826))}>+</button>
      </div>
   );
}

export default Cards;






