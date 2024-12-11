import { Request, Response } from 'express'
import { MovieModel } from '../models/Movie'
import Logger from '../../config/logger'

export async function createMovie(req: Request, res: Response){
    try {
        const data = req.body
        const movie = await MovieModel.create(data)
        res.status(201).json(movie)
    }
    catch (e: any){ // any: we know that will come a thing
        Logger.error(`Error: ${e.message}`)
    }
}