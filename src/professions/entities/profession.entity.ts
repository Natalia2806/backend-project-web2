import { EmployeeStudy } from "src/employee-studies/entities/employee-study.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profession {

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
    

    @OneToMany(() => EmployeeStudy, employee_study => employee_study.profession_id)
    employees_studies: EmployeeStudy[];
}
