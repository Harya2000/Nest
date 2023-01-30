import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from './controllers/question.controller';
import { QuestionRepository } from './repositories/question.repository';
import { Questionservice } from './services/question.service';
import { QuizController } from './controllers/quiz.controller';
import { QuizRepository } from './repositories/quiz.repository';
import { QuizService } from './services/quiz.service';
import { OptionRepository } from './repositories/option.repository';
import { OptionController } from './controllers/option.controller';
import { OptionService } from './services/option.service';

@Module({
    controllers:[QuizController,QuestionController,OptionController],
    imports:[TypeOrmModule.forFeature([QuizRepository,QuestionRepository,OptionRepository  ])],
    providers:[QuizService,Questionservice,OptionService]
})
export class QuizModule {}
