import { Request, RequestHandler, Response } from "express";
import * as yup from "yup";


interface ICidade {
    nome: string,
}

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
    nome: yup.string().required().min(3),
    estado: yup.string().required().min(3)
});

export const creatBodyValidator: RequestHandler = async (req, res, next) => {

    try {
        await bodyValidation.validate(req.body, {abortEarly: false});
        return next();
    } catch (err) {
        const yupError = err as yup.ValidationError;
        const errors: Record<string, string> = {};

        yupError.inner.forEach(error => {
            if(error.path === undefined) return;
            errors[error.path] = error.message;
        });

        return res.status(400).json({errors});
    }

};


export const create  = async (req:Request<{}, {}, ICidade>, res: Response) => {
    const data = req.body;
    return res.json({data});
};