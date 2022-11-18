import { Router } from 'express'

const router = Router()

router.get("/", (req, res) => {
  res.json({ isWorking: true })
})


export default router