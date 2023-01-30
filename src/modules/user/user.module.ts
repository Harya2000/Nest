import { Module } from '@nestjs/common';
import { Usercontroller } from './user.controller';
import { UserService } from './user.service';

@Module({
    providers : [UserService],
    controllers:[Usercontroller]
})
export class UserModule {}
