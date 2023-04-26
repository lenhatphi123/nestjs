import { Body, Controller, Get, Post, Param, ParseIntPipe, UsePipes, Inject } from "@nestjs/common";
import { UserDto } from "src/User.dto";
import { plainToClass } from 'class-transformer';
import { UserService } from "./user.sevice";
import { UserRepository } from "./user.repository";
import { ModuleRef } from "@nestjs/core";
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


    // cách 1 injector nhận
    // userService: UserService;
    // constructor(private moduleRef: ModuleRef) { }
    /// cách 2 injector nhận
    // constructor(private readonly userService: UserService) { }
    /// Cách 2 injector nhận key 
    constructor(@Inject("USER_SERVICE_PHILN") private readonly userService: UserService) { }
    @Post()
    createUser(@Body() user: UserDto): UserDto {
        // gọi jector cách 1
        //const userService = this.moduleRef.get(UserService)
        // return this.userService.createUser(user);
        // gọi jector cách 2 || theo key
        return this.userService.createUser(user)
        //----------
        // gọi theo key Cách 1 sử dụng moduleRef
        // return this.moduleRef.get("USER_SERVICE_PHILN").createUser(user);
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        return 'tesst'
    }
}