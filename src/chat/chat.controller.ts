import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { request } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';
import { chatMessageDto } from './dto/create-chatMessage';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  createChat(@Body() createChatDto: CreateChatDto) {
    return this.chatService.createChat(createChatDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  GetChat(@Req() request: Request) {
    const userId = request['user-id'];
    console.log(userId);

    return this.chatService.getChat(userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatService.deleteChat(id);
  }
  @Post('message')
  createMessage(@Body() data: chatMessageDto) {
    return this.chatService.createMessage(data);
  }
  @Get('message/:id')
  getMessage(@Param('id') id: string) {
    return this.chatService.getMessage(id);
  }
}
