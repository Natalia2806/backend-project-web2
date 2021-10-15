import { Competence } from "src/competences/entities/competence.entity";
import { Employee } from "src/employees/entities/employee.entity";

export class CreateEmployeeCompetenceDto {
    id: number;
    employee_id: Employee;
    competences_id: Competence;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
