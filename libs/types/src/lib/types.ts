export class Message {
  messageText = '';

  constructor(messageText: string) {
    this.setText(messageText);
  }

  getText(): string {
    return this.messageText;
  }

  setText(messageText: string): Message {
    this.messageText = messageText;
    return this;
  }

  toString(): string {
    return this.messageText;
  }
}

export interface MessageBody {
  messageText: string;
}

export interface UserBody {
  position: number;
  name: string;
  state: string;
  age: number;
}

export class User {
  position: number;
  name: string;
  state: string;
  age: number;

  constructor(position: number, name: string, state: string, age: number) {
    this.position = position;
    this.name = name;
    this.state = state;
    this.age = age;
  }
}

export class UserTable {
  users: User[];

  constructor() {
    this.users = [];
  }

  addUser(userBody: UserBody): User {
    const user: User = new User(
      userBody.position,
      userBody.name,
      userBody.state,
      userBody.age
    );
    this.users.push(user);
    return user;
  }

  addNewUser(position: number, name: string, state: string, age: number) {
    this.addUser(new User(position, name, state, age));
  }

  getDataArray(): User[] {
    return this.users;
  }
}
