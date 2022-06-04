import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";

export class EditUserDto {
  readonly id: number;
  @ApiProperty({ example: "artur1234", description: "логин" })
  @IsString({ message: "Должно быть строкой" })
  @Length(4, 12, { message: "Не меньше 4 и не больше 12" })
  readonly login: string;
  @ApiProperty({ example: "12345", description: "пароль" })
  @Length(4, 16, { message: "Не меньше 4 и не больше 16" })
  readonly password: string;
}
