import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hero } from './hero.entity';
import { HerosController } from './heros.controller';
import { HerosService } from './heros.service';

@Module({
  imports: [TypeOrmModule.forFeature([Hero])],
  providers: [HerosService],
  controllers: [HerosController],
})
export class HerosModule {}
