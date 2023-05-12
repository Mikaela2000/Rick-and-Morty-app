import style from './favorites.module.css'
import { connect, useDispatch } from 'react-redux';
import Card from '../card/Card';
import { filterCards, orderCards, showAllCards } from '../../redux/actions'
import { useState } from 'react';

const Favorites = ({ myFavorites }) => {

    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (e) => {
        setAux(!aux)
        dispatch(orderCards(e.target.value))
    }
    const handleFilter = (e) => {
        if (e.target.value === "Todos") {
            dispatch(showAllCards());

        } else {
            dispatch(filterCards(e.target.value));

        }
    }


    return (
        <div className={style.contenedor}>
            <select className={style.select1} onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>,

            <select className={style.select2} onChange={handleFilter}>
                <option value="Todos">Todos</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless"> Genderless</option>
                <option value="unknown">Unknown</option>
               

            </select>,
            <div className={style.contenedor2}>
            {
                myFavorites?.map(({ id, name, status, species, gender, origin, image, onClose }) => {
                    return (

                        <Card
                            key={id}
                            id={id}
                            name={name}
                            status={status}
                            species={species}
                            gender={gender}
                            origin={origin}
                            image={image}
                            onClose={onClose}
                        />
                    )
                })
            }
            </div>

        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
};

export default connect(mapStateToProps, null)(Favorites)