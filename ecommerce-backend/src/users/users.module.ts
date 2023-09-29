import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { usersSchema } from './schemas/users.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Users', schema: usersSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
