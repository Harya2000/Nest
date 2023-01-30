import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeormConfigAsync } from './config/typeorm.config';
import { QuizModule } from './modules/quiz/quiz.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports:[
    ConfigModule.forRoot({isGlobal:true}),
    QuizModule,
    TypeOrmModule.forRootAsync(typeormConfigAsync),
    UserModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
