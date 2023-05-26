const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
    const id = req.params.id
    try {
        const response = await axios(`${URL}${id}`)
        const character = response.data;
        if (character) {
            const { id, status, name, species, origin, image, gender } = character;
            res.json({
                id,
                status,
                name,
                species,
                origin,
                image,
                gender
            })
        } else {
            res.status(404).json({ message: 'Not found' })
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }

};

module.exports = getCharById;





















// const getCharById = (res, id) => {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//         .then(response => {
//             const { id, name, gender, species, origin, image, status } = response.data;
//             const character = { id, name, gender, species, origin, image, status }
//             res.writeHead(200, { "Content-Type": "application/json" });
//             res.end(JSON.stringify(character));
//         })
//         .catch(error => {
//             console.error(error);
//             res.writeHead(500, { 'Content-Type': 'text/plain' });
//             res.end(error);
//         });
// }



// module.exports = getCharById;