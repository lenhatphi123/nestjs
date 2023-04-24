import { Body, Controller, Get, Post, Param, ParseIntPipe, UsePipes } from "@nestjs/common";
import { UserDto } from "src/User.dto";
import { plainToClass } from 'class-transformer';
@Controller('users')
export class userController {
    // @Get()
    // getAllUsers() {
    //     return [
    //         {
    //             name: "PhiLN",
    //             age: 20
    //         },
    //         {
    //             name: 'HoangCN',
    //             age: 15
    //         }
    //     ]
    // }

    // @Post()
    // createUser() {
    //     return {
    //         name: 'HauHoang',
    //         age: 30,
    //     }
    // }

    // @UsePipes(new ValidationPipe())
    // @Post()
    // createUser(@Body() user: UserDto): UserDto {
    //     const userReal = plainToClass(UserDto, user, { excludeExtraneousValues: true })
    //     console.log(userReal);

    //     return {
    //         username: 'tesst',
    //         password: 'tesst'
    //     }
    // }

    @Post()
    createUser(@Body() user: UserDto): UserDto {
        user.createAt = new Date();
        user.id = 1;
        user.updateAt = new Date();
        console.log(user);

        return UserDto.plainToClass(user)
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        return 'tesst'
    }
}