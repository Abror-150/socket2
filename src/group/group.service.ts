import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GroupService {
  constructor(private readonly prisma: PrismaService) {}
  async createGr(data: CreateGroupDto) {
    try {
      let gr = await this.prisma.group.create({ data });
      return gr;
    } catch (error) {
      return error;
    }
  }
  async joinGr(data: { groupId: string; userId: string }) {
    try {
      let joined = await this.prisma.user.update({
        where: { id: data.userId },
        data: { group: { connect: [{ id: data.groupId }] } },
      });
      return joined;
    } catch (error) {
      return error;
    }
  }
  async getGr(myId: string) {
    try {
      let grall = await this.prisma.group.findMany({
        where: { users: { some: { id: myId } } },
      });
      return grall;
    } catch (error) {
      return error;
    }
  }
  async messageCreate(data: any) {
    try {
      let created = await this.prisma.groupMessage.create({ data });
      return created;
    } catch (error) {
      return error;
    }
  }
  async messageGet(groupId: string) {
    try {
      let mess = await this.prisma.groupMessage.findMany({
        where: { groupId },
      });
      return mess;
    } catch (error) {
      return error;
    }
  }
}
