const { Favorite } = require('../DB_connection');

const deleteFav = (req, res) => {
  const { id } = req.params;

  Favorite.destroy({ where: { id } })
    .then(() => {
      Favorite.findAll()
        .then((favorites) => {
          res.status(200).json(favorites);
        })
        .catch((error) => {
          res.status(500).json(error.message);
        });
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
};

module.exports = deleteFav;