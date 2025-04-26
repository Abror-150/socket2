import { Injectable } from '@nestjs/common';
import { CreateGlobalDto } from './dto/create-global.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GlobalService {
  constructor(private readonly prisma: PrismaService) {}
  async createGlobal(data: CreateGlobalDto) {
    try {
      let created = await this.prisma.globalMessage.create({ data });
      return created;
    } catch (error) {
      return error;
    }
  }

  async getGlobal() {
    try {
      let all = await this.prisma.globalMessage.findMany();
      return all;
    } catch (error) {
      return error;
    }
  }
}
