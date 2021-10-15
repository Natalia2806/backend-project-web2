import { Applicant } from 'src/applicant/entities/applicant.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    pasword: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @Column()
    deleted_at: Date;

    @Column({ default: true })
    isActive: boolean;
    

    @OneToMany(() => Applicant, applicant => applicant.user_id)
    applicants: Applicant[];

    @OneToMany(() => Employee, employee => employee.user_id)
    employees: Employee[];
}
