import { forwardRef, Module } from "@nestjs/common";
import { UserQueryController } from "./controllers/user-query.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersService } from "./services/users.service";
import { AuthModule } from "../authentication/authorizations.module";
import { User } from "./entities/user.entity";

const services = [UsersService];

const controllers = [UserQueryController];

@Module({
  imports: [SequelizeModule.forFeature([User]), forwardRef(() => AuthModule)],
  controllers: controllers,
  providers: services,
  exports: [UsersService],
})
export class UsersModule {}
