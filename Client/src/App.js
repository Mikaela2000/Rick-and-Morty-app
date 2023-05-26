import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Form from './components/form/Form.jsx';
import Favorites from "./components/favorites/Favorites";
import { useLocation } from 'react-router-dom';

function App() {
   // ! HOOKS 
   const [characters, setCharacters] = useState([]);
   const { pathname } = useLocation();
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   // const email = '';
   // const password = '';
   const onSearch = async (id) => {
      try {
        const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
        const isDuplicate = characters.some((character) => character.id == data.id);
        if (isDuplicate) {
          window.alert('¡Ya ingresaste un personaje con este ID!');
        } else if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      } catch (error) {
        console.error(error);
      }
    };

const onClose = (id) => {
   setCharacters(
      characters.filter(character => character.id !== id)
   )
};

async function login(userData) {
   const { email, password } = userData;
   const URL = 'http://localhost:3001/rickandmorty/login/';

   try {
      const response = await axios.get(`${URL}?email=${email}&password=${password}`);
      const { data } = response;
      const { access } = data;
      setAccess(data);
      if (access) {
         navigate('/home');
      }
   } catch (error) {
      console.error(error);
   }
}


return (
   <div>
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
         <Route path='/' element={<Form login={login} />}> </Route>
         <Route path='/home' element={
            <Cards characters={characters} onSearch={onSearch} onClose={onClose}  />
         }></Route>
         <Route path='/about' element={<About />}> </Route>
         <Route path="/detail/:id" element={<Detail />}></Route>
         <Route path="/favorites" element={<Favorites/>}/>
      </Routes >
   </div>
);
}

export default App;
