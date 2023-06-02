const server = require("./app")
const { conn } = require('./DB_connection');
const PORT = 3001

conn.sync({ force: false }) // Utiliza { force: true } para eliminar y recrear las tablas en cada ejecución
  .then(() => {
    console.log('Tablas creadas en la base de datos');
  })
  .catch((error) => {
    console.error('Error al sincronizar los modelos con la base de datos:', error);
  });
server.listen(PORT, () => console.log(`Server raised in port ${PORT}.`))

