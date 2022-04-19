import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Hero } from './heros/hero.entity';
import { HerosModule } from './heros/heros.module';
import { HeroImage } from './herosImages/heroImage.entity';
import { HeroImageModule } from './herosImages/heroImage.module';
import { MyCustomLogger } from './utils/MyCustomLogger';

@Module({
  imports: [
    HerosModule,
    HeroImageModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [Hero, HeroImage],
      synchronize: true,
      logger: new MyCustomLogger(true),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
