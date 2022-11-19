import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'

import config from "./config"
import Home from './routes'
import gamesRouter from './routes/games'
import coachesRouter from './routes/coaches'
import sessionsRouter from './routes/session'
import achievementsRouter from './routes/achievements'
import bookingsRouter from './routes/booking'
import searchRouter from './routes/search'
import db from './db/mongoose'


db.connect()

const app = express()


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());


app.use('/', Home);
app.use('/games/', gamesRouter);
app.use('/coaches/', coachesRouter);
app.use('/bookings/', bookingsRouter);
app.use('/achievements/', achievementsRouter);
app.use('/sessions/', sessionsRouter);
app.use('/search/', searchRouter);


process.on('uncaughtException', function (err) {
  console.log(err);
}); 
app.listen(config.port, () => {
  console.log("Listening... on port " + config.port)
})
