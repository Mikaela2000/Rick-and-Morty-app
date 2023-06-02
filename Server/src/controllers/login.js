const { User } = require('../DB_connection')

const login = async (req, res) => {
  try {
    const { email, password } = req.query;

    if (!email || !password) {
      res.status(400).json("Faltan datos");
      return;
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      res.status(404).json("Usuario no encontrado");
      return;
    }
    if (user.password !== password) {
      res.status(403).json("Contraseña incorrecta");
      return;
    }

    res.status(200).json({ access: true });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = login;