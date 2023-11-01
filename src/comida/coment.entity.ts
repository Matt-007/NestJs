import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, 
    Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./user.entity";
import { ProductoEntity } from "./producto.entity";

@Entity('comments', { schema: 'comida' })
export class CommentEntity {
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

    @Column('text', {
        name: 'content',
        nullable: false,
        comment: 'comment content'
    })
    content: string;

    @ManyToOne(() => UserEntity, user => user.comments)
    user: UserEntity;

    @ManyToOne(() => ProductoEntity, product => product.comments)
    product: ProductoEntity;

    @BeforeInsert()
    @BeforeUpdate()
    async setContent() {
        if (this.content) {
            
        }
    }
}
