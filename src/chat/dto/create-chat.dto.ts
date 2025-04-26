import { ApiProperty } from '@nestjs/swagger';

export class CreateChatDto {
  @ApiProperty()
  fromId: string;
  @ApiProperty()
  toId: string;
}
