import { Injectable } from '@nestjs/common';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';

@Injectable()
export class ApplicantService {
  create(createApplicantDto: CreateApplicantDto) {
    return `Nuevo aplicante: ${createApplicantDto.name} ${createApplicantDto.lastname}`;
  }

  findAll() {
    return `Todos los aplicantes`;
  }

  findOne(id: number) {
    return `Aplicante #${id}`;
  }

  update(id: number, updateApplicantDto: UpdateApplicantDto) {
    return `Aplicante #${id} actualizado`;
  }

  remove(id: number) {
    return `This action removes a #${id} applicant`;
  }
}
