import { CreateUserDto } from "src/users/dto/create-user.dto";
import { User } from "src/users/entities/user.entity";

export class CreateApplicantDto {
    id: number;
    user_id: User;
    name: string;
    lastname:string;
}
