const app = require("../src/app")
const session = require("supertest")
const agent = session(app)

describe("Test de RUTAS: ", () => {
    describe("GET /rickandmorty/character/:id", () => {
        it("Responde con status: 200.", async () => {
            await agent.get("/rickandmorty/character/1").expect(200)
        })
        it("Responde un objeto con las propiedades: 'id', 'name', 'species', 'gender', 'status', 'origin' e 'image'.", async () => {
            const res = (await agent.get("/rickandmorty/character/1")).body;
            expect(res).toHaveProperty("id")
            expect(res).toHaveProperty("name")
            expect(res).toHaveProperty("species")
            expect(res).toHaveProperty("gender")
            expect(res).toHaveProperty("status")
            expect(res).toHaveProperty("origin")
            expect(res).toHaveProperty("image")
        })
        it("Si hay un error responde con status: 500.", async () => {
            await agent.get("/rickandmorty/character/nahuelbustos").expect(500)
        })
    })
})


xdescribe("GET /rickandmorty/login", () => {
    it("Login funciona con email y password correctas.", async () => {
        const res = (await agent.get("/rickandmorty/?email=mika@gmail.com&password=123456")).body
        expect(res.access).toEqual(true)
    })
    it("Login no funciona con email y password incorrectas.", async () => {
        const res = (await agent.get("/rickandmorty/?email=ndsadsads@gmail.com&password=holasoymika4")).body
        expect(res.access).toEqual(false)
    })
})


describe("POST /rickandmorty/fav", () => {
    const char1 = {id: 1, name: "Nahuel Bustos"}
    const char2 = {id: 2, name: "Ramon Sosa"}
    it("Devuelve el elemento enviado por body.", async () => {
        const res = (await agent.post("/rickandmorty/fav").send(char1)).body
        expect(res).toContainEqual(char1)
    })
    it("Devuelve el elemento previamente enviado y el actual.", async () => {
        const res = (await agent.post("/rickandmorty/fav").send(char2)).body
        expect(res).toContainEqual(char1)
        expect(res).toContainEqual(char2)
    })
})


describe("DELETE /rickandmorty/fav/:id", () => {
    const char1 = {id: 1, name: "Nahuel Bustos"}
    const char2 = {id: 2, name: "Ramon Sosa"}
    it("Devuelve arreglo sin modificar en caso de que no exista el ID.", async () =>{
        const res = (await agent.delete("/rickandmorty/fav/belgranito")).body
        expect(res).toContainEqual(char1)
        expect(res).toContainEqual(char2)
    })
    it("Elimina correctamente el personaje especificado por ID.", async () =>{
        const res = (await agent.delete("/rickandmorty/fav/1")).body
        expect(res).toContainEqual(char2)
    })
})