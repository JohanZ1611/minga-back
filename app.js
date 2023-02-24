import express from 'express'
import cors from 'cors'
import 'dotenv/config.js'
import './config/database.js' //requiero la configuracion de la db
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from'morgan'

import indexRouter from './routes/index.js'

import { __dirname } from './utils.js'



let app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//*estoy haciendo use de un middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//*estoy haciendo use de un middlewares para enrrutarme con esas "palabritas" de cada endpoint y es de  usuarios
app.use('/', indexRouter);//*url base


//module.exports = app;

export default app