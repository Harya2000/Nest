import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { createQuizDto } from "../dto/CreateQuiz.dto";
import { Quiz } from "../entities/quiz.entity";
import { QuizRepository } from "../repositories/quiz.repository";


@Injectable()
export class QuizService{
    constructor(
        @InjectRepository(QuizRepository)private quizRepository:QuizRepository
        ){}
    getAllQuiz(){
        return [1,2,3,4,'this is from service']
    }
  async  getQuizById(id:number):Promise<Quiz>{
        return await this.quizRepository.findOne(id,{relations:['questions']})
    }

    async createNewQuiz(quiz:createQuizDto){
        console.log("data",quiz)
        return await this.quizRepository.save(quiz)
    }
}