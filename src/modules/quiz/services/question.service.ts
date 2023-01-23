import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { createQuestionDto } from "../dto/CreateQuestion.dto";
import { Question } from "../entities/question.entity";
import { QuestionRepository } from "../repositories/question.repository";
import { Quiz } from "../entities/quiz.entity";


@Injectable()
export class Questionservice{
    constructor(
        @InjectRepository(QuestionRepository)
        private questionRepository:QuestionRepository,
        
        ){}

    async createQuestion(
        question:createQuestionDto,
        quiz:Quiz
        ):Promise<Question>{

        const newQuestion =  await  this.questionRepository.save({
        question:question.question
      })

      quiz.questions = [...quiz.questions,newQuestion];
      await quiz.save()

      return newQuestion
    }
 
}