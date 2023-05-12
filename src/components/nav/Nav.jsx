import SearchBar from "../searchBar/SearchBar";
import { Link } from 'react-router-dom';
import style from './nav.module.css'

const Nav = ({ onSearch }) => {
    return (
        <div className={style.contenedor}>
            <SearchBar onSearch={onSearch}></SearchBar>
            <ul>
                <Link to='/home'>
                    <li  className={style.home}>Home</li>
                </Link>
                <Link to='/about'>
                    <li >About</li>
                </Link>

                <Link to='/favorites'>
                    <li>Favorites</li>
                </Link>


            </ul>



        </div>
    );
}

export default Nav;