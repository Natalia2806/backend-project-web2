import { WorkRecord } from "src/work-records/entities/work-record.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class JobTitle {

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
    

    @OneToMany(() => WorkRecord, work_record => work_record.job_title_id)
    works_records: WorkRecord[];
}
