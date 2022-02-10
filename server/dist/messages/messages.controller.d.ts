import { CreateMessageDto } from "./dto/create-message.dto";
import { MessagesService } from "./messages.service";
export declare class MessagesController {
    private messagesService;
    constructor(messagesService: MessagesService);
    create(messageDto: CreateMessageDto): Promise<import("./message.model").Message>;
    getAll(): Promise<import("./message.model").Message[]>;
}
