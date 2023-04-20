import { Get, Module } from "@nestjs/common";
import { userController } from "src/users/user.controller";

@Module({
    controllers: [userController]
})
export class UserModule {
    
}