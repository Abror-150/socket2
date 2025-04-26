import { ApiProperty } from '@nestjs/swagger';

export class groupMessage {
  @ApiProperty()
  fromId: string;
  @ApiProperty()
  groupId: string;
  @ApiProperty()
  text: string;
}
