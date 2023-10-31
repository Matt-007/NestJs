import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn,
     DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn,
      UpdateDateColumn } from "typeorm";
import { CategoryEntity } from "./category.entity";

@Entity('products',{schema:'ventas'})
export class ProductEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @CreateDateColumn({
        name: 'create_at',
        type: 'timestamp',
        default:()=>'CURRENT_TIMESTAMP'
    })
    create_at: Date;

    @UpdateDateColumn({
        name: 'update_at',
        type:'timestamp',
        default:()=>'CURRENT_TIMESTAMP'
    })
    update_at: Date;

    @DeleteDateColumn({
        name:'delete_at',
        type:'timestamp',
        nullable:true,
    })
    deleteAt: Date;

    @ManyToOne (()=>CategoryEntity, category=> category.products)
    category: CategoryEntity[]

    @Column('varchar',{
        name: 'tittle',
        nullable:false,
        comment:'product tittle'
    })
    tittle: string

    @Column('number',{
        name: 'prince',
        nullable: false,
        comment: 'product price'
    })
    price: number

    @Column('varchar',{
        name: 'description',
        nullable: true,
        comment: 'product description'
    })
    description: string

    @Column('varchar',{
        name: 'image',
        nullable: false,
        comment: 'product image'
    })
    image: string
    comments: any;
    orders: any;
    provider: any;

@BeforeInsert()
@BeforeUpdate()

async setTittle(){
    if(!this.tittle){
        return
    }
    this.tittle = this.tittle.toLowerCase();
}

/*
@BeforeInsert()
@BeforeUpdate()
async hashPassword(){
    if(!this.password){
        return;
    }
    this.password = Bcrypt.hash(this.password, 12);
}*/

/*
@BeforeInsert()
@BeforeUpdate()
async setEmail(){
    if(!this.email){
        return;
    }
    this.email = this.email.toLowerCase().trim();
}*/
}