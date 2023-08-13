import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    userID: number;
    
    @Column()
    userName: string;
    
    @Column()
    userCPF: string;

    @Column()
    userAddress: string;
    
    @Column()
    userPhone: string;

    @Column()
    userEmail: string;
    
    @Column()
    userBirth: Date;

    @Column()
    userType: number;
    
    @Column()
    userSex: string;
}