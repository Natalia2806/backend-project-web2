import { Module } from '@nestjs/common';
import { EmployeeCompetencesService } from './employee-competences.service';
import { EmployeeCompetencesController } from './employee-competences.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeCompetence } from './entities/employee-competence.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeCompetence])],
  controllers: [EmployeeCompetencesController],
  providers: [EmployeeCompetencesService]
})
export class EmployeeCompetencesModule {}
