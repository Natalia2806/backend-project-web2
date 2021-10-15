import { Employee } from "src/employees/entities/employee.entity";
import { Institution } from "src/institutions/entities/institution.entity";
import { Profession } from "src/professions/entities/profession.entity";
import { ScolarityType } from "src/scolarity-type/entities/scolarity-type.entity";

export class CreateEmployeeStudyDto {
    id: number;
    employee_id: Employee;
    scolarity_type_id: ScolarityType;
    institution_id: Institution;
    profession_id: Profession;
    year:number;
    endeded: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
