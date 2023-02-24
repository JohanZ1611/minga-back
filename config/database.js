import mongoose from "mongoose";

mongoose.set('strictQuery', false)//*seteo para consultas complejas, si no encuentra ningun documento no trae nada 

    
mongoose.connect(process.env.MONGO)//*nos conecta con la base de datos que se encuentre en env y nos devuelve una promesa
.then(() => console.log('database connected'))
.catch(err => console.log(err))