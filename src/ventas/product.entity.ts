import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, 
    DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CategoryEntity } from "./category.entity";

@Entity('products',{schema:'ventas'})
export class ProductEntity {
    @PrimaryGeneratedColumn ('uuid')
    id:string;
    @CreateDateColumn ({
        name:'create_at',
        type:'timestamp',
        default: ()=>'CURRENT_TIMESTAMP',
    })
    createAt:Date;
    @UpdateDateColumn({
        name:'update_at',
        type:'timestamp',
        default: ()=>'CURRENT_TIMESTAMP',
    })
    updateAt:Date;
    @DeleteDateColumn ({
        name:'delete_at',
        type:'timestamp',
        nullable:true,
    })
    deleteAt:Date;

    @ManyToOne (()=>CategoryEntity,category=>category.products)
    category:CategoryEntity;

/*Siempre van en todas las columnas*/ 
                                           
    @Column('varchar',{
        name:'title',
        nullable:false,
        comment:'product title'
    })
    title:string;
    @Column('numeric',{
        name:'price',
        nullable:false,
        comment:'product price'
    })
    price:number;
    @Column('varchar',{
        name:'description',
        nullable:false,
        comment:'product description'
    })
    description:string;
    @Column('varchar',{
        name:'image',
        nullable:false,
        comment:'product image'
    })
    image:string;


@BeforeInsert()
@BeforeUpdate()

async upperCase () {
    if (!this.title){
        return;
    }
    this.title = this.title.toUpperCase();
}

/*@BeforeInsert()
@BeforeUpdate()

async setEmail (){
    if (!this.email){
        return;
    }
    this.email = this.email.toLowerCase().trim();   trim emité los espacios
}*/

@BeforeInsert()
@BeforeUpdate()

async setDescription () {
    if (!this.description){
        return;
    }
    this.description = this.description.toLowerCase();
}

/*@BeforeInsert()
@BeforeUpdate()

async hashPassword () {
    if (!this.password){
        return;
    }
    this.password = Bcrypt.hash(this.password,12);
}*/


}