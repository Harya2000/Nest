import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { createQuestionDto } from "../dto/CreateQuestion.dto";
import { Question } from "../entities/question.entity";
import { Questionservice } from "../services/question.service";
import { QuizService } from "../services/quiz.service";

@Controller('question')
export class QuestionController{

    constructor(
        private questionService:Questionservice,
        private quizService:QuizService
        ){}

     @Post('')

    @UsePipes(ValidationPipe)
   async saveQuestion(@Body() question:createQuestionDto):Promise<Question>{
    const quiz = await this.quizService.getQuizById(question.quizId)
        return await this.questionService.createQuestion(question,quiz);

    }
}