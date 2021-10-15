import { Module } from '@nestjs/common';
import { EmployeeStudiesService } from './employee-studies.service';
import { EmployeeStudiesController } from './employee-studies.controller';

@Module({
  controllers: [EmployeeStudiesController],
  providers: [EmployeeStudiesService]
})
export class EmployeeStudiesModule {}
