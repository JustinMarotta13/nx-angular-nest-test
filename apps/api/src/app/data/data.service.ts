import { Injectable } from '@nestjs/common';
import { Message, MessageBody, User, UserTable } from '../../../../../libs/types/src/lib/types';



@Injectable()
export class DataService {
  message: Message = new Message('hi');

  userData: UserTable = new UserTable();
  
  constructor() {
    this.userData.addNewUser(1, 'Justin', 'NY', 23);
    this.userData.addNewUser(2, 'John', 'MA', 32);
    this.userData.addNewUser(3, 'Dom', 'NJ', 22);
    this.userData.addNewUser(4, 'Tony', 'CT', 31);
    this.userData.addNewUser(5, 'Nick', 'FL', 25);
  }

  async addUser(user: User): Promise<User> {
    return this.userData.addUser(user);
  }

  async getUserTable(): Promise<UserTable> {
    return await this.userData;
  }

  async getMessage(): Promise<Message> {
    return await this.message;
  }

  async updateMessage(body: MessageBody): Promise<Message> {
    return await this.message.setText(body.messageText);
  }
}
