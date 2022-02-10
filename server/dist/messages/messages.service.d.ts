import { Message } from "./message.model";
import { CreateMessageDto } from "./dto/create-message.dto";
export declare class MessagesService {
    private messageRepository;
    constructor(messageRepository: typeof Message);
    createMessage(dto: CreateMessageDto): Promise<Message>;
    getMessage(): Promise<Message[]>;
}
