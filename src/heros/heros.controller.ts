import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateHeroDto } from './dto/createHero.dto';
import { UpdateHeroDto } from './dto/updateHero.dto';
import { Hero } from './hero.entity';
import { HerosService } from './heros.service';

@Controller('heros')
export class HerosController {
  constructor(private readonly herosServise: HerosService) {}

  @Get()
  getAll(): Promise<Hero[]> {
    return this.herosServise.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Hero> {
    return this.herosServise.findOneById(id);
  }

  @Post('create')
  createOne(@Body() createHeroDto: CreateHeroDto): Promise<Hero> {
    return this.herosServise.createOne(createHeroDto);
  }

  @Put('update')
  update(@Body() updateHeroDto: UpdateHeroDto): Promise<any> {
    return this.herosServise.updateOne(updateHeroDto);
  }

  @Delete('delete')
  deleteOne(@Body() id: string): boolean {
    this.herosServise.remove(id);
    return true;
  }
}
