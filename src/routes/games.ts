import { Router, Request } from 'express'
import Game from '../models/Game'

const gamesRouter = Router()

gamesRouter.post('/add', (req, res) => {
  const game = new Game({
    ...req.body
  })
  game.save()
    .then(() => { res.status(201).send(game)})
    .catch((err: any) => { res.send(err) });
})

gamesRouter.get('/', async (req: Request, res) => {
  try {
    const games = await Game.paginate({})
    res.json(games) 
  } catch (err) {
    res.status(404).send(err)
  }
})


export default gamesRouter