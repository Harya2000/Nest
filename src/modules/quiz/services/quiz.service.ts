import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { createQuizDto } from "../dto/CreateQuiz.dto";
import { Question } from "../entities/question.entity";
import { Quiz } from "../entities/quiz.entity";
import { QuizRepository } from "../repositories/quiz.repository";


@Injectable()
export class QuizService{
    constructor(
        @InjectRepository(QuizRepository)private quizRepository:QuizRepository
        ){}
   async getAllQuiz(){
        return await this.quizRepository.createQueryBuilder('q')
        .leftJoinAndSelect('q.questions','qt')
        .leftJoinAndSelect('qt.options','o')
        .getMany()
    }
  async  getQuizById(id:number):Promise<Quiz>{
        return await this.quizRepository.findOne(id,{relations:['questions','questions.options']})
    }

    async createNewQuiz(quiz:createQuizDto){
        console.log("data",quiz)
        return await this.quizRepository.save(quiz)
    }
}