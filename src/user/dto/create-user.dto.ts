import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'alex' })
  userName: string;
  @ApiProperty({ example: '123456' })
  phone: string;
  @ApiProperty({ example: 'alexjon' })
  name: string;
  @ApiProperty({ example: '1234' })
  password: string;
}
