import {Option} from './option.entity'
import { BaseEntity,Column,Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Quiz } from "./quiz.entity";


@Entity('question')

export class Question extends BaseEntity{

    @PrimaryGeneratedColumn()

    id :number

    @Column({
        type:'varchar'
    })

    question: string;

    @ManyToOne(()=>Quiz,(quiz)=>quiz.questions)
    quiz:Quiz


    @OneToMany(()=>Option,(option)=>option.question)

    options: Option[]

}