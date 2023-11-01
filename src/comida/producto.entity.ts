import { Entity, PrimaryGeneratedColumn, CreateDateColumn, 
    UpdateDateColumn, DeleteDateColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";

@Entity('products' ,{schema: 'comida'})
export class ProductoEntity{
    @PrimaryGeneratedColumn ('uuid')
    id: string;
    @CreateDateColumn({
        name: 'create_at',
        type:'timestamp',
        default: ()=>'CURRENT_TIMESTAMP',
    })
    createAt: Date;
    @UpdateDateColumn({
        name: 'Update_at',
        type:'timestamp',
        default: ()=>'CURRENT_TIMESTAMP',
    })
    updateAt: Date;
    @DeleteDateColumn({
        name: 'delete_at',
        type:'timestamp',
        nullable:true,
    })
    deleteAt: Date;

    @Column('varchar', {
        name:'title',
        nullable:false,
        comment:'product title'
    })
    title:string;

    @Column('numeric', {
        name:'price',
        nullable:false,
        comment:'product price'
    })
    price:number;
    @Column('varchar', {
        name:'description',
        nullable:false,
        comment:'description product'
    })
    description:string;
    @Column('varchar', {
        name:'image',
        nullable:false,
        comment:'product image'
    })
    image:string;

    @Column('varchar', {
        name:'category',
        nullable:false,
        comment:'description category'
    })
    category:string;
    comments: any;
    orders: any;
  provider: any;

@BeforeInsert()
@BeforeUpdate()
async setTitle(){
    if(!this.title){
        return;
    }
    this.title = this.title.toUpperCase();
}
@BeforeInsert()
@BeforeUpdate()
async setDescription(){
    if(!this.description){
        return;
    }
    this.description = this.description.toLowerCase();
}
/*
@BeforeInsert()
@BeforeUpdate()
async setEmail(){
    if(!this.email){
        return;
    }
    this.email = this.email.toLowerCase().trim();
}
-------------------------------------------------
@BeforeInsert()
@BeforeUpdate()
async hashPassword(){
    if(!this.password){
        return;
    }
    this.password = Bcrypt.hash(this.password, 12);
}

@BeforeInsert()
@BeforeUpdate()
async setCategory(){
    if(!this.category){
        return;
    }
    this.category = this.category.toLowerCase();
}
*/

}