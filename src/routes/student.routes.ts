import { Router } from 'express';
import { createStudent, deleteStudent, getStudentById, getStudents, updateStudent } from '../controllers/student.controllers';

const router = Router();

// Crear un nuevo estudiante
router.post('/students', createStudent);

/** Peticiones GET */

// Obtener todos los estudiantes
router.get('/students', getStudents);

// Obtener un estudiante por su ID
router.get('/students/:id', getStudentById);

/** Fin de las peticiones GET */

// Actualizar un estudiante
router.put('/students/:id', updateStudent);

// Eliminar un estudiante
router.delete('/students/:id', deleteStudent);

export default router;