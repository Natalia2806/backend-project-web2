import { Employee } from "src/employees/entities/employee.entity";
import { JobTitle } from "src/job-titles/entities/job-title.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class WorkRecord {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    begin_date: Date;

    @Column()
    end_date: Date;

    @Column()
    company_name: string;

    @Column()
    boos_name:string;

    @Column()
    phone_company: number;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @Column()
    deleted_at: Date;

    @Column({ default: true })
    isActive: boolean;
    

    @ManyToOne(() => Employee, employee => employee.works_records)
    employee_id: Employee;

    @ManyToOne(() => JobTitle, job_title => job_title.works_records)
    job_title_id: JobTitle;
}
