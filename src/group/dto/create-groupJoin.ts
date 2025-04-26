import { ApiProperty } from '@nestjs/swagger';

export class groupJoin {
  @ApiProperty()
  groupId: string;
  @ApiProperty()
  userId: string;
}
