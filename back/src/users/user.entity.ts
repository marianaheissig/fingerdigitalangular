import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('Users')
export class Users{
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
    userBirth: string;

    @Column()
    userType: number;
    
    @Column()
    userSex: string;
}
