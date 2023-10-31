import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, 
    Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity('addresses', { schema: 'ventas' })
export class AddressEntity {
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
        name: 'street',
        nullable: false,
        comment: 'street name'
    })
    street: string;

    @Column('varchar', {
        name: 'city',
        nullable: false,
        comment: 'city name'
    })
    city: string;

    @Column('varchar', {
        name: 'postal_code',
        nullable: false,
        comment: 'postal code'
    })
    postalCode: string;

    @Column('varchar', {
        name: 'country',
        nullable: false,
        comment: 'country name'
    })
    country: string;

    @ManyToOne(() => UserEntity, user => user.addresses)
    user: UserEntity;

    @BeforeInsert()
    @BeforeUpdate()
    async validatePostalCode() {
        
        const postalCodePattern = /^[0-9]{5}$/; 
        if (!postalCodePattern.test(this.postalCode)) {
            throw new Error('Invalid postal code format');
        }
    }
}
