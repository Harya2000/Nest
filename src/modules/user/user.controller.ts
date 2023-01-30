import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { Console } from "console";
import { UserRegisterRequestDto } from "./dto/user-register.req.dto";
import { UserService } from "./user.service";

@Controller('user')
export class Usercontroller{
constructor(private userService : UserService){}


    @Post('/register')
    async doUserRegistration(@Body(ValidationPipe) userRegister:UserRegisterRequestDto){
      return await this.userService.doUserRegistration(userRegister);
    }
} 