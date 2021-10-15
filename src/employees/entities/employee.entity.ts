import { EmployeeCompetence } from "src/employee-competences/entities/employee-competence.entity";
import { EmployeeStudy } from "src/employee-studies/entities/employee-study.entity";
import { User } from "src/users/entities/user.entity";
import { WorkRecord } from "src/work-records/entities/work-record.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastname: string;
    
    @Column({ default: true })
    isActive: boolean;

    
    @ManyToOne(() => User, user => user.employees)
    user_id: User;

    @OneToMany(() => EmployeeCompetence, employee_competence => employee_competence.employee_id)
    employees_competences: EmployeeCompetence[];

    @OneToMany(() => EmployeeStudy, employee_study => employee_study.employee_id)
    employees_studies: EmployeeStudy[];

    @OneToMany(() => WorkRecord, work_record => work_record.employee_id)
    works_records: WorkRecord[];
}
