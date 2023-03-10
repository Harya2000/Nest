import { Injectable } from "@nestjs/common";
import { UserRegisterRequestDto } from "./dto/user-register.req.dto";
import { User } from "./user.entity";
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService{
    async doUserRegistration(userRegister:UserRegisterRequestDto){
        
        const user = new User()
        user.name=userRegister.name
        user.email=userRegister.email
        user.password=userRegister.password
       return await user.save()

    }

}