import { EmployeeCompetence } from "src/employee-competences/entities/employee-competence.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Competence {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @Column()
    deleted_at: Date;

    @Column({ default: true })
    isActive: boolean;


    @OneToMany(() => EmployeeCompetence, employee_competence => employee_competence.competence_id)
    employees_competences: EmployeeCompetence[];
}
