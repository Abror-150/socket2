import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserLoginDto } from './dto/create-user.dtoLogin copy';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.userService.register(createUserDto);
  }
  @Post('/login')
  login(@Body() CreateUserLoginDto: CreateUserLoginDto) {
    return this.userService.login(CreateUserLoginDto);
  }
  @Get()
  userAll() {
    return this.userService.userAll();
  }
}
