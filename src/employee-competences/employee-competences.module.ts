import { Module } from '@nestjs/common';
import { EmployeeCompetencesService } from './employee-competences.service';
import { EmployeeCompetencesController } from './employee-competences.controller';

@Module({
  controllers: [EmployeeCompetencesController],
  providers: [EmployeeCompetencesService]
})
export class EmployeeCompetencesModule {}
