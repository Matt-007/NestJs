import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, 
    Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users', { schema: 'ventas' })
export class UserEntity {
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

    @Column('varchar', {
        name: 'username',
        nullable: false,
        unique: true,
        comment: 'user username'
    })
    username: string;

    @Column('varchar', {
        name: 'email',
        nullable: false,
        unique: true,
        comment: 'user email'
    })
    email: string;

    @Column('varchar', {
        name: 'password',
        nullable: false,
        comment: 'user password'
    })
    password: string;
    comments: any;
    orders: any;
    addresses: any;

    @BeforeInsert()
    @BeforeUpdate()
    async setEmailAndUsername() {
        if (this.email) {
            this.email = this.email.toLowerCase().trim();
        }
        if (this.username) {
            this.username = this.username.toLowerCase().trim();
        }
    }
}
