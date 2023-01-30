import { Controller } from "@nestjs/common/decorators/core/controller.decorator";
import { UsePipes } from "@nestjs/common/decorators/core/use-pipes.decorator";
import { Post } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { Body } from "@nestjs/common/decorators/http/route-params.decorator";
import { ValidationPipe } from "@nestjs/common/pipes/validation.pipe";
import { createOptionDto} from "../dto/createOption.dto";
import { OptionService } from "../services/option.service";
import { Questionservice } from "../services/question.service";

@Controller('/question/option')
export class OptionController{
    constructor(
        private optionService : OptionService, private questionService:Questionservice
    ){}

    @Post('')
    @UsePipes(ValidationPipe)
    async saveOptionToQuestion(@Body() createOption:createOptionDto){
        const question = await this.questionService.findQuestionById(createOption.questionId)
      const Option = await this.optionService.createOption(createOption,question)
        return {question,createOption,Option};
    }
    

}