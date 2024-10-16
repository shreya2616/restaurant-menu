import { IsEmpty, IsEnum, IsString} from "class-validator";


export class CreateMenuDto {
    
    @IsEmpty()
    @IsString()
    itemName : string

    @IsEmpty()
    itemPrice : number

    @IsEnum(['veg' , 'nonveg' , 'chinese' , 'deserts'], {message : "category should be veg , nonveg, chinese, deserts"})
    itemCategory : 'veg' | 'nonveg' | 'chinese' | 'deserts'

}
