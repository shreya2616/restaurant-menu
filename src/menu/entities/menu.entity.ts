import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Menu {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    itemName : string

    @Column()
    itemCategory : string

    @Column()
    itemPrice : number
}
