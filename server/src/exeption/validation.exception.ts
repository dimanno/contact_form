import {HttpException, HttpStatus} from "@nestjs/common";

export  class ValidationException extends  HttpException{
     messages;
     constructor(respons) {
      super(respons, HttpStatus.BAD_REQUEST);
      this.messages = respons
     }
 }
