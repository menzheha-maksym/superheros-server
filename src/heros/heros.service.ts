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
    return this.herosRepository.find({ order: { updatedAt: 'DESC' } });
  }

  async findWithPagination(options: {
    limit: number;
    skip: number;
  }): Promise<{ data: Hero[]; count: number }> {
    const [result, total] = await this.herosRepository.findAndCount({
      take: options.limit,
      skip: options.skip,
      order: {
        updatedAt: 'DESC',
      },
    });

    return {
      data: result,
      count: total,
    };
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

  async deleteOne(id: string): Promise<boolean> {
    const { affected } = await this.herosRepository.delete(id);
    if (affected) {
      return true;
    }
    return false;
  }
}
