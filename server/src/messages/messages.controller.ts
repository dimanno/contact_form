import {Body, Controller, Post, Get, UsePipes, ValidationPipe, Param} from '@nestjs/common';
import {CreateMessageDto} from "./dto/create-message.dto";
import {MessagesService} from "./messages.service";

@Controller('messages')
export class MessagesController {

    constructor(private  messagesService: MessagesService) {};
    @Post()
    create(@Body() messageDto: CreateMessageDto){
        return this.messagesService.createMessage(messageDto);
    };

    @Get()
    getAll() {
        return this.messagesService.getMessage();
    };
}
