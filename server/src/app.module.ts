import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {MessagesModule} from './messages/messages.module';
import {ConfigModule} from "@nestjs/config";
import {Message} from "./messages/message.model";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [Message],
            autoLoadModels: true
        }),
        MessagesModule,

    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
