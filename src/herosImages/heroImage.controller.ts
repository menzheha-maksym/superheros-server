import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Readable } from 'stream';
import { Response } from 'express';
import { HeroImageService } from './heroImage.service';

@Controller('hero-image')
export class HeroImageController {
  constructor(private readonly heroImageService: HeroImageService) {}

  @Get(':id')
  async getById(@Res() response: Response, @Param('id') id: string) {
    const image = await this.heroImageService.getOneHeroImageById(id);

    const stream = Readable.from(image.data);
    stream.pipe(response);
  }

  @Get('hero/:heroId')
  async getManyIdsByHeroId(@Param('heroId') heroId: string) {
    return this.heroImageService.getManyHeroImageIdsByHeroId(heroId);
  }

  @Put('add/:heroId')
  @UseInterceptors(FileInterceptor('file'))
  async addHeroImage(
    @Param('heroId') heroId: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.heroImageService.uploadImage(
      heroId,
      file.buffer,
      file.originalname,
    );
  }

  @Delete('delete')
  deleteOne(@Body() id: string): Promise<boolean> {
    return this.heroImageService.deleteHeroImageById(id);
  }
}
