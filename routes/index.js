import userRouter from './users.js'


import express  from 'express'


let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/**
 * *aca agrego todas las rutas de todos los recursos
 * *es decir voy a llamar y configurar las rutas de usuarios,categorias,libros, etc
 * *a traves del metodo .use('string del endpoint /users',la ruta de ese recurso que se quiere controlar) le indico al enrrutador principal que use esa ruta 
 */

router.use('/users',userRouter)


export default router