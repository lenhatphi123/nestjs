import { Controller, Get, Post } from "@nestjs/common";

@Controller('users')
export class userController {
    @Get()
    getAllUsers() {
        return [
            {
                name: "PhiLN",
                age: 20
            },
            {
                name: 'HoangCN',
                age: 15
            }
        ]
    }

    @Post()
    createUser() {
        return {
            name: 'HauHoang',
            age: 30,
        }
    }
}