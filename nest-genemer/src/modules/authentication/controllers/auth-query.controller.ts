import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "../../administrations/dto/create-user.DTO";
import { AuthService } from "../services/auth.service";
import { User } from "src/modules/administrations/entities/user.entity";

@ApiTags("Авторизация")
@Controller("auth")
export class AuthQueryController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: "Регистрация пользователя" })
  @ApiResponse({ status: 200, type: User })
  @Post("/registration")
  registration(@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto);
  }

  @ApiOperation({ summary: "Авторизация пользователя" })
  @ApiResponse({ status: 200, type: User })
  @Post("/login")
  login(@Body() userDto: CreateUserDto) {
    return this.authService.login(userDto);
  }
}
