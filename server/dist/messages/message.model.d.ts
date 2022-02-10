import { Model } from "sequelize-typescript";
interface UserCreationAttrs {
    name: string;
    email: string;
    message: string;
}
export declare class Message extends Model<Message, UserCreationAttrs> {
    id: string;
    name: string;
    email: string;
    body: string;
}
export {};
