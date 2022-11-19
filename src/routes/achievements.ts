import { Router, Request } from 'express'
import Achievements from '../models/Achievements'

const achievementsRouter = Router()

achievementsRouter.post('/add', (req, res) => {
  const achievements = new Achievements({
    ...req.body
  })
  achievements.save()
    .then(() => { res.status(201).send(achievements)})
    .catch((err: any) => { res.send(err) });
})

achievementsRouter.get('/coach/:coachId', async (req: Request, res) => {
  try {
    const achievements = await Achievements.paginate({coachId: req.params.coachId})
    res.json(achievements) 
  } catch (err) {
    res.status(404).send(err)
  }
})



export default achievementsRouter