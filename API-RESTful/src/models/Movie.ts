import {model, Schema} from 'mongoose'

const movieSchema = new Schema(
    {
        title: {type: String},
        rating: {type: Number},
        description: {type: String},
        director: {type: String},
        stars: {type: Array},
        poster: {type: String}
    },
    {
        timestamps: true // when the movie updates
    }
)

export const MovieModel = model('Movie', movieSchema) // new collection on db 