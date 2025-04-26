import { ApiProperty } from '@nestjs/swagger';

export class CreateUserLoginDto {
  @ApiProperty({ example: 'alex' })
  userName: string;
  @ApiProperty({ example: '1234' })
  password: string;
}
