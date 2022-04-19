export class UpdateHeroDto {
  readonly id: string;
  readonly nickname?: string;
  readonly real_name?: string;
  readonly origin_description?: string;
  readonly superpowers?: string;
  readonly catch_phrase?: string;
}
