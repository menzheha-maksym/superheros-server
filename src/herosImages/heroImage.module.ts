import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeroImageController } from './heroImage.controller';
import { HeroImage } from './heroImage.entity';
import { HeroImageService } from './heroImage.service';

@Module({
  imports: [TypeOrmModule.forFeature([HeroImage])],
  providers: [HeroImageService],
  controllers: [HeroImageController],
})
export class HeroImageModule {}
