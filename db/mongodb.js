const mongoose = require('mongoose');

const url = 'mongodb+srv://Tobias:CUZvgWjpiLVXVjck@cluster0.kcony.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url, {}, ()=>{
    console.log('------------')
    console.log('Conexion a la BD exitosa')
    console.log('------------')
})

module.exports = mongoose