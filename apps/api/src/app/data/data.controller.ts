import { Body, Controller, Get, Put, Post } from '@nestjs/common';
import { DataService } from './data.service';
import { Message, MessageBody, User, UserBody, UserTable } from '@justin-marotta/types';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get('users')
  async getUsers(): Promise<UserTable> {
    return this.dataService.getUserTable();
  }

  @Post('users')
  async addUser(@Body() body: UserBody): Promise<User> {
    return this.dataService.userData.addUser(body);
  }

  @Get('message')
  async getMessage(): Promise<Message> {
    return this.dataService.getMessage();
  }

  @Put('message')
  async updateMessage(@Body() body: MessageBody): Promise<Message> {
    return this.dataService.updateMessage(body);
  }
}
