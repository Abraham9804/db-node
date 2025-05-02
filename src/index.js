const express = require("express")
const sequelize = require("./conexion.js")

//Inicializar la app de express
const app = express()

//Usar json en solicitudes
app.use(express.json())

//api rest
app.get("/", function(req, resp){
    resp.send("Hola mundo")
})

app.get("/categoria",async function(req, resp){
    const [results, metadata] = await sequelize.query("select * from categorias")
    const categorias = results
    resp.json(categorias)
})

app.get("/productos",async function(req, resp){
    const [results] = await sequelize.query("select * from productos")
    const productos = results
    resp.json(productos)

})

app.post("/productos", async function(req, resp){
    console.log(req.body)
    let nombre = req.body.nombre 
    let precio = req.body.precio 
    const sql = "INSERT INTO productos (nombre, precio) VALUES (?,?)"
    await sequelize.query(sql,[nombre, precio])
    resp.json({"mensaje":"guardado"})
})

app.put("/productos/:id", async function(req, resp){
    let nombre = req.body.nombre 
    let precio = req.body.precio
    let id =     req.params.id

    const sql = ("UPDATE productos SET nombre = '"+nombre+"', precio = '"+precio+"' WHERE id = '"+id+"'")
    await sequelize.query(sql)
    return resp.json({"message":"producto actualizado"})
})

app.delete('/productos/:id', async function(req, resp){
    const id = req.params.id 

    const sql = ("DELETE FROM productos WHERE id = '"+id+"'")
    await sequelize.query(sql)
    return resp.json({"message":"producto eliminado"})
})

//Levantar server
app.listen(3000,()=>{
    console.log("Servidor iniciado en localhost:3000")
})