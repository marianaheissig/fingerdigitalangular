import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UsersService{
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ){}


    async findAll(): Promise<User[]>{
        return this.usersRepository.find();
    }

    async create(userData:any): Promise<User[]>{
        const user = this.usersRepository.create(userData);
        return this.usersRepository.save(user)
    }

    async update(userID: number, userData: any): Promise<User> {
        await this.usersRepository.update(userID, userData);
        return this.usersRepository.findOne({
            where: {
                userID
            }
        });
    }

    async delete(userID: number): Promise<{message: string}>{
        await this.usersRepository.delete(userID);
        return {message: "item deletado com sucesso"};
    }
}