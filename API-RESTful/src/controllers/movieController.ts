import { Request, Response } from 'express'
import { MovieModel } from '../models/Movie'
import mongoose from 'mongoose'
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

export async function findMovieById(req: Request, res: Response){
    try {
        const id = req.params.id;
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(400).json({ error: 'Invalid movie ID' });
        }

        const movie = await MovieModel.findById(id);
        
        if (!movie) {
            res.status(404).json('The movie does not exist.');
        }
        
        res.status(200).json(movie);

    } catch (e: any) {
        Logger.error(`Error: ${e.message}`);
        res.status(500).json({ error: 'Internal server error', details: e.message });
    }
}

export async function getAllMovies(req: Request, res: Response){
    try {
        const movies = await MovieModel.find()
        res.status(200).json(movies)
    }
    catch (e: any){
        Logger.error(`Error: ${e.message}`)
    }
}