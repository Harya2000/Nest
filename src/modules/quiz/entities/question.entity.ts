import { BaseEntity,Column,Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

}