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
    const coaches = await Coach.paginate({})
    res.json(coaches) 
  } catch (err) {
    res.status(404).send(err)
  }
})

export default coachesRouter