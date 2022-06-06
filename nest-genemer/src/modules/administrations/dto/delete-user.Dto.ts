import { ApiProperty } from "@nestjs/swagger";

export class DeleteUserDto {
  @ApiProperty({ example: "1", description: "Уникальное значение" })
  readonly id: number;
}
