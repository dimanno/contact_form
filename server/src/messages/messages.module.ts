import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Message} from "./message.model";

@Module({
  controllers: [MessagesController],
  providers: [MessagesService],
  imports: [
      SequelizeModule.forFeature([Message])
  ]
})
export class MessagesModule {}
