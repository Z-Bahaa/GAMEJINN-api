import { Router, Request } from 'express'
import Coach from '../models/Coach'

const coachesRouter = Router()

coachesRouter.post('/add', (req, res) => {
  const coach = new Coach({
    ...req.body
  })
  coach.save()
    .then(() => { res.status(201).send(coach)})
    .catch((err: any) => { res.send(err) });
})

coachesRouter.get('/', async (req: Request, res) => {
  try {
    let coaches = await Coach.find({})
    //@ts-ignore
    const serviceType = req.query.serviceType;
    //@ts-ignore
    const game = req.query.game;
    //@ts-ignore
    const minPrice = req.query.minPrice;
    //@ts-ignore
    const maxPrice = req.query.maxPrice;

    if(serviceType){
    //@ts-ignore
    coaches = coaches.filter(c => c.offeredServices.includes(serviceType))
    } 
    if(game){
    //@ts-ignore
    coaches = coaches.filter(c => c.offeredGames.includes(game))
    }
    if(minPrice){
    //@ts-ignore
    coaches = coaches.filter(c => c.price.min >= minPrice || c.price.max >= minPrice)
    }
    if(maxPrice){
    //@ts-ignore
    coaches = coaches.filter(c => c.price.max >= maxPrice || c.price.min >= maxPrice)
    }


    res.status(200).json(coaches) 
  } catch (err) {
    res.status(404).send(err)
  }
})

export default coachesRouter