import { Expose, plainToInstance, Transform } from "class-transformer";
export abstract class BaseDto {
    @Expose()
    id: number;

    @Expose()
    createAt: Date;

    @Expose()
    updateAt: Date;

  

    static plainToClass<T>(this: new (...args: any[]) => T, obj: T): T {
        return plainToInstance(this, obj, { excludeExtraneousValues: true })
    }
}