import { Column, CreateDateColumn, DeleteDateColumn,
     Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity ('user',{schema:'comida'})
export class UserEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @CreateDateColumn({
        name:'create_at',
        type:'timestamp',
        default: ()=>'CURRENT_TIMESTAMP',
    })
    createAt: Date;

    @UpdateDateColumn({
        name:'update_at',
        type:'timestamp',
        default: ()=>'CURRENT_TIMESTAMP',
    })
    updateAt: Date;

    @DeleteDateColumn({
        name:'delete_at',
        type:'timestamp',
        nullable:true,
    })
    deleteAt: Date;

    @Column ('varchar',{
        name:'user',
        nullable:false,
        comment:'user name'
    })
    user:string;
    @Column ('varchar',{
        name:'password',
        nullable:false,
        comment:'user password'
    })
    password:string;
    @Column ('varchar',{
        name:'rol',
        nullable:false,
        comment:'user rol'
    })
    rol:string;
    @Column ('varchar',{
        name:'lastname',
        nullable:false,
        comment:'user lastname'
    })
    lastname:string;
    comments: any;
    addresses: any;
    orders: any;
}