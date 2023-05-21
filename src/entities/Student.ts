import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity } from "typeorm"

@Entity()
export class Student extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column()
    studentProgram: string

    @CreateDateColumn()
    studentAdmissionDate: Date
}