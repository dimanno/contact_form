import {Column, DataType, Model, Table} from "sequelize-typescript";

interface UserCreationAttrs {
    name: string;
    email: string;
    message: string;
}

@Table({tableName: 'messages'})
export class Message extends Model<Message, UserCreationAttrs>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: string;

    @Column({type: DataType.STRING, primaryKey: true, allowNull: false})
    name: string;

    @Column({type: DataType.STRING, primaryKey: true, allowNull: false})
    email: string;

    @Column({type: DataType.STRING, primaryKey: true, allowNull: false})
    body: string;
}
