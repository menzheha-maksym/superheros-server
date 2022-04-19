import { Hero } from 'src/heros/hero.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class HeroImage {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  filename: string;

  // only one hero on image
  @ManyToOne(() => Hero, (hero) => hero.images, { onDelete: 'CASCADE' })
  hero: Hero;

  @Column({ nullable: true })
  heroId: string;

  @Column({ type: 'bytea' })
  data: Buffer;
}
