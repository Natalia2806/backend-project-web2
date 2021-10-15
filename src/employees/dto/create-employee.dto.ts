import { User } from "src/users/entities/user.entity";

export class CreateEmployeeDto {
    id: number;
    user_id: User;
    name: string;
    lastname:string;
}
