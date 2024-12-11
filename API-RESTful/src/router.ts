import { Router, Request, Response } from 'express'
import { createMovie } from './controller/movieController'

const router = Router()

export default router
.get("/test", (req: Request, res: Response) => {
    res.status(200).send('API Working!')
})
.post('/movie', (req: Request, res: Response) => {
    createMovie(req, res)
})