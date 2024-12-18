import { body } from "express-validator";

export const movieCreateValidation = () => {
    return[
        body('title')
            .isString()
            .withMessage('The title is required!')
            .isLength({ min: 3})
            .withMessage('The title need 3 minimum character.'),
        body('rating')
            .isNumeric()
            .withMessage('The rating need be a number.')
            .custom((value: number) => {
                if(value < 0 || value > 10) {
                    throw new Error('The rating must be between 0 and 10.') // personalized error
                }
                return true
            }),
        body('description')
            .isString()
            .withMessage('The description is required!'),
        body('director')
            .isString()
            .withMessage('The director name is required!'),
        body('poster')
            .isURL()
            .withMessage('The image need be an URL.')
    ]
}