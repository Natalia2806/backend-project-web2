import { Module } from '@nestjs/common';
import { ScolarityTypeService } from './scolarity-type.service';
import { ScolarityTypeController } from './scolarity-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScolarityType } from './entities/scolarity-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ScolarityType])],
  controllers: [ScolarityTypeController],
  providers: [ScolarityTypeService]
})
export class ScolarityTypeModule {}
