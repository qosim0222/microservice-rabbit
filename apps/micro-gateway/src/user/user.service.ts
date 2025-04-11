// import { Inject, Injectable } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
// import { ClientProxy } from '@nestjs/microservices';

import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "apps/user-server/src/user/dto/update-user.dto";

@Injectable()
export class UserService {
  constructor(@Inject('USER_SERVICE') private readonly userClient: ClientProxy) {}

  create(createUserDto: CreateUserDto) {
    return this.userClient.send('createUser', createUserDto);
  }

  findAll() {
    return this.userClient.send('findAllUser', {});
  }

  findOne(id: number) {
    return this.userClient.send('findOneUser', id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userClient.send('updateUser', { id, updateUserDto });
  }

  remove(id: number) {
    return this.userClient.send('removeUser', id);
  }
}
