import { UserDto } from "src/User.dto";
import { UserRepository } from "./user.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    createUser(user: any): any {
        user.createAt = new Date();
        user.id = 1;
        user.updateAt = new Date();
        console.log(user);

        return UserDto.plainToClass(user)
    }
}