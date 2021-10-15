import { Injectable } from '@nestjs/common';
import { CreateEmployeeCompetenceDto } from './dto/create-employee-competence.dto';
import { UpdateEmployeeCompetenceDto } from './dto/update-employee-competence.dto';

@Injectable()
export class EmployeeCompetencesService {
  create(createEmployeeCompetenceDto: CreateEmployeeCompetenceDto) {
    return 'This action adds a new employeeCompetence';
  }

  findAll() {
    return `This action returns all employeeCompetences`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employeeCompetence`;
  }

  update(id: number, updateEmployeeCompetenceDto: UpdateEmployeeCompetenceDto) {
    return `This action updates a #${id} employeeCompetence`;
  }

  remove(id: number) {
    return `This action removes a #${id} employeeCompetence`;
  }
}
