import { ApiProperty } from '@nestjs/swagger';

export class CreateGlobalDto {
  @ApiProperty()
  fromId: string;
  @ApiProperty()
  text: string;
}
