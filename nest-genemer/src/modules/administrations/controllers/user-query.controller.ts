import { Body, Controller,Delete, Get, Post, Put, UsePipes } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "../dto/create-user.DTO";
import { UsersService } from "../services/users.service";
import { User } from "../entities/user.entity";
import { ValidationPipe } from "src/common/validations/pipe.validation";
import { DeleteUserDto } from "../dto/delete-user.Dto";
import { EditUserDto } from "../dto/edit-user.DTO";

@ApiTags("Пользователи")
@Controller("users")
export class UserQueryController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: "Получить всех пользователей" })
  @ApiResponse({ status: 200, type: [User] })
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: "Создание пользователя - без JWT токена" })
  @ApiResponse({ status: 200, type: User })
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: "Редактирование данных пользователя" })
  @ApiResponse({ status: 200, type: User })
  @Put()
  put(@Body() userDto: EditUserDto) {
    return this.usersService.editUser(userDto);
  }

  @ApiOperation({ summary: "Удалить пользователя" })
  @ApiResponse({ status: 200, type: User })
  @Delete()
  delete(@Body() userDto: DeleteUserDto) {
    return this.usersService.deleteUser(userDto);
  }
}
