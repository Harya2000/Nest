import { Body, Controller, Get,HttpCode,Param,ParseIntPipe,Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { HttpStatusCode } from 'axios';
import { identity } from 'rxjs';
import { createQuizDto } from '../dto/CreateQuiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { QuizService } from '../services/quiz.service';

@Controller('quiz')
export class QuizController {
    constructor(private quizService:QuizService){}

    @Get('/')
    getAllQuiz() {
        return this.quizService.getAllQuiz()
    }

    @Get('/:id')
    getQuizById(@Param('id',ParseIntPipe) id:number):Promise<Quiz>{
        return this.quizService.getQuizById(id);

    }
    

    @Post('/create')
    // @HttpCode(200)
    @UsePipes(ValidationPipe)
    async createQuiz(@Body() quizData:createQuizDto){
        return await this.quizService.createNewQuiz(quizData);

    }
}
