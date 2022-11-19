import { Router, Request } from 'express'
import Coach from '../models/Coach'
import Session from '../models/Session'

const sessionsRouter = Router()

sessionsRouter.post('/add', async (req, res) => {
  const session = await new Session({
    ...req.body
  })
  await session.save()
    .then(() => { res.status(201).send(session)})
    .catch((err: any) => { res.send(err) });
})

sessionsRouter.get('/coach/:coachId', async (req: Request, res) => {
  try {
    const sessions = await Session.paginate({coachId: req.params.coachId})
    res.json(sessions) 
  } catch (err) {
    res.status(404).send(err)
  }
})

sessionsRouter.get('/:sessionId', async (req: Request, res) => {
  try {
    const session = await Session.find({id: req.params.sessionId})
    res.json(session) 
  } catch (err) {
    res.status(404).send(err)
  }
})

sessionsRouter.delete('/:sessionId', async (req: Request, res) => {
  try {
    const session = await Session.findOneAndDelete({id: req.params.sessionId})
    res.status(200).json("deleted successfully.")
  } catch (err) {
    res.status(404).send(err)
  }
})

export default sessionsRouter