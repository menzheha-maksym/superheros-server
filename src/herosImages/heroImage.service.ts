import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { HeroImage } from './heroImage.entity';

@Injectable()
export class HeroImageService {
  constructor(
    @InjectRepository(HeroImage)
    private herosImageRepository: Repository<HeroImage>,
  ) {}
  async uploadImage(heroId: string, dataBuffer: Buffer, filename: string) {
    const result = await getConnection()
      .createQueryBuilder()
      .insert()
      .into(HeroImage)
      .values({ heroId, filename, data: dataBuffer })
      .returning('id')
      .execute();

    return result.raw[0];
  }

  async getOneHeroImageById(id: string) {
    return this.herosImageRepository.findOne(id);
  }

  async getManyHeroImageIdsByHeroId(heroId: string): Promise<string[]> {
    const images = await this.herosImageRepository.find({
      where: { heroId },
    });

    const ids = [];
    for (const img of images) {
      ids.push(img.id);
    }
    return ids;
  }
}
