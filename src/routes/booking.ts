import { Router, Request } from 'express'
import Booking from '../models/Booking'

const bookingsRouter = Router()

bookingsRouter.post('/add', (req, res) => {
  const booking = new Booking({
    ...req.body
  })
  booking.save()
    .then(() => { res.status(201).send(booking)})
    .catch((err: any) => { res.send(err) });
})

bookingsRouter.get('/:bookingId', async (req: Request, res) => {
  try {
    const booking = await Booking.find({id: req.params.bookingId})
    res.json(booking) 
  } catch (err) {
    res.status(404).send(err)
  }
})

bookingsRouter.delete('/:bookingId', async (req: Request, res) => {
  
})

export default bookingsRouter