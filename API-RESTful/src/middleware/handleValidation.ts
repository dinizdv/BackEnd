import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)

    if (errors.isEmpty()){
        return next()
    }
    
    const extratectErrors: object[] = [] // objects array | starts empty
    errors.array().map(err => extratectErrors.push(err.msg)) // array () => ensure that is a array

    res.status(422).json({ // 422 => for semantic errors
        errors: extratectErrors
    })
}