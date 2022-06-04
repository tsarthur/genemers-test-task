import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "../entities/user.entity";
import { CreateUserDto } from "../dto/create-user.DTO";
import { DeleteUserDto } from "../dto/delete-user.Dto";
import { EditUserDto } from "../dto/edit-user.DTO";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(input: CreateUserDto) {
    const user = await this.userRepository.create(input);
    return user;
  }

  async deleteUser(input: DeleteUserDto) {
    const { id } = input;
    const existingUser = await this.userRepository.findOne({
      where: {
        id,
      },
    });

    if (!existingUser) {
      console.log(`Пользователь ${id} не найден!`);
    }

    await this.userRepository.destroy({
      where: {
        id,
      },
    });

    return true;
  }

  async editUser(input: EditUserDto) {
    const { id, login, password } = input;
    const existingUser = await this.userRepository.findOne({
      where: {
        id,
      },
    });

    if (!existingUser) {
      console.log(`Пользователь ${id} не найден!`);
    }

    await this.userRepository.update(
      {
        login: login,
        password: password,
      },
      {
        where: {
          id,
        },
      },
    );
    return true;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({
      include: {
        all: true,
      },
    });
    return users;
  }

  async getUserByLogin(login: string) {
    const existingUser = await this.userRepository.findOne({
      where: {
        login,
      },
      include: {
        all: true,
      },
    });

    if (!existingUser) {
      console.log(`Пользователь ${login} не найден!`);
    }

    return existingUser;
  }
}
