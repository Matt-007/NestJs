import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Column,
    OneToMany,
    ManyToOne,
    JoinTable,
  } from "typeorm";
  import { ProductEntity } from "./product.entity";
  import { CategoryEntity } from "./category.entity";
  import { AddressEntity } from "./address.entity"; 
  
  @Entity('providers', { schema: 'ventas' })
  export class ProviderEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @CreateDateColumn({
      name: 'create_at',
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
    })
    createAt: Date;
  
    @UpdateDateColumn({
      name: 'update_at',
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
    })
    updateAt: Date;
  
    @Column('varchar', {
      name: 'name',
      nullable: false,
      comment: 'provider name',
    })
    name: string;
  
    @Column('varchar', {
      name: 'email',
      nullable: false,
      unique: true,
      comment: 'provider email',
    })
    email: string;
  
    @OneToMany(() => ProductEntity, product => product.provider)
    products: ProductEntity[];
  
    @OneToMany(() => CategoryEntity, category => category.provider)
    categories: CategoryEntity[];
  
    @ManyToOne(() => AddressEntity)
    @JoinTable()
    address: AddressEntity;
  
    @Column('varchar', {
      name: 'phone_number',
      nullable: true,
      comment: 'provider phone number',
    })
    phoneNumber: string; // Corregí la definición de phoneNumber
  
    @Column('text', {
      name: 'description',
      nullable: true,
      comment: 'provider description',
    })
    description: string; // Corregí la definición de description
  
    @Column('boolean', {
      name: 'is_active',
      default: true,
      comment: 'true if the provider is active',
    })
    isActive: boolean; // Corregí la definición de isActive
  
    @Column('varchar', {
      name: 'website',
      nullable: true,
      comment: 'provider website URL',
    })
    website: string;
  }
  