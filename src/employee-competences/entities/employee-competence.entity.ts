import { Competence } from "src/competences/entities/competence.entity";
import { Employee } from "src/employees/entities/employee.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EmployeeCompetence {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @Column()
    deleted_at: Date;

    @Column({ default: true })
    isActive: boolean;

    
    @ManyToOne(() => Employee, employee => employee.employees_competences)
    employee_id: Employee;

    @ManyToOne(() => Competence, competence => competence.employees_competences)
    competence_id: Competence;
}