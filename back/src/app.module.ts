import { ConsoleLogger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Mariana0606',
      database: 'fingerdigital_bd',
      entities: ['C:\\projetos\\fingerdigitalangular\\fingerdigitalangular\\back\\dist\\users\\user.entity.js'],
      // entities: [__dirname + '/**/*.entity{.ts, .js}'],
      synchronize: true
    }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
