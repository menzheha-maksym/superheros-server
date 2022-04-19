import { HeroImage } from 'src/herosImages/heroImage.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Hero {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  nickname: string;

  @Column()
  real_name: string;

  @Column()
  origin_description: string;

  @Column()
  superpowers: string;

  @Column()
  catch_phrase: string;

  // one image = one hero
  @OneToMany(() => HeroImage, (heroImage) => heroImage.hero, {
    nullable: true,
  })
  images: HeroImage[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
