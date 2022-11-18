import { Router, Request } from 'express'
import Game from '../models/Game'
import Coach from '../models/Coach'

const searchRouter = Router()

searchRouter.get('/', async (req: Request, res) => {
  const value = req.body.value;
  if (value.length > 0) {
    const regex = new RegExp(value, 'i')
    const allGames = await Game.paginate({title: {$regex: regex}})
    const allCoaches = await Coach.paginate({name: {$regex: regex}})
    const data = {games: allGames, coaches: allCoaches}
    res.json(data)
  } else {
    res.json('hello, there');
  }
})


export default searchRouter