import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserLoginDto } from './dto/create-user.dtoLogin copy';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}
  async register(data: CreateUserDto) {
    try {
      let user = await this.prisma.user.findFirst({
        where: { userName: data.userName },
      });
      if (user) {
        throw new NotFoundException('user already exists');
      }
      let hash = bcrypt.hashSync(data.password, 10);
      let newUser = await this.prisma.user.create({
        data: {
          userName: data.userName,
          phone: data.phone,
          name: data.name,
          password: hash,
        },
      });
      return newUser;
    } catch (error) {
      return error;
    }
  }
  async login(data: CreateUserLoginDto) {
    try {
      let user = await this.prisma.user.findFirst({
        where: { userName: data.userName },
      });
      if (!user) {
        throw new NotFoundException('user not found');
      }
      let match = bcrypt.compareSync(data.password, user.password);
      if (!match) {
        throw new Error('wrong password');
      }
      if (!user.id) {
        console.log('id not found');
      }

      let token = this.jwt.sign({ id: user.id });
      return { token };
    } catch (error) {
      return error;
    }
  }

  async userAll() {
    return this.prisma.user.findMany();
  }
}
