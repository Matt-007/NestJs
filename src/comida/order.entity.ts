import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, 
    Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./user.entity";
import { ProductoEntity } from "./producto.entity";

@Entity('orders', { schema: 'comida' })
export class OrderEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    created_at: Date;

    @UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    updated_at: Date;

    @Column('integer', {
        name: 'quantity',
        nullable: false,
        comment: 'ordered quantity'
    })
    quantity: number;

    @ManyToOne(() => UserEntity, user => user.orders)
    user: UserEntity;

    @ManyToOne(() => ProductoEntity, product => product.orders)
    product: ProductoEntity;
    billings: any;

    @BeforeInsert()
    @BeforeUpdate()
    async setQuantity() {
        if (this.quantity < 0) {
            
            this.quantity = 0;
        }
        
    }
}
