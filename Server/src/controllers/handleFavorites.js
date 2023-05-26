
let myFavorites= [];

const postFav=(req, res)=>{
    const character= req.body
    myFavorites.push(character);

   res.json(myFavorites)
}

const deleteFav = (req, res) => {
    const id = req.params.id

  myFavorites = myFavorites.filter((favorite) => favorite.id !== Number(id));
  res.json(myFavorites);
    
  //   if (!id) {
  //     res.status(400).json({ error: "No se recibió el id de la publicación a eliminar" });
  //   } else {
  //     const index = myFavorites.findIndex((pub) => pub.id === Number(id));
  
  //     if (index !== -1) {
  //       myFavorites.splice(index, 1);
  //     }
  //     res.json(myFavorites);
  //   }
  };
  

  module.exports = {
    postFav,
    deleteFav,
  };