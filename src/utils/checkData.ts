import { Request, Response } from "express";
import { Student } from "../entities/Student";

export const checkId = (_: Request, res: Response, searchedId: number) => {
    if(isNaN(searchedId)) {
        return res.status(400).json({message: 'El ID ingresado no es valido'});
    }
}

export const checkIfExist = async(_: Request, res: Response, searchedId: number) => {
    const student = await Student.findOneBy({id: searchedId});
    if(!student) {
        return res.status(404).json({message: 'El ID ingresado no fue encontrado'});
    }

    return student;
}

export const checkToContinue = async(_: Request, res: Response, searchedId: number) => {
    checkId(_, res, searchedId);
    return await checkIfExist(_, res, searchedId);
}