import { ApiProperty } from "@nestjs/swagger";

export class DeleteUserDto {
  @ApiProperty({ example: "1", description: "Уникальный значение" })
  readonly id: number;
}
