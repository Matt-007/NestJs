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
  import { ProductoEntity } from "./producto.entity";
  import { CategoryEntity } from "./categoria.entity";
  import { AddressEntity } from "./address.entity"; 
  
  @Entity('providers', { schema: 'comida' })
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
      name: 'provider',
      nullable: false,
      comment: 'provider name',
    })
    provider: string;
  
    @Column('varchar', {
      name: 'email',
      nullable: false,
      unique: true,
      comment: 'provider email',
    })
    email: string;
  
    @OneToMany(() => ProductoEntity, product => product.provider)
    products: ProductoEntity[];
  
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
    phoneNumber: string; 
  
    @Column('text', {
      name: 'description',
      nullable: true,
      comment: 'provider description',
    })
    description: string; 
  
    @Column('boolean', {
      name: 'is_active',
      default: true,
      comment: 'true if the provider is active',
    })
    isActive: boolean; 
  
    @Column('varchar', {
      name: 'website',
      nullable: true,
      comment: 'provider website URL',
    })
    website: string;
  }
  