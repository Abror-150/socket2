import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { chatMessageDto } from './dto/create-chatMessage';

@Injectable()
export class ChatService {
  constructor(private readonly prisma: PrismaService) {}
  async createChat(data: CreateChatDto) {
    try {
      let creadChat = await this.prisma.chat.create({ data });
      return creadChat;
    } catch (error) {
      return error;
    }
  }

  async getChat(myId: string) {
    try {
      let chat = await this.prisma.chat.findMany({
        where: { OR: [{ fromId: myId }, { toId: myId }] },
        include: { from: true, to: true },
      });
      return chat;
    } catch (error) {
      return error;
    }
  }
  async deleteChat(id: string) {
    try {
      let deletechat = await this.prisma.chat.delete({ where: { id } });
      return deletechat;
    } catch (error) {
      return error;
    }
  }
  async createMessage(data: chatMessageDto) {
    try {
      let createdChat = await this.prisma.message.create({ data });
      return createdChat;
    } catch (error) {
      return error;
    }
  }
  async getMessage(chatId: string) {
    try {
      let messages = await this.prisma.message.findMany({ where: { chatId } });
      return messages;
    } catch (error) {
      return error;
    }
  }
}
