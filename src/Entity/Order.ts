import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column('varchar', { length: 40 })
  public user!: string;

  @Column('varchar', { length: 40 })
  public product!: string;

  @Column('integer')
  public quantity!: number;

  @Column('float')
  public unitPrice!: number;
}
