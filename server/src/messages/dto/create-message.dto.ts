import {IsEmail, IsString, Length} from "class-validator";


export  class CreateMessageDto {

    @IsString({message: 'only string'})
    @Length(3, 20, {message: 'min 3 max 20 characters'})
    readonly name: string;
    @IsString({message: 'only string'})
    @IsEmail({},{message: 'email is incorrect'})
    readonly email: string;
    readonly message: string;
}
