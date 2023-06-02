const { User } = require('../DB_connection')

const postUser = async (req, res) => {
    try {
        const { id, email, password } = req.body

        if (!email || !password || email === "" || password === "") {
            res.status(400).json("Faltan Datos");
            return;
        }

        const [user, created] = await User.findOrCreate({
      where: { id}, // Busca el usuario por ID
      defaults: { email, password}, // Valores predeterminados si no se encuentra el usuario
    });

        if (created) {
            res.status(200).json(user);
        } else {
            res.status(200).json("Usuario ya existe");
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = postUser;