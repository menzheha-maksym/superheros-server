import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { CreateHeroDto } from './dto/createHero.dto';
import { UpdateHeroDto } from './dto/updateHero.dto';
import { Hero } from './hero.entity';

@Injectable()
export class HerosService {
  constructor(
    @InjectRepository(Hero)
    private herosRepository: Repository<Hero>,
  ) {}

  async findAll(): Promise<Hero[]> {
    return this.herosRepository.find();
  }

  async findOneById(id: string): Promise<Hero> {
    return this.herosRepository.findOne(id);
  }

  async createOne(hero: CreateHeroDto): Promise<Hero> {
    return this.herosRepository.save(hero);
  }

  async updateOne(heroParams: UpdateHeroDto): Promise<any> {
    const result = await getConnection()
      .createQueryBuilder()
      .update(Hero)
      .set(heroParams)
      .where('id = :id', { id: heroParams.id })
      .returning('*')
      .execute();

    return result.raw[0];
  }

  async remove(id: string): Promise<void> {
    await this.herosRepository.delete(id);
  }
}
