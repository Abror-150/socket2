import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { PrismaModule } from 'src/prisma/prisma.module';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupService.createGr(createGroupDto);
  }
  @Post('join')
  joinedGr(@Body() data: any) {
    return this.groupService.joinGr(data);
  }
  @Get()
  @UseGuards(AuthGuard)
  all(@Req() req: Request) {
    const userId = req['user-id'];
    return this.groupService.getGr(userId);
  }
  @Post('message')
  grCreateMessage(@Body() data: any) {
    return this.groupService.messageCreate(data);
  }
  @Get('message/:groupId')
  messageGet(@Param('groupId') groupId: string) {
    return this.groupService.messageGet(groupId);
  }
}
