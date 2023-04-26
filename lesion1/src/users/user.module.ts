import { Get, Module } from "@nestjs/common";
import { userController } from "src/users/user.controller";
import { UserService } from "./user.sevice";

@Module({
    controllers: [userController],
    // cách 1 không dùng key
    //providers: [UserService]
    // cách 2 dùng key
    providers: [{
        provide: "USER_SERVICE_PHILN",
        useClass: UserService
    }]

    
})
export class UserModule {

}