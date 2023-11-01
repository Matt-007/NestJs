import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Column,
    ManyToOne,
  } from "typeorm";
  import { OrderEntity } from "./order.entity";
  
  @Entity('billing', { schema: 'comida' })
  export class BillingEntity {
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
  
    @Column({
      type: 'decimal',
      name: 'total_amount',
      precision: 10,
      scale: 2,
      nullable: false,
      comment: 'total amount on the invoice',
    })
    totalAmount: number;
  
    @Column({
      type: 'varchar',
      name: 'payment_method',
      nullable: false,
      comment: 'payment method used for the order',
    })
    paymentMethod: string;
  
    @ManyToOne(() => OrderEntity, order => order.billings)
    order: OrderEntity;
  
    @Column({
      type: 'varchar',
      name: 'invoice_number',
      nullable: false,
      unique: true,
      comment: 'invoice number',
    })
    invoiceNumber: string;
  
    @Column({
      type: 'varchar',
      name: 'currency',
      nullable: false,
      comment: 'currency used for the invoice',
    })
    currency: string;
  
    @Column({
      type: 'date',
      name: 'due_date',
      nullable: false,
      comment: 'due date of the invoice',
    })
    dueDate: Date;
  
    @Column({
      type: 'text',
      name: 'notes',
      nullable: true,
      comment: 'additional notes for the invoice',
    })
    notes: string;
  }
  