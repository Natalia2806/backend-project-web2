import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ApplicantModule } from './applicant/applicant.module';
import { EmployeesModule } from './employees/employees.module';
import { EmployeeStudiesModule } from './employee-studies/employee-studies.module';
import { EmployeeCompetencesModule } from './employee-competences/employee-competences.module';
import { CompetencesModule } from './competences/competences.module';
import { WorkRecordsModule } from './work-records/work-records.module';
import { ScolarityTypeModule } from './scolarity-type/scolarity-type.module';
import { InstitutionsModule } from './institutions/institutions.module';
import { ProfessionsModule } from './professions/professions.module';
import { JobTitlesModule } from './job-titles/job-titles.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UsersModule, 
    ApplicantModule, 
    EmployeesModule, 
    EmployeeStudiesModule, 
    EmployeeCompetencesModule, 
    CompetencesModule, 
    WorkRecordsModule, 
    ScolarityTypeModule, 
    InstitutionsModule, 
    ProfessionsModule, 
    JobTitlesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1228',
      database: 'bd-project-web',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
