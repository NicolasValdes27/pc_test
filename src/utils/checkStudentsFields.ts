import { Request, Response } from "express";
import { validateFields } from "./checkFields";

export const validateStudentData = (req: Request, res: Response) => {
    const requiredFields = ['firstname', 'lastname', 'studentProgram'];
  
    if (!validateFields(requiredFields, req.body)) {
      return res.status(400).json({ message: 'Por favor, verifique que todos los campos obligatorios esten ingresados' });
    }
}