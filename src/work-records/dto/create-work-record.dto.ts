import { Employee } from "src/employees/entities/employee.entity";
import { JobTitle } from "src/job-titles/entities/job-title.entity";

export class CreateWorkRecordDto {
    id: number;
    employee_id: Employee;
    job_title_id: JobTitle;
    begin_date: Date;
    end_date: Date;
    company_name: string;
    boos_name:string;
    phone_company: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
