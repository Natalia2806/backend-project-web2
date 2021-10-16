import { Module } from '@nestjs/common';
import { JobTitlesService } from './job-titles.service';
import { JobTitlesController } from './job-titles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobTitle } from './entities/job-title.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JobTitle])],
  controllers: [JobTitlesController],
  providers: [JobTitlesService]
})
export class JobTitlesModule {}
