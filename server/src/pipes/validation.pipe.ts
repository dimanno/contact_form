import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import {plainToClass} from "class-transformer";
import {validate} from "class-validator";
import {ValidationException} from "../exeption/validation.exception";

@Injectable()
export  class ValidationPipe implements PipeTransform<any> {
        async transform(value: any, {metatype}: ArgumentMetadata): Promise<any> {
        const obj = plainToClass(metatype, value);
        const errors = await validate(obj);

        if (errors.length) {
            console.log(errors);
            let messages = errors.map(err => {
                return `${err.property} - ${Object.values(err.constraints).join(', ')} `
            })
            throw new ValidationException(messages)
        }
        return value;
    }
}
