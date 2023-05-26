import style from './card.module.css'
import { Link, useLocation } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'


const Card = ({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) => {
   const { pathname } = useLocation();
   let colorFondo = '';
   if (status === 'Dead') {
      colorFondo = '#9e0606';
   } else if (status === 'Alive') {
      colorFondo = '#176108';
   } else if (status === 'unknown') {
      colorFondo = '#e47309';
   }
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav({ id, name, status, species, gender, origin, image, onClose })
      setIsFav(!isFav)

   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   return (
      <div id="id-card" className={style.contenedor}>
         {
            (
               <button className={style.favorite} onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>)
         }
         <img className={style.imagen} src={`${image}`} alt='' />
         {pathname !== "/favorites" && (
            <button className={style.close} onClick={onClose}>X</button>
         )}
         
         <h2 className={style.status} style={{ backgroundColor: colorFondo }}>{`${status}`}</h2>
         <div className={style.container}>
            <Link className={style.link} to={`/detail/${id}`} >
               <h2 className={style.name}>{`${name}`} </h2>
            </Link>
            <h2>{`${species}`}</h2>
            <h2>{`${gender}`}</h2>
            <h2>{`${origin.name}`}</h2>
         </div>
      </div>

   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id)),
   }
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
};


export default connect(mapStateToProps, mapDispatchToProps)(Card)