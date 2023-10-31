import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Column,
    OneToOne,
    JoinColumn,
  } from "typeorm";
  import { OrderEntity } from "./order.entity";
  
  @Entity('deliveries', { schema: 'ventas' })
  export class DeliveryEntity {
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
      name: 'status',
      nullable: false,
      comment: 'delivery status',
    })
    status: string;
  
    @Column('text', {
      name: 'delivery_notes',
      nullable: true,
      comment: 'additional notes for the delivery',
    })
  
    @Column('varchar', {
      name: 'tracking_number',
      nullable: true,
      comment: 'tracking number for the delivery',
    })
  
    @Column('boolean', {
      name: 'is_delivered',
      default: false,
      comment: 'true if the delivery is completed',
    })
  
    @OneToOne(() => OrderEntity)
    @JoinColumn()
    order: OrderEntity;
  }