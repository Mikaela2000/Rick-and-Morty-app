import Card from '../card/Card';

import style from './cards.module.css'

const Cards = ({characters, onClose, onSearch}) => {
   return (
      <div className={style.contenedor}>
         {
            characters.map(({id, name, species, gender, image, origin, status}) =>{
               return (
                 <Card 
                 key={id}
                 id={id}
                 name= {name}
                 species={species}
                 gender={gender}
                 image={image}
                 origin={origin.name}
                 status={status}
                 onClose={() => onClose(id)}
                 />
               )
            })
            
         }<button className={style.ramdom} onClick={() => onSearch(Math.floor(Math.random()*826))}>+</button>
      </div>
   )
};

export default Cards;








