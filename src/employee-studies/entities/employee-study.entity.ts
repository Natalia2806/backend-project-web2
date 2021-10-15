import { Employee } from "src/employees/entities/employee.entity";
import { Institution } from "src/institutions/entities/institution.entity";
import { Profession } from "src/professions/entities/profession.entity";
import { ScolarityType } from "src/scolarity-type/entities/scolarity-type.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EmployeeStudy {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    year: number;

    @Column()
    endeded: string;
    
    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @Column()
    deleted_at: Date;

    @Column({ default: true })
    isActive: boolean;


    @ManyToOne(() => Employee, employee => employee.employees_studies)
    employee_id: Employee;

    @ManyToOne(() => ScolarityType, scolarity_type => scolarity_type.employees_studies)
    scolarity_type_id: ScolarityType;

    @ManyToOne(() => Institution, institution => institution.employees_studies)
    institution_id: Institution;

    @ManyToOne(() => Profession, profession => profession.employees_studies)
    profession_id: Profession; 
}
