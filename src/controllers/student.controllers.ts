import { Request, Response } from 'express';
import { Student } from '../entities/Student';
import { checkId, checkToContinue } from '../utils/checkData';
import { validateStudentData } from '../utils/checkStudentsFields';

export const createStudent = async(req: Request, res: Response) => {
    try {
        validateStudentData(req, res);

        const { firstname, lastname, studentProgram } = req.body;
        const student = new Student();
        Object.assign(student, { firstname, lastname, studentProgram });

        await student.save();

        return res.json({message: 'Estudiante ingresado con exito!', body: student});
    } catch (error) {
        return res.json({message: 'Hubo un error al ingresar el estudiante', error: error});
    }
}

export const getStudents = async(req: Request, res: Response) => {
    try {
        const students = await Student.find();
        return res.json(students);
    } catch (error) {
        return res.json({message: 'Hubo un error al buscar los estudiantes', error: error});
    }
}

export const getStudentById = async(req: Request, res: Response) => {
    try {
        const searchedId = Number(req.params.id);
        const student = await checkToContinue(req, res, searchedId);
        return res.json(student);
    } catch (error) {
        return res.json({message: 'Hubo un error al buscar al estudiante', error: error});
    }
}

export const updateStudent = async(req: Request, res: Response) => {
    try {
        const searchedId = Number(req.params.id);
        checkToContinue(req, res, searchedId);
        await Student.update({id: searchedId}, req.body);
        return res.json({message: 'El estudiante fue actualizado con exito!'})
    } catch (error) {
        return res.json({message: 'Hubo un error al actualizar el estudiante', error: error});
    }
}

export const deleteStudent = async(req: Request, res: Response) => {
    try {
        const searchedId = Number(req.params.id);
        checkId(req, res, searchedId);
        const studentResult = await Student.delete({id: searchedId});

        if(studentResult.affected === 0) {
            return res.status(404).json({message: `No se encontro un estudiante con el ID ${searchedId}`})
        }
        
        return res.json({message: `El estudiante con el ID ${searchedId} fue eliminado con exito!`});
    } catch (error) {
        return res.json({message: 'Hubo un error al eliminar el estudiante', error: error});
    }
}