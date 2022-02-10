import { Injectable } from '@nestjs/common';
import {Message} from "./message.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateMessageDto} from "./dto/create-message.dto";

@Injectable()
export class MessagesService {

    constructor(@InjectModel(Message) private messageRepository: typeof Message) {

    }
    async createMessage(dto: CreateMessageDto) {
        const message = await this.messageRepository.create(dto);
        return message;
    }

    async getMessage() {
        const messages = await this.messageRepository.findAll();
        return messages;
    }
}
