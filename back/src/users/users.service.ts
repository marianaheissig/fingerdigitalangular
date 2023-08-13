import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Users } from "./user.entity";

@Injectable()
export class UsersService{
    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>,
    ){}


    async findAll(): Promise<Users[]>{
        return this.usersRepository.find();
    }
    
    async create(userData:any): Promise<Users[]>{
        console.log(userData)
        const user = this.usersRepository.create(userData);
        return this.usersRepository.save(user)
    }

    async update(userID: number, userData: any): Promise<Users> {
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