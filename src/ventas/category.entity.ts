import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, 
    DeleteDateColumn, Entity,OneToMany,PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity('category',{schema:'ventas'})
export class CategoryEntity{
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

    @OneToMany(()=>ProductEntity,products=>products.category)
    products: ProductEntity[]
    
    @Column ('varchar', {
        name:'title',
        nullable:false,
        comment:'category title'
    })
    title:string;

    @Column ('varchar', {
        name:'description',
        nullable:false,
        comment:'category description'
    })
    description:string;

@BeforeInsert()
@BeforeUpdate()
async settitle(){
    if(!this.title){
        return;
    }
    this.title = this.title.toUpperCase().trimStart();
}

@BeforeInsert()
@BeforeUpdate()
async setDescription(){
    if(!this.description){
        return;
    }
    this.description = this.description.toUpperCase().trimEnd();
}

}